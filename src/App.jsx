import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/main/main';

import Jaka from "./pages/jaka_robot/jaka";
import Zuseries from "./pages/jaka_robot/zuseries";
import AllInOne from "./pages/jaka_robot/allinone";
import ProSeries from "./pages/jaka_robot/proSeries";
import MiniCobo from "./pages/jaka_robot/miniCobo";

import IntegratedSolution from "./pages/integrated_solution/integratedSolution";
import CompanyInfo from "./pages/company_info/companyInfo";
import News from "./pages/news/news";
import Contact from "./pages/contact/contact";
import Error from "./pages/error/error";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />

        {/* JAKA series */}
        <Route path='/jaka' element={<Jaka />} />
        <Route path='/jaka/zuseries' element={<Zuseries />} />
        <Route path='/jaka/allinone' element={<AllInOne />} />
        <Route path='/jaka/proseries' element={<ProSeries />} />
        <Route path='/jaka/minicobo' element={<MiniCobo />} />

        {/* Integrated solution */}
        <Route path='/integrated' element={<IntegratedSolution />} />
        <Route path='/integrated/:id' element={<IntegratedSolution />} />

        {/* Company info */}
        <Route path='/company' element={<CompanyInfo />} />
        <Route path='/company/:id' element={<CompanyInfo />} />

        {/* News */}
        <Route path='/news' element={<News />} />

        {/* Contact */}
        <Route path='/contact' element={<Contact />} />

        {/* 404 */}
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;