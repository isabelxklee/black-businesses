import React from 'react'

const Resources = () => (
  <div className="resources-page">
    <h1>Resources to help you get started: </h1>
    <div className="resource-container">
      <div className="resource">
        <h3>Black-Owned Brooklyn</h3>
        <p className="description">Optional brief description of what the website is goes here.</p>
        <a
          href="https://www.blackownedbrooklyn.com"
          target="noreferrer_blank"
          className="site-link"
        >
          Visit site
        </a>
      </div>

      <div className="resource">
        <h3>Trippin World Guides</h3>
        <p className="description">Optional brief description of what the website is goes here.</p>
        <a href="https://trippin.world/guides" target="noreferrer_blank" className="site-link">
          Visit site
        </a>
      </div>
    </div>
  </div>
)

export default Resources
