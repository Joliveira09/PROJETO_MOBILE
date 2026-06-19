import { View, StyleSheet, Image, Pressable } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import logo from '../assets/adaptive-icon.png';

export default function Ex01Screen() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>

                {/* Parte superior */}
                <View style={styles.box1}>
                    <Pressable
                        style={{ flex: 1 }}
                        onPress={() => alert('Imagem Vermelha')}
                    >
                        <Image
                            style={styles.fullImage}
                            resizeMode="cover"
                            source={logo}
                        />
                    </Pressable>
                </View>

                {/* Parte inferior */}
                <View style={styles.box2}>

                    {/* Lado esquerdo */}
                    <View style={styles.subBox1}>

                        {/* Amarelo */}
                        <View style={styles.subsubBox1}>
                            <Pressable
                                style={{ flex: 1 }}
                                onPress={() => alert('Imagem Amarela')}
                            >
                                <Image
                                    style={styles.fullImage}
                                    resizeMode="cover"
                                    source={logo}
                                />
                            </Pressable>
                        </View>

                        {/* Roxo */}
                        <View style={styles.subsubBox2}>
                            <Pressable
                                style={{ flex: 1 }}
                                onPress={() => alert('Imagem Roxa')}
                            >
                                <Image
                                    style={styles.fullImage}
                                    resizeMode="cover"
                                    source={logo}
                                />
                            </Pressable>
                        </View>

                    </View>

                    {/* Azul */}
                    <View style={styles.subBox2}>
                        <Pressable
                            style={{ flex: 1 }}
                            onPress={() => alert('Imagem Azul')}
                        >
                            <Image
                                style={styles.fullImage}
                                resizeMode="cover"
                                source={logo}
                            />
                        </Pressable>
                    </View>

                </View>

            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    fullImage: {
        width: '100%',
        height: '100%',
    },

    box1: {
        flex: 1,
        backgroundColor: 'red',
    },

    box2: {
        flex: 1,
        flexDirection: 'row',
    },

    subBox1: {
        flex: 1,
    },

    subsubBox1: {
        flex: 1,
        backgroundColor: 'yellow',
    },

    subsubBox2: {
        flex: 1,
        backgroundColor: 'purple',
    },

    subBox2: {
        flex: 1,
        backgroundColor: 'blue',
    },
});