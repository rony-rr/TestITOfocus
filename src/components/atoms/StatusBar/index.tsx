import * as React from 'react';

import {StatusBar} from 'react-native';

const StatusBarComponent = () => {
  const STYLE = 'light-content';
  const TRANSITION = 'none';

  return (
    <StatusBar
      animated={true}
      barStyle={STYLE}
      showHideTransition={TRANSITION}
      hidden={false}
    />
  );
};

export default StatusBarComponent;
