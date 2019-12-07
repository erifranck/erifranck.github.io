import React from 'react';
import styled from 'styled-components';

export interface LinkProps {
      url: string;
      label: string;
}

const LinkWrapper = styled.a`
      color: white;
      margin-right: 10px;
      text-decoration: none;
`;

export const Link = (props: LinkProps) => (
      <LinkWrapper href={props.url} >
            {props.label}
      </LinkWrapper>
);