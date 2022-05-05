import React from 'react';
import {
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import { ArrowLeft } from 'phosphor-react-native';

import { FeedbackType } from '../Widget'
import { ScreenshotButton } from '../ScreenshotButton'

import { styles } from './styles';
import { theme } from '../../theme';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Copyright } from '../Copyright';
import { Button } from '../Button';

interface Props {
  feedbackType: FeedbackType;
}

export function Form({ feedbackType }: Props) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft
            size={24}
            weight={'bold'}
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Image
            style={styles.image}
            source={feedbackTypeInfo.image}
          />
          <Text style={styles.titleText}>
            {feedbackTypeInfo.title}
          </Text>
        </View>
      </View>

      <TextInput
        multiline
        style={styles.input}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        placeholderTextColor={theme.colors.text_secondary}
        autoCorrect={false}
      // onChangeText={'setComment'}
      />

      <View style={styles.footer}>
        <ScreenshotButton
          onRemoveShot={() => { }}
          onTakeShot={() => { }}
          screenShot="https://avatars.githubusercontent.com/u/12105370?s=40&v=4"
        />
        <Button isLoading={false}/>
      </View>
      <Copyright />
    </View>
  );
}