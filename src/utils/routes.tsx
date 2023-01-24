import { Routes, Route } from 'react-router-dom';

import App from '../App';
import Layout from '../components/Layout/Layout';
import Bookmark from '../pages/Bookmark';
import PokemonDetails from '../pages/PokemonDetails';

const RouteApp = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
      </Route>
    </Routes>
  );
};

export default RouteApp;
