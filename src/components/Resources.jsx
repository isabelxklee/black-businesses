import React from 'react'
import Wrapper from './styled-components/Wrapper.jsx'
import ResourceContainer from './styled-components/ResourceContainer.jsx'
import TextLink from './styled-components/TextLink.jsx'

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
  ]

  return (
    <Wrapper>
      <h1>Resources to help you get started: </h1>
      <ResourceContainer>
        {resources.map((resource) => (
          <div className="resource" key={resource.id}>
            <h3>{resource.title}</h3>
            <p className="description">{resource.description}</p>
            <TextLink href={resource.url} target="noreferrer_blank">
              Visit site
            </TextLink>
          </div>
        ))}
      </ResourceContainer>
    </Wrapper>
  )
}

export default Resources
