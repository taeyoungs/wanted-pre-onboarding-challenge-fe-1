import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import AuthLayout from 'routes/AuthLayout';
import Layout from 'routes/Layout';
import Login from 'routes/Auth/Login';
import New from 'routes/Auth/New';
import Home from 'routes/Home';
import Detail from 'routes/Detail';

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<Home />} loader={Home.loader(queryClient)}>
          <Route path=":id" element={<Detail />} loader={Detail.lodaer(queryClient)} />
        </Route>
      </Route>
      <Route path="auth">
        <Route path="login" element={<Login />} action={Login.action} />
        <Route path="new" element={<New />} action={New.action} />
      </Route>
    </Route>,
  ),
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
