import { Text, View } from "react-native";

// export default function Index() {
//   return (
//     <View className="flex-1 justify-center items-center">
//       <Text className="text-5xl text-pink-900 p-50 ">Bem vindo</Text>
//     </View>
//   );
// }

import React from 'react';
import { Image, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function App() {
  return (
    <View className="flex-1 bg-gray-500 p-4">

      {/* Cabeçalho */}
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-lg font-semibold">Best Dress Collection</Text>
        <Ionicons name="cart-outline" size={24} color="black" />
      </View>

      {/* Filtros */}
      <View className="flex-row flex-wrap mb-4">
        {['Category', 'Color', 'Size', 'Price', 'More'].map((item, i) => (
          <TouchableOpacity key={i} className="py-1.5 px-3 bg-gray-200 rounded-full mr-2 mb-2">
            <Text className="text-sm">{item} ▼</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Produtos */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-row justify-between mb-5">
          <View className="w-[46%] bg-white items-center rounded-lg">
            <Image
              source={require('../../assets/images/Mulher.png')}
              className="w-[90%] h-32 rounded-lg mb-1.5"
              resizeMode="cover"
            />
            <Text className="text-base font-medium mb-0.5">Dress Name</Text>
            <Text className="text-sm font-semibold text-pink-600">$299</Text>
          </View>

          <View className="w-[46%] bg-white items-center rounded-lg">
            <Image
              source={require('../../assets/images/Mulher.png')}
              className="w-[90%] h-32 rounded-lg mb-1.5"
              resizeMode="cover"
            />
            <Text className="text-base font-medium mb-0.5">Dress Name</Text>
            <Text className="text-sm font-semibold text-pink-600">$299</Text>
          </View>
        </View>

        {/* Mais dois cards abaixo */}
        <View className="flex-row justify-between mb-5">
          <View className="w-[46%] bg-white items-center rounded-lg">
            <Image
              source={require('../../assets/images/Mulher.png')}
              className="w-[90%] h-32 rounded-lg mb-1.5"
              resizeMode="cover"
            />
            <Text className="text-base font-medium mb-0.5">Dress Name</Text>
            <Text className="text-sm font-semibold text-pink-600">$299</Text>
          </View>

          <View className="w-[46%] bg-white items-center rounded-lg">
            <Image
              source={require('../../assets/images/Mulher.png')}
              className="w-[90%] h-32 rounded-lg mb-1.5"
              resizeMode="cover"
            />
            <Text className="text-base font-medium mb-0.5">Dress Name</Text>
            <Text className="text-sm font-semibold text-pink-600">$299</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}