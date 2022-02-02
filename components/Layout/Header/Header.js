import React, { useState } from 'react';
import Link from 'next/link';
import Navigation from './Navigation';

export default function Header() {
  const [offCanvas, setOffCanvas] = useState(false);

  //Handle click event on navbar Toggle button
  const navButtonClickHandler = () => {
      setOffCanvas(!offCanvas);
  }

  return (
      <header>
          <nav>
                <Link href="/">
                    AppTech Corp.
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
      </header>
  );
}
