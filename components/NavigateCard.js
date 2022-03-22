import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAP_API_KEY } from '@env';
import tw from 'twrnc';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native';
import NavFavourites from './NavFavourites';
import { Icon } from 'react-native-elements';


const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Hello there!</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
        <GooglePlacesAutocomplete
          styles={toInputBoxStyles}
          placeholder='Where to?'
          minLength={2}
          fetchDetails={true}
          enablePoweredByContainer={false}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
          query={{
            key: GOOGLE_MAP_API_KEY,
            language: 'en'
          }}
          returnKeyType={'search'}
          onPress={(data, details = null) => {
            dispatch(setDestination({
              location: details.geometry.location,
              description: data.description
            }));
            navigation.navigate('RideOptionsCard');
          }}

          autoFocus={false}
          listViewDisplayed='auto'
          renderDescription={row => row.description}
        />
        </View>
        <NavFavourites/>
        <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
          <TouchableOpacity
            onPress={() => navigation.navigate('RideOptionsCard')}
            style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}>
            <Icon name='car' type='font-awesome' color='white' size={16}></Icon>
            <Text style={tw`text-white text-center`}>Rides</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
            <Icon name='fast-food-outline' type='ionicon' color='black' size={16}></Icon>
            <Text style={tw`text-center`}>Eats</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 20,
    flex: 0
  },
  textInput: {
    backgroundColor: '#DDDDDF',
    borderRadius: 0,
    fontSize: 18
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0
  }
});