const fs = require('fs');
const S3 = require('aws-sdk/clients/s3');
const uuid = require('uuid');

const {
  AWS_BUCKET_NAME, AWS_BUCKET_REGION, AWS_SECRET_KEY, AWS_ACCESS_KEY,
} = process.env;
const bucketName = AWS_BUCKET_NAME;
const region = AWS_BUCKET_REGION;
const secretKey = AWS_SECRET_KEY;
const accessKey = AWS_ACCESS_KEY;

const s3 = new S3({
  region,
  secretAccessKey: secretKey,
  accessKeyId: accessKey,
});

function uploadImage(img, userId) {
  const fileStream = fs.createReadStream(img.path);
  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: `${userId}/${uuid.v1()}`,
  };
  return s3.upload(uploadParams).promise();
}

function deleteImage(Key) {
  const deleteParams = {
    Bucket: bucketName,
    Key,
  };
  return s3.deleteObject(deleteParams).promise();
}

module.exports = { uploadImage, deleteImage };
