import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

interface indexProps {}

const index = ({}: indexProps) => {
  return (
    <View>
      <Text>dsagsdi</Text>
      <Link href={'/users/1'}>이동하기</Link>
    </View>
  );
};

export default index;
