import { controlErrorMessage } from '../../../commons/alert/functions';
export const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export const getFans = async ({ setDataFans, dispatch }) => {
  try {
    const res = await fetch('/api/waiting-list', {
      method: 'get',
    });
    const data = await res.json();

    setDataFans(prev => ({
      ...prev,
      loading: false,
      data: data?.fans,
      status: 201,
    }));
  } catch (error) {
    controlErrorMessage({
      dispatch,
      codeExute: 'checkSessions',
      title: 'Error when querying users',
      message: "Your querying wasn't possible; please try again later.",
    });
    setDataFans(prev => ({
      ...prev,
      loading: false,
      data: [],
      status: 500,
    }));
  }
};
