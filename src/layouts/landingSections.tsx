import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
      id: string;
      children: ReactNode;
}

export const Wrapper = styled.div`
      position: relative;
      overflow: hidden;
      height: 800px;
      .cover {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
      }
      .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            background-color: rgba(0, 0, 0, 0.5);
      }
`;

export const LandingSection = (props: Props) => (
      <Wrapper>
            <div className="overlay" />
            <img
                  className="cover"
                  src={require('../images/cover_page.jpg')}
                  alt=""
            />
            {props.children}
      </Wrapper>
);