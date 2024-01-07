import { Stack } from 'expo-router';

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name={'index'}
        options={{
          headerTitle: 'Home page',
          headerStyle: {
            backgroundColor: 'red',
          },
        }}
      />
      <Stack.Screen
        name={'users/[slug]/index'}
        options={{
          headerTitle: 'users page',
        }}
      />
    </Stack>
  );
};

export default RootLayout;
