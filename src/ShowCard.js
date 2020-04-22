import React from "react";

function ShowCard({ show, handleShow }) {

    const handleClick = () => {
        handleShow(show);
    }

    return (
        <div className="show-card">
            <img  
                onClick={handleClick} 
                alt={show.name}
                src={show.image.medium}
            />
        </div>
    );
}

export default ShowCard;
