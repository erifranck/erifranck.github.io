import React from 'react';
import styled from 'styled-components';
import { LinkProps, Link } from '../components/link';

interface Props {
      links: LinkProps[];
}
const Wrapper = styled.header`
      display: flex;
      justify-content: space-between;
      padding: 0px 140px;
      height: 86px;
      position: relative;
      z-index: 1;
      .logo {
            width: 123px;
      }
      .link-container {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
      }
`;

export const Header = (props: Props) => (
      <Wrapper>
            <img
                  className="logo"
                  src={require('../images/erifranck.svg')}
                  alt="logo"
            />
            <div className="link-container">
                  {props.links.map((item, index) => (
                        <Link
                              key={index}
                              label={item.label}
                              url={item.url}
                        />
                  ))}
            </div>
      </Wrapper>
);
