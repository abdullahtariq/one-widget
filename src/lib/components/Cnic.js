import React from 'react';
import { useState } from 'react';
import { allLetter, validateNumber } from '../helpers/common';
const Cnic = (props) => {
    const [cnic, setCnic] = useState('');

    const handleCnic = event => {
		event.preventDefault();
		let v = null;
		if (validateNumber(event)) {
			v = event.target.value;
		} else {
			return false;
		}
		let last_char;
		let full_string;
		let new_char;
		if (v.length === 6 && v.slice(-1) !== '-') {
			last_char = v.slice(-1);
			full_string = v.slice(0, -1);
			new_char = full_string + '-' + last_char;
		} else if (v.length === 14 && v.slice(-1) !== '-') {
			last_char = v.slice(-1);
			full_string = v.slice(0, -1);
			new_char = full_string + '-' + last_char;
		}
		setCnic(new_char);
		handleChangeValue(event, new_char);
	};
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
       
        
				<div className={`inputs ${props.readOnly ? 'read-only' : ''}`}>
					{props.icon && <i className={props.icon}></i>}

					<input
						required={props.require}
						type={'text'}
						className={`${props.id} `}
						id={props.id}
						value={props.defaultValue || cnic}
						spellCheck='false'
						maxLength='15'
						onChange={handleCnic}
						readOnly={props.readOnly}
						name={props.name}
					/>

					<label htmlFor='name'>
						{props.label}{' '}
						{props.require && <em className='text-red-400'>*</em>}
					</label>
				</div>
			
        </>   
    )
}
export default Cnic;