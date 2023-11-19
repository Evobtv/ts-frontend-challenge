import NotFound from './pages/NotFound';
import Login from './pages/login';
import Profile from './pages/profile';

const router = {
  '/login': Login,
  '/404': NotFound,
  '/profile': Profile
} as const;

export type RouterPath = keyof typeof router;

export default router;
