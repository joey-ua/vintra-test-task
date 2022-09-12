// imports from vendors
import { FC } from 'react'

// imports from components
import DeleteSensorButton from '../../components/DeleteSensorButton/DeleteSensorButton';
import StatusSensorButton from '../../components/StatusSensorButton/StatusSensorButton';

// imports from types
import { Sensor } from '../../types/sensor';

const Widget: FC<Sensor> = ({ description, id, isActive = false }) => {
  const classNames = [
    'cursor-pointer',
    'flex',
    'focus:outline-none',
    'mb-2',
    'p-6',
    'relative',
    'rounded-lg',
    'text-left',
    'shadow-md',
    'w-full',
    isActive ? 'bg-indigo-500 text-white' : 'bg-white',
  ];

  return (
    <div className={classNames.join(' ')}>
      <div className="flex items-center justify-between relative w-full">
        <div className="flex items-center">
          <div className="font-medium pr-10 text-sm">{ description }</div>
        </div>
        <div className="flex">
         <StatusSensorButton id={id} isActive={isActive} />
         <DeleteSensorButton id={id} />
        </div>
      </div>
    </div>
  );
};

export default Widget;
