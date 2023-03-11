import React from "react";
import chevronR from "../images/chevronR.jpg";
import chevronL from "../images/chevronL.jpg";


function Years({ handleYearBack, handleYearForward, yearSelected, yearClass }) {

    return (
        <div className="years">
            <img src={chevronL} className="arrows" onClick={handleYearBack} />
            <div className={yearClass}>
                {yearSelected}     
            </div>
            <img src={chevronR} className="arrows" onClick={handleYearForward} />
        </div>
    )
};

export default Years