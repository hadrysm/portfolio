import React from 'react';
import PropTypes from 'prop-types';

import Content from 'components/atoms/Content/Content';
import Headline from 'components/atoms/Headline/Headline';
import Image from 'components/atoms/Image/Image';
import AboutMeText from 'components/molecules/AboutMeText/AboutMeText';

import { Grid, InnerWrapper, ImgWrapper } from './About.style';

const About = ({ aboutImage, aboutContent }) => (
  <Content as="section">
    <Grid>
      <InnerWrapper>
        <Headline text="about me" primary />
        <AboutMeText content={aboutContent} />
      </InnerWrapper>
      <InnerWrapper>
        <ImgWrapper>
          <Image fluid={aboutImage} />
        </ImgWrapper>
      </InnerWrapper>
    </Grid>
  </Content>
);

About.propTypes = {
  aboutImage: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.arrayOf(PropTypes.shape({}))])
    .isRequired,
  aboutContent: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default About;
