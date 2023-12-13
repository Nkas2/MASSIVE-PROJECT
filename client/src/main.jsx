import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.css';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './store/store.js';
// page and layout
import RootLayout from './layout/Root/index.jsx';
import { Home } from './page/Homepage/Home.jsx';
import { ThemeProvider } from '@emotion/react';
import { JadwalDonor } from './page/JadwalDonor/JadwalDonor.jsx';
import { StokDarah } from './page/StokDarah/StokDarah.jsx';
import { DetailStokDarah } from './page/StokDarah/DetailStokDarah.jsx';
import { AuthLayout } from './layout/Auth/AuthLayout.jsx';
import { Login } from './page/Login.jsx';
import { SignUp } from './page/SignUp.jsx';
import { LupaPassword } from './page/LupaPassword.jsx';
import { HomeAuthLayout} from './layout/Auth/HomeAuthLayout.jsx';
import { Profile } from './page/Profile/Profile.jsx';
import { EditProfile } from './page/Profile/EditProfile.jsx'
import { EditPassword } from './page/Profile/EditPassword.jsx';
import { HomeAuth } from './page/Homepage/HomeAuth.jsx'
// import { CssBaseline } from '@mui/material';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/jadwalDonor',
        element: <JadwalDonor />,
      },
      {
        path: '/stokDarah',
        element: <StokDarah />,
      },
      {
        path: '/detailStokDarah',
        element: <DetailStokDarah />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/lupaPassword',
        element: <LupaPassword />,
      },
    ],
  },
  {
    path: '/',
    element: <HomeAuthLayout />,
    children: [
      {
        path: '/auth',
        element: <HomeAuth/>,
      },
      {
        path: '/auth/jadwalDonor',
        element: <JadwalDonor/>,
      },
      {
        path: '/auth/stokDarah',
        element: <StokDarah/>,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/editProfile',
        element: <EditProfile/>,
      },
      {
        path: '/editPassword',
        element: <EditPassword/>,
      },
    ],
  },
]);

const theme = createTheme({});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        {/* <CssBaseline /> */}
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
