import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const TimeAndDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TimeContainer = styled.div`
  padding: 10px;
  font-size: 2em;
`;

const DateContainer = styled.div`
  padding: 10px;
  font-size: 1.8em;
`;

const FormatDate = () => { 
  const rawDate = new Date()
  const [hours, setHours] = useState(rawDate.getHours());
  const [minutes, setMinutes] = useState(rawDate.getMinutes());
  const [seconds, setSeconds] = useState(rawDate.getSeconds());
  const [month, setMonth] = useState(rawDate.getMonth());
  const [day, setDay] = useState(rawDate.getDay());
  const [year, setYear] = useState(rawDate.getFullYear())
  const [weekDay, setWeekDay] = useState(rawDate.getDay());

  useEffect(() => {
    const interval = setInterval(() => {
      setHours(new Date().getHours())
      setMinutes(new Date().getMinutes())
      setSeconds(new Date().getSeconds())
      setMonth(new Date().getMonth())
      setDay(new Date().getDay())
      setYear(new Date().getFullYear())
      setWeekDay(new Date().getDay())
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const dayOfTheWeek = () => {
    switch(weekDay) {
      case 0: return 'Sunday'
      case 1: return 'Monday' 
      case 2: return 'Tuesday'
      case 3: return 'Wednesday'
      case 4: return 'Thursday'
      case 5: return 'Friday'
      case 6: return 'Saturday'
      default: return 'ERROR'
    }
  }

  const monthString = () => {
    switch(month) {
      case 0: return 'January'
      case 1: return 'February'
      case 2: return 'March'
      case 3: return 'April'
      case 4: return 'May'
      case 5: return 'June'
      case 6: return 'July'
      case 7: return 'August'
      case 8: return 'September'
      case 9: return 'October'
      case 10: return 'November'
      case 11: return 'December'
      default: return 'ERROR'
    }
  }

  const formatHours = () => {
    if (hours === 0) return 12
    else if (hours > 12) return hours - 12
    else return hours
  }

  return <TimeAndDateContainer>
    <TimeContainer>
      {formatHours()}:{minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds} {hours < 12 ? 'AM' : 'PM'}
    </TimeContainer>
    <DateContainer>
      {dayOfTheWeek()} {monthString()} {day}, {year}
    </DateContainer>
  </TimeAndDateContainer>
}

export default FormatDate