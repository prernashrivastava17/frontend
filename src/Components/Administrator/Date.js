import { useState } from 'react';
import DatePicker from "react-datepicker";


export default function Date(){


    const [selectedDate, setSelectedDate] = useState(null);

    const calculateAge = (date) => {
      const today = new Date();
      const birthDate = new Date(date);
      let age = today.getFullYear() - birthDate.getFullYear();
      const month = today.getMonth() - birthDate.getMonth();
      if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    };
  
    const ageLimit = 18;
  
    const isDateDisabled = (date) => {
      const age = calculateAge(date);
      return age < ageLimit;
    };
  
    return (
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        minDate={new Date("1900-01-01")}
        maxDate={new Date()}
        filterDate={isDateDisabled}
  />)

}