import actions from '../actions';

/* SHOW ALERT */
export function showAlertInfoAct({ dispatch, showAlertInfo }) {
  dispatch({
    type: actions.SHOW_ALERT_INFO,
    showAlertInfo,
  });
}

export function showAlertInfoCleanAct({ dispatch }) {
  dispatch({
    type: actions.SHOW_ALERT_INFO_CLEAN,
  });
}
