import React from 'react';
import FileUpload from '../common/FileUpload';
const SimpleFile = (props) => {
    return (
        <>
        
        <FileUpload
					required={props.require}
					setContent={props.setValue}
					setSetDisabled={props.setSetDisabled}
                    callBack={props.selectedFileCallback}
				/>

        </>
    )

}
export default SimpleFile;