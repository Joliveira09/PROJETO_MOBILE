import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    Share,
    Alert,
} from "react-native";
import * as Clipboard from "expo-clipboard";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Movie } from "../movies/index";
import { styles, colors } from "./styles";

export type RootStackParamList = {
    CompartilharMovies: { movie: Movie };
};

type Props = NativeStackScreenProps<RootStackParamList, "CompartilharMovies">;

export default function CompartilharMovies({ navigation, route }: Props) {
    const { movie } = route.params;

    const mensagemCompartilhamento = `Confira o filme "${movie?.titulo}"! Nota: ${movie?.nota || "N/A"}/5.`;

    const handleShareSystem = async () => {
        try {
            await Share.share({
                message: mensagemCompartilhamento,
            });
        } catch (error) {
            Alert.alert("Erro", "Não foi possível abrir as opções de compartilhamento.");
        }
    };

    const handleCopiarLink = async () => {
        await Clipboard.setStringAsync(movie?.trailerUrl || mensagemCompartilhamento);
        Alert.alert("Sucesso", "Link copiado para a área de transferência!");
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.header}>

                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={24} color="#FFF" />
                    </TouchableOpacity>

                    <Text style={styles.headerTitle}>Compartilhar Filme</Text>

                    <View style={{ width: 24 }} />

                </View>

                <View style={styles.cardMovie}>
                    {movie?.capa ? (
                        <Image source={{ uri: movie.capa }} style={styles.poster} resizeMode="cover" />
                    ) : (
                        <View style={[styles.poster, styles.posterPlaceholder]}>
                            <Text style={{ color: "#777" }}>Sem Capa</Text>
                        </View>
                    )}

                    <View style={styles.infoContainer}>
                        <Text style={styles.movieTitle}>{movie?.titulo || "Sem título"}</Text>

                        <Text style={styles.movieSubtitle}>
                            {movie?.ano || "N/A"} • {movie?.genero || "Gênero não informado"}
                        </Text>

                        <View style={styles.ratingRow}>
                            <Ionicons name="star" size={16} color={colors.primary} />
                            <Text style={styles.ratingText}>
                                {movie?.nota ? `${movie.nota}/5` : "N/A"}
                            </Text>

                            <View style={styles.badgeStatus}>
                                <Text style={styles.badgeStatusText}>{movie?.status || "Pendente"}</Text>
                            </View>
                        </View>

                        <Text style={styles.description} numberOfLines={4}>
                            {movie?.descricao || "Sem descrição disponível."}
                        </Text>
                    </View>
                </View>

                <Text style={styles.sectionTitle}>Compartilhar via</Text>

                <View style={styles.gridContainer}>
                    <TouchableOpacity style={styles.gridItem} onPress={handleShareSystem}>
                        <View style={[styles.iconBg, { backgroundColor: "#25D366" }]}>
                            <Ionicons name="logo-whatsapp" size={28} color="#FFF" />
                        </View>
                        <Text style={styles.iconLabel}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.gridItem} onPress={handleShareSystem}>
                        <View style={[styles.iconBg, { backgroundColor: "#E1306C" }]}>
                            <Ionicons name="logo-instagram" size={28} color="#FFF" />
                        </View>
                        <Text style={styles.iconLabel}>Instagram</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.gridItem} onPress={handleShareSystem}>
                        <View style={[styles.iconBg, { backgroundColor: "#1877F2" }]}>
                            <Ionicons name="logo-facebook" size={28} color="#FFF" />
                        </View>
                        <Text style={styles.iconLabel}>Facebook</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.gridItem} onPress={handleShareSystem}>
                        <View style={[styles.iconBg, { backgroundColor: "#29B6F6" }]}>
                            <FontAwesome5 name="telegram-plane" size={24} color="#FFF" />
                        </View>
                        <Text style={styles.iconLabel}>Telegram</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.gridItem} onPress={handleShareSystem}>
                        <View style={[styles.iconBg, { backgroundColor: "#2196F3" }]}>
                            <Ionicons name="mail" size={26} color="#FFF" />
                        </View>
                        <Text style={styles.iconLabel}>E-mail</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.gridItem} onPress={handleCopiarLink}>
                        <View style={[styles.iconBg, { backgroundColor: "#374151" }]}>
                            <Ionicons name="link" size={26} color="#FFF" />
                        </View>
                        <Text style={styles.iconLabel}>Copiar link</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.gridItem} onPress={handleShareSystem}>
                        <View style={[styles.iconBg, { backgroundColor: "#4ADE80" }]}>
                            <Ionicons name="chatbubble-ellipses" size={26} color="#FFF" />
                        </View>
                        <Text style={styles.iconLabel}>Mensagens</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.gridItem} onPress={handleShareSystem}>
                        <View style={[styles.iconBg, { backgroundColor: "#374151" }]}>
                            <Ionicons name="ellipsis-horizontal" size={26} color="#FFF" />
                        </View>
                        <Text style={styles.iconLabel}>Mais opções</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.cancelButtonText}>Cancelar</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}