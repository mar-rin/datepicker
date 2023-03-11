import React, { useState, useMemo } from "react";
import SingleDate from "./SingleDate";
import SingleDateGray from "./SingleDateGray";

function Dates({day, month, year, handleDay }) {

//First, find out if the year is leap or not
    const monthsArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function leapYear() {
        if (year % 4 === 0) {
            if (year % 100 === 0) {
                if (year % 400 === 0) 
                 {monthsArray[1] = 29};
            } else {
                {monthsArray[1] = 29}
            }
        }};
    leapYear();

//----------------------------------------------------------------------
//Define 
//-a- how many days in the selected month
//-b- how many days in the previous month
//-c- what weekday is the 1st of the selected month

    const daysInMonth = monthsArray[month-1];
    const daysPrevMonth = monthsArray[month-2];
    const firstOfMonth = new Date(year, month-1, 1);
    let firstDayIndex = firstOfMonth.getDay()-1;
    let paneLength;
    const datesArray = [];  
    const prevDatesArray = [];
    const nextDatesArray = [];
    //Correction for the case where first day of month is Sunday
    if (firstDayIndex === -1) firstDayIndex = 6;

//----------------------------------------------------------------------
//Based on the above, populate the calender pane for the selected month   
    
    function setPaneLength () {
        if (firstDayIndex + daysInMonth === 28) {
            paneLength = 28;
        } 
        if (firstDayIndex + daysInMonth >= 35) {
            paneLength = 42;
        } else {
            paneLength = 35;
        }
    }    

    setPaneLength();

    function populateArray() {
        let k=1;
        let m="";
        for (let i=0; i < paneLength; i++) {
            if (i < firstDayIndex) { 
                //prevDatesArray.push(daysPrevMonth - firstDayIndex + (i+1)) 
                prevDatesArray.push("")
            } else if (i < firstDayIndex + daysInMonth) {
                datesArray.push(k);
                k++;
            } else {
                nextDatesArray.push("");
                //m++;
            }
        }}

    populateArray();

    return (
        <div className="date-field">
            {prevDatesArray.map((date, index) => (
                <SingleDateGray 
                    key={index}
                    value={date}
                    />
            ))}
            {datesArray.map((date, index) => (
                <SingleDate 
                    key={index}
                    id={index}
                    value={date}
                    day={day}
                    handleDay={handleDay}
                     />
            ))}
            {nextDatesArray.map((date, index) => (
                <SingleDateGray 
                    key={index}
                    value={date}
                     />
            ))}
        </div>
    );
};




export default Dates