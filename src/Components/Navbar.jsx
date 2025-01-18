import React from 'react';

export default function NavbarWithHoverEffect() {
  return (
    <div style={styles.navbar}>
      <div style={styles.logo}>Hotel Taj Restaurant</div>
      <div style={styles.links}>
        <a href="#home" style={styles.link} onMouseOver={(e) => e.target.style.backgroundColor = 'gold'} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>Home</a>
        <a href="#services" style={styles.link} onMouseOver={(e) => e.target.style.backgroundColor = 'gold'} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>Services</a>
        <a href="#about" style={styles.link} onMouseOver={(e) => e.target.style.backgroundColor = 'gold'} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>About</a>
        <a href="#contact" style={styles.link} onMouseOver={(e) => e.target.style.backgroundColor = 'gold'} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>Contact</a>
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#231709',  // Dark background color
    borderBottom: '2px dotted #D2AC47',  // Golden border only at the bottom
    padding: '15px 30px',  // Padding to space out content
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',  // Shadow for depth effect
  },
  logo: {
    color: '#D2AC47',
    fontSize: '24px',
    fontWeight: 'bold',
    letterSpacing: '2px',
  },
  links: {
    display: 'flex',
    gap: '20px',  // Space between the links
  },
  link: {
    color: '#D2AC47',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
    textTransform: 'uppercase',
    padding: '10px 15px',
    borderRadius: '10px',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  },
};
