import React from 'react'

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
    <div className="resources-page">
      <h1>Resources to help you get started: </h1>
      <div className="resource-container">
        {resources.map((resource) => (
          <div className="resource" key={resource.id}>
            <h3>{resource.title}</h3>
            <p className="description">{resource.description}</p>
            <a href={resource.url} target="noreferrer_blank" className="site-link">
              Visit site
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Resources
