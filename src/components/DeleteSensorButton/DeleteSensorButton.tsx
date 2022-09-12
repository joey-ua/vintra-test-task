// imports from vendors
import { FC, useState } from 'react';
import { CheckIcon, MinusIcon } from '@heroicons/react/20/solid';
import { useSWRConfig } from 'swr';

// imports from constants
import { SENSORS_URL } from '../../constants/api';

// imports from utils
import { fetchWithToken } from '../../utils/fetch';

type Props = {
  id: number;
};

const DeleteSensorButton: FC<Props> = ({ id }) => {
  const [isActive, setIsActive] = useState(false);

  const { mutate } = useSWRConfig();

  const handleDeleteSensor = () => fetchWithToken(`${SENSORS_URL}${id}`, {
    method: 'DELETE',
  })
    .then(() => mutate(SENSORS_URL))
    .catch();

  const handleButtonClick = () => {
    if (isActive) return handleDeleteSensor();

    setIsActive(true);
  }

  return (
    <div className="flex items-center justify-between">
      <button
        className="bg-red-400 h-8 p-1 right-0 rounded-full shrink-0 text-white w-8"
        onClick={handleButtonClick}
      >
        { !isActive && (
          <MinusIcon className="h-6 w-6" />
        ) }
        { isActive && (
          <CheckIcon className="h-6 w-6" />
        ) }
      </button>
    </div>
  );
};

export default DeleteSensorButton;
