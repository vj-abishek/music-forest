const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { Storage } = require('@google-cloud/storage');

const { tmpdir } = require('os');
const { join, dirname } = require('path');
const sharp = require('sharp');
const fs = require('fs-extra');

const gcs = new Storage();

// const serviceAccount = require("./music-forest-abigo-a8fb7d51ad0e.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://music-forest-abigo.firebaseio.com"
// });

admin.initializeApp();
// Automatically allow cross-origin requests
// app.use(cors({ origin: true }));

// app.get("/api", (req, res) => {
//   admin
//     .firestore()
//     .collection("video_data")
//     .get()
//     .then(snap => {
//       console.log(snap);
//       const data = snap.data();
//       res.json(data);
//     })
//     .catch(err => {
//       res.send(err);
//     });
// });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.data = functions.https.onRequest((req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  admin
    .firestore()
    .collection('video_data')
    .orderBy('time', 'desc')
    .get()
    .then((snap) => {
      let array = [];
      snap.forEach((doc) => {
        let news = {
          id: doc.id,
          ...doc.data(),
        };
        console.log(news);
        array = [...array, news];
      });
      return res.status(200).send(array);
    })
    .catch((err) => {
      console.log('See the error');
      console.log(err);
      res.status(500).send(err);
    });
});

//generate thumbs
//it is not working and i dont know why

// exports.generateThumb = functions.storage.object().onFinalize(async (object) => {
//   const bucket = gcs.bucket(object.bucket);
//   const filePath = object.name;
//   const fileName = filePath.split('/').pop();
//   const bucketDir = dirname(filePath);

//   const workingDir = join(tmpdir(), 'thumbs');
//   const tmpFilePath = join(workingDir, 'source.png');

//   if (fileName.includes('thumb@') || !object.contentType.includes('image')) {
//     console.log('exiting function');
//     return false;
//   }

//   // 1. Ensure thumbnail dir exists
//   await fs.ensureDir(workingDir);

//   // 2. Download Source File
//   await bucket.file(filePath).download({
//     destination: tmpFilePath,
//   });

//   // 3. Resize the images and define an array of upload promises
//   const sizes = [128, 256];

//   const uploadPromises = sizes.map(async (size) => {
//     const thumbName = `thumb@${size}_${fileName}`;
//     const thumbPath = join(workingDir, thumbName);

//     // Resize source image
//     await sharp(tmpFilePath)
//       .resize(size, size)
//       .toFile(thumbPath);

//     // Upload to Storage
//     return bucket.upload(thumbPath, {
//       destination: join(bucketDir, thumbName),
//     });
//   });

//   // 4. Run the upload operations
//   await Promise.all(uploadPromises);

//   // 5. Cleanup remove the tmp/thumbs from the filesystem
//   return fs.remove(workingDir);
// });
