import React from 'react';
import Select from 'react-select';
import  { useState} from 'react';

const MultiSelectDropDown = (props) => {
    const [selectedMultiOption, setSelectedMultiOption] = useState('');
    const [isMultiSelectOpen, setIsMultiSelectOpen] = useState(false);
    return (
        <>
        
        
				<div
					className={`select ${
						(props.defaultValue &&
							props.defaultValue.length !== 0) ||
						isMultiSelectOpen ||
						selectedMultiOption
							? 'select-open'
							: 'select-close'
					}`}
				>
					{props.icon && <i className={props.icon}></i>}
					<Select
						isMulti={props.isMulti}
						isClearable={false}
						id={props.id}
						isDisabled={props.isDisabled || false}
						name={props.name}
						classNamePrefix={'my-custom-react-select'}
						placeholder=''
						value={props.defaultValue || selectedMultiOption}
						onChange={selectedMultiOption => {
							console.log(selectedMultiOption);
							setSelectedMultiOption(selectedMultiOption);
							props.setValue(selectedMultiOption);
						}}
						options={props.options}
						required
						spellCheck='false'
						onMenuOpen={() => {
							setIsMultiSelectOpen(true);
						}}
						onMenuClose={() => {
							setIsMultiSelectOpen(false);
						}}
					/>
					<label htmlFor='name'>
						{props.label}{' '}
						{props.require && <em className='text-red-400'>*</em>}
					</label>
				</div>
			
        
        </>
    )
}
export default MultiSelectDropDown;