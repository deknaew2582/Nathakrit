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

const ImageGallery = styled.div`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
`;

const ProjectImage = styled.img`
    width: 100%;
    border-radius: 8px;
`;

const CaseStudyDetail = ({ project }) => {
  if (!project) return null;

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
      <ImageGallery>
        {project.images.map((img, index) => (
          <ProjectImage key={index} src={img} alt={`${project.title} screenshot ${index + 1}`} />
        ))}
      </ImageGallery>
    </DetailContainer>
  );
};

export default CaseStudyDetail;