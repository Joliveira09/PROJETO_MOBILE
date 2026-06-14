import { View, StyleSheet, Image } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

// Importando a imagem local corrigida
import logo from '../assets/adaptive-icon.png';

export default function Ex01Screen() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                
                {/* BLOCO SUPERIOR (Vermelho) */}
                <View style={styles.box1}>
                    {/* Imagem 1: No bloco vermelho */}
                    <Image
                        style={styles.fullImage}
                        resizeMode = 'cover'
                        source={logo} 
                    />
                </View>

                {/* BLOCO INFERIOR (Dividido lado a lado) */}
                <View style={styles.box2}>


                    <View style={styles.subBox1}>
                        <View style={styles.subsubBox1}>

                            <Image
                                style={styles.fullImage}
                                resizeMode = 'cover'
                                source={logo} 
                    />

                        </View>
                        <View style={styles.subsubBox2}>

                            <Image
                                style={styles.fullImage}
                                resizeMode = 'cover'
                                source={logo} 
                    />

                        </View>

                    </View>
                    
                    {/* Lado Direito (Azul) */}
                    <View style={styles.subBox2}>

                        <Image
                            style={styles.fullImage}
                            resizeMode = 'cover'
                            source={logo} 
                        />
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
        flexDirection: 'row',     
        justifyContent: 'center', 
        alignItems: 'center',     
    },

    box2: {
        flex: 1,
        flexDirection: 'row', // Faz o lado verde/roxo/amarelo e o lado azul ficarem lado a lado
    },

    subBox1: {
        flex: 1,
        backgroundColor: 'green',
    },

    subsubBox1: {
        flex: 1,
        backgroundColor: 'yellow',
        justifyContent: 'center', // Centraliza a imagem no bloco amarelo
        alignItems: 'center',     // Centraliza a imagem no bloco amarelo
    },

    subsubBox2: {
        flex: 1,
        backgroundColor: 'purple',
        justifyContent: 'center', // Centraliza a imagem no bloco roxo
        alignItems: 'center',     // Centraliza a imagem no bloco roxo
    },

    subBox2: {
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'center', // Centraliza a imagem no bloco azul
        alignItems: 'center',     // Centraliza a imagem no bloco azul

    },
});