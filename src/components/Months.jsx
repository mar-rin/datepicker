import React from "react";
import Select from 'react-select';

const options = [
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 7, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
    { value: 11, label: 'November'},
    { value: 12, label: 'December' },
    ]

    function Months({ handleMonth }) {
        
        return (
        <div className="months">
            {/* <Dropdown unit="Month" /> */}
            <Select 
                options={options} 
                className="select-month" 
                placeholder="Month..." 
                maxMenuHeight={160} 
                onChange={handleMonth} 

//This below is very messy... I was trying out React Select for the first time, 
//and had some issues targeting the right elements. This part would still 
//need work & cleaning up 
                styles={{
                    container: (baseStyles, state) => ({
                    ...baseStyles, width: state.isActive ? '132px' : '132px',
                    ...baseStyles, boxShadow: state.isActive ? '0px' : '0px',
                    ...baseStyles, border: state.isActive ? '0px' : '0px',
                    }),
                    inputValue: (baseStyles, state) => ({
                        ...baseStyles, color: state.isSelected ? '#467082' : '#467082',
                        ...baseStyles, boxShadow: state.isActive ? '0px' : '0px',
                        ...baseStyles, border: state.isActive ? '0px' : '0px',
                    }),
                    inputValue: (baseStyles, state) => ({
                        ...baseStyles, color: state.isSelected ? '#467082' : '#467082',
                        ...baseStyles, boxShadow: state.isActive ? '0px' : '0px',
                        ...baseStyles, border: state.isActive ? '0px' : '0px',
                    }),
                    singleValue: (baseStyles, state) => ({
                        ...baseStyles, color: state.isSelected ? '#467082' : '#467082',
                    }),
                    dropdownIndicator: (baseStyles, state) => ({
                        ...baseStyles, width: state.isSelected ? '30px' : '30px',
                        ...baseStyles, paddingTop: state.isSelected ? '12px' : '12px',
                    }),
                    control: (baseStyles, state) => ({
                    ...baseStyles, boxShadow: state.isActive ? '0px' : '0px',
                    ...baseStyles, border: state.isActive ? '0px' : '0px',
                    }),
                    option: (baseStyles, state) => ({
                    ...baseStyles, backgroundColor: state.isSelected ? '#6096B4' : 'white',
                    "&:hover": {backgroundColor: "#dce4e8", color: "#467080"},
                })
        }}/>
        </div>
    )
};

export default Months
