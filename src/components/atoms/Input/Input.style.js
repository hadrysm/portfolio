import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { Text } from 'components/atoms/Text/Text';

export const Wrapper = styled(motion.div)`
  width: 100%;
  margin-bottom: 2rem;
`;

export const StyledInput = styled(motion.input)`
  width: 100%;
  padding: 1rem 2rem 1rem 2rem;
  background-color: ${({ theme }) => theme.grey};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.grey200};
  outline: none;
  position: relative;

  ::placeholder {
    letter-spacing: 1px;
    text-transform: capitalize;
  }

  :focus {
    border: 1px solid ${({ theme }) => theme.main};
  }

  ${({ as }) =>
    as === 'textarea' &&
    css`
      min-height: 20rem;
      resize: none;
    `}

  ${({ icon }) =>
    icon &&
    css`
      background-image: url(${icon});
      background-size: 15px;
      background-position: 1.5rem 50%;
      background-repeat: no-repeat;
      padding: 1rem 2rem 1rem 4rem;
    `}
`;

export const Label = styled(motion.label)`
  font-size: ${({ theme }) => theme.font.size.body.s};
  font-family: ${({ theme }) => theme.font.family.secondary};
  display: block;
  margin-bottom: 0.5rem;

  ::first-letter {
    text-transform: uppercase;
  }
`;

export const StyledText = styled(Text)`
  margin-top: 1rem;
`;
