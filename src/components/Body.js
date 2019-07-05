import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const TimeContainer = styled.div`
`;

const DayContainer = styled.div`
`;

const DateContainer = styled.div`
`;

const NumberContainer = styled.div`
`

const FormattedDate = () => { 
  const rawDate = new Date()
  const [hours, setHours] = useState(rawDate.getHours());
  const [minutes, setMinutes] = useState(rawDate.getMinutes());
  const [seconds, setSeconds] = useState(rawDate.getSeconds());
  const [month, setMonth] = useState(rawDate.getMonth() + 1);
  const [day, setDay] = useState(rawDate.getDay());
  const [year, setYear] = useState(rawDate.getFullYear())
  const [weekDay, setWeekDay] = useState(rawDate.getDay());

  useEffect(() => {
    const interval = setInterval(() => {
      setHours(new Date().getHours())
      setMinutes(new Date().getMinutes())
      setSeconds(new Date().getSeconds())
      setMonth(new Date().getMonth() + 1)
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
      case 0:
        return 'Sunday'
      case 1:
        return 'Monday' 
      case 2:
        return 'Tuesday'
      case 3:
        return 'Wednesday'
      case 4:
        return 'Thursday'
      case 5:
        return 'Friday'
      case 6:
        return 'Saturday'
      default:
        return 'ERROR'
    }
  }

  return <TimeContainer>
    <NumberContainer>
      {hours > 12 ? hours - 12 : hours}:{minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds} {hours < 12 ? 'AM' : 'PM'}
    </NumberContainer>
    <DayContainer>
      {dayOfTheWeek()}
    </DayContainer>
    <DateContainer>
      {day}/{month}/{year}
    </DateContainer>
  </TimeContainer>
}


const Body = () => {
  return <BodyContainer>
    {FormattedDate()}
  </BodyContainer>
}

export default Body;