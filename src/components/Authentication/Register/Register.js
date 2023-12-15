import React from 'react'
import {
    FormContainer,
    Form,
    Title,
    SocialContainer,
    Social,
    Span,
    Input,
    SubmitButton, ChangeModal
} from "../AuthenticationElements";
import { FcGoogle} from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";


const Register = ({isVisible, toggleModal}) => {
  return (
      <FormContainer isVisible={isVisible} className="form-container sign-up-container">
          <Form action="#">
              <Title>Regjistrohu</Title>
              <SocialContainer className="social-container">
                  <Social href="#" className="social"><BsFacebook style={{color:'blue'}}/></Social>
                  <Social href="#" className="social"><FcGoogle/></Social>
              </SocialContainer>
              <Span>ose përdor emailin për tu regjistruar</Span>
              <Input type="text" placeholder="Emri"/>
              <Input type="email" placeholder="Emaili"/>
              <Input style={{marginBottom: '10px'}} type="password" placeholder="Fjalëkalimi"/>
              <SubmitButton style={{marginTop: '5px'}}>Regjistrohu</SubmitButton>
              <ChangeModal onClick={toggleModal}>Kyqu</ChangeModal>
          </Form>
      </FormContainer>
  )
}

export default Register