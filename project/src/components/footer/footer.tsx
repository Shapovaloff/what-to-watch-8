import Logo from '../logo/logo';
import React from 'react';

function Footer(): JSX.Element {
  return (
    <footer className="page-footer">
      <Logo team="light" />

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default Footer;
