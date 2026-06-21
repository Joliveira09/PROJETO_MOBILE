import React from 'react';
import { View, Button, StyleSheet, Alert, Linking, SafeAreaView} from 'react-native';


const Url = () => {

    const sendUrl = () => {
        const url = 'https://www.instagram.com/etec_sjc195';
        Linking.openURL(url);
    };

    return (
        <SafeAreaView style = {styles.container}>
            <View style = {styles.button}>
                <Button title="Ir para o insta" onPress={sendUrl} />
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