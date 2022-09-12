// imports from vendors
import { FC } from 'react';
import { BoltIcon, BoltSlashIcon } from '@heroicons/react/20/solid';
import { useSWRConfig } from 'swr';

// imports from constants
import { SENSORS_URL } from '../../constants/api';

// imports from utils
import { fetchWithToken } from '../../utils/fetch';

type Props = {
  id: number;
  isActive: boolean;
};

const StatusSensorButton: FC<Props> = ({ id, isActive }) => {
  const { mutate } = useSWRConfig();

  const handleChangeSensorStatus = () => fetchWithToken(`${SENSORS_URL}${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ isActive: !isActive }),
  })
    .then(() => mutate(SENSORS_URL))
    .catch();

  return (
    <div className="flex items-center justify-between mr-2">
      <button
        className="bg-indigo-400 h-8 p-1 right-0 rounded-full shrink-0 text-white w-8"
        onClick={handleChangeSensorStatus}
      >
        { !isActive && (
          <BoltIcon className="h-6 w-6" />
        ) }
        { isActive && (
          <BoltSlashIcon className="h-6 w-6" />
        ) }
      </button>
    </div>
  );
};

export default StatusSensorButton;
