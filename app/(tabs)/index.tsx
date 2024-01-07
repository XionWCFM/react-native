import { Link, router } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import styled from 'styled-components/native';
import IonIcons from '@expo/vector-icons/Ionicons';

interface indexProps {}

const ButtonContainer = styled.TouchableOpacity`
  width: 120px;
  height: 40px;
  padding: 12px;
  border-radius: 10px;
`;
const ButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
`;
const StyledView = styled.View`
  background-color: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.spacing.medium}px;
`;

const index = ({}: indexProps) => {
  return (
    <StyledView>
      <IonIcons name={'md-checkmark'} size={32} color={'green'} />
      <ButtonContainer>
        <ButtonText>안녕하세요</ButtonText>
      </ButtonContainer>
      <Text>dsagsdi</Text>
      <Link href={'/users/1'}>이동하기</Link>
      <Pressable onPress={() => router.push('/users/2')}>
        <Text>Go to user2</Text>
      </Pressable>
    </StyledView>
  );
};

export default index;
