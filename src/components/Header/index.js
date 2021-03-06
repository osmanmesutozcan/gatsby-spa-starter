import React from 'react'
import Link from 'gatsby-link'
import { Layout, Menu } from 'antd';
import styled from 'styled-components';

const GatsbyLink = styled(Link)`
  font-size: 2em;
  color: white;
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  font-size: 2em;
  color: white;
  text-decoration: none;
  margin-left: 20px;
`;

const StyledHeader = styled(Layout.Header)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

class Navigation extends React.Component {
  constructor() {
    super();

    this.state = { current: '1' }
  }

  render () {
    return (
      <StyledHeader>
        <GatsbyLink to="/" >Gatsby</GatsbyLink>

        <span>
          <StyledLink to="/blog" >Blog</StyledLink>
          <StyledLink to="/dashboard" >Dashboard</StyledLink>
        </span>
      </StyledHeader>
    )
  }
}

export default Navigation
