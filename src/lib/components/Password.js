import React from 'react';
import { allLetter, validateNumber } from '../helpers/common';
import {useState} from 'react';

const Password = (props) => {
    const [passwordType, setPasswordType] = useState('password');

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
        
        <div
					className={`inputs force-active ${
						props.readOnly ? 'read-only' : ''
					
					}`
			
				}
				>
					{props.icon && <i className={props.icon}></i>}

					<input
						ref={inputElement => {
							// constructs a new function on each render
							if (inputElement && props.autoFocus) {
								//inputElement.focus();
								props.autoFocus(inputElement)
							}
						}}
						required={props.require}
						type={passwordType}
						className={`${props.id} `}
						id={props.id}
						value={props.defaultValue}
						spellCheck='false'
						onChange={handleChangeValue}
						readOnly={props.readOnly}
						
						name={props.name}
					/>
					<label htmlFor='name'>
						{props.label}{' '}
						{props.require && <em className='text-red-400'>*</em>}
					</label>
					<div
						className='show-password align-center gap-10'
						onClick={() => {
							passwordType === 'password'
								? setPasswordType('text')
								: setPasswordType('password');
						}}
					>
						<label class='switch s-0' style={{ display: 'block' }}>
							<input
								id='tools'
								type='checkbox'
								name='fulfil_documents'
								onclick='switchOne()'
								value='1'
							/>
							<span
								class={
									passwordType === 'password'
										? 'icon-show-password'
										: 'icon-hide-password'
								}
							></span>
						</label>
					</div>
				</div>
                </>
    )
}
export default Password;