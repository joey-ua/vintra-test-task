// imports from vendors
import React, { FC } from 'react';
import useSWR from 'swr';

// imports from clientState
import { useAuth } from '../../clientState/auth';

// imports from components
import Widget from '../../components/Widget/Widget';

// imports from constants
import { HEALTH_URL, SENSORS_URL } from '../../constants/api';
import { fetchWithToken } from '../../utils/fetch';

const Dashboard: FC = () => {
  const { token } = useAuth();
  const health = useSWR(HEALTH_URL, { refreshInterval: 60000 });
  const sensors = useSWR([token ? SENSORS_URL : null, token], fetchWithToken)

  if (!sensors.data) return null;

  return (
    <div className="p-4">
      <h1 className="font-medium mb-4 py-4 text-xl">
        Server status: { health.data?.db_status_ok ? 'Ok' : 'Down' }
      </h1>

      <div>
        { sensors.data.map((item: any) => <Widget {...item} key={item.id} />) }
      </div>
    </div>
  );
};

export default Dashboard;
