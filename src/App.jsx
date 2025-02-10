import { Routes, Route } from 'react-router-dom';
import './App.css';

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

import Main from './pages/main/main';

import Jaka from './pages/jaka_robot/jaka';
import ZuSeries from './pages/jaka_robot/zuSeries';
import AllInOne from './pages/jaka_robot/allInOne';
import ProSeries from './pages/jaka_robot/proSeries';
import MiniCobo from './pages/jaka_robot/miniCobo';
import ZuSeriesPage from './pages/product_detail/zu/zuSeriesPage';
import AllInOneSeriesPage from './pages/product_detail/all_in_one/allInOneSeriesPage';

import AIKiosk from './pages/integrated_solution/ai_kiosk/aiKiosk';
import AMR from './pages/integrated_solution/amr/amr';

import CompanyInfo from './pages/company_info/companyInfo';
import News from './pages/news/news';
import Contact from './pages/contact/contact';
import Error from './pages/error/error';
import ScrollTop from './components/scroll_top/scrollTop';

function App() {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <Routes>
          <Route path='/' element={<Main />} />

          {/* JAKA series */}
          <Route path='/jaka' element={<Jaka />} />
          <Route path='/jaka/zuseries' element={<ZuSeries />} />
          <Route path='/jaka/allinone' element={<AllInOne />} />
          <Route path='/jaka/proseries' element={<ProSeries />} />
          <Route path='/jaka/minicobo' element={<MiniCobo />} />

          {/* Product series */}
          <Route path='/jaka/zuseries/:id' element={<ZuSeriesPage />} />
          <Route path='/jaka/allinone/:id' element={<AllInOneSeriesPage />} />

          {/* Integrated solution */}
          <Route path='/integrated' element={<AIKiosk />} />
          <Route path='/integrated/aikiosk' element={<AIKiosk />} />
          <Route path='/integrated/amr' element={<AMR />} />
          <Route path='/integrated/aikiosk/:id' element={<AIKiosk />} />
          <Route path='/integrated/amr/:id' element={<AMR />} />

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
        <ScrollTop />
      </I18nextProvider>
    </>
  );
}

export default App;
