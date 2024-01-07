import WelcomeContentImage from '@assetPNG/welcome-content.png';
import { router } from 'expo-router';
import Button from '@components/Button';
import Container from '@components/Container';
import CenteredImage from '@components/Image/CenteredImage';
import { View, Text } from 'react-native';

import styles from './styles';

export default function Welcome() {
  return (
    <Container>
      <View style={styles.headerTextContainer}>
        <Text style={styles.title}>
          Welcome <Text style={styles.titleBold}>PlantApp</Text>
        </Text>

        <Text style={styles.description}>
          Identify more than 3000+ plants and 88% accuracy.
        </Text>
      </View>

      <View>
        <CenteredImage source={WelcomeContentImage} />
        {/* <View style={styles.objectImagesContainer}>
                    <Image
                    source={spray_image}
                    resizeMode="contain"
                    style={{
                        position: 'absolute',
                        left: -40,
                        zIndex: 999,
                    }}
                    />

                    <Image source={sun_image} style={styles.sunImg} />

                    <Image source={water_image} style={styles.waterImg} />
                </View>

                <SvgComponent svg={PlantImgSVG}  /> */}
      </View>

      <Button
        style={{ top: -30 }}
        onPress={() => router.replace('/onboarding/')}>
        Get Started
      </Button>
      <View style={styles.policyTextContainer}>
        <Text style={styles.policyText}>
          By tapping next, you are agreeing to PlantID{' '}
        </Text>
        <Text style={styles.policyText}>
          <Text onPress={() => true} style={styles.clickableText}>
            Terms of Use
          </Text>{' '}
          &{' '}
          <Text onPress={() => true} style={styles.clickableText}>
            Privacy Policy.
          </Text>
        </Text>
      </View>
    </Container>
  );
}
