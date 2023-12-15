import React, {useEffect, useState} from 'react'
import Login from "./Login/Login";
import Register from "./Register/Register";
import Overlay from "./Overlay/Overlay";
import {AuthenticationWrapper, Container} from "./AuthenticationElements";

const Authentication = () => {
    const [isModalVisible, setIsModalVisible] = useState(true);

    useEffect(() => {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');

        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });

        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });
    })

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    }

    return (
        <AuthenticationWrapper className='main'>
            <Container className="container" id="container">
                <Login toggleModal={toggleModal} isVisible={isModalVisible}/>
                <Register toggleModal={toggleModal} isVisible={!isModalVisible}/>
                <Overlay/>
            </Container>
        </AuthenticationWrapper>
    )
}

export default Authentication