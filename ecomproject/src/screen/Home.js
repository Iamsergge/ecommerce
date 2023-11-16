import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const Home = () => {
  const cards = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg',
      color: '#FFC5C5',
      tittle: 'Nike Air Max 270 React ENG',
      price: 'R1300',
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/3739994/pexels-photo-3739994.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: '#AED9E0',
      price: 'R1800',
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1476055/pexels-photo-1476055.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: '#96C291',
      price: 'R1800',
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/3739994/pexels-photo-3739994.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: '#FFC6AC',
      price: 'R1800',
    },
    // Add more card data if needed
  ];

  const renderCards = () => {
    
    return cards.map((card, index) => ( 
    <View style={styles.gallery}>
      <TouchableOpacity key={index} onPress={() => handleCardPress(card)} style={[styles.card, { backgroundColor: card.color }]}>
        <View >
          <Image source={{ uri: card.image }} style={styles.cardImage} />
          <Text style={styles.cardPrice}>{card.price}</Text>
        </View>
      </TouchableOpacity>
      </View>
    ));
  };

  const handleCardPress = (card) => {
    // Handle the press event for the card
    console.log(`Card ${card.id} pressed`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Home</Text>
      {renderCards()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    flex: 1,
    width: 200,
    marginBottom: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  cardImage: {
    flex: 1,
    width: '100%',
    aspectRatio: 1,
    borderRadius: 8,
  },
  cardPrice: {
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  gallery: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    
  },
  
});

export default Home;
