import React, { useState } from 'react';
import { View } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleAddTask(newTaskTitle: string) {
    if (newTaskTitle) {
      setTasks((oldTasks: Task[]) => [
        ...oldTasks,
        { id: new Date().getTime(), title: newTaskTitle, done: false },
      ]);
    }
  }

  function handleMarkTaskAsDone(id: number) {
    const updatedTasks = tasks.map((task: Task) => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });

    setTasks(updatedTasks);
  }

  function handleRemoveTask(id: number) {
    const updatedTasks = tasks.filter((task: Task) => task.id !== id);

    setTasks(updatedTasks);
  }

  function handleAppTheme() {
    setIsDarkMode((oldState) => !oldState);
  }

  return (
    <>
      <View
        style={{ flex: 1, backgroundColor: isDarkMode ? '#10101E' : '#fff' }}
      >
        <Header isDarkMode={isDarkMode} />

        <TodoInput addTask={handleAddTask} isDarkMode={isDarkMode} />

        <MyTasksList
          tasks={tasks}
          onPress={handleMarkTaskAsDone}
          onLongPress={handleRemoveTask}
          isDarkMode={isDarkMode}
          toggleSwitch={handleAppTheme}
        />
      </View>
    </>
  );
}
