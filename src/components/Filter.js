function Filter({ setSort, setFilteredHogs, filteredHogs }) {
    return (
        <div>
            <h2>Greased: <input type="checkbox" onChange={() => setFilteredHogs(!filteredHogs)} /></h2>
            <h2>
                Sort by:
                <select onChange={(e) => setSort(e.target.value)}>
                    <option value={'name'}>Name</option>
                    <option value={'weight'}>Weight</option>
                </select>
            </h2>
        </div>
    )
}

export default Filter