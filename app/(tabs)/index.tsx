import { Link, router } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

interface indexProps {}

const index = ({}: indexProps) => {
  return (
    <View>
      <Text>dsagsdi</Text>
      <Link href={'/users/1'}>이동하기</Link>
      <Pressable onPress={() => router.push('/users/2')}>
        <Text>Go to user2</Text>
      </Pressable>
    </View>
  );
};

export default index;
