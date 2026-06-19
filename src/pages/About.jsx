import React from 'react'
import { FaInstagram, FaMapMarkerAlt, FaCalendarAlt, FaPaintBrush } from 'react-icons/fa'

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <span className="artist-badge">Perfil do Artista</span>
        <h1 className="lg-heading">
          José <span className="text-secondary">Soares</span>
        </h1>
        <h2 className="artist-subtitle">Artista Plástico, Pintor & Escultor</h2>
      </div>

      <div className="about-grid">
        <div className="about-bio-section">
          <div className="bio-card">
            <h3 className="section-title">Biografia</h3>
            <p className="bio-text">
              Zé Soares (nascido em 1989) é um artista plástico, desenhador e escultor cuja obra se destaca pela exploração da forma, da matéria e da expressão visual contemporânea. Desde cedo demonstrou interesse pelas artes, desenvolvendo uma linguagem criativa própria através do desenho e da experimentação com diferentes materiais.
            </p>
            <p className="bio-text">
              Ao longo da sua trajetória artística, tem conciliado o desenho com a escultura, criando trabalhos que refletem a observação do quotidiano, da natureza e da experiência humana. As suas obras caracterizam-se pela atenção ao detalhe, pela força expressiva das linhas e pela procura constante de novas abordagens estéticas.
            </p>
            <p className="bio-text">
              Como desenhador, Zé Soares explora técnicas tradicionais e contemporâneas, utilizando o traço como meio de comunicação e interpretação do mundo que o rodeia. Na escultura, trabalha diferentes materiais, transformando ideias e emoções em formas tridimensionais que convidam à reflexão e ao diálogo com o público.
            </p>
          </div>

          <div className="artist-meta-grid">
            <div className="meta-item">
              <FaCalendarAlt className="meta-icon" />
              <div>
                <h4>Atividade</h4>
                <p>Desde 2006 a criar arte</p>
              </div>
            </div>
            <div className="meta-item">
              <FaPaintBrush className="meta-icon" />
              <div>
                <h4>Especialidades</h4>
                <p>Desenho • Escultura • Pintura</p>
              </div>
            </div>
            <div className="meta-item">
              <FaMapMarkerAlt className="meta-icon" />
              <div>
                <h4>Localização</h4>
                <p>Portugal</p>
              </div>
            </div>
            <div className="meta-item">
              <FaInstagram className="meta-icon" />
              <div>
                <h4>Instagram</h4>
                <a href="https://www.instagram.com/zesoares89/" target="_blank" rel="noopener noreferrer">
                  @zesoares89
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="about-visual-section">
          <div className="portrait-frame">
            <img src="img/portrait.jpg" alt="José Soares Portrait" className="portrait-img" />
            <div className="frame-overlay"></div>
          </div>
          <div className="artist-quote">
            <p>"Transformando ideias em formas, texturas e expressão visual única."</p>
          </div>
        </div>
      </div>

      <div className="featured-artwork-section">
        <h3 className="section-title text-center">Obra em Destaque</h3>
        <div className="artwork-showcase-card">
          <div className="artwork-image-container">
            <img src="img/project1.png" alt="Obra de Zé Soares" className="artwork-image" />
            <div className="artwork-glow"></div>
          </div>
          <div className="artwork-details">
            <span className="artwork-tag">Escultura & Forma</span>
            <h4>Exploração Tridimensional</h4>
            <p>
              Uma representação da força expressiva das linhas e da procura constante de novas abordagens estéticas contemporâneas.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
