import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BandL from './components/bonds/BandL';
import BondHead from './components/worksheets/bandl/BondHead';
import DealComb from './components/worksheets/bandl/DealComb';
import Deal from './components/worksheets/bandl/Deal';
import DealList from './components/worksheets/bandl/DealList';
import DealRow from './components/worksheets/bandl/DealRow';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <BandL/>
  },
  {
    path: "/bandl",
    element: <BondHead/>
  },
  {
    path: "/deal",
    element: <Deal hasAddons={false}/>
  },
  {
    path: "/dealcomb",
    element: <DealComb/>
  },
  {
    path: "/deallist",
    element: <DealList addons={true}/>
  },
  {
    path: "/dealrow",
    element: <DealRow hasAddons={true}/>
  },
  {
    path: "/dealcomb",
    element: <DealComb/>
  },
]);

const App: React.FC<unknown> = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
