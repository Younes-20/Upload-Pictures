import React, { useState } from 'react';
import Progressbar from '../Comps/ProgressBar';




const UploadForm = () => {


    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    // make sure the selected file is an image  
    let types = ['image/png', 'image/jpeg']

    const handleChange = (e) => {
        // access the file that the user has selected
        let selected = e.target.files[0] // we want the first file

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('') // reset the error
        } else {
            setFile(null);
            setError('Please select an image file (png or jpeg)');
        }


    }

    return (
        <form>
            <label>
                <input type="file" onChange={handleChange} />
                <span className="upload"><i className="fas fa-upload"></i></span>

            </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div className="name"> {file.name} </div>}
                {file && <Progressbar file={file} setFile={setFile} />}

            </div>
        </form>
    )
}

export default UploadForm;