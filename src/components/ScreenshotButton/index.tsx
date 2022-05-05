import { Camera, Trash } from 'phosphor-react-native';
import React from 'react';
import { View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { theme } from '../../theme';

import { styles } from './styles';

interface Props {
  onTakeShot: () => void;
  onRemoveShot: () => void;
  screenShot: string | null;

}

export function ScreenshotButton({ screenShot, onRemoveShot, onTakeShot }: Props) {

  return (
    < TouchableOpacity
      style={styles.container}
      onPress={screenShot ? onRemoveShot : onTakeShot}
    >
      {screenShot ?
        <View>
          <Image 
            style={styles.image}
            source={{ uri: screenShot }}

          />

          <Trash
            size={22}
            weight={'fill'}
            color={theme.colors.text_secondary}
            style={styles.removeIcon}
          />
        </View>
        :
        <Camera
          size={24}
          weight={'bold'}
          color={theme.colors.text_primary}
        />
      }
    </TouchableOpacity>
  );
}