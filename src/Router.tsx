import React, { useState } from 'react';
import LoginPage from './pages/Login/index';
import Dashboard from './pages/Dashboard';

type Page = 'login' | 'dashboard';

const Router: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('login');

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage navigateTo={navigateTo} />;
      case 'dashboard':
        return <Dashboard navigateTo={navigateTo} />;
      default:
        return null;
    }
  };

  return <>{renderPage()}</>;
};

export default Router;