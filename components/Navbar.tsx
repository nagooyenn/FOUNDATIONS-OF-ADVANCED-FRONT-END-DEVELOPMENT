'use client';

import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <Link href="/" style={styles.link}>Home</Link>
      <Link href="/about" style={styles.link}>About</Link>
      <Link href="/features" style={styles.link}>Features</Link>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    padding: '1rem',
    backgroundColor: '#ffe6f0',
    borderBottom: '2px solid #ff66b2',
  },
  link: {
    color: '#ff66b2',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default Navbar;
