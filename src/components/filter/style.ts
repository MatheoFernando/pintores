import { theme } from '@/theme';
import {  StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
              Pressable: {
                          
              },
              Pressableselected: {
                            borderBottomWidth: 4,
                            borderColor:theme.colors.white,
                          
              },
              text: {
                            color:theme.colors.white,
                            fontSize:16,
                            fontFamily:theme.fontFamily.medium
              }
});