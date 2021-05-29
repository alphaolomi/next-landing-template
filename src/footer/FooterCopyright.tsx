import React from 'react';

import { Config } from '../utils/Config';

const FooterCopyright = () => (
  <div className="footer-copyright">
    &copy; Copyright
    {' '}
    {new Date().getFullYear()}
    {' '}
    {Config.title}
    . Powered with
    {' '}
    <span role="img" aria-label="Love">
      ♥
    </span>
    {' '}
    by
    {' '}
    <a href="https://alphaolomi.com">Alpha Olomi</a>
    <style jsx>
      {`
        .footer-copyright :global(a) {
          @apply text-primary-500;
        }

        .footer-copyright :global(a:hover) {
          @apply underline;
        }
      `}
    </style>
  </div>
);

export { FooterCopyright };
