import React from 'react';
import styled from 'styled-components'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file
const Tb = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`

const TbContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`

const ContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`
const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
  
`

const ContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;

`

const SpanLeft = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`

const SpanCenter = styled.span`
  cursor: pointer;
  margin-right: 5%;

  &:hover {
    text-decoration: underline;
  }

  &:last-child {
    margin-right: 0;
  }
`

const SpanRight = styled.span`
    cursor: pointer;
`


const TopBar = () => {
  return (
    <Tb>
      <TbContainer>
        <ContainerLeft>
          <SpanLeft>TOPICS</SpanLeft><SpanLeft>SEARCH</SpanLeft>
        </ContainerLeft>
        <ContainerCenter>
          <SpanCenter>GENERAL</SpanCenter><SpanCenter>BROWNBAG</SpanCenter><SpanCenter>RANDOM</SpanCenter><SpanCenter>MUSIC</SpanCenter><SpanCenter>ANNOUNCEMENTS</SpanCenter>
        </ContainerCenter>
        <ContainerRight>
          <SpanRight>LOG IN</SpanRight>
        </ContainerRight>
      </TbContainer>
    </Tb>
  )
}

export default TopBar;