import { StyleSheet, ImageBackground, Text } from "react-native";

const SignUp = () => {
    return (
        <ImageBackground
        source={require('@/assets/images/vacalo.jpg')}
        style={styles.backgroundImg}
        resizeMode='cover'>
            <Text style={styles.text}>SignUp</Text>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImg: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
        color: 'white',
        marginLeft: '5%'
    }
  });

export default SignUp;