'use client';

import React, { useState } from 'react';

type GreetingProps = {
  name: string;
};

const Greeting = ({ name }: GreetingProps) => {
  const [greeted, setGreeted] = useState(false);

  const handleClick = () => {
    setGreeted(true);
  };

  return (
    <div style={styles.container}>
      <p>
        {greeted
          ? `Nice to see you, ${name}!`
          : `Click the button to get a greeting, ${name}.`}
      </p>
      <button onClick={handleClick} style={styles.button}>
        Say Hi
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: '1rem',
    textAlign: 'center' as const,
  },
  button: {
    padding: '0.5rem 1rem',
    backgroundColor: '#0070f3',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '0.5rem',
  },
};

export default Greeting;
