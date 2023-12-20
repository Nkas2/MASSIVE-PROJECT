import React from "react";
import ReactDOM from "react-dom/client";
import "./app.css";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import { Provider } from "react-redux";
import store from "./store/store.js";
// page and layout
import RootLayout from "./layout/Root/index.jsx";
import { Home } from "./page/Homepage/Home.jsx";
import { ThemeProvider } from "@emotion/react";
import { JadwalDonor } from "./page/JadwalDonor/JadwalDonor.jsx";
import { StokDarah } from "./page/StokDarah/StokDarah.jsx";
import { AuthLayout } from "./layout/Auth/AuthLayout.jsx";
import { Login } from "./page/Login.jsx";
import { SignUp } from "./page/SignUp.jsx";
import { LupaPassword } from "./page/LupaPassword.jsx";
import { DetailEvent } from "./page/JadwalDonor/DetailEvent.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DetailStokDarah } from "./page/StokDarah/DetailStokDarah.jsx";
import MainLay from "./layout/MainLay.jsx";
import "leaflet/dist/leaflet.css";
import { Profile } from "./page/Profile/Profile.jsx";
import { EditProfile } from "./page/Profile/EditProfile.jsx";
import { EditPassword } from "./page/Profile/EditPassword.jsx";

// import { HomeAuthLayout } from "./layout/Auth/HomeAuthLayout.jsx";
// import { Profile } from "./page/Profile/Profile.jsx";
// import { EditProfile } from "./page/Profile/EditProfile.jsx";
// import { EditPassword } from "./page/Profile/EditPassword.jsx";
// import { HomeAuth } from "./page/Homepage/HomeAuth.jsx";

// import { CssBaseline } from '@mui/material';

export const router = createBrowserRouter([
  {
    element: <MainLay />,
    children: [
      {
        element: <RootLayout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/jadwalDonor",
            element: <JadwalDonor />,
          },
          {
            path: "/jadwalDonor/:pmiId",
            element: <DetailEvent />,
          },
          {
            path: "/stokDarah",
            element: <StokDarah />,
          },
          {
            path: "stokDarah/:pmiId",
            element: <DetailStokDarah />,
          },
          {
            path: "/profile",
            element: <Profile />,
          },
          {
            path: "/editProfile",
            element: <EditProfile />,
          },
          {
            path: "/editPassword",
            element: <EditPassword />,
          },
        ],
      },
      {
        path: "/",

        element: <AuthLayout />,
        children: [
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/signup",
            element: <SignUp />,
          },
          {
            path: "/lupaPassword",
            element: <LupaPassword />,
          },
        ],
      },
    ],
  },
  // {
  //   path: '/',
  //   element: <HomeAuthLayout />,
  //   children: [
  //     {
  //       path: '/auth',
  //       element: <HomeAuth/>,
  //     },
  //     {
  //       path: '/auth/jadwalDonor',
  //       element: <JadwalDonor/>,
  //     },
  //     {
  //       path: '/auth/stokDarah',
  //       element: <StokDarah/>,
  //     },
  //     {
  //       path: '/profile',
  //       element: <Profile />,
  //     },
  //     {
  //       path: '/editProfile',
  //       element: <EditProfile/>,
  //     },
  // {
  //   path: '/editPassword',
  //   element: <EditPassword/>,
  // },
  //   ],
  // },
]);

const theme = createTheme({});
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          {/* <CssBaseline /> */}
          <RouterProvider router={router} />
        </Provider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
