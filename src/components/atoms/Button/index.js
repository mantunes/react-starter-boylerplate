import React from 'react';
import Isvg from 'react-inlinesvg';
import styles from './button.scss';

export const ButtonPlay = () =>
  <button className={`${styles.btn_play} ${styles.disabled}`} />

export const ButtonStop = () =>
  <button className={styles.btn_stop} />

export const ButtonClose = () =>
  <button className={styles.btn_close} />