import React from "react";

function SingleDateGray({ value }) {

//Function for showing the "fringe" dates, the tail-end of previous month 
//and the first days of the next month. This ended up unused, but keeping 
//the code for now, just in case. 
    return (
        <div className="single-date">
            <button className="circular-date gray">{value}</button>
        </div>);
}

export default SingleDateGray;