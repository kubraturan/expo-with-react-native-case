import shadowImage from '@assetPNG/shadow-background.png';
import React, { useState, useEffect } from 'react';
import {
  StyleProp,
  ViewStyle,
  useWindowDimensions,
  Dimensions,
  View,
  ScrollView,
  Image,
} from 'react-native';

import defaultContainerStyle from './styles';

type ContainerProps = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  scrollContainerStyle?: StyleProp<ViewStyle>;
  disableScroll?: boolean;
};

export default function Container(props: ContainerProps) {
  const initialDimensions = useWindowDimensions();
  const [dimensions, setDimensions] = useState(initialDimensions);

  function isPortrait() {
    return dimensions.height >= dimensions.width;
  }

  function getBgTransformStyles() {
    return {
      transform: [
        {
          rotate: isPortrait() ? '0deg' : '90deg',
        },
      ],
      top: isPortrait() ? 0 : -dimensions.height / 1.71,
      right: isPortrait() ? 0 : 90,
    };
  }

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      (changedDimens) => {
        setDimensions(changedDimens.screen);
      }
    );

    return () => subscription.remove();
  }, []);

  return (
    <View>
      <ScrollView
        testID="scrollView"
        scrollEnabled={props.disableScroll !== true}
        contentContainerStyle={[
          defaultContainerStyle.containerScroll,
          props.scrollContainerStyle,
        ]}
        style={[defaultContainerStyle.content, props.contentStyle]}>
        <View
          testID="scrollInView"
          style={[defaultContainerStyle.childrenArea, props.style]}>
          {props?.children ?? null}
        </View>
      </ScrollView>

      <Image
        testID="shadowImage"
        source={shadowImage}
        style={[defaultContainerStyle.containerBg, getBgTransformStyles()]}
        resizeMode="cover"
      />
    </View>
  );
}

Container.defaultProps = {
  children: '',
  style: {},
  contentStyle: {},
  scrollContainerStyle: {},
  disableScroll: true,
};
