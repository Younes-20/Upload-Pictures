
// handling the file uploads and firebase storage
import { useState, useEffect } from 'react';
import { projectFirestore, projectStorage, timeStamp } from '../Firebase/config';


const UseStorage = (file) => {
  const [progress, setProgress] = useState(0); // progress of the uploads
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => { // this func will fire everytime the file changes

    // get a refrence to where the file should be saved
    const storageRef = projectStorage.ref(file.name);
    const colloectionRef = projectFirestore.collection('Images');

    storageRef.put(file).on('state_changed',
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);

      }, (err) => {
        setError(err);

      }, async () => { // pass another argument 
        // this func will fire after the upload is complete
        const url = await storageRef.getDownloadURL();
        const createdAt = timeStamp();
        colloectionRef.add({
          url,
          createdAt
        });

        setUrl(url);
      })

  }, [file]);


  return { progress, url, error };


}

export default UseStorage;