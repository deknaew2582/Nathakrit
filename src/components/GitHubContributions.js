import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContributionsContainer = styled(motion.div)`
  padding: 4rem 2rem;
  background-color: #0A192F;
  color: #E0E0E0;
  text-align: center;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #64FFDA;
  margin-bottom: 2rem;
`;

const GitHubContributions = ({ username }) => {
  if (!username) {
    return (
      <ContributionsContainer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title>GitHub Contributions</Title>
        <p>Please provide a GitHub username to display contributions.</p>
      </ContributionsContainer>
    );
  }

  return (
    <ContributionsContainer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Title>GitHub Contributions</Title>
      <img
        src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dark`}
        alt={`${username}'s GitHub Contributions`}
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </ContributionsContainer>
  );
};

export default GitHubContributions;
