import React from 'react'
import {Container, Tile} from './styles'
import {Wrapper} from '../styles'
import {H2, H3, P2} from '../../styles'
import {ExternalLink} from '../../components/Links'

// creating this resources component will be the homework exercise
// students will create their own list of resources and render them
const resources = [
  {
    id: 1,
    title: 'Black-Owned Brooklyn',
    description: 'Optional brief description of what the website is goes here.',
    url: 'https://www.blackownedbrooklyn.com',
  },
  {
    id: 2,
    title: 'Trippin World Guides',
    description: 'Optional brief description of what the website is goes here.',
    url: 'https://trippin.world/guides',
  },
  {
    id: 3,
    title: 'Testing',
    description: 'Optional brief description of what the website is goes here.',
    url: 'https://trippin.world/guides',
  },
  {
    id: 4,
    title: 'Something else',
    description: 'Optional brief description of what the website is goes here.',
    url: 'https://trippin.world/guides',
  },
  {
    id: 5,
    title: 'This is another test',
    description: 'Optional brief description of what the website is goes here.',
    url: 'https://trippin.world/guides',
  },
]

const Resources = () => (
  <Wrapper>
    <H2>Resources to help you get started: </H2>
    <Container>
      {resources.map((resource) => (
        <Tile key={resource.id}>
          <H3>{resource.title}</H3>
          <P2>{resource.description}</P2>
          <ExternalLink href={resource.url}>Visit site</ExternalLink>
        </Tile>
      ))}
    </Container>
  </Wrapper>
)

export default Resources
