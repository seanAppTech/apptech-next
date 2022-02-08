import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from './Navigation';
import Modal from '../../UI/Modal/Modal';

export default function Header() {
  const [offCanvas, setOffCanvas] = useState(false);

  //Handle click event on navbar Toggle button
  const navButtonClickHandler = () => {
      setOffCanvas(!offCanvas);
  }

  return (
      <>
        <SiteHeader>
            <nav>
                    <Link href="/">
                        <a>
                            <Image
                                src="/images/apptech-logo-white.png"
                                alt="AppTech Corp."
                                width={200}
                                height={50}
                            />
                        </a>
                    </Link>
                    <button className="navBarToggle" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas" onClick={navButtonClickHandler}>
                        <div className="navToggleButton">
                            <span className={offCanvas ? "bar1 active" : "bar1"}></span>
                            <span className={offCanvas ? "bar2 active" : "bar2"}></span>
                            <span className={offCanvas ? "bar3 active" : "bar3"}></span>
                        </div>
                    </button>
                    <div className={offCanvas ? "offCanvas active" : "offCanvas"}>
                        <label className='menu'>Menu</label>
                        <Navigation />
                    </div>
                </nav>
        </SiteHeader>
        {offCanvas ? <Modal onClick={navButtonClickHandler} /> : null}
      </>
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
        
        span img {
            cursor: pointer;
        }
    }

    .navBarToggle {
        display: none;
    }

    label.menu {
        display: none;
    }
    
    @media screen and (max-width: ${props => props.theme.breakpoint.laptop}) {
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

        .bar1.active {
            -webkit-transform: rotate(-45deg) translate(-9px, 6px) ;
            transform: rotate(-45deg) translate(-9px, 6px) ;
        }
      
        .bar2.active {
            opacity: 0;
        }
      
        .bar3.active {
            -webkit-transform: rotate(45deg) translate(-8px, -8px) ;
            transform: rotate(45deg) translate(-8px, -8px) ;
        }
    
        .offCanvas {
            position: fixed;
            left: -320px;
            top: 0;
            bottom: 0;
            width: 320px;
            height: 100vh;
            background: ${props => props.theme.colors.primary};
            color: white;
            transition: all 0.3s ease-in-out;
            z-index: 50;
        }
    
        .offCanvas.active {
            left: 0;
        }

        label.menu {
            display: block;
            height: 60px;
            width: 320px;
            padding: 20px 12px;
        }
    }
    
`;
