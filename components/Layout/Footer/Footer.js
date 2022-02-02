import React from 'react';
import Link from 'next/link';
import SocialMedia from './SocialMedia';

export default function Footer() {
  return (
      <footer>
          <div className="wrapper">
            <div className="logo">
                <Link href="/">AppTech Logo</Link>
            </div>
            <div id="footerGrid">
                <div>
                    <p>5876 Owens Ave. Ste 100, Carlsbad, CA 92008</p>
                    <a>(760) 707-5959</a>
                    <a>info@apptechcorp.com</a>
                    <div id="socialMedia">
                        <SocialMedia />
                    </div>
                </div>
                
                <div>
                    <ul>
                        <li><Link href="/#products-and-services">Products & Services</Link></li>
                        <li><Link href="/company/about">Company</Link></li>
                        <li><Link href="/investor-relations">Investor Relations</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
                    </ul>
                </div>
            </div>
            
          </div>
          <div id="copyright">
              <p>AppTech is a trademark of AppTech Payments Corp. and may be registered in the U.S and other countries. AppTech Payments Corp. is a registered ISO of Wells Fargo Bank N.A., Concord CA © 2006 - 2022 AppTech Payments Corp. All Rights Reserved.</p>
          </div>
      </footer>
  );
}

