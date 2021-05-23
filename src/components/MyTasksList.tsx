import React from 'react';
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  FlatListProps,
  Switch,
} from 'react-native';

type FlatListHeaderComponentProps = {
  isDarkMode: boolean;
  toggleSwitch: () => void;
};

function FlatListHeaderComponent({
  isDarkMode,
  toggleSwitch,
}: FlatListHeaderComponentProps) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Text style={[styles.header, isDarkMode && { color: '#565BFF' }]}>
        Minhas tasks
      </Text>
      <Switch
        trackColor={{ false: '#10101E', true: '#3D3D4D' }}
        thumbColor={isDarkMode ? '#565BFF' : '#f4f3f4'}
        ios_backgroundColor='#10101E'
        onValueChange={toggleSwitch}
        value={isDarkMode}
      />
    </View>
  );
}

interface MyTasksListProps {
  isDarkMode: boolean;
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  toggleSwitch: () => void;
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}

export function MyTasksList({
  tasks,
  onLongPress,
  onPress,
  isDarkMode,
  toggleSwitch,
}: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
            style={[
              styles.taskButton,
              item.done && styles.taskButtonDone,
              item.done &&
                isDarkMode && { backgroundColor: 'rgba(33, 33, 54, 0.3)' },
            ]}
          >
            <View
              testID={`marker-${index}`}
              style={[
                styles.taskMarker,
                item.done && styles.taskMarkerDone,
                isDarkMode && { borderColor: '#565BFF' },
                item.done && isDarkMode && { backgroundColor: '#565BFF' },
              ]}
            />
            <Text
              style={[
                styles.taskText,
                item.done && styles.taskTextDone,
                isDarkMode && { color: '#E1E1E6' },
                item.done &&
                  isDarkMode && { color: 'rgba(225, 225, 230, 0.6)' },
              ]}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      }}
      ListHeaderComponent={
        <FlatListHeaderComponent
          isDarkMode={isDarkMode}
          toggleSwitch={toggleSwitch}
        />
      }
      ListHeaderComponentStyle={{
        marginBottom: 20,
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32,
      }}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    color: '#3D3D4D',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3D3D4D',
    marginRight: 10,
  },
  taskText: {
    color: '#3D3D4D',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(25, 61, 223, 0.1)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#273FAD',
    marginRight: 10,
  },
  taskTextDone: {
    color: '#A09CB1',
    textDecorationLine: 'line-through',
  },
});
