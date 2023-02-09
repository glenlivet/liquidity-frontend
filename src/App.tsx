import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BandL from './components/Bonds/BandL';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <BandL/>
  }
]);

const App: React.FC<unknown> = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
