import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    margin: 0;
    padding: 0;
    color: #CE1E20;
  }

  body {
    font-family: 'Rubik', sans-serif;
  }

  p.description {
    margin-bottom: 20px;
  }

  div.business-information {
    margin: 20px 0;
  }

  div.full-address {
    margin: 40px 0 20px 0;
  }

  img.tile {
    width: 400px;
    position: absolute;
  }

  img.tile.left {
    left: 0;
  }

  img.tile.right {
    right: 0;
  }

  div.map-header {
    text-align: center;
    padding: 20px 0;
  }

  div.business-page {
    display: grid;
    grid-template-columns: 45% 25% 25%;
    grid-column-gap: 40px;
  }

  .column {
    flex: 50%;
    padding: 2rem;
  }

  .mapboxgl-ctrl-group:not(:empty) {
    right: 5%;
    margin: 16px;
  }

  .mapboxgl-ctrl.mapboxgl-ctrl-attrib {
    display: none;
  }

  .popup {
    margin: 0.4rem 0;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  ul li:last-child {
    border: none;
  }

  @media (max-width: 1000px) {
    div.business-page {
      grid-template-columns: 50% 30% 25%;
      grid-column-gap: 40px;
    }
    
    img.tile {
      left: unset;
      width: 250px;
      top: 7%;
    }
  }

  @media (max-width: 700px) {
    div.business-page {
      grid-template-columns: 1fr;
      grid-column-gap: 40px;
    }

    img.tile {
        left: unset;
        width: 100px;
        top: 9%;
      }
  
    .column {
      padding: 0;
    }
  }
`

export default GlobalStyle
