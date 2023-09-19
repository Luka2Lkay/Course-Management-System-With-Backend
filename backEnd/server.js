const cors = require('cors')
const express = require('express');
const mongoose = require('mongoose');
const courseRoutes = require('././src/routes/courseRoutes');
const app = express();
// var multer  = require('multer')



const port = 3300;
app.use(express.json());
app.use(cors())

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './images')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.originalname)
//     }
// })
// var upload = multer({ storage: storage })

mongoose.connect('mongodb://127.0.0.1/Course').then(() => {
    console.log("You are connected")
}).catch((error) =>{
    console.log("Oops! You are not connected!", error)
})


app.use('/course', courseRoutes);
app.use('/images', express.static('images'))

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})