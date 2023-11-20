import NotFound from './pages/NotFound';
import Login from './pages/login';
import Profile from './pages/profile';
import SignUp from './pages/signup';

const router = {
  '/login': Login,
  '/404': NotFound,
  '/profile': Profile,
  '/signup': SignUp
} as const;

export type RouterPath = keyof typeof router;

export default router;
