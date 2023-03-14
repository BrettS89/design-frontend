import { useSelector } from 'react-redux';
import { paletteSelector } from '../../../redux';

const Palettes = () => {
  const paletteState = useSelector(paletteSelector);

  return (
    <div>
      Palettes
    </div>
  );
};

export default Palettes;
