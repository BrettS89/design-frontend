import { useSelector } from 'react-redux';
import { designSystemSelector } from '../../../redux';

const DesignSystems = () => {
  const designSystemState = useSelector(designSystemSelector);

  return (
    <div>
      Design systems
    </div>
  );
};

export default DesignSystems;
