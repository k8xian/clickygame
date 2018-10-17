import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inconsolata', monospace;
    margin: -20px 0 0;
    padding: 0;
    color: white;
    background-image: URL('/images/background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
  }

  h1 {
    font-family: 'Audiowide', cursive;
  }

  a {
    color: white;
    text-decoration: none;
  }

  a.footer__link{
      text-align: center;
      margin: auto;
      line-height: 54px;
      display: block;
      cursor: pointer;
      transition-property: color;
      transition-duration: 500ms;
      transition-timing-function: ease-in-out;s
  }

  a.footer__link:hover {
    color: rgba(255,255,255,.8);
}
  li {
    list-style-type: none;
    margin-bottom: 15px;
    font-size: 1.5em;
  }

  ul {
    padding-inline-start: 0px;
  }

  img{
      width: 200px;
  }

  footer {
      height: 54px;
      width: 100%;
      background-color: rgba(0,0,0,.72);
      position: fixed;
      bottom: 0;
  }



  @media screen and (max-width: 750px){
      img {
          width: 150px;
      }
  }
  @media screen and (max-width: 566px){
    img {
        width: 100px;
    }

}
  `

export default GlobalStyle;