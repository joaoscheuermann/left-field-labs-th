import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Wip from './pages/Wip';
import { Page, Navigation } from '@org/design-system';
import { Home as HomeIcon, ChartPie, ScanQr, Chat, User } from '@org/icons';

export function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const routes = [
    {
      id: 'home',
      path: '/',
      element: <Home />,
      icon: HomeIcon,
      hideInNav: false,
    },
    {
      id: 'transactions',
      path: '/transactions',
      element: <Home />,
      icon: ChartPie,
      hideInNav: false,
    },
    {
      id: 'scan',
      path: '/scan',
      element: <Wip />,
      icon: ScanQr,
      isAction: true,
      hideInNav: false,
    },
    {
      id: 'chat',
      path: '/chat',
      element: <Wip />,
      icon: Chat,
      hideInNav: false,
    },
    {
      id: 'user',
      path: '/about',
      element: <Wip />,
      icon: User,
      hideInNav: false,
    },
    {
      id: 'wip',
      path: '/wip',
      element: <Wip />,
      icon: undefined,
      hideInNav: true,
    },
  ];

  const isRouteActive = (routePath: string) => {
    if (routePath === '/' || routePath === '') {
      return location.pathname === '/';
    }
    if (location.pathname === routePath) {
      return true;
    }
    return location.pathname.startsWith(`${routePath}/`);
  };

  return (
    <Page.Root>
      <Page.Body>
        <Routes>
          {routes.map((route) => (
            <Route key={route.id} path={route.path} element={route.element} />
          ))}
          <Route path="*" element={<Home />} />
        </Routes>
      </Page.Body>
      <Page.Navigation sticky>
        <Navigation.Root className="shadow-2xl">
          {routes
            .filter((route) => !route.hideInNav)
            .map((route) => {
              const Icon = route.icon;

              if (route.isAction) {
                return (
                  <Navigation.ActionItem
                    key={route.id}
                    onClick={() => navigate(route.path)}
                  >
                    {Icon && <Icon width={24} height={24} />}
                  </Navigation.ActionItem>
                );
              }

              return (
                <Navigation.Item
                  key={route.id}
                  active={isRouteActive(route.path)}
                  onClick={() => navigate(route.path)}
                >
                  {Icon && <Icon width={24} height={24} />}
                </Navigation.Item>
              );
            })}
        </Navigation.Root>
      </Page.Navigation>
    </Page.Root>
  );
}

export default App;
