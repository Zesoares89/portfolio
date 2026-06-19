import React from 'react'

const About = () => {
  return (
    <div className="about-page">
      <h1 className="lg-heading">
        Acerca <span className="text-secondary">de mim</span>
      </h1>
      <h2 className="sm-heading">Algumas curiosidades sobre mim...</h2>
      
      <div className="about-info">
        <div className="bio-image-container">
          <img src="img/portrait.jpg" alt="Tiago Santos Portrait" className="bio-image" />
        </div>

        <div className="bio">
          <h3 className="text-secondary">BIOGRAFIA</h3>
          <p>
           Zé Soares (nascido em 1989) é um artista plástico, desenhador e escultor cuja obra se destaca pela exploração da forma, da matéria e da expressão visual contemporânea. Desde cedo demonstrou interesse pelas artes, desenvolvendo uma linguagem criativa própria através do desenho e da experimentação com diferentes materiais.

Ao longo da sua trajetória artística, tem conciliado o desenho com a escultura, criando trabalhos que refletem a observação do quotidiano, da natureza e da experiência humana. As suas obras caracterizam-se pela atenção ao detalhe, pela força expressiva das linhas e pela procura constante de novas abordagens estéticas.

Como desenhador, Zé Soares explora técnicas tradicionais e contemporâneas, utilizando o traço como meio de comunicação e interpretação do mundo que o rodeia. Na escultura, trabalha diferentes materiais, transformando ideias e emoções em formas tridimensionais que convidam à reflexão e ao diálogo com o público.

A sua produção artística tem vindo a afirmar-se pela autenticidade e pela dedicação ao processo criativo, contribuindo para o panorama artístico contemporâneo através de uma obra que une sensibilidade, técnica e inovação.


          </p>
        </div>
      </div>

      <div className="jobs-grid">
        <div className="job-card">
          
          
          <p>Zé Soares (1989) é artista, desenhador e escultor. Desde 2006 dedica-se à criação artística, desenvolvendo uma linguagem própria através do desenho e da escultura. O seu trabalho explora formas, texturas e emoções, combinando técnicas tradicionais com uma abordagem contemporânea. Através das suas obras, procura transformar ideias e experiências em expressões visuais únicas, partilhando a sua evolução artística e o seu processo criativo com o público.

Versão curta para bio do Instagram

🎨 Artista | Desenhador & Escultor
📍 Desde 2006 a criar arte
✏️ Desenho • Escultura • Arte Contemporânea
✨ Transformando ideias em formas e expressão </p>
        </div>

       
      </div>
         <div className="job-image">
    <img
      src="img/project1.png"
      alt="Obra de Zé Soares"
      className="job-image-img"
    />
  </div>
  
</div>

  )
  
} 



export default About
