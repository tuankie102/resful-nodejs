const path = require('path');
const UploadSingleFile = async (fileObject) => {
    uploadPath = path.resolve(__dirname, "../public/images/upload");
    //extension name, means: .jpg
    let extName = path.extname(fileObject.name);
    //get image's name (without extension)
    let baseName = path.basename(fileObject.name, extName);
    let finalName = `${baseName}-${Date.now()}${extName}`
    let finalPath = `${uploadPath}/${finalName}`;

    try {
        await fileObject.mv(finalPath);
        return {
            status: 'success',
            data: finalPath,
            error: null,
        }
    } catch (error) {
        console.log('>>>>>>>>>check error upload file: ', error);
        return {
            status: 'error',
            data: finalPath,
            error: error,
        }
    }
}

const UploadMultipleFiles = async (fileArr) => {
    let uploadPath = path.resolve(__dirname, "../public/images/upload");
    let countSuccess = 0;
    let resultArr = [];
    for (const fileObject of fileArr) {
        //extension name, means: .jpg
        let extName = path.extname(fileObject.name);
        //get image's name (without extension)
        let baseName = path.basename(fileObject.name, extName);
        let finalName = `${baseName}-${Date.now()}${extName}`
        let finalPath = `${uploadPath}/${finalName}`;

        try {
            await fileObject.mv(finalPath);
            resultArr.push({
                status: 'success',
                data: finalPath,
                error: null,
            })
            countSuccess++;
        } catch (error) {
            resultArr.push({
                status: 'failed',
                data: finalPath,
                error: error,
            })
        }
    }
    return {
        countSuccess: countSuccess,
        detail: resultArr
    }

}


module.exports = { UploadSingleFile, UploadMultipleFiles };