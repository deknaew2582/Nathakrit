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

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 0.75rem;
  }

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

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const Disclaimer = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  padding: 1.5rem;
  background-color: rgba(17, 34, 64, 0.6);
  border: 1px solid #64FFDA;
  border-radius: 8px;
  color: #E0E0E0;
  position: relative;
  z-index: 10;

  @media (max-width: 768px) {
    margin: 0 auto 2rem;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    margin: 0 auto 1.5rem;
    padding: 0.75rem;
  }
  
  p {
    margin: 0;
    font-size: 1rem;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 0.9rem;
      line-height: 1.5;
    }

    @media (max-width: 480px) {
      font-size: 0.85rem;
      line-height: 1.4;
    }
  }
  
  .demo-note {
    color: #64FFDA;
    font-weight: bold;
  }
`;

const FilterBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  position: relative;
  z-index: 10;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.75rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
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
  font-size: 0.9rem;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 0.4rem 1rem;
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    padding: 0.35rem 0.75rem;
    font-size: 0.8rem;
  }

  &:hover {
    background-color: #64FFDA;
    color: #0A192F;
  }
`;

const ProjectGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
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

  @media (max-width: 768px) {
    height: 220px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }

  /* Hide scrollbars */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  &:hover {
    .project-media img,
    .project-media video {
      transform: scale(1.05);
      filter: brightness(0.7);
    }
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
    border: 1px solid #64FFDA;
  }

  @media (max-width: 768px) {
    &:hover {
      .project-media img,
      .project-media video {
        transform: none;
        filter: none;
      }
    }
  }
`;

const ProjectMedia = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  
  img, video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease-in-out;
  }
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

  @media (max-width: 768px) {
    padding: 1.5rem 0.75rem 0.75rem;
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    padding: 1.25rem 0.5rem 0.5rem;
    font-size: 1.1rem;
    line-height: 1.2;
  }
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

  // Helper function to determine media type and render appropriate element
  const renderProjectMedia = (mediaSrc, title) => {
    if (!mediaSrc) return <img src="/images/placeholder.jpg" alt={title} />;

    const extension = mediaSrc.split('.').pop().toLowerCase();

    if (extension === 'mp4' || extension === 'webm' || extension === 'mov') {
      return (
        <video
          key={mediaSrc}
          autoPlay
          loop
          muted
          playsInline
          onError={(e) => console.log('Video error:', e)}
        >
          <source src={mediaSrc} type={`video/${extension === 'mov' ? 'quicktime' : extension}`} />
          Your browser does not support the video tag.
        </video>
      );
    } else if (extension === 'gif') {
      return <img src={mediaSrc} alt={title} onError={(e) => console.log('GIF error:', e)} />;
    } else {
      // Default to image for jpg, png, etc.
      return <img src={mediaSrc} alt={title} onError={(e) => console.log('Image error:', e)} />;
    }
  };

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

      <Disclaimer>
        <p>
          <span className="demo-note">*Demo Notice:</span> The projects displayed here are demonstration versions and may not reflect the complete functionality of the original implementations. Some projects cannot be shown publicly due to customer privacy requirements and confidentiality agreements. The showcased work represents the core concepts and technical approaches used in real-world applications.
        </p>
      </Disclaimer>

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
            <ProjectMedia className="project-media">
              {renderProjectMedia(project.images[0], project.title)}
            </ProjectMedia>
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