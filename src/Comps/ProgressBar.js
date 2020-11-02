import React, { useEffect } from 'react';
import UseStorge from '../hooks/UseStorage';
import { motion } from 'framer-motion'

const Progressbar = ({ file, setFile, }) => {

    const { progress, url } = UseStorge(file);
    useEffect(() => {
        if (url) {
            setFile(null);
        }

    }, [url, setFile])

    return (
        <div className="container">
            <motion.div className="progress-bar"
                initial={{ width: 0 }}
                animate={{ width: progress + '%' }}
            >
            </motion.div>
        </div>
    )
}

export default Progressbar;