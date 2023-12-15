import styled from 'styled-components'

export const AuthenticationWrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25),
  0 10px 10px rgba(0,0,0,0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
  max-height: 650px;
  padding: 20px;
  margin: 20px;
  @media (min-width: 800px) {
      &.right-panel-active .sign-in-container {
        transform: translateX(100%);
      }
      
      &.right-panel-active .sign-up-container {
        transform: translateX(100%);
        opacity: 1;
        z-index: 5;
        animation: show 0.3s;
      }
      
      &.right-panel-active .overlay-container{
        transform: translateX(-100%);
      }
      
      &.right-panel-active .overlay {
        transform: translateX(50%);
      }
      
      &.right-panel-active .overlay-left {
        transform: translateX(0);
      }
      
      &.right-panel-active .overlay-right {
        transform: translateX(100%);
      }
  }
  @media (max-width: 800px) {
    opacity:1;
  }

`

export const FormContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  
  @media(max-width: 800px) {
    display: ${({isVisible}) => isVisible ? 'block' : 'none'};
    width: 100%;
  }
`

export const Form = styled.form`
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`

export const Title = styled.h1`
  font-weight: bold;
  margin: 0;
`

export const SocialContainer = styled.div`
  margin: 20px 0;
`

export const Social = styled.a`
  border: 1px solid white;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  font-size: 40px;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
`

export const Span = styled.span`
  font-size: 12px;
`

export const Input = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
`
export const Link = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
  cursor: pointer;
`

export const SubmitButton = styled.button`
  border-radius: 20px;
  border: 1px solid #176d86;
  background-color: deepskyblue;
  color: #FFFFFF;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  cursor: pointer;
  
  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }

  &.ghost {
    background-color: transparent;
    border-color: #FFFFFF;
  }
`

export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`

export const ChangeModal = styled.p`
  font-size: 14px;
  text-decoration: underline;
  font-weight: 100;
  letter-spacing: 0.5px;
  margin: 20px 0 0 0;
  
  @media(min-width:800px) {
    display: none;  
  }
`