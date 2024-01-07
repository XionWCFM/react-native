import { Link, router } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { ClickableComponent } from '../../src/ui/common/button/button';
interface indexProps {}

const index = ({}: indexProps) => {
  return (
    <View>
      <Link href={'/users/1'}>이동하기</Link>
      <ClickableComponent onPress={() => {}}>
        <Text>안녕하세요</Text>
      </ClickableComponent>
      <Pressable onPress={() => router.push('/users/2')}>
        <Text>Go to user2</Text>
      </Pressable>
    </View>
  );
};

export default index;
