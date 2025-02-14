import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from "expo-router";

/* links
  =========inspiracao
  https://dribbble.com/shots/15266900-Mobile-app-login-screen-and-sign-up-flow
  https://dribbble.com/shots/21113101-Online-Course-App-Onboarding-Login-Register-Forgot-Password

  ========background
  https://www.freepik.com/free-photo/beautiful-brown-horse-close-up-muzzle-cute-look-mane-background-running-field-corral-trees-horses-are-wonderful-animals_27212528.htm#fromView=keyword&page=1&position=12&uuid=ca780942-ae66-4e37-80bf-a8c040d5437a

  ========rn
  https://reactnative.dev/docs/style
  https://reactnative.dev/docs/safeareaview
  https://reactnative.dev/docs/imagebackground
*/

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Link href="/login" style={styles.btn}>
        <Text>Tela de Login</Text>
      </Link>
      <Link href="/sign-up" style={styles.btn}>
        Tela de Sign-up
      </Link>
      <Link href="/inexistente" style={styles.btn}>
        Tela inexistente
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    flex: 1,
    backgroundColor: 'green',
    borderRadius: 10,
    height: '15%',
    margin: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
}
});

export default LoginScreen;