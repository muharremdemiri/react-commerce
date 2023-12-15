import styled from 'styled-components'

export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 5;
  @media (max-width: 800px) {
    display: none;    
  }
`

export const OverlayShade = styled.div`
  background: deepskyblue;
  background: -webkit-linear-gradient(to right, skyblue, deepskyblue);
  background: linear-gradient(to right, deepskyblue, #0879a2);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #FFFFFF;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`

export const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 52%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`