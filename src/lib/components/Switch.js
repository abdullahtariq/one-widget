import React from 'react';
import '../css/Switch.css';

const Switch = (props) => {
    return (
        <>
        
        <div className='switch-btn align-center gap-10'>
					<label class='switch s-0'>
						<input
							id={props.id}
							name={props.name}
							type='checkbox'
							checked={props.defaultValue}
							onChange={e => {
								props.setValue(e.target.checked);
							}}
						/>
						<span class='slider'></span>
					</label>
					<p className='text-left pera'>{props.label}</p>
				</div>
                </>
    )
}
export default Switch;