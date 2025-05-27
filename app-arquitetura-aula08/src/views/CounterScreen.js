import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../redux/CounterSlice";

function CounterScreen() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (<View style={styles.container}>
                <Text style={styles.title}> Contador: { count }</Text>
                <Button title="Incrementar" onPress={() => dispatch(increment())}/>
                <Button title="Decrementar" onPress={() => dispatch(decrement())}/>
                <Button title="Resetar" onPress={() => dispatch(reset())}/>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    title: {
        fontSize: 32,
        textAlign: 'center',
        marginBottom: 20
    },
})

export default CounterScreen;