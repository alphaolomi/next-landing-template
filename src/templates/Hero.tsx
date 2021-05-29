import React from 'react';

import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/Jasiri-Inc">
            <a>GitHub</a>
          </Link>
        </li>       
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="py-64">
      <HeroOneButton
        title={(
          <>
            {'Technology for Innovators'}
        
          </>
        )}
        description="Inspiring Tech Needs for Business."
        button={(
          <Link href="#solutions">
            <a>
              <Button xl>Learn More</Button>
            </a>
          </Link>
        )}
      />
    </Section>
  </Background>
);

export { Hero };
