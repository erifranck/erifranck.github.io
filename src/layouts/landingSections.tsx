import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Avatar from 'react-toolbox/lib/avatar';
import {socialNetworks} from '../utils/social';
import { SocialButton } from '../components/socialButton';

interface Props {
      id: string;
      children: ReactNode;
}

export const Wrapper = styled.div`
      position: relative;
      overflow: hidden;
      height: 700px;
      margin-bottom: 100px;
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
            backdrop-filter: blur(5px);
      }
      .divisor {
            position: absolute;
            bottom: -1px;
            left: 0;
            z-index: 1;
            width: 100%;
      }
      .container {
            position: relative;
            width: 100%;
            height: 500px;
            z-index: 2;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
      }
      .avatar {
            width: 193px;
            height: 193px;
      }
      .icon-container {
            margin: 15px 0px;
            ul {
                  li {
                       display: inline-block; 
                       margin: 0 10px;
                  }
            }
      }
      .name {
            font-size: 24px;
            color: #fff;
            margin: 10px 0px;
      }
      .description {
            color: #48E5C2;
      }
      .patron-button {
            img {
                  width: 200px;
            }
      }
      .button-container {
            margin-top: 30px;
            display: flex;
            justify-content: space-between;
            width: 460px;
      }
`
export const LandingSection = (props: Props) => (
      <Wrapper>
            <div className="overlay"/>
            <img
                  className="cover"
                  src={require('../images/cover_page.jpg')}
                  alt=""
            />
            {props.children}
            <div className="container">
                  <div>
                        <Avatar className="avatar">
                              <img
                                    src={require('../images/New_Erifranck.png')}
                                    alt=""
                              />
                        </Avatar>
                        <p className="name">Erifranck Nuñez</p>
                        <div className="description">
                              <span>I'm extremely passionate about web development</span><br/>
                              <span>and illustrations design in all it's forms</span>
                        </div>
                        <div className="icon-container">
                              <ul>
                                    {
                                          socialNetworks.map((item) => (
                                                <li>
                                                      <SocialButton social={item.social} link={item.link} />
                                                </li>
                                          ))
                                    }
                              </ul>
                        </div>
                        <div className="button-container">
                              <iframe src="https://open.spotify.com/embed/playlist/3WcopoMxj4WoAM2Slv53Dc" width="200" height="48" frameBorder="0" allowTransparency={true} allow="encrypted-media"></iframe>
                              <a className="patron-button" href="https://www.patreon.com/bePatron?u=6665320" data-patreon-widget-type="become-patron-button">
                                    <img src={require('../images/become_a_patron.png')} alt=""/>
                              </a>
                        </div>
                  </div>
            </div>
            <img
                  className="divisor"
                  src={require('../images/section_divider.svg')}
                  alt=""
            />
      </Wrapper>
)