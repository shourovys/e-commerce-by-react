import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import './Notification.css'
import { usePopup } from './PopupContext';

const Notification = () => {
    const { popupData } = usePopup()

    return (
        <div className="notification-con">
            <AnimatePresence>
                {
                    popupData.massage &&
                    <motion.div className={`box ${popupData.type || 'success'} `}
                        initial={{ x: '100vw' }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', stiffness: 140, damping: 10, mass: 1 }}
                        exit={{ x: '40vw' }}
                    >
                        <p>{popupData.massage}</p>
                    </motion.div>
                }
            </AnimatePresence>
        </div >
    );
};

export default Notification;