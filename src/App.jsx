
import './App.css'

import ThemePrimaryColor from './components/ThemePrimaryColor';
import Settings from '@/components/settings';
import RtlLayout from './components/RtlLayout';
import Router from '@/routes';
import ThemeConfig from '@/theme';
import GlobalStyles from '@/theme/globalStyles';
import ScrollToTop from '@/components/ScrollToTop';
function App() {

  return (
    <>
     <ThemeConfig>
     <ThemePrimaryColor>
     <RtlLayout>
     <GlobalStyles />
      <Router />
      <Settings />
      <ScrollToTop />
      </RtlLayout>
     </ThemePrimaryColor>
     </ThemeConfig>
    </>
  )
}

export default App
