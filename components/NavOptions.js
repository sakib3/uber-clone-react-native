import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';

const data = [
    {
        id: 1,
        title: 'Get a ride',
        image: 'https://links.papareact.com/3pn',
        screen: 'MapScreen'
    },
    {
        id: 2,
        title: 'Order food',
        image: 'https://links.papareact.com/28w',
        screen: 'EatsScreen'
    }
];

const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);
    return (
        <FlatList
            data={data}
            horizontal
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => navigation.navigate(item.screen)}
                    style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-36`}
                    disabled={!origin}
                >
                    <View style={tw`${!origin && 'opacity-30'}`}>
                        <Image
                            style={{ width: 120, height: 120, resizeMode: 'contain' }}
                            source={{
                                uri: item.image
                            }}
                        />
                        <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                        <Icon
                            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                            name='arrowright'
                            type='antdesign'
                            color='white'
                        />
                    </View>
                </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
        />
    );
}

export default NavOptions;