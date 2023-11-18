import NotFound from './pages/NotFound';
import Login from './pages/login';

const router = {
  login: Login,
  '404': NotFound
} as const;

export type RouterPath = keyof typeof router;

export default router;
