import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({

    body: {
        flex: 1,
        backgroundColor: colors.background,
        fontFamily: "Arial",
    },

    container: {
        flex: 1,
        paddingHorizontal: 20,
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
        marginTop: 80,
        alignItems: "center",
    },

    headerSpacer: {
        minWidth: 30,
    },

    backButton: {
        marginRight: 10,
        justifyContent: "flex-start",
        padding: 5,
    },

    backButtonText: {
        color: colors.text,
        fontSize: 24,
        fontWeight: "900",
    },

    titulo: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

    },

    article: {
        marginTop: 10,
    },

    text: {
        color: colors.text,
        fontFamily: "Arial",
        fontWeight: "bold",
        fontSize: 26,
        textAlign: "center",
    },

    infoImg: {
        flexDirection: "row",
    },

    capa: {
        width: 160,
        height: 220,
        borderRadius: 8,
        backgroundColor: "#2C2C2E",
    },

    info: {
        flex: 1,
        flexDirection: "column",
        marginLeft: 20,
    },

    rowInfo: {
        flexShrink: 1,
    },

    textTitulo: {
        fontSize: 20,
        color: colors.text,
        fontWeight: "bold",
        marginBottom: 10,
    },

    textSubtitulo: {
        color: colors.textSecondary ?? "#8E8E93",
        fontSize: 16,
        marginBottom: 10,
    },

    cardNota: {
        flexDirection: "row",
        marginTop: 6,
    },

    estrelaNota: {
        color: colors.primary,
        fontSize: 14,
    },

    textNota: {
        color: colors.text,
        marginLeft: 3,
        fontSize: 14,
    },

    textStatus: {
        backgroundColor: colors.primary,
        fontFamily: "Arial",
        fontWeight: "bold",
        borderRadius: 10,
        paddingHorizontal: 3,
        paddingVertical: 2,
        marginLeft: 50,
    },

    containerGenero: {
        flexDirection: "column",
        marginTop: 10,
    },

    tituloGenero: {
        color: colors.text,
    },

    genero: {
        color: colors.textSecondary,
        marginTop: 3,
    },

    containerDiretor: {
        flexDirection: "column",
        marginTop: 10,
    },

    tituloDiretor: {
        color: colors.text,
    },

    diretor: {
        color: colors.textSecondary,
        marginTop: 3,
    },

    section: {

    },

    descricao: {
        backgroundColor: colors.cardBackground,
        marginTop: 15,
        borderWidth: 1,
        borderColor: colors.inputBackground,
        padding: 10,
        borderRadius: 10,
    },

    tituloDescricao: {
        color: colors.text,
        fontWeight: "bold",
        marginBottom: 5,
        fontSize: 16,
    },

    textDescricao: {
        color: colors.textSecondary,
    },

    avaliacao: {
        backgroundColor: colors.cardBackground,
        marginTop: 10,
        borderWidth: 1,
        borderColor: colors.inputBackground,
        padding: 10,
        borderRadius: 10,
    },

    tituloAvaliacao: {
        color: colors.text,
        fontWeight: "bold",
        marginBottom: 5,
        fontSize: 16,
    },

    estrelaAvaliacao: {

    },

    starsContainer: {
        flexDirection: "row",
        gap: 12,
        marginVertical: 6,
    },

    starText: {
        fontSize: 32,
        color: colors.primary || "red",
    },


    statusContainer: {
        flexDirection: "row",
        gap: 8,
        marginVertical: 6,
    },

    textAvaliacao: {
        color: colors.textSecondary,
    },

    trailer: {
        backgroundColor: colors.cardBackground,
        marginTop: 10,
        borderWidth: 1,
        borderColor: colors.inputBackground,
        padding: 10,
        borderRadius: 10,
    },

    subContainerTrailer: {
        flexDirection: "row"
    },

    tituloTrailer: {
        color: colors.text,
        fontWeight: "bold",
        marginBottom: 6,
    },

    textTrailer: {
        color: colors.textSecondary,
        marginLeft: 15,
        marginTop: 3,
    },

    image: {
        width: 30,
        height: 20,
        borderRadius: 5,

    },

    atividades: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
        gap: 8,
    },
    curtir: {
        flex: 1,
        height: 70,
        backgroundColor: "#1C1C1E",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#333",
        justifyContent: "center",
        alignItems: "center",
    },
    editar: {
        flex: 1,
        height: 70,
        backgroundColor: "#1C1C1E",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#FFC107",
        justifyContent: "center",
        alignItems: "center",
    },
    excluir: {
        flex: 1,
        height: 70,
        backgroundColor: "#1C1C1E",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#E50914",
        justifyContent: "center",
        alignItems: "center",
    },
    compartilhar: {
        flex: 1,
        height: 70,
        backgroundColor: "#1C1C1E",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#4CAF50",
        justifyContent: "center",
        alignItems: "center",
    },
    actionText: {
        color: "#FFF",
        fontSize: 12,
        marginTop: 4,
    },

});