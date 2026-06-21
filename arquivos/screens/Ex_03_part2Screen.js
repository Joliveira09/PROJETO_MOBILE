import React from 'react';
import { View, Button, StyleSheet, Alert, Linking, SafeAreaView} from 'react-native';

const Sms = () => {

    const sendSms = () => {
        const phoneNumber = '12991431006';
        const message = 'Olá, gatão';

        const url = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;

        Linking.canOpenURL(url)
            .then((supported) => {
                if (supported) {
                    Linking.openURL(url);
                }
                else {
                    Alert.alert('Erro', 'Este dispositivo não suporta envio de SMS.');
                }

            })
            .catch((err) => console.error('Erro ao enviar SMS', err));
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.button}>

                <Button title="Enviar SMS" onPress={sendSms}/>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
        container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },

    button: {
        width: '60%',
    },
})

export default Sms;