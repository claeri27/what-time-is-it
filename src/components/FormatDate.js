import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import moment from 'moment';

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

const FormatDate = () => { 
  const [hours, setHours] = useState(moment().format('h'));
  const [minutes, setMinutes] = useState(moment().format('mm'));
  const [seconds, setSeconds] = useState(moment().format('ss'));
  const [amPM, setAmPM] = useState(moment().format('A'));
  const [date, setDate] = useState(moment().format('dddd, MMMM Do YYYY'));

  useEffect(() => {
    const interval = setInterval(() => {
      setHours(moment().format('h'))
      setMinutes(moment().format('mm'))
      setSeconds(moment().format('ss'))
      setAmPM(moment().format('A'))
      setDate(moment().format('dddd, MMMM Do YYYY'))
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return <ClockContainer>
    <TimeContainer>
      <HoursContainer>{hours}</HoursContainer>
      <ColonContainer>:</ColonContainer>
      <MinutesContainer>{minutes}</MinutesContainer> 
      <ColonContainer>:</ColonContainer>
      <SecondsContainer>{seconds}</SecondsContainer> 
      <AMPMContainer>{amPM}</AMPMContainer>
    </TimeContainer>
    <DateContainer>{date}</DateContainer>
  </ClockContainer>
}

export default FormatDate