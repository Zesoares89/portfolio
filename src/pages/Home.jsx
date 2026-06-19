import React, { useState, useEffect } from 'react';

const Home = () => {
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-page">
     {showImage && (
  <img
  src="/img/project1.jpg"
  alt="José Soares"
  onLoad={() => console.log('LOADED')}
  onError={(e) => {
    console.log('FAILED');
    console.log(e);
  }}
  style={{
    width: '300px',
    border: '3px solid red'
  }}
/>
)}

      <h1 className="lg-heading">
        José <span className="text-secondary">Soares</span>
      </h1>

      <h2 className="sm-heading">
        Artista Plástico, Pintor & Escultor
      </h2>

      <div className="social-icons">
        <a href="https://twitter.com/TiagoSoaresdos" target="_blank" rel="noopener noreferrer" title="Twitter">
          <i className="fab fa-twitter"></i>
        </a>

        <a href="https://www.facebook.com/profile.php?id=61556461990404" target="_blank" rel="noopener noreferrer" title="Facebook">
          <i className="fab fa-facebook"></i>
        </a>

        <a href="https://www.linkedin.com/in/tiago-santos-445876166/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>

        <a href="https://github.com/shouzo1" target="_blank" rel="noopener noreferrer" title="GitHub">
          <i className="fab fa-github"></i>
        </a>

        <a href="https://www.instagram.com/zesoares89/" target="_blank" rel="noopener noreferrer" title="Instagram">
          <i className="fab fa-instagram"></i>
        </a>

        <a href="https://www.youtube.com/@Shouzo-euw" target="_blank" rel="noopener noreferrer" title="YouTube">
          <i className="fab fa-youtube"></i>
        </a>

        <a href="https://www.behance.net/tiagosantos879" target="_blank" rel="noopener noreferrer" title="Behance">
          <i className="fa-brands fa-behance"></i>
        </a>
      </div>
    </div>
  );
};

export default Home;