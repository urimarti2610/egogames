import './Search.scss';

import React, { useState } from "react";
import ISearch from "../../../Interfaces/React/ISearch";

const Search = (props: ISearch) => {
    const [search, setSearch] = useState(props.search)

    const handleSearch = (data: any) => {
        const s = data.target.value
        setSearch(s)
        props.action(s)
    }

    return <div className="search">
        <input type="text" placeholder="Buscar" onChange={handleSearch} value={search} />
    </div>
}

export default Search