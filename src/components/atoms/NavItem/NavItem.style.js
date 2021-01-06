import styled from 'styled-components';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

const ACTIVE_CLASS_NAME = '.active';

export const StyledLink = styled(Link)``;

export const Li = styled.li`
  position: relative;
  margin-bottom: 1rem;
  overflow: hidden;
`;

export const Mask = styled(motion.span)`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Text = styled.span`
  position: relative;
  display: block;
  padding: 0.5rem;
  font-family: ${({ theme }) => theme.font.family.secondary};
  font-size: ${({ theme }) => theme.font.size.body.m};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};

  ::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 0.8rem;
    background-color: ${({ theme, colorContext }) => theme.colors[colorContext]};
    opacity: 0.6;
    transform-origin: left;
    z-index: -1;
    transform: scaleX(0);
    transition: transform 400ms cubic-bezier(1, 0, 0, 1) 0ms;
  }

  ${StyledLink}${ACTIVE_CLASS_NAME} &::before {
    transform: scale(1);
  }

  :hover ::before {
    transform: scale(1);
  }
`;