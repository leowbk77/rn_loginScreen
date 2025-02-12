import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SignUp from '@/views/SignUp';
    
const SignUpScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark"/>
            <SignUp/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default SignUpScreen;