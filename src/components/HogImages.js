import React, { useState } from "react"

function HogImages({ hog }) {

    const [hogDetails, display] = useState(false)

    return (
        <div onClick={() => { display(!hogDetails) }}>
            <h1>{hog.name}</h1>
            <img src={hog.image} />
            {hogDetails ?
                <div>
                    <h1>Hog Details</h1>
                    <h2>Specialty: {hog.specialty}</h2>
                    <h3>Weight: {hog.weight}</h3>
                    <h4>{hog.greased ? "Is Greased" : "Is not Greased"}</h4>
                    <h5>Highest Metal ever achived: {hog["highest medal achieved"]}</h5>
                </div>
                :
                <></>}
        </div>
    )
}

export default HogImages