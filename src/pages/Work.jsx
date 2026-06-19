import React, { useState } from 'react'
import Lightbox from '../components/Lightbox'

const Work = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const projects = [
    { src: 'img/projects/project1.jpg', title: 'Mulher de negro' },
    { src: 'img/projects/project2.jpg', title: 'Cidade ao pôr do sol' },
    { src: 'img/projects/project3.jpg', title: 'Rosto' },
    { src: 'img/projects/project4.jpg', title: 'Ballet' },
    { src: 'img/projects/project5.jpg', title: 'Leões' },
    { src: 'img/projects/project6.jpg', title: 'Luta de cavalos' },
    { src: 'img/projects/project7.jpg', title: 'ilusão' },
    { src: 'img/projects/project8.jpg', title: 'Corpos na cidade' },
    { src: 'img/projects/project9.jpg', title: 'Dark riders' },
    { src: 'img/projects/project10.jpg', title: 'Pose de mulher' },
    { src: 'img/projects/project11.jpg', title: 'Mâscara tropical' },
    { src: 'img/projects/project12.jpg', title: 'Juventude'},
    { src: 'img/projects/project13.jpg', title: 'Mulher africana' },
    { src: 'img/projects/project14.jpg', title: 'Sereia' },
    { src: 'img/projects/project15.jpg', title: 'Ponte do farol' },
    { src: 'img/projects/project16.jpg', title: 'Forma de cascata' },
    { src: 'img/projects/project17.jpg', title: 'Celebrando' },
    { src: 'img/projects/project18.jpg', title: 'Balança de jovem' },
    { src: 'img/projects/project19.jpg', title: 'Rosto de Flôr' },
    { src: 'img/projects/project20.jpg', title: 'Cavalo cômico' },
    { src: 'img/projects/project21.jpg', title: 'Pintura de uma senhora' },
    { src: 'img/projects/project22.jpg', title: 'Cavalo realista' },
    { src: 'img/projects/project23.jpg', title: 'Casal' },
    { src: 'img/projects/project24.jpg', title: 'Expressões' },
    { src: 'img/projects/project25.jpg', title: 'Leão' },
    { src: 'img/projects/project26.jpg', title: "Idoso" },
    
  ]

  const openLightbox = (index) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div className="work-page">
      <h1 className="lg-heading">
  Meus   <span className="text-secondary">Trabalhos</span>
      </h1>
      <h2 className="sm-heading">Alguns projectos</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-item" 
            onClick={() => openLightbox(index)}
          >
            <div className="project-image-wrapper">
              <img src={project.src} alt={project.title} loading="lazy" />
              <div className="project-overlay">
                <i className="fas fa-eye"></i>
                <span className="project-title">{project.title}</span>
              </div>
            </div>
            <div className="project-footer-link">
              <i className="fas fa-eye"></i> Ver {project.title}
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        isOpen={lightboxOpen}
        images={projects}
        currentIndex={currentIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  )
}

export default Work
