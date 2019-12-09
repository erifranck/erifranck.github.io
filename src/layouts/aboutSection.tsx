import React from 'react';
import styled from 'styled-components';
import { ScoreSlide } from '../components/scoreSlide';
import {Grid, Row, Col} from 'react-flexbox-grid';

const Wrapper = styled.div`
      .container {
            padding: 20px;
      }
      .profile-image {
            position: relative;
            width: 500px;
            height: 585px;
            .square {
                  position: absolute;
                  width: 200px;
                  height: 200px;
                  background:#48E5C2 0% 0% no-repeat padding-box;
                  &.button-corner {
                        right: 0px;
                        bottom: 0px;
                  }
                  &.top-corner {
                        top: 0px;
                        left: 0px;
                  }
            }
            img {
                  position: absolute;
                  top: 20px;
                  left: 20px;
                  z-index: 1;
            }
      }
`;
export const AboutSection = () => (
      <Wrapper>
            <Grid>
                  <Row>
                        <Col md={5} >
                              <div className="profile-image">
                                    <div className="square top-corner" />
                                    <img src={require('../images/erifranckPhoto.png')} alt=""/>
                                    <div className="square button-corner" />
                              </div>
                        </Col>
                        <Col mdOffset={1} md={6} >
                              <div>
                                    <span>Hello There</span>
                                    <p>I'M ERIFRANCK NUÑEZ AND THIS IS MY STORY</p>
                                    <p>Developer with skills jjto make illustration, i love to combine my habilities to teach about development</p>
                                    <ScoreSlide label="web" score={100} color="#253C78" />
                                    <ScoreSlide score={70} label="Illustration" />
                              </div>
                        </Col>
                  </Row> 
            </Grid>
      </Wrapper>
);