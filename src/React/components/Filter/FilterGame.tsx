import './Filter.scss';
import React, { useState } from "react"
import IFilterList from "../../../Interfaces/React/IFilterList";

const FilterGame = (props:IFilterList) => {
    const [filters, setFilters] = useState(props.filters)
    
    return <div className="filter">
        {filters.map((filter, index) => <span className={filter.filter ? 'active' : ''} key={index} onClick={() => props.action(filter.name)}>{filter.name}</span>)}
    </div>
}

export default FilterGame;