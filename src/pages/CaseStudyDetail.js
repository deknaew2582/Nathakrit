import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const DetailContainer = styled(motion.div)`
  color: #E0E0E0;
  max-width: 900px;
  width: 100%;
`;

const ProjectTitle = styled.h1`
  font-size: 2.5rem;
  color: #64FFDA;
  margin-bottom: 2rem;
  text-align: center;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const LeftColumn = styled.div`
  flex: 2;
`;

const RightColumn = styled.div`
  flex: 1;
  background-color: #0A192F;
  padding: 1.5rem;
  border-radius: 8px;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #64FFDA;
  margin-bottom: 1rem;
  border-bottom: 1px solid #64FFDA;
  padding-bottom: 0.5rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
`;

const InfoItem = styled.li`
  margin-bottom: 0.5rem;
  strong {
    color: #64FFDA;
  }
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  background-color: #233554;
  color: #64FFDA;
  padding: 0.3rem 0.7rem;
  border-radius: 5px;
  font-size: 0.9rem;
`;

const LiveDemoButton = styled.a`
  display: inline-block;
  background-color: #64FFDA;
  color: #0A192F;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  margin-top: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #4CAF9D;
    color: #FFFFFF;
  }

  &.disabled {
    background-color: #233554;
    color: #8892B0;
    cursor: not-allowed;
  }
`;

const MediaGallery = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const MediaItem = styled.div`
    width: 100%;
    
    img, video {
        width: 100%;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }
    
    video {
        max-height: 600px;
        object-fit: contain;
    }
`;

const CaseStudyDetail = ({ project }) => {
  if (!project) return null;

  // Helper function to render different media types
  const renderMedia = (mediaSrc, index, title) => {
    if (!mediaSrc) return null;

    const extension = mediaSrc.split('.').pop().toLowerCase();

    if (extension === 'mp4' || extension === 'webm' || extension === 'mov') {
      return (
        <video
          key={`${mediaSrc}-${index}`}
          controls
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={mediaSrc} type={`video/${extension === 'mov' ? 'quicktime' : extension}`} />
          Your browser does not support the video tag.
        </video>
      );
    } else {
      // For images and GIFs
      return <img src={mediaSrc} alt={`${title} media ${index + 1}`} />;
    }
  };

  return (
    <DetailContainer>
      <ProjectTitle>{project.title}</ProjectTitle>
      <MainContent>
        <LeftColumn>
          <Section>
            <SectionTitle>The Challenge</SectionTitle>
            <Paragraph>{project.challenge}</Paragraph>
          </Section>
          <Section>
            <SectionTitle>My Solution</SectionTitle>
            <Paragraph>{project.solution}</Paragraph>
          </Section>
          <Section>
            <SectionTitle>The Results</SectionTitle>
            <Paragraph>{project.results}</Paragraph>
          </Section>
        </LeftColumn>
        <RightColumn>
          <Section>
            <SectionTitle>Info</SectionTitle>
            <InfoList>
              <InfoItem><strong>Client:</strong> {project.client}</InfoItem>
              <InfoItem><strong>Year:</strong> {project.year}</InfoItem>
              <InfoItem><strong>Service:</strong> {project.service}</InfoItem>
            </InfoList>
          </Section>
          <Section>
            <SectionTitle>Technologies Used</SectionTitle>
            <TechList>
              {project.technologies.map(tech => <TechTag key={tech}>{tech}</TechTag>)}
            </TechList>
          </Section>
          <LiveDemoButton
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={!project.liveDemoUrl ? 'disabled' : ''}
            onClick={(e) => !project.liveDemoUrl && e.preventDefault()}
          >
            {project.liveDemoUrl ? 'Live Demo' : 'Demo Unavailable'}
          </LiveDemoButton>
        </RightColumn>
      </MainContent>
      <MediaGallery>
        {project.images.map((mediaSrc, index) => (
          <MediaItem key={index}>
            {renderMedia(mediaSrc, index, project.title)}
          </MediaItem>
        ))}
      </MediaGallery>
    </DetailContainer>
  );
};

export default CaseStudyDetail;