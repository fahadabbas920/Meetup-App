import { Route, Routes } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import FavouritesPage from './pages/Favourite';
import NewMeetupPage from './pages/NewMeetups';
// import MainNavigation from './components/layout/MainNavigation';
import Layout from './components/layout/Layout';


function App() {
  return (
    <Layout>
      <Routes>
      <Route path='/' element={<AllMeetupsPage />} ></Route>
      <Route path='/favourites' element={<FavouritesPage />}></Route>
      <Route path='/newMeetups' element={<NewMeetupPage />}></Route>
      </Routes>
      </Layout>
  );
}

export default App;
