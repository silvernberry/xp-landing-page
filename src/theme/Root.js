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
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';

export default function Root({ children }) {
  const { pathname } = useLocation();

  const isHome =
    pathname === '/' ||
    pathname === '/silvernberry/xp-landing-page/' ||
    pathname === '/silvernberry/xp-landing-page/';

  return (
    <>
      {!isHome && <HomeNavbar />}
      {children}
      {!isHome && <HomeFooter />}
    </>
  );
}