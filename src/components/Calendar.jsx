import React from "react";
import Months from "./Months";
import Years from "./Years";
import WeekDays from "./WeekDays";
import Dates from "./Dates";
import Confirm from "./Confirm";

function Calendar({ day, month, year, handleDay, handleMonth, handleYearBack, handleYearForward, yearSelected, yearClass, handleConfirm }) {

    return (
        <div className="calendar-pad">
            <div className="dropdown-bar">
                <Months handleMonth={handleMonth} />
                <Years 
                    handleYearBack={handleYearBack} 
                    handleYearForward={handleYearForward} 
                    yearSelected={yearSelected} 
                    yearClass={yearClass}
                    />
            </div>
            <div>
                <WeekDays />
            </div>  
            <div>
                <Dates 
                    year={year} 
                    month={month} 
                    day={day} 
                    handleDay={handleDay} />
            </div>
            <div>
                <Confirm handleConfirm={handleConfirm} />
            </div>
        </div>
    )
};

export default Calendar


