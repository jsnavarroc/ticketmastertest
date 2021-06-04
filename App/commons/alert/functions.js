import {
  showAlertInfoAct,
  showAlertInfoCleanAct,
} from '../../storage/reducer/actionsCreators';
export const controlErrorMessage = elements => {
  const { codeExute, message, title, dispatch } = elements;
  const defaultPropsAlert = {
    confirmText: 'Ok',
    onCancelPressed: () => {
      showAlertInfoCleanAct({ dispatch });
    },
    onConfirmPressed: () => {
      showAlertInfoCleanAct({ dispatch });
    },
  };
  const showAlertInfo = {
    show: true,
    title,
    message,
    codeExute,
    ...defaultPropsAlert,
  };
  showAlertInfoAct({ dispatch, showAlertInfo });
};
