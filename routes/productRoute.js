const express = require('express')
const router = express.Router();
const productController = require('../controllers/productController')
const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination:'./image',
    filename:(req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage:storage
})

// create new users
router.post('/create', upload.single('image'), productController.createProduct)


module.exports = router;