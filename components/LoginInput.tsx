import { PropsWithChildren } from "react";
import { StyleSheet, TextInput } from "react-native";

type Props = PropsWithChildren<{
    placeholderTxt: string
}>;

const LoginInput = ({placeholderTxt}: Props) => {
    return (
        <TextInput style={styles.input}
        placeholder={placeholderTxt}>
        </TextInput>
    );
};

const styles = StyleSheet.create({
    input: {
        color: 'black',
        height: '15%',
        margin: '5%',
        borderRadius: 10,
        backgroundColor: 'white'
    }
});

export default LoginInput;