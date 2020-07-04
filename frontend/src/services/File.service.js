import configAxios from './configAxios';

UploadFile: (fileUpload) => {
    const data = new FormData();

    data.append('file', fileUpload.file, fileUpload.file.name);
    const config = { onUploadProgress: true}

    configAxios.post('/file', data, {
        onUploadProgress: e => {
            const percentual = parseInt(Math.round(e.loaded*100)/e.total);
        }
    })
}