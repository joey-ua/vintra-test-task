// imports from vendors
import { FC, KeyboardEvent, useState } from 'react';
import { PlusIcon } from '@heroicons/react/20/solid';
import { useSWRConfig } from 'swr';

// imports from constants
import { SENSORS_URL } from '../../constants/api';

// imports from types
import { Sensor } from '../../types/sensor';

// imports from utils
import { fetchWithToken } from '../../utils/fetch';

type Props = {
  sensors: Sensor[];
};

const AddSensorButton: FC<Props> = ({ sensors }) => {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState('');

  const { mutate } = useSWRConfig();

  const handleAddSensor = () => mutate(SENSORS_URL, async () => {
    const newSensor = await fetchWithToken(SENSORS_URL, {
      method: 'POST',
      body: JSON.stringify({ description: value })
    })
      .then((data) => {
        setValue('');
        setIsActive(false);

        return data;
      })
      .catch();

    return [...sensors, newSensor];
  }, { revalidate: false });

  const handleButtonClick = () => {
    if (isActive && value) return handleAddSensor();

    setIsActive(true);
  }

  // @ts-ignore
  const handleInputChange = ({ target }) => setValue(target.value);

  const handleInputKeyUp = ({ key }: KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Enter' && value) {
      return handleAddSensor();
    }

    if (key === 'Esc' || key === 'Escape') {
      setValue('');
      setIsActive(false);
    }
  };


  return (
    <div className="flex items-center justify-between">
      { isActive && (
        <input
          className="border-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 mr-2 p-2 rounded-md sm:text-sm"
          onChange={handleInputChange}
          onKeyUp={handleInputKeyUp}
          placeholder="Name"
          value={value}
        />
      ) }
      <button
        className="bg-indigo-400 h-8 p-1 right-0 rounded-full shrink-0 text-white w-8"
        onClick={handleButtonClick}
      >
        <PlusIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default AddSensorButton;
