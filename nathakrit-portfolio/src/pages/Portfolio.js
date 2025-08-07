import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import Stars from '../components/Backgrounds/Stars';
import Modal from '../components/Modal';
import CaseStudyDetail from './CaseStudyDetail';
import { projectsData } from '../data/projects'; // Import the new data

const PortfolioContainer = styled.div`
  padding: 6rem 2rem;
  background-color: #0A192F;
  color: #E0E0E0;
  min-height: 100vh;
  position: relative;
  z-index: 1;

  /* Elegant thin scrollbar */
  scrollbar-width: thin; /* Firefox */
  scrollbar-color: #64FFDA #0A192F; /* Firefox */
  
  /* Webkit browsers (Chrome, Safari, Edge) */
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(16, 34, 64, 0.3);
    border-radius: 2px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #64FFDA;
    border-radius: 2px;
    transition: background 0.3s ease;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #4fd1c7;
  }
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
  margin-bottom: 2rem;
  color: #64FFDA;
  position: relative;
  z-index: 10;
`;

const FilterBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  position: relative;
  z-index: 10;
`;

const FilterButton = styled.button`
  background-color: ${({ active }) => (active ? '#64FFDA' : 'transparent')};
  color: ${({ active }) => (active ? '#0A192F' : '#64FFDA')};
  border: 1px solid #64FFDA;
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background-color: #64FFDA;
    color: #0A192F;
  }
`;

const ProjectGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 10;

  /* Responsive 3-column layout */
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  /* Hide scrollbars */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: #112240;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  border: 1px solid transparent;
  cursor: pointer;
  height: 250px; /* Fixed height for all cards */

  /* Hide scrollbars */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  &:hover {
    .project-image {
      transform: scale(1.05);
      filter: brightness(0.7);
    }
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
    border: 1px solid #64FFDA;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease-in-out;
`;

const ProjectTitleOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%);
  padding: 2rem 1rem 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #FFFFFF;
`;

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const Portfolio = ({ id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projectsData;
    }
    return projectsData.filter(p => p.service === activeFilter);
  }, [activeFilter]);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const filterOptions = ['All', 'AI & Machine Learning', 'Web Applications', 'Desktop Applications'];

  return (
    <PortfolioContainer id={id}>
      <BackgroundCanvas>
        <Stars />
      </BackgroundCanvas>
      <Title>My Portfolio</Title>

      <FilterBar>
        {filterOptions.map(filter => (
          <FilterButton
            key={filter}
            active={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </FilterButton>
        ))}
      </FilterBar>

      <ProjectGrid
        key={activeFilter} /* Add key to force re-render */
        variants={gridVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            variants={cardVariants}
            onClick={() => handleCardClick(project)}
            layoutId={project.id}
          >
            <ProjectImage className="project-image" src={project.images[0]} alt={project.title} />
            <ProjectTitleOverlay>{project.title}</ProjectTitleOverlay>
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