import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}
import App from './App.jsx'
import Contact from './Contact.jsx'
import Team from './Team.jsx'
import FutureProjects from './FutureProjects.jsx'
import About from './About.jsx'
import EventSpaces from './EventSpaces.jsx'
import EventSpacesInquiry from './EventSpacesInquiry.jsx'
import OutdoorsDetail from './OutdoorsDetail.jsx'
import IndoorsDetail from './IndoorsDetail.jsx'
import WeddingsDetail from './WeddingsDetail.jsx'
import Accommodations from './Accommodations.jsx'
import AccommodationsInquiry from './AccommodationsInquiry.jsx'
import TermsAndConditions from './TermsAndConditions.jsx'
import PrivacyPolicy from './PrivacyPolicy.jsx'
import RefundPolicy from './RefundPolicy.jsx'
import FAQs from './FAQs.jsx'
import TheProperty from './TheProperty.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/future-projects" element={<FutureProjects />} />
        <Route path="/about" element={<About />} />
        <Route path="/event-spaces" element={<EventSpaces />} />
        <Route path="/event-spaces-inquiry" element={<EventSpacesInquiry />} />
        <Route path="/event-spaces/outdoors" element={<OutdoorsDetail />} />
        <Route path="/event-spaces/indoors" element={<IndoorsDetail />} />
        <Route path="/event-spaces/weddings" element={<WeddingsDetail />} />
        <Route path="/accommodations" element={<Accommodations />} />
        <Route path="/accommodations-inquiry" element={<AccommodationsInquiry />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/the-property" element={<TheProperty />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
