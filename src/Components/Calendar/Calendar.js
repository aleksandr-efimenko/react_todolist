import React, {useState} from 'react';
import Day from '../Day/Day';
import './Calendar.css';

export default function Calendar({numberOfDays}) {
  const today = new Date();
  const days = [...Array(numberOfDays).keys()];
  const datesArr = days.map(el => new Date(today.getFullYear(), today.getMonth(), today.getDate() + el));
  const [dates, setDates] = useState(datesArr);

  return (
    <div className='calendar'>
      {
        dates.map((date) => <Day date={date} />)
      }
    </div>
  )
}
