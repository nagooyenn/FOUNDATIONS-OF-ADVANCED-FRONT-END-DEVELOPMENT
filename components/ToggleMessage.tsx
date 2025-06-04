'use client';

import React, { useState } from 'react';

const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div style={styles.container}>
      <button onClick={toggle} style={styles.button}>
        {isVisible ? 'Hide Message' : 'Show Message'}
      </button>
      {isVisible && <p style={styles.message}> This is a toggled message</p>}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center' as const,
    padding: '1rem',
  },
  button: {
    padding: '0.5rem 1rem',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  message: {
    marginTop: '1rem',
    fontSize: '1.1rem',
    color: '#333',
  },
};

export default ToggleMessage;
