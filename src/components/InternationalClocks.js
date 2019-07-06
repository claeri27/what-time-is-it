import React from 'react'
import styled from 'styled-components';
import moment from 'moment';
import 'moment-timezone'
import AnalogClock, { Themes } from 'react-analog-clock'

const IntlClocksContainer = styled.div`
  display: grid;
  margin-top: 35px;
  grid-template-columns: 360px 360px 360px 360px;
`;

const HongKongContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 360px;
`;

const LondonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 360px;
`;

const NewYorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 360px;
`;

const TokyoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 360px;
`;

const DelhiContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 360px;
`;

const ClockData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const City = styled.div`
`;

const CityTime = styled.div`
`;

const InternationalClocks = () => {
  return <IntlClocksContainer>
    <NewYorkContainer>
      <ClockData>
        <City>New York</City>
        <CityTime>
          {moment.tz("America/New_York").format('LT')}
        </CityTime>
      </ClockData>
      <AnalogClock theme={Themes.dark} width={300} gmtOffset={'-4'}/>
    </NewYorkContainer>
    <LondonContainer>
      <ClockData>
        <City>London</City>
        <CityTime>
          {moment.tz("Europe/London").format('LT')}
        </CityTime>
      </ClockData>
      <AnalogClock theme={Themes.dark} width={300} gmtOffset={'+1'}/>
    </LondonContainer>
    <HongKongContainer>
      <ClockData>
        <City>Hong Kong</City>
        <CityTime>
          {moment.tz("Asia/Hong_Kong").format('LT')}
        </CityTime>
      </ClockData>
      <AnalogClock theme={Themes.dark} width={300} gmtOffset={'+8'}/>
    </HongKongContainer>
    <TokyoContainer>
      <ClockData>
        <City>Tokyo</City>
        <CityTime>
          {moment.tz("Asia/Tokyo").format('LT')}
        </CityTime>
      </ClockData>
      <AnalogClock theme={Themes.dark} width={300} gmtOffset={'+9'}/>
    </TokyoContainer>
    <DelhiContainer>
      <ClockData>
        <City>Delhi</City>
        <CityTime>
          {moment.tz("Asia/Delhi").format('LT')}
        </CityTime>
      </ClockData>
      <AnalogClock theme={Themes.dark} width={300} gmtOffset={+'5.5'}/>
    </DelhiContainer>
  </IntlClocksContainer>
}

export default InternationalClocks