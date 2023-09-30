import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button } from 'react-native';

function FirstPage() {
  const [catImage, setCatImage] = useState(null);
  const [loading, setLoading] = useState(true);

    async function fetchRandomCat() {
      try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data && data.length > 0) {
          setCatImage(data[0].url);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching cat data:', error);
        setLoading(false);
      }
    }

useEffect(()=>{
   fetchRandomCat();
},[]);


 
  const reloadCatImage = () => {
    setLoading(true);
    fetchRandomCat();
  };

  return (
    <View>
      <Text style={{fontSize:25}}>Shivam Shakya</Text>
      <Text>Random Cat Image</Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <>
           
          <Image
            source={{ uri: catImage }}
            style={{ width: 300, height: 300 }}
          />
          <Button title="Load Another Cat" onPress={reloadCatImage} />
        </>
      )}
    </View>
  );
}

export default FirstPage;

