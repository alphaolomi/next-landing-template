import React from 'react';

import Image from 'next/image';

import { Config } from '../utils/Config';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl ? 'font-semibold text-3xl' : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>

      <Image src="/assets/images/logo.svg" width={50} height={50} alt="Jasiri Logo" />
      {Config.site_name}
    </span>
  );
};

export { Logo };
