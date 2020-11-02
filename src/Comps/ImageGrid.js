import React from 'react';
import Usefirestore from '../hooks/UseFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ({ setselectedimg }) => {
    const { docs } = Usefirestore('Images');

    return (
        <div className="img-grid">
            {docs && docs.map(doc => {
                return (
                    <motion.div className="img-wrap" key={doc.id} onClick={() => setselectedimg(doc.url)}
                        whileHover={{ opacity: 1 }}
                        layout
                    >
                        <motion.img src={doc.url} alt="uploaded pic" className="pic"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}

                        />

                    </motion.div>

                )
            })}

        </div>
    )


}





export default ImageGrid;