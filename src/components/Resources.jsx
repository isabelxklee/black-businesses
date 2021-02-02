import React from 'react'
import Wrapper from './styled-components/Wrapper.jsx'
import ResourceContainer from './styled-components/ResourceContainer.jsx'
import TextLink from './styled-components/TextLink.jsx'
import ResourceTile from './styled-components/ResourceTile.jsx'
import H1 from './styled-components/H1.jsx'
import H3 from './styled-components/H3.jsx'

const Resources = () => {
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

  return (
    <Wrapper>
      <H1>Resources to help you get started: </H1>
      <ResourceContainer>
        {resources.map((resource) => (
          <ResourceTile key={resource.id}>
            <H3>{resource.title}</H3>
            <p>{resource.description}</p>
            <TextLink href={resource.url} target="noreferrer_blank">
              Visit site
            </TextLink>
          </ResourceTile>
        ))}
      </ResourceContainer>
    </Wrapper>
  )
}

export default Resources
