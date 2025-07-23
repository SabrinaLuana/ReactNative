import { Text, View } from "react-native";
import React from 'react';
import { Image, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function App() {
  return (
    <View className="flex-1 bg-slate-200 p-4">

      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-lg font-semibold">Best Dress Collection</Text>
        <Ionicons name="cart-outline" size={24} color="black" />
      </View>

      <View className="flex-row flex-wrap mb-4">
        <TouchableOpacity className="py-1.5 px-3 bg-white rounded-full mr-2 mb-2">
          <Text className="text-sm">Category ▼</Text>
        </TouchableOpacity>
        <TouchableOpacity className="py-1.5 px-3 bg-white rounded-full mr-2 mb-2">
          <Text className="text-sm">Color ▼</Text>
        </TouchableOpacity>
        <TouchableOpacity className="py-1.5 px-3 bg-white rounded-full mr-2 mb-2">
          <Text className="text-sm">Size ▼</Text>
        </TouchableOpacity>
        <TouchableOpacity className="py-1.5 px-3 bg-white rounded-full mr-2 mb-2">
          <Text className="text-sm">Price ▼</Text>
        </TouchableOpacity>
        <TouchableOpacity className="py-1.5 px-3 bg-white rounded-full mr-2 mb-2">
          <Text className="text-sm">More ▼</Text>
        </TouchableOpacity>
      </View>


      <ScrollView showsVerticalScrollIndicator={false}>
        
        <View className="flex flex-row mb-5 justify-between">

          <View className="flex flex-col w-100 h-100 bg-white items-center rounded-lg flex-wrap">
            <Image
              className="rounded-lg mb-1.5 w-52"
              source={require('../assets/images/Mulher.png')}
            />
            <Text className="text-base font-medium mb-0.5">Dress Name</Text>
            <Text className="text-sm font-semibold text-pink-600">$299</Text>
          </View>
          <View className="flex flex-col w-100 h-100 bg-white items-center rounded-lg flex-wrap">
            <Image
              className="rounded-lg mb-1.5 w-52"
              source={require('../assets/images/Mulher.png')}
            />
            <Text className="text-base font-medium mb-0.5">Dress Name</Text>
            <Text className="text-sm font-semibold text-pink-600">$299</Text>
          </View>
          <View className="flex flex-col w-100 h-100 bg-white items-center rounded-lg flex-wrap">
            <Image
              className="rounded-lg mb-1.5 w-52"
              source={require('../assets/images/Mulher.png')}
            />
            <Text className="text-base font-medium mb-0.5">Dress Name</Text>
            <Text className="text-sm font-semibold text-pink-600">$299</Text>
          </View>


          

          {/* <View className="w-60 bg-white items-center rounded-lg">
            <Image
              source={require('../assets/images/Mulher.png')}
              className="w-20 h-20 rounded-lg mb-1.5"
              resizeMode="contain"
            />
            <Text className="text-base font-medium mb-0.5">Dress Name</Text>
            <Text className="text-sm font-semibold text-pink-600">$299</Text>
          </View> */}
        </View>

        <View className="flex-row justify-between mb-5">
          <View className="flex flex-col w-100 h-100 bg-white items-center rounded-lg flex-wrap">
              <Image
                className="rounded-lg mb-1.5 w-52"
                source={require('../assets/images/Mulher.png')}
              />
              <Text className="text-base font-medium mb-0.5">Dress Name</Text>
              <Text className="text-sm font-semibold text-pink-600">$299</Text>
            </View>
            <View className="flex flex-col w-100 h-100 bg-white items-center rounded-lg flex-wrap">
              <Image
                className="rounded-lg mb-1.5 w-52"
                source={require('../assets/images/Mulher.png')}
              />
              <Text className="text-base font-medium mb-0.5">Dress Name</Text>
              <Text className="text-sm font-semibold text-pink-600">$299</Text>
            </View>
            <View className="flex flex-col w-100 h-100 bg-white items-center rounded-lg flex-wrap">
              <Image
                className="rounded-lg mb-1.5 w-52"
                source={require('../assets/images/Mulher.png')}
              />
              <Text className="text-base font-medium mb-0.5">Dress Name</Text>
              <Text className="text-sm font-semibold text-pink-600">$299</Text>
            </View>

















          {/* <View className="w-60 bg-white items-center rounded-lg">
            <Image
              source={require('../assets/images/Mulher.png')}
              className="w-20 h-20 rounded-lg mb-1.5"
              resizeMode="cover"
            />
            <Text className="text-base font-medium mb-0.5">Dress Name</Text>
            <Text className="text-sm font-semibold text-pink-600">$299</Text>
          </View>

          <View className="w-60 bg-white items-center rounded-lg">
            <Image
              source={require('../assets/images/Mulher.png')}
              className="w-20 h-20 rounded-lg mb-1.5"
              resizeMode="cover"
            />
            <Text className="text-base font-medium mb-0.5">Dress Name</Text>
            <Text className="text-sm font-semibold text-pink-600">$299</Text>
          </View> */}
        </View>
      </ScrollView>
    </View>
  );
}