import brushLongImg from '@assetPNG/brush_long.png';
import PlantCareImage from '@assetPNG/flat-iphone.png';
import spray_image from '@assetPNG/object_spray.png';
import sun_image from '@assetPNG/object_sun.png';
import PlantGuideSVG from '@assetSVG/Content.svg';
import ArtWorkSVG from '@assetSVG/art_work.svg';
import { router } from 'expo-router';
import Button from '@components/Button';
import Container from '@components/Container';
import SvgComponent from '@components/SvgComponent';
import { useAppDispatch } from '@redux/hooks';
import { setIsSeenGuiding } from '@redux/slices/guiding';
import React, { useRef, useState } from 'react';
import { View, Text, Image, LayoutRectangle, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';

import styles from './styles';

type PageProps = { onPressNext: () => void };

function PhotoPlanScreen({ onPressNext }: PageProps) {
  const [titleLayout, setTitleLayout] = useState<LayoutRectangle>({
    height: 0,
    width: 0,
    x: 0,
    y: 0,
  });

  function onLayoutTitle(layout: LayoutRectangle) {
    setTitleLayout(layout);
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          padding: 24,
        }}>
        <Text
          onLayout={(ev) => onLayoutTitle(ev.nativeEvent.layout)}
          style={styles.title}>
          Take a photo to <Text style={{ fontWeight: '800' }}>identify</Text>{' '}
          the the plant!
        </Text>

        <View
          style={[
            {
              position: 'absolute',
              top: titleLayout.y + 38,
              left: titleLayout.x + 176,
            },
          ]}>
          <Image source={brushLongImg} />
        </View>

        <View style={{ alignItems: 'center', marginTop: 19 }}>
          <SvgComponent svg={PlantGuideSVG} />
        </View>
      </ScrollView>

      <View style={{ padding: 24, paddingTop: 0, paddingBottom: 64 }}>
        <Button onPress={onPressNext}>Continue</Button>
      </View>
    </View>
  );
}

function PlantCareScreen({ onPressNext }: PageProps) {
  const [titleLayout, setTitleLayout] = useState<LayoutRectangle>({
    height: 0,
    width: 0,
    x: 0,
    y: 0,
  });

  function onLayoutTitle(layout: LayoutRectangle) {
    setTitleLayout(layout);
  }

  return (
    <View style={{ flex: 2 }}>
      <ScrollView
        contentContainerStyle={{
          padding: 24,
        }}>
        <Text
          onLayout={(ev) => onLayoutTitle(ev.nativeEvent.layout)}
          style={styles.title}>
          Get plant <Text style={{ fontWeight: '800' }}>care guides</Text>
        </Text>

        <View
          style={[
            {
              position: 'absolute',
              top: titleLayout.y + 38,
              left: titleLayout.x + 114,
            },
          ]}>
          <Image source={brushLongImg} />
        </View>

        <View
          style={{
            alignItems: 'center',
            marginTop: 79,
          }}>
          <View
            style={{
              width: 400,
              marginLeft: -55,
              zIndex: 99,
            }}>
            <View
              style={{
                position: 'absolute',
                top: -48,
                right: 0,
              }}>
              <Image
                source={sun_image}
                resizeMode="contain"
                style={styles.sunImg}
              />
              <Image
                source={spray_image}
                resizeMode="contain"
                style={styles.sprayImg}
              />
              <SvgComponent svg={ArtWorkSVG} />
            </View>
          </View>
          <View>
            <Image source={PlantCareImage} resizeMode="contain" />
          </View>
        </View>
      </ScrollView>

      <View style={{ padding: 24, paddingTop: 0, paddingBottom: 64 }}>
        <Button onPress={onPressNext}>Continue</Button>
      </View>
    </View>
  );
}

export default function PlantGuide() {
  const swiperRef = useRef<{ scrollBy: (idx: number) => void }>(null);
  const dispatch = useAppDispatch();

  function onPressClosePlantGuiding() {
    dispatch(setIsSeenGuiding(true));

    router.replace('/paywell/');
  }

  return (
    <Container
      scrollContainerStyle={{ paddingHorizontal: 24 }}
      contentStyle={{ padding: 0 }}>
      <Swiper
        ref={swiperRef as never}
        activeDotStyle={styles.swiperDotStyle}
        dotStyle={styles.swiperActiveDotStyle}
        loop={false}
        style={styles.wrapper}
        showsButtons={false}>
        <PhotoPlanScreen
          onPressNext={() => swiperRef.current && swiperRef.current.scrollBy(1)}
        />
        <PlantCareScreen onPressNext={() => onPressClosePlantGuiding()} />
      </Swiper>
    </Container>
  );
}
