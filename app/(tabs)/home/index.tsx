import headerBgImg from '@assetPNG/header.bg.png';
import NewNotificationSvg from '@assetSVG/new.notification.svg';
import RightChevronSvg from '@assetSVG/right.chevron.svg';
import CategoryList from '@components/Home/CategoryList';
import GradientText from '@components/Home/GradientText';
import QuestionList from '@components/Home/QuestionList';
import SearchInput from '@components/Home/SearchInput';
import SvgComponent from '@components/SvgComponent';
import colors from '@constants/colors';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView>
      <ImageBackground
        source={headerBgImg}
        resizeMode="cover"
        style={styles.imageBg}>
        <View style={styles.header}>
          <Text style={styles.hello}>Hi, plant lover!</Text>
          <Text style={styles.greeting}>Good Afternoon! ⛅</Text>

          <SearchInput />
        </View>
      </ImageBackground>

      <View
        style={{
          padding: 24,
        }}>
        {/** premium box */}
        <View style={styles.premiumBox}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <SvgComponent svg={NewNotificationSvg} />
            <View
              style={{
                marginLeft: 16,
              }}>
              <GradientText
                gradient={{
                  colors: ['#E4B046', '#E5C990'],
                  start: { x: 1, y: 0 },
                  end: { x: 0, y: 0 },
                }}
                style={styles.premiumTitle}>
                FREE Premium Available
              </GradientText>

              <GradientText
                gradient={{
                  colors: ['#F5C25BCC', '#FFDE9CCC'],
                  start: { x: 1, y: 0 },
                  end: { x: 0, y: 0 },
                }}
                style={styles.premiumDescription}>
                Tap to upgrade your account!
              </GradientText>
            </View>
          </View>
          <TouchableOpacity>
            <SvgComponent svg={RightChevronSvg} />
          </TouchableOpacity>
        </View>
        {/** premium box */}

        <View
          style={{
            marginTop: 24,
          }}>
          <Text style={styles.title}>Get Started</Text>

          <QuestionList />
        </View>

        <CategoryList />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 24,
    paddingVertical: 14,
  },
  imageBg: { paddingTop: 24 },
  hello: {
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 0.07,
    color: colors.darkGreen,
  },
  greeting: {
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 28,
    letterSpacing: 0.35,
    color: colors.darkGreen,
    marginTop: 6,
  },
  premiumBox: {
    borderRadius: 12,
    backgroundColor: '#24201A',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  premiumTitle: {
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.32,
  },
  premiumDescription: {
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 16,
    marginTop: 1,
  },
  title: {
    fontFamily: 'Rubik-SemiBold',
    fontStyle: 'normal',
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: -0.24,
    color: colors.darkGreen,
  },
});
