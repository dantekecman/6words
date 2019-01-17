import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Post = styled.li`
  position: relative;
  margin: 0 0 1em 0;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px 0px;
  border-radius: 8px;
  transition: all 0.3s;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 49%')};
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 32%')};
  }
  &:hover {
    transform: translateY(-3px);
    transition: all 0.3s;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 12px 0px;
  }
  a {
    display: flex;
    background: none;
    flex-flow: column;
    height: 100%;
    width: 100%;
    color: ${props => props.theme.colors.base};
    text-decoration: none;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
      @media screen and (min-width: ${props => props.theme.responsive.small}) {
        padding-bottom: ${props => (props.featured ? '40%' : '60%')};
      }
    }
  }
  img {
    filter: brightness(0.9);
  }
`

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
  text-transform: capitalize;
  margin: 1rem 1rem 0.5rem 1rem;
  transition: all 0.4s ease;
  ${Post}:hover & {
    color: #007acc !important;
    transition: all 0.4s ease;
    background-size: 100% 100%;
  }
`

const Date = styled.h3`
  margin: 0 1rem 1.5rem 1rem;
  color: gray;
`

const Excerpt = styled.p`
  margin: 0 1rem 1rem 1rem;
  line-height: 1.6;
  &:hover {
    color: black;
  }
`

const Card = ({ slug, heroImage, title, publishDate, body, ...props }) => {
  return (
    <Post featured={props.featured}>
      <Link to={`/${slug}/`}>
        <Img fluid={heroImage.fluid} backgroundColor={'#eeeeee'} />
        <Title>{title}</Title>
        <Date>{publishDate}</Date>
        <Excerpt
          dangerouslySetInnerHTML={{
            __html: body.childMarkdownRemark.excerpt,
          }}
        />
      </Link>
    </Post>
  )
}

export default Card
