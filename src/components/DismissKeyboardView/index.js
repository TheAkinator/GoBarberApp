import React from 'react';
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function DismissKeyboard({ children, ...props }) {
  return (
    <Container>
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        accessible={false}
        styles={{ flex: 1 }}
      >
        <View {...props}>{children}</View>
      </TouchableWithoutFeedback>
    </Container>
  );
}

DismissKeyboard.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};
