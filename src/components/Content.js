import React from 'react';
import styles from './Content.module.css';

function Content({title, text}) {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <p>{text}</p>
      <p>{text}</p>
    </div>
  );
}

export default Content;
