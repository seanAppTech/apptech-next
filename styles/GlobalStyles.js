import { createGlobalStyle} from "styled-components";
import { theme } from './Theme';

export const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  * {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
  }
  body {
    background: #fff;
    color: ${({ theme }) => theme.colors.dark};
    font-family: 'Montserrat', sans-serif;
    transition: all 0.50s linear;
  }

  main {
    width: 100%;
    padding: 60px 0 0;
  }

  .innerContent {
    width: 100%;
    max-width: ${({ theme }) => theme.breakpoint.laptop};
    margin: auto;
    padding: 10px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    text-decoration: none;
    transition: color ${({ theme }) => theme.animationTimings.fast}
  }

  a:hover {
    color: ${({ theme }) => theme.colors.hover};
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

  p, a, label, span {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
  }

  .btn {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    line-height: 1.15;
    letter-spacing: 1.5px;
    width: 170px;
    height: 60px;
    border: 0.2px solid ${({ theme }) => theme.colors.primary};
    background: #fff;
    color: ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
    transition: ${({ theme }) => theme.animationTimings.fast};
    cursor: pointer;
  }

  .btn:hover {
    color: #fff;
    background: ${({ theme }) => theme.colors.primary};
    border: 0.2px solid #fff;
  }

  .btn.btnLarge {
    width: 230px;
  }

  .btnDark {
    color: #fff;
    background: ${({ theme }) => theme.colors.primary};
    border: 0.2px solid ${({ theme }) => theme.colors.primary};
  }

  .btnDark:hover {
    color: ${({ theme }) => theme.colors.primary};
    background: #fff;
    border: 0.2px solid ${({ theme }) => theme.colors.primary};
  }
`;