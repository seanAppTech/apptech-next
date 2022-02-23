import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import SocialMedia from './SocialMedia';

export default function Footer() {
  return (
      <SiteFooter>
          <div className="wrapper">
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
            <div className="footerGrid">
                <div className='contact'>
                    <p>5876 Owens Ave. Ste 100, Carlsbad, CA 92008</p>
                    <a>(760) 707-5959</a>
                    <a>info@apptechcorp.com</a>
                    <div id="socialMedia">
                        <SocialMedia />
                    </div>
                </div>
                
                <div className='menu'>
                    <ul>
                        <li><Link href="/#products-and-services">Products & Services</Link></li>
                        <li><Link href="/company/about">Company</Link></li>
                        <li><Link href="/investor-relations">Investor Relations</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className='menu'>
                    <ul>
                        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
                    </ul>
                </div>
            </div>
            
          </div>
          <div className='copyright'>
              <p>AppTech is a trademark of AppTech Payments Corp. and may be registered in the U.S and other countries. AppTech Payments Corp. is a registered ISO of Wells Fargo Bank N.A., Concord CA © 2006 - 2022 AppTech Payments Corp. All Rights Reserved.</p>
          </div>
      </SiteFooter>
  );
}

//Styles
const SiteFooter = styled.footer`
    
    width: 100%;
    margin: 0;
    background: ${props => props.theme.colors.dark};
    color: #fff;
    font-weight: 300;
    line-height: 25px;
    
    padding: 0;
    z-index: 10;

    a {
        color: #fff;
    }

    a:hover {
        color: ${props => props.theme.colors.hover};
    }

    .wrapper {
        max-width: 1200px;
        margin: 0 auto 50px;
        padding: 100px 20px 20px;
    }

    .footerGrid {
        display: grid;
        width: 100%;
        grid-template-columns: 1fr 1fr 1fr;
        margin: 0;
        padding: 0;
    }

    @media screen and (max-width: ${props => props.theme.breakpoint.laptop}) {
        .footerGrid {
            display: block;
        }
        .wrapper {
            margin: 0 auto 10px;
            padding: 20px;
        }
    }

    .contact {
        margin: 40px auto;
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }

    .social {
        margin: 35px 0 20px;
    }

    .menu {
        margin: 40px auto;
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }

    .menu ul {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        list-style: none;
    }

    .copyright {
        background: #000;
        margin: 0;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${props => props.theme.colors.grey};
    }
    .copyright p {
        max-width: 1100px;
        font-size: 14px;
        font-weight: 300;
    }
`;