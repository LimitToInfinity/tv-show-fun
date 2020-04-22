import React from "react";

import ShowCard from "./ShowCard.js"

function SideBar({ show, desetSelectedShow }) {

    return (
        <aside className="side-bar">
            {
                show.id
                    ? <ShowCard show={show} handleShow={desetSelectedShow} />
                    : null
            }
        </aside>
    );
}

export default SideBar;
