import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
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

  /* h1 {
    font-size: 60px;
    margin: 0;
  } */

  h2 {
    font-size: 40px;
  }

  h3 {
    font-size: 30px;
    margin: 16px 0;
  }

  p {
    margin: 16px 0;
  }

  a {
    text-decoration: none;
    color: #CE1E20;
  }

  .business-tile-image {
    object-fit: cover;
    width: 284px;
    height: 284px;
    border-radius: 10px;
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
    top: 6%;
    /* position: absolute; */
    width: 330px;
  }

  img.tile.left {
    left: 0;
  }

  img.tile.right {
    right: 0;
    position: absolute;
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

  div.hero-2 {
    background-color: #FCDFDD;
    text-align: center;
  }

  div.hero-text {
    margin: 100px;
  }

  div.map-header {
    text-align: center;
    padding: 20px 0;
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
    padding: 16px;
    font-size: 16px;
    border-radius: 5px;
    background-color: #CE1E20;
    color: white;
    z-index: 2;
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

  div.mapboxgl-marker {
    z-index: 0;
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

  @media (max-width: 700px) {
    h1 {
      font-size: 2.4rem;
      margin: 16px 0;
    }

    h3 {
      font-size: 20px;
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

    .business-tile-image {
      width: 100%;
    }
  }
`

export default GlobalStyle
