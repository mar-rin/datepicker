import React from "react";

function SingleDate({ value, day, handleDay }) {

    return (
        <div className="single-date">
            { value === day ? 
                <button className="circular-date active">{value}</button> :
                <button className="circular-date" onClick={handleDay}>{value}</button> }
        </div>
        );
}

export default SingleDate;