import React from 'react';
import Dropzone from 'react-dropzone'
import './UploadFile.css'

export default function UploadFile(props){
    const {onUploadFile} = props;

    return (
    <div className="uploadContent">
        <Dropzone onDropAccepted={(acceptedFiles) => {onUploadFile(acceptedFiles)}}>
        {({getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Arraste os arquivos aqui, ou clique para seleciona-los.</p>
            </div>
        )}
        </Dropzone>
    </div>
    )
}