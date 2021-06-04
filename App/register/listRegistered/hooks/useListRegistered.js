import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { wait, getFans } from './functions';
import { useStorage } from '../../../storage/index';

const useListRegistered = () => {
  const [dataFans, setDataFans] = useState({
    loading: false,
    error: '',
    data: [],
    status: 0,
  });
  const [refreshing, setRefreshing] = useState(false);
  const { dispatch } = useStorage();

  useFocusEffect(
    useCallback(() => {
      setDataFans(prev => ({ ...prev, loading: true }));
      getFans({ setDataFans, dispatch });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refreshing]),
  );
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return { ...dataFans, refreshing, onRefresh };
};
export default useListRegistered;
