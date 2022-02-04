import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from './Navigation';

export default function Header() {
  const [offCanvas, setOffCanvas] = useState(false);

  //Handle click event on navbar Toggle button
  const navButtonClickHandler = () => {
      setOffCanvas(!offCanvas);
  }

  return (
      <SiteHeader>
          <nav>
                <Link href="/">
                    <Image
                        src="/images/apptech-logo-white.png"
                        alt="AppTech Corp."
                        width={200}
                        height={50}
                    />
                </Link>
                <button className="navBarToggle" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas" onClick={navButtonClickHandler}>
                    <div className="navToggleButton">
                        <span className={offCanvas ? "bar1Active" : "bar1"}></span>
                        <span className={offCanvas ? "bar2Active" : "bar2"}></span>
                        <span className={offCanvas ? "bar3Active" : "bar3"}></span>
                    </div>
                </button>
                
                <div className={offCanvas ? "offCanvasActive" : "offCanvasInactive"}>
                    <Navigation />
                </div>
            </nav>
      </SiteHeader>
  );
}

//Header styling
const SiteHeader = styled.header`
    position: fixed;    
    width: 100%;
    height: 60px;
    background: ${props => props.theme.colors.primary};
    margin: 0;
    z-index: 500;
    
    nav {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
    }

    .navBarToggle {
        display: none;
    }
    
    @media screen and (max-width: 805px) {
        .navBarToggle {
            display: block;
            background: none;
            border: none;
            width: 35px;
            height: 35px;
            cursor: pointer;
        }
    
        .navToggleButton {
            width: 35px;
            height: 35px;
        }
    
        .navToggleButton span {
            display: block;
            width: 35px;
            height: 5px;
            background-color: #fff;
            margin: 6px 0;
            transition: 0.4s;
            border-radius: 5px;
          }

        .bar1Active {
            -webkit-transform: rotate(-45deg) translate(-9px, 6px) ;
            transform: rotate(-45deg) translate(-9px, 6px) ;
        }
      
        .bar2Active {
            opacity: 0;
        }
      
        .bar3Active {
            -webkit-transform: rotate(45deg) translate(-8px, -8px) ;
            transform: rotate(45deg) translate(-8px, -8px) ;
        }
    
        .offCanvasInactive {
            position: fixed;
            left: -250px;
            top: 0;
            bottom: 0;
            width: 250px;
            height: 100vh;
            background: #2b28a1;
            color: white;
            transition: all 0.3s ease-in-out;
            padding-top: 70px;
        }
    
        .offCanvasActive {
            position: fixed;
            left: 0;
            top: 0;
            bottom: 0;
            width: 250px;
            height: 100vh;
            background: #2b28a1;
            color: white;
            transition: all 0.3s ease-in-out;
            padding-top: 70px;
            z-index: 50;
        }
    }
    
`;
