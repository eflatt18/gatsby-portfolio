import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Wrapper = styled.a`
  ${tw`shadow-lg relative no-underline rounded-lg px-8 py-8 md:py-24 text-black`};
  background: ${props => props.bg};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }
`

const Text = styled.div`
  ${tw`opacity-100 font-sans text-sm md:text-base`};
  
`

const Title = styled.div`
  ${tw`text-black uppercase text-4xl md:text-3xl xl:text-5xl tracking-wide font-sans pt-8`};
  
`

const ProjectCard = ({ title, link, children, bg }) => (
  <Wrapper href={link} target="_self"  rel="noopener noreferrer" bg={bg}>
    <Text>{children}</Text>
    <Title>{title}</Title>
  </Wrapper>
)

export default ProjectCard

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  bg: PropTypes.string.isRequired,
}
