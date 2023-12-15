import React, {useState, useRef} from "react";
import Chevron from "./Chevron";
import {
    AccordionContainer,
    AccordionButton,
    AccordionImage,
    AccordionHeadText,
    AccordionContent,
    AccordionPriceDateSmallScreen,
    IconContainer,
    CheckBox,
    SmallScreenCheckbox,
    AccordionTextWrapper,
    DateText,
    PriceDateColumn,
    ContentContainer,
    Description,
    ContentTitle,
    Information,
    InfoWrapper,
    InfoTitle,
    InfoText, SmallScreenCheckBox
} from './AccordionElements.js'
import Gallery from "../gallery";

function Accordion(props) {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion__icon");

    const content = useRef(null);

    function toggleAccordion(e) {
        if (e.target.tagName !== "INPUT") {
            props.scrollToElement(props.dynamicId)

            setActiveState(setActive === "" ? "active" : "");
            setHeightState(
                setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
            );
            setRotateState(
                setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
            );
        }
    }

    return (
        <AccordionContainer >
            <AccordionButton hasBeenClicked={props.hasBeenClicked} className={`${setActive} ${props.dynamicId}` } onClick={toggleAccordion}>
                <IconContainer>
                    <SmallScreenCheckBox type='checkbox' onChange={() => props.selectPost(props.dynamicId)}/>
                    <Chevron className={`${setRotate}`} width={10}/>
                    <AccordionImage src="https://source.unsplash.com/user/c_v_r/200x200" alt=""/>
                </IconContainer>
                <AccordionTextWrapper>
                    <AccordionPriceDateSmallScreen>
                        <div style={{fontWeight: 'bold'}}>{props.price}</div>
                        <DateText>20/07/2021</DateText>
                    </AccordionPriceDateSmallScreen>

                    <AccordionHeadText
                        style={{justifyContent: 'start', padding: '0 10px'}}>{props.title}</AccordionHeadText>
                    <AccordionHeadText style={{fontWeight: '400', color: '#5d5d5d'}}>{props.city}</AccordionHeadText>

                    <PriceDateColumn >
                        <AccordionHeadText style={{border: 'none'}}>{props.price}</AccordionHeadText>
                        <DateText>20/07/2021</DateText>
                    </PriceDateColumn>


                    <AccordionHeadText style={{borderRight: 'none'}}>
                        <CheckBox type='checkbox' onChange={() => props.selectPost(props.dynamicId)}/>
                    </AccordionHeadText>
                </AccordionTextWrapper>
            </AccordionButton>
            <AccordionContent
                ref={content}
                style={{maxHeight: `${setHeight}`}}
                isActive={setActive === 'active'}
                className="accordion__content"
            >
                <Gallery/>

                <ContentContainer>
                    <ContentTitle>
                        Pershkrimi
                    </ContentTitle>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    </Description>

                    <ContentTitle>
                        Gjendja
                    </ContentTitle>
                    <Description>Sikur e re</Description>

                    <ContentTitle>
                        Kontakti
                    </ContentTitle>

                    <Information >

                        <InfoWrapper>
                            <InfoTitle>Emri:</InfoTitle>
                            <InfoText>Drinor Dalipi</InfoText>
                        </InfoWrapper>

                        <InfoWrapper>
                            <InfoTitle>Numri i telefonit:</InfoTitle>
                            <InfoText>048 22 00 99</InfoText>
                        </InfoWrapper>

                        <InfoWrapper>
                            <InfoTitle>WhatsApp:</InfoTitle>
                            <InfoText>+381 63 19 66 017</InfoText>
                        </InfoWrapper>

                        <InfoWrapper>
                            <InfoTitle>Email:</InfoTitle>
                            <InfoText>drinordalipi5@gmail.com</InfoText>
                        </InfoWrapper>

                    </Information>
                </ContentContainer>
            </AccordionContent>
        </AccordionContainer>
    );
}

export default Accordion;
