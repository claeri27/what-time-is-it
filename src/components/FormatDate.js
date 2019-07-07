import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import moment from 'moment';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

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
  @media (min-width: ${size.mobileS}) {
    margin-top: 15px;
    font-size: 1.3em;
  }
  @media (min-width: ${size.mobileM}) {
    margin-top: 100px;
    font-size: 2em;
  }
  @media (min-width: ${size.mobileL}) {
    margin-top: 120px;
    font-size: 3em;
  }
  @media (min-width: ${size.tablet}) {
    margin-top: 120px;
    font-size: 6em;
  }
  @media (min-width: ${size.laptop}) {
    margin-top: 100px;
    font-size: 9em;
  }
  @media (min-width: ${size.laptopL}) {
    margin-top: 100px;
    font-size: 10em;
  }
  @media (min-width: ${size.desktop}) {
  }
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
`;

const SecondsContainer = styled.div`
  padding: 20px;
  background: ${props => props.theme.colors.clockBackground};
  /* width: 200px; */
  border-radius: 10px;
`;

const AMPMContainer = styled.div`
  padding: 20px;
  font-family: 'Ubuntu', sans-serif;
`;

const DateContainer = styled.div`
  padding: 10px;
  margin: 50px;
  font-family: 'Ubuntu', sans-serif;
  border-bottom: 5px solid ${props => props.theme.colors.borderColor};
  @media (min-width: ${size.mobileS}) {
    margin: 5px;
    font-size: 1em;
  }
  @media (min-width: ${size.mobileM}) {
    margin: 10px;
    font-size: 1.2em;
  }
  @media (min-width: ${size.mobileL}) {
    margin: 15px;
    font-size: 1.6em;
  }
  @media (min-width: ${size.tablet}) {
    margin: 25px;
    font-size: 2.3em;
  }
  @media (min-width: ${size.laptop}) {
    font-size: 3.5em;
  }
  @media (min-width: ${size.laptopL}) {
    font-size: 4em;
  }
  @media (min-width: ${size.desktop}) {
  }
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