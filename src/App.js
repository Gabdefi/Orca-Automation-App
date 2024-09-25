//Configurar o Botão de Conexão da Carteira

// src/App.js

import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import LiquidityPools from './LiquidityPools';
import './App.css'; // Se estiver usando estilos personalizados

function App() {
  return (
    <div>
      <h1>Automatização de Pools de Liquidez Orca</h1>
      <WalletMultiButton />
      <LiquidityPools />
    </div>
  );
}

export default App;
