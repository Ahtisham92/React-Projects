import styles from './OverlayNotification.module.css'



const OverlayNotification = ({message, closeOverlay}) => {



  return (
    <div className={styles.overlay}>
      <div className={styles['error-block']}>
        <div className={styles.content}>
          <p>{message}</p>
          <button onClick={closeOverlay}>close</button>  
        </div>
      </div>
    </div>
  );
}

export default OverlayNotification;