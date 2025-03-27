import {ChakraProvider, defaultSystem} from "@chakra-ui/react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
        <QueryClientProvider client={new QueryClient()}>
            <App />
            <ReactQueryDevtools/>
        </QueryClientProvider>
    </ChakraProvider>
  </StrictMode>,
)
