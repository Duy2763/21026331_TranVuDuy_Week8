import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, TextInput } from 'react-native';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [category, setCategory] = useState([
    {id: '1', name: 'Resort', image: 'resort.png'},
    {id: '2', name: 'Homestay', image: 'homestay.png'},
    {id: '3', name: 'Hotel', image: 'hotel.png'},
    {id: '4', name: 'Lodge', image: 'lodge.png'},
    {id: '5', name: 'Villa', image: 'hostel.png'},
    {id: '6', name: 'Apartment', image: 'apartment.png'},
    {id: '7', name: 'Hostel', image: 'hostel.png'},
    {id: '8', name: 'See all', image: 'seeall.png'},
  
  ])
  const [location, setLocation] = useState([
    {id: '1', image: 'photo1.png'},
    {id: '2', image: 'photo2.png'},
    {id: '3', image: 'photo3.png'},
    {id: '4', image: 'photo4.png'},
    {id: '5', image: 'photo5.png'},
  ])
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{backgroundColor: 'rgb(121, 120, 193)', padding: 24, gap: 24}}> 
        <View style={{gap: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}> 
          <Image
            style={{width: 40, height: 40}}
            source={require('./assets/images/logoicon.png')}
          />
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff',  paddingVertical: 4, paddingHorizontal: 8, borderRadius: 8}}> 
            <TextInput
              style={{color: 'gray', flex: 1, padding: 4}}
              placeholder='Search here...'

            />
            <Image
              style={{width: 20, height: 20}}
              source={require('./assets/images/findicon.png')}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', gap: 4}}>
            <Image
              style={{width: 40, height: 40, borderRadius: '50%'}}
              source={require('./assets/images/personicon.png')}
            />
            <View>
              <Text style={{fontWeight: 'bold', color: '#fff'}}>Welcome!</Text>
              <Text style={{color: '#fff'}}>Danna Stroupe!</Text>
            </View>
          </View>
          <Image
              style={{width: 20, height: 20}}
              source={require('./assets/images/logoicon.png')}
            />
        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
