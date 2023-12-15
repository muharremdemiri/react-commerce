import React from 'react'
import {InputLabel, SelectWrapper} from "./BaseSelectElements";
import Select from "react-select";

const style = {
    option: (styles, state) => ({
        ...styles,
        color: 'black',
        backgroundColor: state.isSelected ? "deepskyblue" : styles.color,
        borderBottom: "1px solid rgba(0, 0, 0, 0.125)",
        "&:hover": {
            backgroundColor: "skyblue"
        },
    }),
    control: (styles, state) => ({
        ...styles,
        boxShadow: state.isFocused ? "0 0 0 0.2rem skyblue" : 0,
        borderColor: state.isFocused ? "#D0EAE2" : "#CED4DA",
        fontSize: '15px',
        height: 25,
        cursor: 'pointer',
        "&:hover": {
            borderColor: state.isFocused ? "none" : "none"
        },
    }),
    dropdownIndicator: (styles) => ({
        ...styles,
        paddingTop: 0,
        paddingBottom: 2,
    }),
    clearIndicator: (styles) => ({
        ...styles,
        paddingTop: 0,
        paddingBottom: 2,
    }),
};

const theme = (theme) => ({
    ...theme,
    spacing: {
        ...theme.spacing,
        controlHeight: 30,
    }
});

const BaseSelect = ({label, Id, selectedValue, handleChangeValue, values, isLoading = false, isClearable = true, isSearchable = true, isDisabled = false, isRequired = false}) => {
    return (
        <>
            <SelectWrapper>
                <InputLabel htmlFor={Id}>
                    {label}
                    {isRequired && <span style={{color:'red', marginLeft: '5px'}}>*</span>}
                </InputLabel>
                <Select id={Id} theme={theme} isSearchable={true} styles={style} isLoading={isLoading} isClearable={isClearable} isSearchable={isSearchable} isDisabled={isDisabled} id='category' value={selectedValue} onChange={handleChangeValue} options={values} />
            </SelectWrapper>
        </>
    )
}

export default BaseSelect