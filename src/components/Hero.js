import React from 'react';
import { ReactTyped } from 'react-typed';

function Hero() {
  return (
    <section style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '48px' }}>Waqas Ahmad</h1>

      <h2 style={{ color: '#2563eb' }}>
        <ReactTyped
          strings={[
            'Machine Learning Researcher',
            'Deep Learning Enthusiast',
            'AI for Real-World Problems'
          ]}
          typeSpeed={60}
          backSpeed={40}
          loop
        />
      </h2>

      <p style={{ maxWidth: '600px', margin: '20px auto' }}>
        Passionate about AI, Machine Learning, and solving real-world problems.
      </p>
    </section>
  );
}

export default Hero;