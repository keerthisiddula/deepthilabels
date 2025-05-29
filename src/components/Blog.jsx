import React from 'react';

const blogPosts = [
  {
    title: "How to Choose the Right Barcode Printer",
    excerpt: "Choosing the right barcode printer is essential for ensuring smooth operations in your business. Factors to consider include printing volume, label size, connectivity options, and compatibility with your existing systems.",
  },
  {
    title: "Benefits of Custom Labels for Small Businesses",
    excerpt: "Custom labels can significantly boost your brand identity and operational efficiency. For small businesses, investing in custom labels offers advantages such as enhanced product visibility, better customer experience, and streamlined inventory management.",
  },
];

const Blog = () => {
  return (
    <section style={{ padding: '40px' }}>
      <h2 className="text-3xl font-extrabold mt-20 mb-3 text-center leading-relaxed text-gradient bg-gradient-to-r from-green-400 to-teal-600">
        Latest Blogs
      </h2>
      <div className="w-24 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500"></div>

      <div style={{
        display: 'flex',
        gap: '30px',
        maxWidth: '960px',
        margin: '0 auto',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        {blogPosts.map(({ title, excerpt }, idx) => (
          <article
            key={idx}
            style={{
              flex: '1 1 45%',
              background: '#1F2937',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              padding: '25px',
              boxSizing: 'border-box',
              minWidth: '300px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.3s ease',
              cursor: 'pointer',
              color:'white'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div>
              <h3 className="text-xl font-semibold text-purple-600 mb-2">{title}</h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: 'white',
                marginBottom: '25px'
              }}>{excerpt}</p>
            </div>
            <a
              href="#"
              style={{
                alignSelf: 'flex-start',
                fontWeight: '600',
                color: '#4F46E5', // Indigo-600 from Tailwind for a business-friendly accent
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#3730A3'}
              onMouseLeave={e => e.currentTarget.style.color = '#4F46E5'}
            >
              
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
