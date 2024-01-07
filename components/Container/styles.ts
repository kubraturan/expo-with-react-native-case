import { StyleSheet, ViewStyle, ImageStyle } from 'react-native';

interface DefaultContainerStyles {
  content: ViewStyle;
  childrenArea: ViewStyle;
  containerBg: ImageStyle;
  shadowImage: ImageStyle;
  containerScroll: ViewStyle;
}

const defaultContainerStyle: DefaultContainerStyles = StyleSheet.create({
  content: {
    padding: 24,
    zIndex: 999,
  },
  childrenArea: {
    zIndex: 99,
  },
  containerBg: {
    zIndex: 1,
    position: 'absolute',
  },
  shadowImage: {
    height: 50,
    position: 'absolute',
    zIndex: 9,
    opacity: 1,
  },
  containerScroll: {
    paddingBottom: 48,
  },
});

export default defaultContainerStyle;
