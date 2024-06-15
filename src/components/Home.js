import React from 'react';
import styles from './Content.module.css';

export default function Home({title, body}) {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}