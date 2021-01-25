import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  .map-container {
    height: 636px;
    width: 100%;
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
    font-size: 60px;
    margin: 0;
  }

  h2 {
    font-size: 40px;
  }

  h3 {
    font-size: 1.4rem;
  }

  h3.business-tile-name {
    margin: 20px 0 8px 0
  }

  p {
    margin: 1rem 0;
  }

  .business-tile-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 100px;
    margin: 100px;
  }

  .business-tile {
    text-align: left;
  }

  .business-tile-image {
    object-fit: cover;
    width: 284px;
    height: 284px;
    border-radius: 10px;
  }

  footer {
    bottom: 0;
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

  img.hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  img.map-pin {
    position: relative;
    top: 5px;
  }

  div.grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  div.hero-section {
    margin-top: 32px;
  }

  div.hero-2, div.footer-message {
    background-color: #FCDFDD;
    text-align: center;
  }

  div.footer-message {
    padding: 84px 300px;
    margin: 80px 0;
  }

  div.hero-text {
    margin: 100px;
  }

  div.map-header {
    text-align: center;
    padding: 20px 0;
  }

  div.resources-page {
    padding: 80px 100px;
    background-color: #FCDFDD;
  }

  div.resource-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 85%;
    margin-top: 80px;
  }

  img.business-page {
    object-fit: cover;
    width: 100%;
    border-radius: 0.4rem;
  }

  .business-page {
    display: flex;
  }

  h1.business-page {
    margin: 0;
  }

  .column {
    flex: 50%;
    padding: 2rem;
  }

  .business-tile-info {
    padding: 16px 0;
  }

  .mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip {
    border-top-color: #CE1E20;
    margin-bottom: 2.4rem;
  }

  .mapboxgl-ctrl-group:not(:empty) {
    right: 0;
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

  a.site-link {
    text-decoration: underline;
    font-weight: 700;
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

  .mapboxgl-ctrl.mapboxgl-ctrl-attrib {
    display: none;
  }

  p.address {
    display: inline-block;
    margin: 0 10px;
  }

  p.description {
    width: 85%;
  }

  @media (max-width: 700px) {
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

    .mapboxgl-ctrl-group:not(:empty) {
      display: none;
    }

    .business-page {
      display: block;
      padding: 2rem 0 4rem 0;
    }

    .column {
      padding: 0;
    }

    .business-tile-container {
      grid-template-columns: 1fr;
    } 

    .tile-info {
      padding: 1rem;
    }
  }
`

export default GlobalStyle
