import React from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';

interface CenteredImageProps {
  source: {
    uri: string;
  };
}

export default function CenteredImage(props: CenteredImageProps) {
  const { source } = props;

  const calculateStyles = () => {
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    // Resmi ekranın ortasına yerleştirmek için hesaplama
    const width = screenWidth / 1.5;
    const height = screenHeight / 1.5;

    return { width, height };
  };

  const styles = StyleSheet.create({
    imageContainer: {
      width: '100%',
      height: calculateStyles().height,
    },
  });

  return (
    <View style={{ flex: 1 }}>
      <Image
        resizeMode="contain"
        source={source}
        style={styles.imageContainer}
      />
    </View>
  );
}

CenteredImage.defaultProps = {
  source: {
    uri: '',
  },
};
