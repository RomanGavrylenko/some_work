import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import styles from './styles.module.css';

export default function Modal({children, button, onClose}){

  const wrapper = useRef(null);

  useEffect(() => {

    const handleClick = (e) => {
      if (e.target === wrapper.current){
        onClose()
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  });

  return(
    ReactDOM.createPortal(
      <div className={styles.wrapper} ref={wrapper}>
        <div className={classNames(styles.modal, 'Modal')}>
          {children}
          {button}
        </div>
      </div>, document.body
    )
  );
}