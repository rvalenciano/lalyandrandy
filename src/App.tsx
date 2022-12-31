import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box } from '@mui/material';
import styles from './App.module.css';


function App() {
  return (
    <Box className={styles.main}>
      <Box className={styles.container}>
        <Box className={styles.heart}></Box>
        <Box className={styles.footer}>
          The beginning of a love story ...
        </Box>
      </Box>
    </Box>
  );
}

export default App;
