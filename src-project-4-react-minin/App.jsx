

import Header from './components/Header/Header';
import TeachingSection from './components/TeachingSection';
import DifferencesSection from './components/DifferencesSection';
import IntroSection from './components/IntroSection';
import TabsSection from './components/TabsSection';
import FeedbackSection from './components/FeedbackSection';
import EffectSection from './components/EffectSection';

import { useState } from 'react';

export default function App() {
  const [tab, setTab] = useState('effect');
  const [visible, setVisible] = useState(true);

  // setTimeout(() => {
  //   setVisible(false)
  // }, 3000)

  return (
    <>
      {visible && <Header />}
      <main>
        <TabsSection active={tab} onChange={(current) => setTab(current)} />

        {tab === 'main' && (
          <>
            <IntroSection />
            <TeachingSection />
            <DifferencesSection />
          </>
        )}

        {tab === 'feedback' && (
          <>
            <FeedbackSection />
          </>
        )
        }

        {tab === 'effect' && <EffectSection />}
      </main>
    </>
  );
}
