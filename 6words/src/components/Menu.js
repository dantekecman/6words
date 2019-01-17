import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Headroom from 'react-headroom'

const Header = styled.header`
  background: none;
  width: 100%;
  padding: 1.3em 0;
  background-color: rgba(250, 250, 250, 0.95);
  box-shadow: 0px 1px 8px #ccc;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;
  font-size: 18px;
  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    display: inline-block;
    margin-left: 1em;
    &:first-child {
      position: relative;
      margin: 0;
      flex-basis: 100%;
    }
  }

  a {
    text-decoration: none;
    color: #888;
    font-weight: 600;
    transition: all 0.2s;
    &:hover {
      color: #666;
    }
  }
`

const activeLinkStyle = {
  color: '#666',
  background:
    'linear-gradient(to bottom, transparent 62%, #c1e0f7 0) center center/0% 75% no-repeat',
  backgroundSize: '100% 100%',
}

const Menu = () => {
  return (
    <Headroom>
      <Header>
        <Nav>
          <ul>
            <li>
              <Link to="/" activeStyle={activeLinkStyle}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about/" activeStyle={activeLinkStyle}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact/" activeStyle={activeLinkStyle}>
                Contact
              </Link>
            </li>
          </ul>
        </Nav>
      </Header>
    </Headroom>
  )
}

export default Menu
