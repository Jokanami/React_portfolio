import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import HomePage from './HomePage/HomePage.tsx'
import ContactsPage from './ContactsPage/ContactsPage.tsx'
import ProjectsPage from './ProjectsPage/ProjectsPage.tsx'
import SchoolPage from './SchoolPage/SchoolPage.tsx'
import SkillsPage from './SkillsPage/SkillsPage.tsx'
import PageLayout from "./PageLayout/PageLayout.tsx";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <Routes>
          <Route element={<PageLayout/>}>
              <Route path={"/"} element={<HomePage/>}/>
              <Route path={"/contacts"} element={<ContactsPage/>}/>
              <Route path={"/projects"} element={<ProjectsPage/>}/>
              <Route path={"/learnings"} element={<SchoolPage/>}/>
              <Route path={"/skills"} element={<SkillsPage/>}/>





          </Route>


      </Routes>
  </BrowserRouter>
)
