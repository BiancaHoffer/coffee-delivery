import { useState } from 'react';

import { HomeContainer } from "./styles";

import { SessionCoffees } from './components/SessionCoffees';
import { SessionBanner } from './components/SessionBanner';
import { AmountCoffee } from '../../components/AmountCoffee';

export function Home() {
  return (
    <HomeContainer>
      <SessionBanner />    
      <SessionCoffees />   
    </HomeContainer>
  );
}