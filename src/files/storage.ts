import { diskStorage } from 'multer';

const generateId = () =>
  Array(18)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('');

const normilizeFileName = (req, file, callback) => {
  const filtExtName = file.originalname.split('.').pop();

  callback(null, `${generateId()}.${filtExtName}`);
};

export const fileStorage = diskStorage({
  destination: './uploads',
  filename: normilizeFileName,
});
