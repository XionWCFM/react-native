import { Stack } from 'expo-router';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/ui/theme';
const RootLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            //header 표시 안하기
            headerShown: false,
          }}
        />
      </Stack>
    </ThemeProvider>
  );
};

export default RootLayout;
