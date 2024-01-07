import colors from '@constants/colors';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface DefaultStyle {
  touchable: ViewStyle;
  text: TextStyle;
}

const defaultStyle: DefaultStyle = StyleSheet.create({
  touchable: {
    backgroundColor: colors.green,
    padding: 16,
    borderRadius: 12,
  },
  text: {
    fontFamily: 'Rubik',
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 24,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing: -0.24,
    color: colors.white,
  },
});

export default defaultStyle;
