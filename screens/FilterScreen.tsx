import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FilterScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter by Course</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home', { course: 'Starter' })}>
        <Text style={styles.buttonText}>Starters</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home', { course: 'Main' })}>
        <Text style={styles.buttonText}>Mains</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home', { course: 'Dessert' })}>
        <Text style={styles.buttonText}>Desserts</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#00609e',
  },
  button: {
    backgroundColor: '#ff6347',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default FilterScreen;
