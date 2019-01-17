import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  margin: 0 auto auto;
  width: 100%;
  max-width: 800px;
  padding: 3em 1.5em 2em;
  flex-grow: 1;
  position:relative;
  top:-50px;
  margin-left: auto;
  margin-right: auto;
  border-radius:5px;
  background: rgb(255, 255, 255) none repeat scroll 0% 0%;
  &:before {
    content: '';
    position: absolute;
    top: 15px;
    left: -5px;
    z-index: -1;
    display: block;
    width: 20px;
    height: 200px;
    background: rgba(39, 44, 49, 0.15);
    filter: blur(5px);
    transform: rotate(-5deg);
  }

 &:after {
    content: '';
    position: absolute;
    top: 15px;
    right: -5px;
    z-index: -1;
    display: block;
    width: 20px;
    height: 200px;
    background: rgba(39, 44, 49, 0.15);
    filter: blur(5px);
    transform: rotate(5deg);
  }
`

const PostContainer = props => {
    return <Wrapper>{props.children}</Wrapper>
}

export default PostContainer