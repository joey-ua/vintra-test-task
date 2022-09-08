export const THERMO_API_URL: string = process.env.REACT_APP_THERMO_API_URL ||
  'http://localhost:8000';

export const AUTH_URL = `${THERMO_API_URL}/auth/login`;
export const HEALTH_URL = `${THERMO_API_URL}/health`;
export const SENSORS_URL = `${THERMO_API_URL}/api/v1/sensors/`;
