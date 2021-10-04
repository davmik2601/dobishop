import multer from "multer";
import moment from "moment";

console.log("MULTER")

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads');
  },
  filename(req, file, cb) {
    const date = moment().format("DD_MM_YYYY-HHmmss_SSS");
    cb(null, `${date}-${file.originalname}`);
  }
});

const imigeMimeTypes = ['image/jpeg', 'image/png', 'image/gif'];

// const fileFilter = (req, file, cb) => {
//   cb(null, imigeMimeTypes.includes(file.mimetype));
// }

// const limits = {
//   fileSize: 1024 * 1024 * 5
// }

export default multer({
  storage,
  // fileFilter,
  // limits
})