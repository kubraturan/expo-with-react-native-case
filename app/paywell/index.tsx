import imageBg from '@assetPNG/Imagebackground.png';
import CloseIconSVG from '@assetSVG/close.icon.svg';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import Button from '@components/Button';
import PlanFeatureItem from '@components/Paywell/PlanDetailItem';
import PlanList from '@components/Paywell/PlanList';
import SvgComponent from '@components/SvgComponent';
import colors from '@constants/colors';
import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

export default function Paywell() {
  const navigateToHome = () => {
    router.replace('/(tabs)/home');
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={imageBg}
        imageStyle={styles.imageBg}
        style={styles.bgImageStyle}>
        <LinearGradient
          colors={[colors.greenBg, colors.greenBg, colors.greenBg00]}
          start={{ x: 0, y: 1 }}
          style={styles.gradientBg}
          end={{ x: 0, y: 0 }}>
          <ScrollView
            contentContainerStyle={{
              padding: 24,
            }}>
            <TouchableOpacity
              onPress={navigateToHome}
              style={{
                alignSelf: 'flex-end',
                marginBottom: 160,
              }}>
              <SvgComponent svg={CloseIconSVG} />
            </TouchableOpacity>
            <View
              style={{
                flex: 1,
              }}>
              <View>
                <Text style={styles.titleTxt}>
                  <Text
                    style={{
                      fontWeight: '800',
                    }}>
                    PlantApp
                  </Text>{' '}
                  Premium
                </Text>
                <Text style={styles.decriptionText}>Access All Features</Text>
              </View>
              <ScrollView
                horizontal
                contentContainerStyle={{
                  paddingHorizontal: 24,
                }}
                style={{
                  marginTop: 20,
                  marginLeft: -24,
                }}>
                <PlanFeatureItem name="unlimited" />
                <PlanFeatureItem name="faster" style={{ marginLeft: 8 }} />
                <PlanFeatureItem name="detailed" style={{ marginLeft: 8 }} />
              </ScrollView>
              <PlanList style={{ marginTop: 20 }} />
              <Button
                onPress={navigateToHome}
                style={{
                  marginTop: 26,
                }}>
                Try free for 3 days
              </Button>

              <Text style={styles.subscriptionDesc}>
                After the 3-day free trial period you’ll be charged ₺274.99 per
                year unless you cancel before the trial expires. Yearly
                Subscription is Auto-Renewable
              </Text>

              <View style={styles.termsAndCondsContainer}>
                <TouchableOpacity>
                  <Text style={styles.termsAndCondsText}> Terms</Text>
                </TouchableOpacity>
                <Text style={styles.termsAndCondsText}> • </Text>
                <TouchableOpacity>
                  <Text style={styles.termsAndCondsText}> Privacy</Text>
                </TouchableOpacity>
                <Text style={styles.termsAndCondsText}> • </Text>
                <TouchableOpacity>
                  <Text style={styles.termsAndCondsText}> Restore</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
