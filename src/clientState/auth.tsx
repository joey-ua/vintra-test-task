// imports from vendors
import React, { useContext, useReducer } from 'react';

// imports from constants
import { AUTH_URL } from '../constants/api';

type AuthParams = {
  username: string;
  password: string;
};

type AuthState = {
  isLoading: boolean,
  isAuthenticated: boolean,
  token?: string | null,
  error?: any,
};

type ContextProps = {
  isLoading: boolean,
  isAuthenticated: boolean,
  token?: string | null,
  error?: any,
  authenticate: (params: AuthParams) => Promise<void>;
  destroyAuth: () => void;
};

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  token: null,
  error: null,
};

const AUTH_REQUEST = 'REQUEST';
const AUTH_SUCCESS = 'SUCCESS';
const AUTH_FAILURE = 'FAILURE';
const AUTH_DESTROY = 'DESTROY';

export const AuthContext = React.createContext<ContextProps>({
  ...initialState,
  authenticate: () => new Promise((r) => r()),
  destroyAuth: () => {},
});

// @ts-ignore
const reducer = (state: AuthState, action: any) => ({
  [AUTH_REQUEST]: { isLoading: true, error: null },
  [AUTH_SUCCESS]: {
    error: null,
    isAuthenticated: true,
    isLoading: false,
    token: action?.payload?.token,
  },
  [AUTH_FAILURE]: { isLoading: false, error: action?.payload?.error },
  [AUTH_DESTROY]: initialState,
}[action.type]);

// @ts-ignore
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const authenticate = (data: AuthParams) => {
    dispatch({ type: AUTH_REQUEST });

    return fetch(AUTH_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `username=${data.username}&password=${data.password}`,
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: AUTH_SUCCESS, payload: { token: data.token } });
        return data;
      })
      .catch((error) => dispatch({ type: AUTH_FAILURE, payload: { error } }));
  };

  const destroyAuth = () => {
    dispatch({ type: AUTH_DESTROY });
  };

  const value = {
    ...state,
    authenticate,
    destroyAuth,
  };

  return (
    <AuthContext.Provider value={value}>
      { children }
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
