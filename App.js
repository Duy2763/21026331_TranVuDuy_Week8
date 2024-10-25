import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, Image, TextInput, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-web';

export default function App() {
  const [category, setCategory] = useState([
    {id: '1', name: 'Resort', image: require('./assets/images/resort.png')},
    {id: '2', name: 'Homestay', image: require('./assets/images/homestay.png')},
    {id: '3', name: 'Hotel', image: require('./assets/images/hotel.png')},
    {id: '4', name: 'Lodge', image: require('./assets/images/lodge.png')},
    {id: '5', name: 'Villa', image: require('./assets/images/hostel.png')},
    {id: '6', name: 'Apartment', image: require('./assets/images/apartment.png')},
    {id: '7', name: 'Hostel', image: require('./assets/images/hostel.png')},
    {id: '8', name: 'See all', image: require('./assets/images/seeall.png')},
  
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
      
      <ScrollView style={{flex: 1, paddingHorizontal: 32, paddingVertical: 16}}>
        <View>
          <View style={{paddingBottom: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <Text>Category</Text>
              <Image
                style={{width: 20, height: 20}}
                source={require('./assets/images/3gach.png')}
              />
          </View>
          <FlatList
            data={category}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={{alignItems: 'center',}}>
                  <Image
                    style={{width: 60, height: 60}}
                    source={item.image}
                  />
                  <Text>
                      {item.name}
                  </Text>
              </View>
            )}
            numColumns={4} 
            columnWrapperStyle={{justifyContent: 'space-between', paddingBottom: 10}}
            // contentContainerStyle={{paddingBottom: 16,}}

          />
          
        </View>
      </ScrollView>

      <View style={{backgroundColor: 'rgb(121, 120, 193)', flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 16, paddingBottom: 24}}> 
        <View>
          <Image
            style={{width: 30, height: 30}}
            source={require('./assets/images/homeicon.png')}
          />
          <Text style={{color: '#fff'}}>Home</Text>
        </View>
        <View>
          <Image
            style={{width: 30, height: 30}}
            source={require('./assets/images/exploreicon.png')}
          />
          <Text style={{color: '#fff'}}>Explore</Text>
        </View>
        <View>
          <Image
            style={{width: 30, height: 30}}
            source={require('./assets/images/searchicon.png')}
          />
          <Text style={{color: '#fff'}}>Search</Text>
        </View>
        <View>
          <Image
            style={{width: 30, height: 30}}
            source={require('./assets/images/profileicon.png')}
          />
          <Text style={{color: '#fff'}}>Profile</Text>
        </View>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
