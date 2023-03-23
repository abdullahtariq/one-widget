import React from 'react';
import { allLetter, validateNumber } from '../helpers/common';

const TextArea = (props) => {
    const handleChangeValue = (e, value) => {
		let inputVal = '';
		if (props.onlyLetters) {
			if (allLetter(e)) {
				inputVal = value ? value : e.target.value;
			}
		} else if (props.onlyNumbers) {
			if (validateNumber(e)) {
				inputVal = value ? value : e.target.value;
			}
		} else {
			inputVal = value ? value : e.target.value;
		}
		if (props.setValue) {
			if (props.setCapitalise) {
				inputVal = capitaliseText(inputVal);
			}
			let val =
				props.inputType === 'number' ? parseInt(inputVal) : inputVal;
			props.setValue(val, e);
		}
	};
    const capitaliseText = inputVal => {
		const capitalise = inputVal.split(' ').map(word => {
			word = word.toLowerCase();
			return word.charAt(0).toUpperCase() + word.slice(1);
		});

		return capitalise.join(' ');
	};
    return (
        <>
        

        <div className={`inputs  ${props.readOnly ? 'read-only' : ''}`}>
        {props.icon && <i className={props.icon}></i>}
        <textarea
            required={props.require}
            type={props.inputType || 'text'}
            className={`${props.id} `}
            id={props.id}
            value={props.defaultValue}
            spellCheck='false'
            onChange={handleChangeValue}
            readOnly={props.readOnly}
            name={props.name}
        ></textarea>
        <label htmlFor='name'>
            {props.label}{' '}
            {props.require && <em className='text-red-400'>*</em>}
        </label>
    </div>
    </>
    )
}
export default TextArea;