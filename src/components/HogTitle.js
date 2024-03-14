import React, { useState } from "react";
import HogImages from "./HogImages";
import Filter from "./Filter";


function DisplayHog({ hogs }) {
    const [allHogs, setAllHogs] = useState(hogs)
    const [filteredHogs, setFilteredHogs] = useState(false);
    const [sort, setSort] = useState("name")

    allHogs.sort((a, b) => {
        if (a[sort] < b[sort]) {
            return -1
        }
        else if (b[sort] < a[sort]) {
            return 1
        }
        else {
            return 0
        }

    })

    const fullyFilteredHogs = allHogs.filter((hog)=>{
        if(!filteredHogs){
            return true
        }
        return hog.greased === filteredHogs
    })

    const hogDescription = fullyFilteredHogs.map((hogs, index) => {
        return (
            <HogImages hog={hogs} key={index} />
        )
    })

    return (
        <div>
            <Filter setSort={setSort} filteredHogs={filteredHogs} setFilteredHogs={setFilteredHogs} />
            {hogDescription}
        </div>
    )
}


export default DisplayHog