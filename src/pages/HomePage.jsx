

import React, { Fragment, useEffect, useState } from 'react';
import { fetchLanguages } from '../utils/api';
import { Button, Card, Label, Select } from 'flowbite-react';
import { SelectLanguageComponent } from '../components/SelectLanguageComponent';
import { ContainerComponent } from '../components/ContainerComponent';

const HomePage = () => {

  return (
    <div className="bg-[url('/images/background.png')] h-screen w-screen bg-cover bg-no-repeat flex flex-col gap-24 items-center justify-center font-poppins ">
      <h1 className='text-h2 uppercase text-white'>Language Translator</h1>
      <div className="relative flex gap-16">
        <ContainerComponent className={'h-fit'} />
        <Button
          className='uppercase font-[700] bg-[#FF007A] rounded-[5px] absolute top-[300px] left-[300px] z-10 focus:ring-0'>
          Translate</Button>
        <ContainerComponent className='mt-[80px]' disabled={true} />
      </div>
    </div>
  );
}

export default HomePage;



