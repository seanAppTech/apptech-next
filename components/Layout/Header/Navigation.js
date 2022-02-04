import React, {useState} from 'react';
import Link from 'next/link';
import styled from 'styled-components';


export default function Navigation() {
    const [companyDrop, setCompanyDrop] = useState(false);
    const [productsDrop, setProductsDrop] = useState(false);
    console.log(productsDrop)
    console.log(companyDrop)

    //Click handlers for the dropdown menus
    const productsClickHandler = () => {
        setProductsDrop(!productsDrop);
        setCompanyDrop(false);
    }

    const companyClickHandler = () => {
        setCompanyDrop(!companyDrop);
        setProductsDrop(false);
    }
    
  return (
      <Div>
          <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <button className="dropdownToggle" id="productsDropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={productsClickHandler}>
                    Products & Services <i className={productsDrop ? "arrow up" : "arrow down"}></i>
                </button>
                <div className={productsDrop ? "dropdownMenu active" : "dropdownMenu"} aria-labelledby="productsDropdown">
                    <Link  
                        href="/products-and-services/omni-channel-payments"
                        className="dropLinks"
                        >Omni-Channel Payments
                    </Link>
                    <Link  
                        href="/products-and-services/digital-banking"
                        className="dropLinks"
                        >Digital Banking</Link>
                </div>
            </li>
            <li>
                <button className="dropdownToggle" id="companyDropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={companyClickHandler}>
                    Company <i className={companyDrop ? "arrow up" : "arrow down"}></i>
                </button>
                <div className={companyDrop ? "dropdownMenu active" : "dropdownMenu"} aria-labelledby="companyDropdown">
                    <Link  
                        href="/company/about"
                        className="dropLinks"
                        >About Us</Link>
                    <Link  
                        href="/company/about/#intellectual-property"
                        className="dropLinks"
                        >Intellectual Property</Link>
                    <Link  
                        href="/company/about/#meet-the-team"
                        className="dropLinks"
                        >Meet the Team</Link>
                    <Link  
                        href="/news"
                        className="dropLinks"
                        >News</Link>
                </div>
            </li>
            <li>  
                <Link href="/investor-relations">Investor Relations</Link>
            </li>
            <li>
                <div className='contactButton'>
                    <Link href="/contact">Contact</Link>
                </div>
            </li> 
        </ul>
      </Div>
  );
}

const Div = styled.div`

    a {
        color: #fff;
    }

    a:hover {
        color: ${props => props.theme.colors.grey};
    }

    ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        list-style: none;

        li {
            margin: 15px 20px;
        }

        @media screen and (max-width: ${props => props.theme.breakpoint.laptop}) {
            flex-direction: column;
            width: 100%;

            li {
                width: 320px;
                border-top: 1px solid ${props => props.theme.colors.midnight};
                margin: 0;
                padding: 12px;
                box-sizing: border-box;
            }
        }
    }

    .dropdownToggle {
        background: none;
        color: white;
        outline: none;
        border: none;
        font-size: 1rem;
        margin: 0;
        padding: 0;
        padding-left: 0;
    }
    
    .dropdownToggle:hover, .dropdownToggle:active {
        color: #ccc;
        cursor: pointer;
    }

    .arrow {
        border: solid #fff;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 3px;
    }
    
    .dropdownToggle:hover .arrow, .dropdownToggle:active .arrow {
        border: solid #ccc;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 3px;
    }
    
    .up {
        transform: rotate(-135deg);
        -webkit-transform: rotate(-135deg);
        margin: 0 0 0 5px;
        transition: all 0.2s ease;
    }
      
    .down {
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        margin: 0 0 3px 5px;
        transition: all 0.2s ease;
    }

    .dropdownMenu.active {
        height: auto;
        padding: 10px 0 5px 0;
        transition: all ${props => props.theme.animationTimings.medium};
        a {
            margin: 10px 0;
        }
    }

    .dropdownMenu {
        position: absolute;
        display: flex;
        flex-direction: column;
        width: 250px;
        height: 0;
        overflow: hidden;
        transition: all ${props => props.theme.animationTimings.medium};
    }

    @media screen and (max-width: ${props => props.theme.breakpoint.laptop}) {
        .dropdownMenu,
        .dropdownMenu.active {
            position: static;
        }
    }

    @media screen and (min-width: ${props => props.theme.breakpoint.laptop}) {
        .dropdownMenu.active {
            background: #fff;
            padding: 20px;
            border-radius: 10px 10px;
            height: auto;
            margin-top: 25px;
            box-shadow: -4px 4px 10px rgba(0, 0, 255, .2);

            a {
                color: ${props => props.theme.colors.dark}
            }

            a:hover {
                color: ${props => props.theme.colors.hover};
            }
        }
    }

    .contactButton {
        padding-top: 5px;
    }
    
    .contactButton a {
        background: #fff;
        color: #2b28a1;
        padding: 10px 20px;
        border-radius: 5px 5px;
        border: 1px solid #2b28a1;
        transition: all 0.2s ease-in-out;
        margin: 0;
        text-align: center;
    }
    
    .contactButton a:hover {
        background: #2b28a1;
        color: #fff;
        border: solid 1px #fff;
        padding: 10px 20px;
        border-radius: 5px 5px;
    }
    
    @media screen and (max-width: ${props => props.theme.breakpoint.laptop}) {
        .contactButton a {
            display: block;
        }
    }
    
    @media screen and (min-width: ${props => props.theme.breakpoint.laptop}) {
        a.dropLinks {
            color: #333;
        }
        a.dropLinks:hover {
            color: #aaa;
        }
    
        .contactButton {
            padding-top: 0;
            margin: 0;
        }
    }
`;