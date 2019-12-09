import React from 'react';
import styled from 'styled-components';

interface SlideProps {
      score: number;
      className?: string;
      label?: string;
      color?: string;
}

const Wrapper = styled.div<SlideProps>`
      .slide {
            width: 100%;
            height: 4px;
            background: grey;
            margin-bottom: 5px;
      }
      .score {
            width: ${(props) => props.score}%;
            height: 100%;
            background: ${(props) => props.color || 'red'};
      }
      .label-container {
            display: flex;
            justify-content: space-between;
            margin-bottom: 5px;
      }
`;
export const ScoreSlide = (props: SlideProps) => (
      <Wrapper className={props.className} score={props.score} color={props.color} >
            <div className="label-container">
                  <span> {props.label} </span>
                  <span> {props.score}% </span>
            </div>
            <div className="slide">
                  <div className="score" />
            </div>
      </Wrapper>
);