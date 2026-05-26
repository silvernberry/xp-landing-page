/**
 * src/theme/Root.js
 *
 * Wraps every page. Injects HomeNavbar + HomeFooter on non-home pages.
 * The default Docusaurus Navbar is kept intact (NOT swizzled) to avoid
 * the clientHeight crash — it's hidden via CSS instead.
 */

import React from 'react';
import { useLocation } from '@docusaurus/router';
import HomeNavbar from '@site/src/components/HomeNavbar';
import HomeFooter from '@site/src/components/HomeFooter';

export default function Root({ children }) {
  const { pathname } = useLocation();

  const isHome =
    pathname === '/' ||
    pathname === '/temp_m3s/pallet-xp/' ||
    pathname === '/temp_m3s/pallet-xp';

  return (
    <>
      {!isHome && <HomeNavbar />}
      {children}
      {!isHome && <HomeFooter />}
    </>
  );
}