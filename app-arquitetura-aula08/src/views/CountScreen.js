import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import CounterStore from "../stores/CounterStore";
import AppDispatcher from "../dispatcher/AppDispatcher";

function CountScreen() {

    const [count, setCount] = useState(CounterStore.getCount());
    
    useEffect(() => {
        const onChange = () => setCount(CounterStore.getCount());
        CounterStore.addChangeLister(onChange);
        return () => CounterStore.removeChangeListener(onChange);
    }, []);

    const increment = () => {
        AppDispatcher.dispatch({actionType: 'INCREMENT'});
    };

    const decrement = () => {
        AppDispatcher.dispatch({actionType: 'DECREMENT'});
    }

    return (<View style={{ padding: 40 }}>
                <Text style={{ fontSize: 32}}> {count}</Text>
                <Button title="Incrementar" onPress={increment}/>
                <Button title="Decrementar" onPress={decrement}/>
            </View>
    );

}

export default CountScreen;