import React from 'react';
import { allLetter, validateNumber } from '../helpers/common';
const InputField = (props) => {
  const handleChangeValue = (e) => {
		let inputVal = '';
		if (props.onlyLetters) {
			if (allLetter(e)) {
				inputVal = e.target.value;
			}
		} else if (props.onlyNumbers) {
			if (validateNumber(e)) {
				inputVal = e.target.value;
			}
		} else {
			inputVal = e.target.value;
		}
		if (props.setValue) {
			props.setValue(inputVal);
		}
	};
   return (
      <>
      
      <div className={`inputs ${props.readOnly ? 'read-only' : ''}`}>
         <input
            required={props.require}
            type={props.inputType || 'text'}
            className={`${props.id} `}
            id={props.id}
            value={props.defaultValue}
            spellCheck='false'
            onChange={handleChangeValue}
            readOnly={props.readOnly}
         />
         <label htmlFor={props.lable}>
         {props.lablel} {props.require && <em className={`text-red-400 ${props?.optional?.asteriskClass}`}>*</em>}
         </label>
		</div>
      </>
   )
}
export default InputField;