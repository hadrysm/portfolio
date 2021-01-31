import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 4rem;
  height: 2rem;
  margin: 0 auto;
`;

export const Circle = styled(motion.span)`
  display: block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.text};
`;
