import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GRF_main from "./ui/GRF_main";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GRF_main />
  </StrictMode>,
)
