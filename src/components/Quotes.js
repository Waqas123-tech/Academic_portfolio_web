import React from 'react';

const Quotes = () => {
  const quotes = [
    {
      text: "Research is to see what everybody else has seen, and to think what nobody else has thought.",
      author: "Albert Szent-Györgyi",
      category: "Research"
    },
    {
      text: "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world.",
      author: "Albert Einstein",
      category: "Imagination"
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
      category: "Inspiration"
    },
    {
      text: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs",
      category: "Innovation"
    }
  ];

  return (
    <section id="quotes" style={{ padding: '60px', backgroundColor: '#f9fafb' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '40px', color: '#2563eb' }}>Inspiring Quotes</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', maxWidth: '1200px', margin: 'auto' }}>
        {quotes.map((quote, index) => (
          <div key={index} style={{
            padding: '20px',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            backgroundColor: '#ffffff',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '16px', fontStyle: 'italic', marginBottom: '10px', lineHeight: '1.6' }}>
              "{quote.text}"
            </p>
            <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#2563eb' }}>
              — {quote.author}
            </p>
            <p style={{ fontSize: '12px', color: '#6b7280' }}>
              {quote.category}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Quotes;