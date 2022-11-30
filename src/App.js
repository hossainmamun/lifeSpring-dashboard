import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ActivePage from './Dashboard/ActivePage';
import DashboardHome from './Dashboard/DashboardHome';

function App() {
   return (
      <div>
         <BrowserRouter>
            <Routes>
               <Route path='/' element={<DashboardHome />}>
                  <Route index element={<ActivePage />} />
                  <Route path='/dashboardActive' element={<ActivePage />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
