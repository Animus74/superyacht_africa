import { Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './layout/SiteLayout'
import { AnnualReporting } from './pages/about/AnnualReporting'
import { EconomicImpactStudy } from './pages/about/EconomicImpactStudy'
import { FoundingHistory } from './pages/about/FoundingHistory'
import { Mandate } from './pages/about/Mandate'
import { Contact } from './pages/Contact'
import { CountriesIndex } from './pages/countries/CountriesIndex'
import { CountryPage } from './pages/countries/CountryPage'
import { CrewPractical } from './pages/countries/CrewPractical'
import { InsuranceBrief } from './pages/countries/InsuranceBrief'
import { RefitHaulOut } from './pages/countries/RefitHaulOut'
import { SafetySecurityMedical } from './pages/countries/SafetySecurityMedical'
import { Directory } from './pages/Directory'
import { Home } from './pages/Home'
import { CodeOfConduct } from './pages/membership/CodeOfConduct'
import { MembershipOverview } from './pages/membership/MembershipOverview'
import { MembershipTierPage } from './pages/membership/MembershipTierPage'
import { GovernmentEnquiries } from './pages/news/GovernmentEnquiries'
import { NewsIndex } from './pages/news/NewsIndex'
import { PressMedia } from './pages/news/PressMedia'
import { NotFound } from './pages/NotFound'
import { Privacy } from './pages/Privacy'
import { CaseStudies } from './pages/route/CaseStudies'
import { RouteOverview } from './pages/route/RouteOverview'
import { WeatherSeasons } from './pages/route/WeatherSeasons'
import { Terms } from './pages/Terms'

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/route" element={<RouteOverview />} />
        <Route path="/route/weather-seasons" element={<WeatherSeasons />} />
        <Route path="/route/case-studies" element={<CaseStudies />} />
        <Route path="/countries" element={<CountriesIndex />} />
        <Route path="/countries/refit-haul-out" element={<RefitHaulOut />} />
        <Route path="/countries/safety-security-medical" element={<SafetySecurityMedical />} />
        <Route
          path="/countries/safety-security-medical/insurance-underwriting-brief"
          element={<InsuranceBrief />}
        />
        <Route path="/countries/crew-practical-information" element={<CrewPractical />} />
        <Route path="/countries/:slug" element={<CountryPage />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/membership" element={<MembershipOverview />} />
        <Route path="/membership/code-of-conduct" element={<CodeOfConduct />} />
        <Route path="/membership/:slug" element={<MembershipTierPage />} />
        <Route path="/about" element={<Navigate to="/about/mandate" replace />} />
        <Route path="/about/mandate" element={<Mandate />} />
        <Route path="/about/founding-history-independence" element={<FoundingHistory />} />
        <Route path="/about/economic-impact-study" element={<EconomicImpactStudy />} />
        <Route path="/about/annual-reporting" element={<AnnualReporting />} />
        <Route path="/news" element={<NewsIndex />} />
        <Route path="/news/press-media" element={<PressMedia />} />
        <Route
          path="/news/government-partnership-enquiries"
          element={<GovernmentEnquiries />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
