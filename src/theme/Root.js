/**
 * src/theme/Root.js
 *
 * HomeNavbar is now handled by the swizzled Navbar (src/theme/Navbar/index.js).
 * Root only injects HomeFooter on non-home pages.
 */

import React from 'react';
import { useLocation } from '@docusaurus/router';
import HomeFooter from '@site/src/components/HomeFooter';

export default function Root({ children }) {
  const { pathname } = useLocation();

  const isHome =
    pathname === '/' ||
    pathname === '/xp-landing-page/' ||
    pathname === '/xp-landing-page/';

  return (
    <>
      {children}
      {!isHome && <HomeFooter />}
    </>
  );
}