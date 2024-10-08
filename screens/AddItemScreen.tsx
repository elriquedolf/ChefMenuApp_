// AddItemScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  course: string;
  price: number;
}

const courses = ['Starter', 'Main', 'Dessert'];

const AddItemScreen = ({ route, navigation }: { route: any; navigation: any }) => {
  const { setMenuItems } = route.params;

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [course, setCourse] = useState(courses[0]);

  const handleSubmit = () => {
    if (!name || !description || !price || isNaN(parseFloat(price))) {
      alert('Please fill all fields correctly!');
      return;
    }

    const newItem: MenuItem = {
      id: Date.now().toString(),
      name,
      description,
      price: parseFloat(price),
      course,
    };

    setMenuItems((prevItems: MenuItem[]) => [...prevItems, newItem]);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Price (R)"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <Text>Select Course</Text>
      {courses.map((c, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setCourse(c)}
          style={[
            styles.courseButton,
            course === c && styles.selectedCourse,
          ]}
        >
          <Text style={course === c ? styles.selectedText : undefined}>{c}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Save</Text>
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 8,
    borderRadius: 4,
  },
  courseButton: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f4f4f4',
    borderRadius: 4,
    alignItems: 'center',
  },
  selectedCourse: {
    backgroundColor: '#ff6347',
  },
  selectedText: {
    color: '#fff',
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

export default AddItemScreen;
