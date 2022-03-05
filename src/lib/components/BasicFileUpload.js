import React, { useRef, useState } from 'react';
import { uploadFileService } from '../helpers/request';
import swal from "sweetalert";

/*
1. simple file upload HTML5 
2. Customize with button and possible to add icon or text

Props : {
	endPoint,
	customClassName,
	customIcon,
	label,
	title,
	baseClassName
}
*/
const BasicFileUpload = (props) => {
	const inputFileRef = useRef();
	const onBtnClick = () => {
		inputFileRef.current.click();
	};
	const uploadFile = (ev) => {
		props?.setSetDisabled(true);
		_handleImageUpload(ev).then((path) => {
			props?.setContent(path);
			props?.setSetDisabled(false);
		});
	};

	const _handleImageUpload = async (ev) => {
		const reader = new FileReader();
		let file = ev.target.files[0];
		reader?.readAsDataURL(file);
		try {
			const fileResult = await uploadFileService(
				file,
				props.endPoint
			);
			return fileResult.image;
		} catch (e) {
			// alert('file upload error');
			console.error(e);
			swal({
				button: true,
				icon: 'error',
				text: 'file upload error',
				timer: 1500
			});
		}
	};

	return (
		<>
			{props.custom ? (
				<button
					type='button'
					data-title='Register'
					className={props.customClassName}
					onClick={onBtnClick}
				>
					<i className={props.customIcon}></i>
					<span className='toptip-right'>{props.label}</span>
					<input
						className="hide"
						type="file"
						ref={inputFileRef}
						onChangeCapture={uploadFile}
					/>
				</button>
			) : (
				<div className='inputs'>
					<i className={props.customIcon}></i>
					<input
						required={props.required || false}
						type='file'
						className={props.baseClassName}
						id={props.title}
						spellCheck='false'
						onChange={uploadFile}
					/>
				</div>
			)}
		</>
	);
};

export default BasicFileUpload;
