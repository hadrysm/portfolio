import React from 'react';
import PropTypes from 'prop-types';

import { TechnologyItem } from 'components/atoms/TechnologyItem/TechnologyItem';
import { Animated } from 'animations';

import { useObserverAnimation } from 'hooks/useObserverAnimation';

import { List } from './TechnologyList.style';

const TechnologyList = ({ technologies, isProject = false }) => {
  const [containerRef, controls] = useObserverAnimation();

  return (
    <List isProject={isProject} ref={containerRef}>
      {technologies.map(({ id, name }, index) => (
        <li key={id}>
          <Animated.FromDirection
            duration={0.6}
            from="bottom"
            delay={0.2}
            custom={index}
            animate={controls}
          >
            <TechnologyItem text={name} />
          </Animated.FromDirection>
        </li>
      ))}
    </List>
  );
};

TechnologyList.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.object).isRequired,
  isProject: PropTypes.bool,
};

export { TechnologyList };
