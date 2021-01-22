import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Calistoga&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap');

  .map-container {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
  }

  body {
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    margin: 0;
    padding: 0;
    color: #CE1E20;
  }

  body, a {
    font-family: 'Rubik', sans-serif;
  }

  h1,
  h2,
  h3,
  p.popup.title,
  a.popup {
    font-family: 'Calistoga', cursive;
  }

  h1 {
    font-size: 3rem;
    margin: 0;
  }

  h3 {
    font-size: 1.4rem;
  }

  p {
    margin: 1rem 0;
  }

  .business-tile-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    margin: 4rem 0;
  }

  .tile-image {
    object-fit: cover;
    width: 100%;
    height: 300px;
    border-radius: 1rem 1rem 0 0;
  }

  div.header-links {
    margin: auto;
    display: flex;
  }

  img.logo {
    width: 200px;
    margin: 0 60px;
  }

  img.tile {
    top: 2%;
    position: absolute;
    width: 300px;
  }

  img.tile.left {
    left: 0;
  }

  img.tile.right {
    right: 0;
  }

  img.business-page {
    object-fit: cover;
    width: 100%;
    border-radius: 0.4rem;
  }

  section.business-page {
    display: flex;
  }

  h1.business-page {
    margin: 0;
  }

  .column {
    flex: 50%;
    padding: 2rem;
  }

  .tile-info {
    padding: 1rem 2rem;
  }

  .category-container {
    display: block;
    margin: 0 0 1.2rem 0;
  }

  .mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip {
    border-top-color: #CE1E20;
    margin-bottom: 2.4rem;
  }

  .mapboxgl-ctrl-group:not(:empty) {
    right: 0;
    bottom: 0;
    position: fixed;
    margin: 1rem;
  }

  .mapboxgl-ctrl.mapboxgl-ctrl-attrib {
    display: none;
  }

  div.mapboxgl-popup-content {
    padding: 2rem;
    font-size: 1rem;
    border-radius: 0.2rem;
    background-color: #CE1E20;
    color: white;
  }

  a {
    text-decoration: none;
    color: #CE1E20;
  }

  a.popup {
    color: white;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s;
  }

  a.popup:hover {
    opacity: 0.5;
  }

  .popup {
    margin: 0.4rem 0;
  }

  ul {
    margin-left: 0;
    padding-left: 0;
  }

  ul li:last-child {
    border: none;
  }

  .mapboxgl-ctrl-group:not(:empty) {
    right: 0;
    bottom: 0;
    position: fixed;
    margin: 1rem;
  }

  .mapboxgl-ctrl.mapboxgl-ctrl-attrib {
    display: none;
  }

  section.address {
    margin: 1rem 0 0.4rem 0;
  }

  p.address {
    margin: 0.2rem 0;
  }

  @media only screen and (max-width: 700px) {
    h1 {
      font-size: 2.4rem;
      margin: 1rem 0;
    }

    h3 {
      font-size: 1.2rem;
    }

    p {
      line-height: 1.4rem;
    }

    .category-container {
      display: block;
      width: auto;
    }

    .mapboxgl-ctrl-group:not(:empty) {
      display: none;
    }

    section.business-page {
      display: block;
      padding: 2rem 0 4rem 0;
    }

    section.column {
      padding: 0;
    }

    section.business-tile-container {
      grid-template-columns: 1fr;
    } 

    .tile-info {
      padding: 1rem;
    }
  }
`

export default GlobalStyle
