import React from 'react'
import styles from '../styles/Global'
const Button = ({assetUrl,link}) => {
  return (
    <div className={styles.btnBlack}
    onClick={()=>window.open(link,"_blank") }
    >
      <img className={styles.btnIcon} src={assetUrl} alt='expo_icon'/>
      <div className='flex flex-col justify-start ml-4'>
        <p className={`${styles.btnText} font-normal text-xs`}>View It On</p>
        <p className={`${styles.btnText} font-bold text-xm`}>Expo Store</p>
        
      </div>
    
    </div>
  )
}

export default Button