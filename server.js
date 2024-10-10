// server.js
const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// single file
app.post("/upload_single", upload.single("file"), uploadSingle);

function uploadSingle(req, res) {
    console.log(req.body);
    console.log("req file", req.file);
    res.json({ message: "Successfully uploaded single file" });
}

// multiple files
app.post("/upload_files", upload.array("files"), uploadFiles);

function uploadFiles(req, res) {
    console.log(req.body);
    console.log(req.files);
    res.json({ message: "Successfully uploaded files" });
}

app.listen(5000, () => {
    console.log(`Server started...`);
});
