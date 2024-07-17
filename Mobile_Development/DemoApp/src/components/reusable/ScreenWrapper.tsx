import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import React, {ReactNode} from 'react';

export interface IScreenWrapper extends ViewProps {
  children: ReactNode;
  custom_styles?: ViewStyle;
  isScrollable?: boolean;
}

const ScreenWrapper = ({
  children,
  isScrollable,
  custom_styles,
  ...other_props
}: IScreenWrapper) => {
  return (
    <>
      {isScrollable ? (
        <ScrollView {...other_props} contentContainerStyle={[custom_styles]}>
          {children}
        </ScrollView>
      ) : (
        <View {...other_props} style={[styles.wrapper, custom_styles]}>
          {children}
        </View>
      )}
    </>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: '10%',
  },
});
