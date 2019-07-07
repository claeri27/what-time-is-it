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

const MoscowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 360px;
  margin-top: 12px;
`;

const DelhiContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 360px;
  margin-top: 12px;
`;

const LosAngelesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 360px;
  margin-top: 12px;
`;

const BrazilContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 360px;
  margin-top: 12px;
`;

const ClockData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const City = styled.div`
  font-size: 1.8em;
  padding: 5px;
`;

const CityTime = styled.div`
  font-size: 2.5em;
  padding: 5px;
  padding-bottom: 10px;
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
    <MoscowContainer>
      <ClockData>
        <City>Moscow</City>
        <CityTime>
          {moment.tz("Europe/Moscow").format('LT')}
        </CityTime>
      </ClockData>
      <AnalogClock theme={Themes.dark} width={300} gmtOffset={'+3'}/>
    </MoscowContainer>
    <DelhiContainer>
      <ClockData>
        <City>Delhi</City>
        <CityTime>
          {moment.tz("Asia/Calcutta").format('LT')}
        </CityTime>
      </ClockData>
      <AnalogClock theme={Themes.dark} width={300} gmtOffset={'+5.5'}/>
    </DelhiContainer>
    <LosAngelesContainer>
      <ClockData>
        <City>Los Angeles</City>
        <CityTime>
          {moment.tz("America/Los_Angeles").format('LT')}
        </CityTime>
      </ClockData>
      <AnalogClock theme={Themes.dark} width={300} gmtOffset={'-7'}/>
    </LosAngelesContainer>
    <BrazilContainer>
      <ClockData>
        <City>Brazil</City>
        <CityTime>
          {moment.tz("America/Sao_Paulo").format('LT')}
        </CityTime>
      </ClockData>
      <AnalogClock theme={Themes.dark} width={300} gmtOffset={'-3'}/>
    </BrazilContainer>
  </IntlClocksContainer>
}

export default InternationalClocks