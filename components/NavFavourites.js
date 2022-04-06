import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements';
import tw from 'twrnc';
const data = [
    {
        id: '1',
        icon: 'home',
        localtion: 'Home',
        destination: 'Trollvägen 3 , Sollentuna, Sweden'
    },
    {
        id: '2',
        icon: 'briefcase',
        localtion: 'Work',
        destination: 'Solna centrum, Sweden'
    },
];
const NavFavourites = () => {
    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => (
                    <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
                )}
                renderItem={({ item: { localtion, destination, icon } }) => (
                    <TouchableOpacity style={tw`flex-row items-center p-5`}>
                        <Icon
                            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                            name={icon}
                            type='ionicon'
                            color='white'
                            size={18}
                        />
                        <View>
                            <Text style={tw`font-semibold text-lg`}>{localtion}</Text>
                            <Text style={tw`text-gray-500`}>{destination}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default NavFavourites;
