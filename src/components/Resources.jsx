import React from 'react'
import Wrapper from './styled-components/Wrapper.jsx'
import ResourceContainer from './styled-components/ResourceContainer.jsx'
import TextLink from './styled-components/TextLink.jsx'
import ResourceTile from './styled-components/ResourceTile.jsx'
import H2 from './styled-components/H2.jsx'
import H3 from './styled-components/H3.jsx'
import SecondaryP from './styled-components/SecondaryP.jsx'

const Resources = () => {
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

  return (
    <Wrapper>
      <H2>Resources to help you get started: </H2>
      <ResourceContainer>
        {resources.map((resource) => (
          <ResourceTile key={resource.id}>
            <H3>{resource.title}</H3>
            <SecondaryP>{resource.description}</SecondaryP>
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
