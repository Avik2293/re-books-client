import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';


function App() {
  return (
    <div className="App lg:px-10">
      <RouterProvider router={routes}></RouterProvider>
      
    </div>
  );
}

export default App;
