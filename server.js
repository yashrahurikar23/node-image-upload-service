const express = require('express');

// 
const {uploadImage} = require('./helpers/imageUploadHelper'); 

const PORT = 4000;

const app = express();

app.get('/', (req, res) => {
    res.send("Hello!");
});

app.post('/upload', async (req, res) => {
    try {
        uploadImage(req, res, (error) => {
            if(error) {
                res.status(404).send(error);
            }
            if(req.file) {
                const pathName = req.file.path;
                res.send(req.file, pathName);
            }
        });
    } catch(error) {
        res.status(404).send(error);
    }
});

app.listen(PORT, () => {
    console.log(`Port running at ${PORT}`);
});
