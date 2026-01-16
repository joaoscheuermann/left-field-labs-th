import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { Page, Navigation } from '@org/design-system';
import { Home as HomeIcon, ChartPie, ScanQr, Chat, User } from '@org/icons';

export function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const routes = {
    home: { id: 'home', path: '/', element: <Home /> },
    chart: { id: 'chart', path: '/chart', element: <Home /> }, // Placeholder
    scan: { id: 'scan', path: '/scan', element: <Home /> }, // Placeholder
    chat: { id: 'chat', path: '/chat', element: <Home /> }, // Placeholder
    user: { id: 'user', path: '/about', element: <About /> },
  };

  const currentActivePage =
    Object.values(routes).find((route) => route.path === location.pathname)
      ?.id || 'home';

  return (
    <Page.Root>
      <Page.Body>
        <Routes>
          {Object.values(routes).map((route) => (
            <Route key={route.id} path={route.path} element={route.element} />
          ))}
          <Route path="*" element={<Home />} />
        </Routes>
      </Page.Body>
      <Page.Navigation>
        <Navigation.Root className="shadow-2xl">
          <Navigation.Item
            active={currentActivePage === 'home'}
            onClick={() => navigate(routes.home.path)}
          >
            <HomeIcon width={24} height={24} />
          </Navigation.Item>

          <Navigation.Item
            active={currentActivePage === 'chart'}
            onClick={() => navigate(routes.chart.path)}
          >
            <ChartPie width={24} height={24} />
          </Navigation.Item>

          <Navigation.ActionItem onClick={() => navigate(routes.scan.path)}>
            <ScanQr width={24} height={24} />
          </Navigation.ActionItem>

          <Navigation.Item
            active={currentActivePage === 'chat'}
            onClick={() => navigate(routes.chat.path)}
          >
            <Chat width={24} height={24} />
          </Navigation.Item>

          <Navigation.Item
            active={currentActivePage === 'user'}
            onClick={() => navigate(routes.user.path)}
          >
            <User width={24} height={24} />
          </Navigation.Item>
        </Navigation.Root>
      </Page.Navigation>
    </Page.Root>
  );
}

export default App;
