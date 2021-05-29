import React from 'react';

import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Experience a live customized demostration, get answers to your specific questions"
      subtitle="Request a demo."
      button={(
        <Link href="/contact">
          <a>
            <Button>Get Started</Button>
          </a>
        </Link>
      )}
    />
  </Section>
);

export { Banner };
