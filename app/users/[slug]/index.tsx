import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

interface indexProps {}

const index = ({}: indexProps) => {
  return (
    <View>
      <Text>hfklgmklsdml</Text>
      <Link href={'/'}>홈으로돌아가기</Link>
    </View>
  );
};

export default index;
