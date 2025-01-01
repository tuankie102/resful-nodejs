const path = require('path');
const UploadSingleFile = async (fileObject) => {
    let uploadPath = path.resolve(__dirname, "../../public/upload/");
    console.log('>>>>>>>>>check uploadPath: ', uploadPath);
    try {
        await fileObject.mv(uploadPath);
        return {
            status: 'success',
            data: uploadPath,
            error: null,
        }
    } catch (error) {
        console.log('>>>>>>>>>check error upload file: ', error);
        return {
            status: 'error',
            data: uploadPath,
            error: error,
        }
    }
}

module.exports = { UploadSingleFile };