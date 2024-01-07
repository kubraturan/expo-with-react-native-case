import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

import defaultStyle from './styles';

type Props = {
  children?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export default function Button(props: Props) {
  const { children, onPress, style, textStyle } = props;

  return (
    <TouchableOpacity onPress={onPress} style={[defaultStyle.touchable, style]}>
      <Text style={[defaultStyle.text, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  children: '',
  style: {},
  onPress: () => true,
  textStyle: {},
};
