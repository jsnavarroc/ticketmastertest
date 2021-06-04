import React, { useReducer, createContext, useContext } from 'react';
import actions from './actions';
const initalState = {
  showAlertInfo: {
    show: false,
    title: '',
    message: '',
    cancelText: '',
    confirmText: '',
    showProgress: false,
    onCancelPressed: () => {},
    onConfirmPressed: () => {},
    codeExute: '',
  },
};

const reducer = (storage, action) => {
  // const storageCopy = Object.assign({}, storage);
  switch (action.type) {
    case actions.SHOW_ALERT_INFO: {
      return {
        ...storage,
        showAlertInfo: {
          ...storage.showAlertInfo,
          ...action.showAlertInfo,
        },
      };
    }
    case actions.SHOW_ALERT_INFO_CLEAN: {
      return {
        ...storage,
        showAlertInfo: initalState.showAlertInfo,
      };
    }
    default: {
      return {
        ...storage,
      };
    }
  }
};
const StorageContext = createContext();

const Storage = props => {
  const { children } = props;
  const [storage, dispatch] = useReducer(reducer, initalState);
  console.log('storage>>', { storage });
  return (
    <StorageContext.Provider value={{ storage, dispatch }}>
      {children}
    </StorageContext.Provider>
  );
};
export const useStorage = () => useContext(StorageContext);
export default Storage;
