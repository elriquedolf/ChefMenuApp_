// HomeScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  course: string;
  price: number;
}

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulating data fetch
    const fetchData = async () => {
      // Simulated delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Here, you can replace this with actual fetching logic
      const data: MenuItem[] = [
        { id: '1', name: 'Spaghetti', description: 'Delicious spaghetti', price: 85, course: 'Main' },
        { id: '2', name: 'Cheesecake', description: 'Creamy cheesecake', price: 50, course: 'Dessert' },
      ];
      setMenuItems(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu Items</Text>
      <Text>Total Items: {menuItems.length}</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#00609e" />
      ) : menuItems.length === 0 ? (
        <Text style={styles.emptyMessage}>No menu items available. Add some!</Text>
      ) : (
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate('Details', { itemId: item.id })} // Navigate to details
            >
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>R{item.price.toFixed(2)}</Text>
            </TouchableOpacity>
          )}
        />
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Add Item', { setMenuItems })}
      >
        <Text style={styles.buttonText}>Add New Item</Text>
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
  emptyMessage: {
    fontSize: 16,
    color: '#757575',
    marginVertical: 20,
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 3, // Shadow effect for Android
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#22489e',
  },
  itemPrice: {
    fontSize: 16,
    color: '#333',
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

export default HomeScreen;
