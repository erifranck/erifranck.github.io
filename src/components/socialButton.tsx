import React from 'react';

interface Props {
      social: string;
      link: string;
}
const socialIcon = {
      youtube: require('../images/011-youtube.svg'),
      facebook: require('../images/021-facebook.svg'),
      twitter: require('../images/043-twitter.svg'),
      linkedin: require('../images/045-linkedin.svg'),
      instagram: require('../images/025-instagram.svg'),
      github: require('../images/038-github.svg'),
};
export const SocialButton = (props) => (
      <a href={props.link} target="_blank">
            <img 
                  src={socialIcon[props.social]}
                  alt={props.social}
            />
      </a>
);