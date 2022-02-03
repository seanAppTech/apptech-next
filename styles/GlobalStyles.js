import { createGlobalStyle} from "styled-components";
import { theme } from './Theme';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');

  body {
    background: #fff;
    color: ${({ theme }) => theme.colors.dark};
    font-family: 'Montserrat', sans-serif;
    transition: all 0.50s linear;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    text-decoration: none;
  }

  h1, h2, h3 {
    font-weight: 700;
  }
  h1 {
    font-size: 50px;
    line-height: 1.2;
  }
  h2 {
    font-size: 40px;
    line-height: 1.3;
  }
  h3 {
    font-size: 30px;
    line-height: 1.33;
  }

  h4, h5, h6 {
    font-weight: 400;
  }
  h4 {
    font-size: 24px;
    line-height: 1.25;
  }
  h5 {
    font-size: 20px;
    line-height: 1.3;
  }
  h6 {
    font-size: 16px;
    line-height: 1.25;
  }

  p, a {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
  }
`;