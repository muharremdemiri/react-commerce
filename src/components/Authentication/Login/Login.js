import React from 'react'
import {
    FormContainer,
    Form,
    Title,
    SocialContainer,
    Social,
    Span,
    Input,
    Link,
    SubmitButton,
    ChangeModal
} from "../AuthenticationElements";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

const Login = ({isVisible, toggleModal}) => {
    return (
        <FormContainer isVisible={isVisible} className="form-container sign-in-container">
            <Form action="#">
                <Title>kyquni</Title>
                <SocialContainer className="social-container">
                    <Social href="#" className="social"><BsFacebook style={{color:'blue'}}/></Social>
                    <Social href="#" className="social"><FcGoogle/></Social>
                </SocialContainer>
                <Span>ose me llogarine tuaj</Span>
                <Input type="email" placeholder="Emaili"/>
                <Input type="password" placeholder="Fjalëkalimi"/>
                <Link href="#">Keni harruar fjalëkalimin?</Link>
                <SubmitButton>Kyqu</SubmitButton>
                <ChangeModal onClick={toggleModal}>Regjistrohu</ChangeModal>
            </Form>
        </FormContainer>
    )
}

export default Login