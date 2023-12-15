import React from 'react';
import {CheckBox, CheckBoxLabel, CheckboxWrapper} from "./BaseCheckboxElements";

const BaseCheckbox = ({name, text}) => {
  return (
      <CheckboxWrapper>
          <CheckBox id={name} name={name} type='checkbox' />
          <CheckBoxLabel htmlFor={name}>{text}</CheckBoxLabel>
      </CheckboxWrapper>
  )
}

export default BaseCheckbox;