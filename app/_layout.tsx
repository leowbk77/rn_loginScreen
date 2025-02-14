// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
// import { useEffect } from 'react';
// import 'react-native-reanimated';
// import { useColorScheme } from '@/hooks/useColorScheme';

// nav : https://www.youtube.com/watch?v=8336fcFV_T4

export default function RootLayout() {
  return (
      <>
        <StatusBar style='light' backgroundColor='#000000'/>
        <Stack initialRouteName='login'>
          {/*<Stack.Screen name="(tabs)" options={{ headerShown: false }} />*/}
          <Stack.Screen name="index"  options={{ headerShown: false }} />
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="sign-up" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack> 
      </>
  );
}
