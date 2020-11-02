import React from 'react';
import { motion } from 'framer-motion';


const Modal = ({ selectedimg, setselectedimg }) => {

    const closeModal = (e) => {
        if (e.target.classList.contains('modal')) {
            setselectedimg(null)
        }
    }


    return (
        <motion.div className="modal" onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}

        >
            <motion.img src={selectedimg} alt="large pic"
                initial={{ y: '-100vh' }}
                animate={{ y: 0 }}
            />
        </motion.div>
    )
}


export default React.memo(Modal);