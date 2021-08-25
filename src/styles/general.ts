import styled from 'styled-components'

export const GeneralContainer = styled.div<{bgcolor?: string}>`
  //min-height: 100vh;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgcolor ? props.bgcolor : 'white'};
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  padding-top: 45px;
  padding-bottom: 45px;
  justify-content: center;
  color: black;
  align-items: center;
  @media (min-width: 576px) {
    width: 570px;
  }
  @media (min-width: 768px) {
    width: 700px;
  }
  @media (min-width: 992px) {
    width: 960px;
    justify-content: space-between;
  }
  @media (min-width: 1200px) {
    width: 1140px;
  }
`
