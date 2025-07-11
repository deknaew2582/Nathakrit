import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import Stars from '../components/Backgrounds/Stars';
import Modal from '../components/Modal';
import CaseStudyDetail from './CaseStudyDetail';


const PortfolioContainer = styled.div`
  padding: 6rem 2rem;
  background-color: #0A192F;
  color: #E0E0E0;
  min-height: 100vh;
  position: relative;
  z-index: 1;
`;

const BackgroundCanvas = styled(Canvas)`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
  z-index: 0;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 3rem;
  color: #64FFDA;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Adjusted minmax for better 3-column responsiveness */
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled.div`
  background-color: #112240;
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;
  color: #FFFFFF;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  transition: all 0.3s ease-in-out;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    .project-image {
      transform: scale(1.05);
      filter: brightness(0.7);
    }
    /* Removed .project-title { opacity: 1; } */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
    border: 1px solid #64FFDA;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: all 0.3s ease-in-out;
`;

const ProjectTitleOverlay = styled.div`
  position: absolute;
  top: 0; /* Changed from bottom: 0 */
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  /* Removed opacity: 0; */
  transition: opacity 0.3s ease-in-out;
`;

const Portfolio = ({ id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { id: 1, title: 'Project One', image: 'https://picsum.photos/seed/project1/400/250' },
    { id: 2, title: 'Project Two', image: 'https://picsum.photos/seed/project2/400/250' },
    { id: 3, title: 'Project Three', image: 'https://picsum.photos/seed/project3/400/250' },
    { id: 4, title: 'Project Four', image: 'https://picsum.photos/seed/project4/400/250' },
  ];

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <PortfolioContainer id={id}
      as={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <BackgroundCanvas>
        <Stars />
      </BackgroundCanvas>
      <Title>My Portfolio</Title>
      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id} onClick={() => handleCardClick(project)}>
            <ProjectImage className="project-image" src={project.image} alt={project.title} />
            <ProjectTitleOverlay className="project-title">{project.title}</ProjectTitleOverlay>
          </ProjectCard>
        ))}
      </ProjectGrid>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedProject && <CaseStudyDetail project={selectedProject} />}
      </Modal>
    </PortfolioContainer>
  );
};

export default Portfolio;
