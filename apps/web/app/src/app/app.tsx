import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { Page, Navigation } from '@org/design-system';
import { Home as HomeIcon, ChartPie, ScanQr, Chat, User } from '@org/icons';

export function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveId = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path === '/about') return 'user';
    if (path === '/chart') return 'chart';
    if (path === '/chat') return 'chat';
    return 'scan';
  };

  const activeId = getActiveId();

  const handleNavClick = (id: string) => {
    switch (id) {
      case 'home':
        navigate('/');
        break;
      case 'user':
        navigate('/about');
        break;
      case 'scan':
        // navigate('/scan');
        break;
      case 'chart':
        // navigate('/chart');
        break;
      case 'chat':
        // navigate('/chat');
        break;
    }
  };

  return (
    <Page.Root>
      <Page.Body>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Page.Body>
      <Page.Navigation>
        <Navigation.Root className="shadow-2xl">
          <Navigation.Item
            active={activeId === 'home'}
            onClick={() => handleNavClick('home')}
          >
            <HomeIcon width={24} height={24} />
          </Navigation.Item>

          <Navigation.Item
            active={activeId === 'chart'}
            onClick={() => handleNavClick('chart')}
          >
            <ChartPie width={24} height={24} />
          </Navigation.Item>

          <Navigation.ActionItem onClick={() => handleNavClick('scan')}>
            <ScanQr width={24} height={24} />
          </Navigation.ActionItem>

          <Navigation.Item
            active={activeId === 'chat'}
            onClick={() => handleNavClick('chat')}
          >
            <Chat width={24} height={24} />
          </Navigation.Item>

          <Navigation.Item
            active={activeId === 'user'}
            onClick={() => handleNavClick('user')}
          >
            <User width={24} height={24} />
          </Navigation.Item>
        </Navigation.Root>
      </Page.Navigation>
    </Page.Root>
  );
}

export default App;
