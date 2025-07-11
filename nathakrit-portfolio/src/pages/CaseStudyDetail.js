import React from 'react';
import styled from 'styled-components';


const CaseStudyContainer = styled.div`
  padding: 4rem 2rem;
  background-color: #0A192F;
  color: #FFFFFF;
  min-height: 100vh;
  max-width: 900px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #64FFDA;
  margin-bottom: 2rem;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #64FFDA;
  margin-top: 3rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const CaseStudyDetail = ({ project }) => {
  // In a real application, you would fetch project details based on projectId
  const projectDetails = {
    title: `Project ${project.id}: ${project.title} Case Study`,
    challenge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    solution: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    result: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    technologies: 'React, Node.js, MongoDB, AWS',
  };

  return (
    <CaseStudyContainer>
      <Title>{projectDetails.title}</Title>

      <SectionTitle>The Challenge</SectionTitle>
      <Paragraph>{projectDetails.challenge}</Paragraph>

      <SectionTitle>The Solution</SectionTitle>
      <Paragraph>{projectDetails.solution}</Paragraph>

      <SectionTitle>The Result</SectionTitle>
      <Paragraph>{projectDetails.result}</Paragraph>

      <SectionTitle>Technologies Used</SectionTitle>
      <Paragraph>{projectDetails.technologies}</Paragraph>
    </CaseStudyContainer>
  );
};

export default CaseStudyDetail;
