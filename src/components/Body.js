import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const BodyContainer = styled.div`
`;

const TimeContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const NumberContainer = styled.p`
  padding: 10px;
`

const FormattedDate = () => { 
  const rawDate = new Date()
  const [hours, setHours] = useState(rawDate.getHours());
  const [minutes, setMinutes] = useState(rawDate.getMinutes());
  const [seconds, setSeconds] = useState(rawDate.getSeconds());
  const [month, setMonth] = useState(rawDate.getMonth() + 1);
  const [day, setDay] = useState(rawDate.getDay());
  const [year, setYear] = useState(rawDate.getFullYear())

  useEffect(() => {
    const interval = setInterval(() => {
      setHours(new Date().getHours())
      setMinutes(new Date().getMinutes())
      setSeconds(new Date().getSeconds())
      setMonth(new Date().getMonth() + 1)
      setDay(new Date().getDay())
      setYear(new Date().getFullYear())
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return <TimeContainer>
    <NumberContainer>{hours}</NumberContainer>
    <NumberContainer>{minutes}</NumberContainer>
    <NumberContainer>{seconds}</NumberContainer>
    <NumberContainer>{month}</NumberContainer>
    <NumberContainer>{day}</NumberContainer>
    <NumberContainer>{year}</NumberContainer>
  </TimeContainer>
}


const Body = () => {
  return <BodyContainer>
    {FormattedDate()}
  </BodyContainer>
}

export default Body;