import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const ClockContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

const TimeContainer = styled.div`
  display: flex;
  padding: 10px;
  font-size: 3em;
`;

const HoursContainer = styled.div`
  padding: 20px;
  background: ${props => props.theme.colors.clockBackground};
  border-radius: 10px;
  margin-right: 5px;
`;

const MinutesContainer = styled.div`
  padding: 20px;
  background: ${props => props.theme.colors.clockBackground};
  border-radius: 10px;
  margin-right: 5px;
  width: 52px;
`;

const SecondsContainer = styled.div`
  padding: 20px;
  width: 55px;
  background: ${props => props.theme.colors.clockBackground};
  border-radius: 10px;
`;

const AMPMContainer = styled.div`
  padding: 20px;
  font-family: 'Ubuntu', sans-serif;
`;

const DateContainer = styled.div`
  padding: 10px;
  font-size: 2em;
  font-family: 'Ubuntu', sans-serif;
  border-bottom: 5px solid ${props => props.theme.colors.borderColor};
`;

const ColonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 15px;
  padding-right: 7px;
`;

// const TimeZoneContainer = styled.div`
//   padding: 10px;
//   font-size: 1.8em;
// `;

const FormatDate = () => { 
  const [hours, setHours] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [seconds, setSeconds] = useState(new Date().getSeconds());
  const [month, setMonth] = useState(new Date().getMonth());
  const [day, setDay] = useState(new Date().getDay());
  const [year, setYear] = useState(new Date().getFullYear())
  const [weekDay, setWeekDay] = useState(new Date().getDay());

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

  // const formatTimeZone = () => {
  //   const unformatted = Intl.DateTimeFormat().resolvedOptions().timeZone
  //   const formatted = unformatted.replace(/_/g, ' ')
  //   return formatted
  // }

  return <ClockContainer>
    <TimeContainer>
      <HoursContainer>{formatHours()}</HoursContainer>
      <ColonContainer>:</ColonContainer>
      <MinutesContainer>{minutes < 10 ? '0' + minutes : minutes}</MinutesContainer> 
      <ColonContainer>:</ColonContainer>
      <SecondsContainer>{seconds < 10 ? '0' + seconds : seconds}</SecondsContainer> 
      <AMPMContainer>{hours < 12 ? 'AM' : 'PM'}</AMPMContainer>
    </TimeContainer>
    <DateContainer>
      {dayOfTheWeek()} {monthString()} {day}, {year}
    </DateContainer>
    {/* <TimeZoneContainer>
      {formatTimeZone()}
    </TimeZoneContainer> */}
  </ClockContainer>
}

export default FormatDate