import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GRF_main from "./GRF/GRF_main";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GRF_main />
  </StrictMode>,
)
