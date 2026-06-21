import React from 'react';
import { View, Button, StyleSheet, Alert, Linking, SafeAreaView} from 'react-native';

const Url = () => {

    const sendUrl = () => {
        const url = 'https://www.youtube.com/watch?v=_uoVQ5xPZTs';
        Linking.openURL(url);
    };

    return (
        <SafeAreaView style = {styles.container}>
            <View style = {styles.button}>
                <Button title="Ir para Vídeo" onPress={sendUrl} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },

    button: {
        width: '60%',
    },
});

export default Url;