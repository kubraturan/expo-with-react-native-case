import colors from '@constants/colors';
import {
  ImageStyle,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';

interface Styles {
  sunImg: StyleProp<ImageStyle>;
  headerTextContainer: ViewStyle;
  title: TextStyle;
  titleBold: TextStyle;
  description: TextStyle;
  plantImgContainer: ViewStyle;
  objectImagesContainer: ViewStyle;
  sprayImg: ViewStyle;
  waterImg: StyleProp<ImageStyle>;
  policyTextContainer: ViewStyle;
  policyText: TextStyle;
  clickableText: TextStyle;
}

const styles: Styles = StyleSheet.create({
  headerTextContainer: {
    marginTop: 12,
  },
  title: {
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 28,
    lineHeight: 33,
    letterSpacing: 0.07,
    color: colors.darkGreen,
  },
  titleBold: {
    fontWeight: '500',
  },
  description: {
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: 0.07,
    fontSize: 16,
    lineHeight: 22,
    color: colors.greenb3,
    marginTop: 8,
  },
  plantImgContainer: {
    alignItems: 'center',
    width: 375,
    height: 499,
  },
  objectImagesContainer: {
    width: 300,
    height: 400,
    position: 'absolute',
  },
  sprayImg: {
    position: 'absolute',
    left: -40,
    zIndex: 999,
  },
  sunImg: {
    position: 'absolute',
    right: 30,
    top: 40,
  },
  waterImg: {
    position: 'absolute',
    bottom: 20,
    right: 70,
  },
  policyTextContainer: {
    alignItems: 'center',
  },
  policyText: {
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 15,
    textAlign: 'center',
    letterSpacing: 0.07,
    color: colors.lightGreenb3,
  },
  clickableText: {
    textDecorationLine: 'underline',
  },
});

export default styles;
