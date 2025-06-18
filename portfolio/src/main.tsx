import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router";
import './index.css'
import HomePage from './HomePage/HomePage.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <Routes>
          <Route path={"/"} element={<HomePage/>}/>
      </Routes>
  </BrowserRouter>
)
