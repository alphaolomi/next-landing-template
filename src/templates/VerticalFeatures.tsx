import React from 'react';

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    id="solutions"
    title="Solutions"
    description="Short list of solutions we provide."
  >
    <VerticalFeatureRow
      title="MbioSoft"
      description="Create an experience that stays forever. MbioSoft is easy to set-up, complete end-to-end race, and marathon management platform that helps marathon organizers deliver great experiences to the runners.."
      image="/assets/images/finish_line.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Tax Evaluation Engine"
      description="A tax engine can help your company scale up confidently, reduce risk, and improve accuracy on tax calculations for VAT, GST, sales and use, and so much more.."
      image="/assets/images/calculator.svg"
      imageAlt="Tax Evaluation Engine Image"
      reverse
    />

  </Section>
);

export { VerticalFeatures };
