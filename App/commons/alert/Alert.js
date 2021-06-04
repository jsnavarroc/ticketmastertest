import React from 'react';
import get from 'lodash/get';
import { bluetikets } from '../../utils/colors';
import AwesomeAlert from 'react-native-awesome-alerts';
import { StyleSheet, View } from 'react-native';
import { width, height } from '../../utils/dimensions';
import { useStorage } from '../../storage/index';

const Alert = () => {
  const { storage } = useStorage();
  const {
    show,
    title,
    message,
    cancelText,
    confirmText,
    showProgress,
    onCancelPressed,
    onConfirmPressed,
  } = get(storage, 'showAlertInfo');
  const validateObtionCancel = cancelText.length !== 0 ? true : false;

  return (
    <>
      {show && (
        <View style={styles.container}>
          <AwesomeAlert
            show={show}
            showProgress={showProgress}
            title={title}
            message={message}
            closeOnTouchOutside={false}
            closeOnHardwareBackPress={false}
            showCancelButton={validateObtionCancel}
            showConfirmButton={true}
            cancelText={cancelText}
            confirmText={confirmText}
            contentContainerStyle={styles.contentContainerStyle}
            contentStyle={styles.contentStyle}
            confirmButtonStyle={styles.buttonStyle}
            cancelButtonStyle={styles.buttonStyle}
            cancelButtonTextStyle={styles.buttonText}
            confirmButtonTextStyle={styles.buttonText}
            titleStyle={styles.title}
            messageStyle={styles.messageStyle}
            onCancelPressed={() => onCancelPressed()}
            onConfirmPressed={() => onConfirmPressed()}
          />
        </View>
      )}
    </>
  );
};

Alert.defaultProps = {
  title: '',
  message: '',
  show: false,
  cancelText: '',
  confirmText: '',
  showProgress: false,
  onCancelPressed: () => null,
  onConfirmPressed: () => null,
};

const styles = StyleSheet.create({
  container: {
    zIndex: 2,
    width,
    height,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainerStyle: {
    borderRadius: 0,
    // height: '55%',
    width: '100%',
  },
  contentStyle: {
    margin: '2%',
  },
  title: {
    fontSize: 20,
    color: '#6e6e6e',
    fontFamily: 'FjallaOne-Regular',
  },
  messageStyle: {
    color: '#6e6e6e',
    fontSize: 16,
    fontFamily: 'trebuc',
  },
  buttonStyle: {
    width: 100,
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: bluetikets,
    borderRadius: 0,
  },
  buttonText: {
    color: '#ffffff',
    fontFamily: 'FjallaOne-Regular',
    fontSize: 16,
  },
});

export default Alert;

/* Has error here --> sAnimated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false` */
