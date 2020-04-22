import React from "react";

import ShowCard from "./ShowCard.js"

function ShowContainer({ shows, setSelectedShow }) {

    const displayShows = () => {
        return shows.map(show => {
            return (
                <ShowCard
                    key={show.id}
                    show={show} 
                    handleShow={setSelectedShow}
                />
            )
        })
    }

    return (
        <section className="show-container">
            { displayShows() }
        </section>
    );
}

export default ShowContainer;
