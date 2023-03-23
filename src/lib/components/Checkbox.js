import React from 'react';
import "../css/Checkbox.css"
const Checkbox = (props) => {
    return (
        <div className='check-box align-center gap-10'>
			
        <label class='check-box'>
            <input
                id={props.id}
                name={props.name}
                type='checkbox'
                checked={props.defaultValue}
                onChange={e => {
                    props.setValue(e.target.checked);
                }}
            />
            <span className='checkmark'></span>
        </label>
        <p className='text-left pera'>{props.label}</p>
</div>
    )
}
export default Checkbox;