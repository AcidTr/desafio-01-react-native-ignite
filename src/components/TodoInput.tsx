import React, { useState } from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import checkIcon from '../assets/icons/Check.png';

interface TodoInputProps {
  addTask: (task: string) => void;
  isDarkMode: boolean;
}

export function TodoInput({ addTask, isDarkMode }: TodoInputProps) {
  const [task, setTask] = useState('');

  function handleAddNewTask() {
    addTask(task);
    setTask('');
  }

  return (
    <View
      style={[
        styles.inputContainer,
        Platform.OS === 'ios'
          ? styles.inputIOSShadow
          : styles.inputAndroidShadow,
        isDarkMode && { backgroundColor: '#212136' },
      ]}
    >
      <TextInput
        style={[
          styles.input,
          isDarkMode && { backgroundColor: '#212136', color: '#E1E1E6' },
        ]}
        placeholder='Adicionar novo todo...'
        returnKeyType='send'
        value={task}
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
        placeholderTextColor={isDarkMode ? '#E1E1E6' : '#A09CB1'}
      />
      <TouchableOpacity
        testID='add-new-task-button'
        activeOpacity={0.7}
        style={[styles.addButton, isDarkMode && { backgroundColor: '#565BFF' }]}
        onPress={handleAddNewTask}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#F5F4F8',
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#F5F4F8',
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputIOSShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  inputAndroidShadow: {
    elevation: 5,
  },
  addButton: {
    backgroundColor: '#3FAD27',
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});
