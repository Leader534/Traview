import { NativeModules } from 'react-native';

Object.assign(NativeModules, {
  RNGestureHandlerModule: {
    attachGestureHandler: jest.fn(),
    createGestureHandler: jest.fn(),
    dropGestureHandler: jest.fn(),
    updateGestureHandler: jest.fn(),
    State: {},
    Directions: {}
  },
  PlatformConstants: {
    forceTouchAvailable: false
  }
});
