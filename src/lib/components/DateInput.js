import React from 'react';
import { allLetter, validateNumber } from '../helpers/common';


const DateInput = (props) => {
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
					<i></i>
					<input
						required={props.require}
						type={'date'}
						className={`${props.id} `}
						id={props.id}
						value={props.defaultValue}
						onChange={handleChangeValue}
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
export default DateInput;