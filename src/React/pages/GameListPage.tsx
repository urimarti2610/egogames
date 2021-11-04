import React, { useEffect, useState } from "react";
import getFilters from "../../Controllers/FilterController";
import getGames from "../../Controllers/GameController";
import CategoryList from "../../Helpers/CategoryList";
import Filter from "../../Models/Filter";
import Game from "../../Models/Game";
import FilterGame from "../components/Filter/FilterGame";
import GameList from "../components/Game/GameList";
import Search from "../components/Search/Search";

const GameListPage = () => {

    const [gameList, setGameList] = useState(getGames())
    const [filters, setFilters] = useState(getFilters())
    const [search, setSearch] = useState('')
    const [check, setCheck] = useState(true)

    useEffect(() => filterProducts(), [filters, search])
    useEffect(() => setCheck(doCheck()), [gameList])

    const doCheck = ():boolean => {
        const trueFalse = gameList.map(v => v.visible === true)
        const filter = trueFalse.filter(v => v === true)
        return filter.length > 0
    }

    const filterProducts = (): void => {
        const searched = search.trim().toLowerCase()
        const filtered = filters.find(v => v.filter === true)

        if (searched.length && filtered) {
            return setGameList(gameList.map(game => {
                game.setVisible(isFiltered(game, filtered) && isSearched(game, searched))
                return game
            }))
        }

        if (filtered) {
            return setGameList(gameList.map((game) => {
                game.setVisible(isFiltered(game, filtered))
                return game
            }))
        }
        if (searched.length) {
            return setGameList(gameList.map((game) => {
                game.setVisible(isSearched(game, searched))
                return game
            }))
        }

        return null
    }

    const isSearched = (game: Game, search: string): boolean => game.title.toLowerCase().indexOf(search) > -1
    const isFiltered = (game: Game, filter: Filter): boolean => filter.name === CategoryList.ALL || game.category === filter.name

    const swapFilter = (name: CategoryList): void =>
        setFilters(filters.map(v => {
            if (v.name === name) {
                v.toggleFilter()
            } else {
                v.setFilter(false)
            }
            return v
        }))

    return <React.Fragment>
        <Search action={setSearch} search={search} />
        <FilterGame action={swapFilter} filters={filters} />
        <GameList check={check} list={gameList} />
    </React.Fragment>
}

export default GameListPage;