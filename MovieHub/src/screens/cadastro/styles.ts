import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: colors.background,
    },

    container: {
        flex: 1,
        alignItems: "center",
        borderRadius: 10,
        padding: 24,
        marginTop: 30,
    },

    tituloSubtitulo: {
        alignItems: "center",
        marginBottom: 20,
    },

    text: {
        color: colors.text,
        fontFamily: "Arial",
        fontWeight: "bold",
        fontSize: 26,
        textAlign: "center",
    },

    subtitulo: {
        color: colors.textSecondary,
        marginTop: 4,
    },


    avatarContainer: {
        alignItems: "center",
        marginBottom: 20,
    },

    avatarCircle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: "rgba(255,255,255,0.08)",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
    },

    avatarImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },

    cameraIconLarge: {
        fontSize: 36,
        opacity: 0.6,
    },

    badgeIcon: {
        position: "absolute",
        bottom: 2,
        right: 2,
        backgroundColor: "#FFB800",
        borderRadius: 12,
        width: 26,
        height: 26,
        justifyContent: "center",
        alignItems: "center",
    },

    badgeCameraText: {
        fontSize: 12,
    },

    addPhotoText: {
        color: "#FFB800",
        marginTop: 8,
        fontSize: 13,
        fontWeight: "500",
    },

    info: {
        color: colors.textSecondary,
        marginBottom: 5,
    },

    input: {
        backgroundColor: colors.inputBackground,
        color: colors.textSecondary,
        paddingHorizontal: 10,
        borderRadius: 8,
        width: 300,
        height: 40,
        marginBottom: 12,
    },

    form: {
        alignItems: "center",
        width: "100%",
    },

    textInput: {
        alignItems: "flex-start",
    },

    cadastrar: {
        marginTop: 20,
    },
    
    button: {
        borderRadius: 8,
        backgroundColor: "#FFB800",
        height: 45,
        width: 300,
        alignItems: "center",
        justifyContent: "center",
    },

    textButton: {
        color: "#000",
        fontSize: 18,
        fontWeight: "bold",
    },

    login: {
        flexDirection: "row",
        marginTop: 15,
    },

    loginText: {
        color: colors.textSecondary,
    },
});