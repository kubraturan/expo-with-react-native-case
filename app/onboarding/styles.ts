import colors from '@constants/colors';
import {
  StyleSheet,
  Dimensions,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';

interface Styles {
  wrapper: ViewStyle;
  swiperDotStyle: ViewStyle;
  swiperActiveDotStyle: ViewStyle;
  title: TextStyle;
  slide: ViewStyle;
  shadowImg: ImageStyle;
  text: TextStyle;
  sprayImg: ImageStyle;
  sunImg: ImageStyle;
}

const styles: Styles = StyleSheet.create({
  wrapper: {},
  swiperDotStyle: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: colors.darkGreen,
  },
  swiperActiveDotStyle: {
    width: 6,
    height: 6,
    backgroundColor: colors.darkGreen40,
  },
  title: {
    gap: 8,
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 28,
    lineHeight: 33,
    letterSpacing: -1,
    color: colors.darkGreen,
    marginTop: 24,
  },
  slide: {
    paddingBottom: 32,
  },
  shadowImg: {
    height: 800,
    bottom: 138,
    width: Dimensions.get('screen').width,
  },
  text: {
    color: colors.white,
    fontSize: 30,
    fontWeight: 'bold',
  },
  sprayImg: {
    position: 'absolute',
    left: -60,
    top: -10,
    zIndex: 99,
    width: 148,
    height: 148,
  },
  sunImg: {
    position: 'absolute',
    right: 8,
    top: 32,
    zIndex: 99,
    width: 32,
    height: 32,
  },
});

export default styles;
