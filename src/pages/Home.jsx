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


      

     

        

        <a href="https://www.instagram.com/zesoares89/" target="_blank" rel="noopener noreferrer" title="Instagram">
          <i className="fab fa-instagram"></i>
        </a>

      

      
      </div>
    
  );
};

export default Home;