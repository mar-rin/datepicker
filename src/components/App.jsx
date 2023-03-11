import React, {useState} from "react";
import TextField from "./TextField";
import Calendar from "./Calendar";


function App() {

//Handle dropdown of calendar pane
  const [visible, setVisible] = useState(true);

  function isCalendar() {
    setVisible(!visible);
    console.log(visible);
  }

//Initialize with TODAY
  const dt = new Date();
  const y = dt.getFullYear();
  const m = dt.getMonth() + 1;
  const d = dt.getDate();

//Update date according to user input
  const[day, setDay] = useState(d);
  const[month, setMonth] = useState(m);
  const[year, setYear] = useState(y);
  const[yearSelected, setYearSelected] = useState("Year...");        
  
//Date object to be returned from App
  let dateSelected;
  
  
//Handle year selection
  function handleYearBack(e) {
    setYear(year-1);
    setYearSelected(year-1);
  }
  
  function handleYearForward(e) {
    setYear(year+1);
    setYearSelected(year+1);
  }
  
//Handle month selection
  function handleMonth(selectedOption) {
    setMonth(selectedOption.value);
  }

//Handle day selection
  function handleDay(e) {
    setDay(Number(e.target.innerHTML));
    console.log(day)
  }

//Handle CANCEL or OK
//"cancel" re-initializes the App
//"ok" stores the selected date into a Date object, then re-initializes
  function ok() {
    const selected = new Date(year, month-1, day);
    dateSelected = selected;
    cancel();
    alert("Your date "+ selected + "has been successfully stored!")
  }
  
  function cancel() {
    setDay(d);
    setMonth(m);
    setYear(y);
  }

  function handleConfirm(e) {
    e.target.name==="ok" ? ok() : cancel();    
  }

  return (
    <div>
      <h1>DATE PICKER</h1>
      <TextField 
        day={day} 
        month={month} 
        year={year} 
        isCalendar={isCalendar} />
      {visible && (
      <Calendar 
        day={day}
        month={month}
        year={year}
        handleDay={handleDay}
        handleMonth={handleMonth} 
        handleYearBack={handleYearBack}
        handleYearForward={handleYearForward}
        yearSelected={yearSelected}
        yearClass={
              yearSelected==="Year..." 
                ? "year"
                : "year selected"
            }
        handleConfirm={handleConfirm}
      />)}
    </div>
  )

}


export default App;