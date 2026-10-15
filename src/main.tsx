
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import "@/shared/styles/global.css";
import React from 'react';
import { Providers } from '@/provider';

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
)
