import React, {useState} from 'react';
import Link from 'next/link';


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
      <div>
          <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <button className="dropdownToggle" id="productsDropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={productsClickHandler}>
                    Products & Services <i className={productsDrop ? "arrow up" : "arrow down"}></i>
                </button>
                <div className={productsDrop ? "dropdownMenuActive" : "dropdownMenu"} aria-labelledby="productsDropdown">
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
                <div className={companyDrop ? "dropdownMenuActive" : "dropdownMenu"} aria-labelledby="companyDropdown">
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
      </div>
  );
}
