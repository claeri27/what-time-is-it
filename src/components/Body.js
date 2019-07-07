import React from 'react'
import styled from 'styled-components';

import FormatDate from './FormatDate'
// import InternationalClocks from './InternationalClocks'

const UserTimeAndDate = styled.div`
`;

// const IntlClocks = styled.div`
// `;

const Body = () => {
  return <>
    <UserTimeAndDate>{FormatDate()}</UserTimeAndDate>
    {/* <IntlClocks>{InternationalClocks()}</IntlClocks> */}
  </>
}

export default Body;