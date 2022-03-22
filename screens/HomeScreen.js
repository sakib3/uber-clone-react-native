import { StyleSheet, SafeAreaView, View, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAP_API_KEY } from '@env';
import { useDispatch } from 'react-redux';
import { setOrigin, setDestination } from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';
const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: 'contain'
          }}
          source={{
            uri: 'https://links.papareact.com/gzs'
          }} />


        <GooglePlacesAutocomplete
          placeholder='Where from?'
          minLength={2} // minimum length of text to search

          enablePoweredByContainer={false}
          query={{
            // available options: https://developers.google.com/places/web-service/autocomplete
            key: GOOGLE_MAP_API_KEY,
            language: 'en', // language of the results
          }}

          styles={{
            textInput: {
              fontSize: 18
            },
            container: {
              flex: 0
            }
          }}

          nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
          debounce={400} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.

          onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description
            }));
            dispatch(setDestination(null));
          }}
          fetchDetails={true}

          autoFocus={false}
          returnKeyType={'search'}
          listViewDisplayed='auto'    // true/false/undefined
          renderDescription={row => row.description} // custom description render
        />

        <NavOptions />
        <NavFavourites />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen;