import { Route, Routes } from 'react-router-dom';

import Login from '../modules/auth/login';
import Palettes from '../modules/palette/palettes';
import DesignSystems from '../modules/design-system/design-systems';

export default () => {
  return (
    <Routes>
      <Route path='/design-system' element={<DesignSystems />} />
      <Route path='/palette' element={<Palettes />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
};
