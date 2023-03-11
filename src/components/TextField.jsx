import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

function TextField({ day, month, year, isCalendar }) {

    return (
        <div>
            <div className="text-box">
                {day} / {month} / {year}
                <div className="calendar-icon" onClick={isCalendar}><FontAwesomeIcon icon={faCalendar} size="1x" /></div>
            </div>
            <div className="text-sub">
                DD/MM/YY
            </div>
        </div>
    )
};

export default TextField