import colors from '@constants/colors';
import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

interface Styles {
  gradientBg: ViewStyle;
  imageBg: ImageStyle;
  bgImageStyle: ImageStyle;
  titleTxt: TextStyle;
  decriptionText: TextStyle;
  subscriptionDesc: TextStyle;
  termsAndCondsContainer: ViewStyle;
  termsAndCondsText: TextStyle;
}

const styles: Styles = StyleSheet.create({
  gradientBg: {
    //position: 'absolute',
    //height: '100%',
    //width: '100%',
    //zIndex: 999,
  },
  imageBg: {
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    bottom: '30%',
  },
  bgImageStyle: {
    flex: 1,
    position: 'relative',
  },
  titleTxt: {
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 30,
    lineHeight: 47,
    textTransform: 'capitalize',
    color: colors.white,
  },
  decriptionText: {
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 17,
    lineHeight: 24,
    letterSpacing: 0.38,
    color: colors.whiteb3,
  },
  subscriptionDesc: {
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 9,
    lineHeight: 11.88,
    textAlign: 'center',
    color: colors.white85,
    marginTop: 8,
  },
  termsAndCondsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  termsAndCondsText: {
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 13,
    textAlign: 'center',
    color: colors.white80,
  },
});

export default styles;
