import React from 'react';
import ReactDOM from 'react-dom';
import styles from './ErrorMsg.module.css';


export default function ErrorMsg({ message, onClose }){
  
  return ReactDOM.createPortal(
    
    <div className={styles.overlay}>
      <div className={styles.alertbox}>
        <p>{message}</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>,
    document.getElementById('error-box')
  );
};

