import { PropsWithChildren } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = PropsWithChildren<{
    title: string
}>;

const Button = ({title}: Props) => {
    return (
    <Pressable style={styles.btn}>
        <Text style={styles.title}>{title}</Text>
    </Pressable>
    );
};

// https://reactnative.dev/docs/text-style-props
const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'green',
        borderRadius: 10,
        height: '15%',
        margin: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        textAlign: 'center',
    }
});

export default Button;