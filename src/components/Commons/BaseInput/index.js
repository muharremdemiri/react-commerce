import React from "react";
import {InputLabel, InputWrapper, SearchInput} from "./BaseInputElements";

const BaseInput = ({Title, Id, PlaceHolder, Type= 'text', Min='0', Step='10', InputStyle, IsRequired=false}) => {
    return (
        <>
            <InputWrapper style={{width:'100%'}}>
                <InputLabel htmlFor="priceTo">
                    {Title}
                    {IsRequired && <span style={{color:'red', marginLeft: '5px'}}>*</span>}
                </InputLabel>
                <SearchInput style={InputStyle} type={Type} min={Min} placeholder={PlaceHolder} step={Step} id={Id} />
            </InputWrapper>
        </>
    )
}

export default BaseInput