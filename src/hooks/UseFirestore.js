
import { useState, useEffect } from 'react';
import { projectFirestore } from '../Firebase/config';


// cycle through documents and output each image

const Usefirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {

        // communicate with database to get documents
        // cancel the snapshot lisenter
        const unsub = projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let document = [];
                snap.forEach((doc) => {
                    document.push({ ...doc.data(), id: doc.id })
                });
                setDocs(document);
            })

        return () => unsub;
    }, [collection]);

    return { docs }
}

export default Usefirestore;