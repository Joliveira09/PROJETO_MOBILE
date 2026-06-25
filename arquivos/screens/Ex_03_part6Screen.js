import { useState, useEffect } from "react";
import { Button, Image, View, StyleSheet, Alert, FlatList, Dimensions, } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import { MaterialIcons } from "@expo/vector-icons";

export default function App() {
  const [images, setImages] = useState([]);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasLibraryPermission, setHasLibraryPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const cameraStatus =
        await ImagePicker.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");

      const libraryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasLibraryPermission(libraryStatus.status === "granted");
    })();
  }, []);

  const pickImage = async () => {
    if (hasLibraryPermission === false) {
      Alert.alert(
        "Permissão necessária",
        "Sem permissão para acessar a galeria."
      );
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const novaImagemUri = result.assets[0].uri;
      setImages((prevImages) => [...prevImages, novaImagemUri]);
    }
  };

  const takePhoto = async () => {
    if (hasCameraPermission === false) {
      Alert.alert(
        "Permissão necessária",
        "Sem permissão para acessar a câmera."
      );
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const novaImagemUri = result.assets[0].uri;
      setImages((prevImages) => [...prevImages, novaImagemUri]);
    }
  };

  const deleteImage = (indexToRemove) => {
    setImages((prevImages) =>
      prevImages.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Button title="Escolha sua imagem" onPress={pickImage} />
        <View style={{ height: 15 }} />
        <Button title="Tirar uma foto" onPress={takePhoto} />
      </View>

      <FlatList
        data={images}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={styles.listContent}
        renderItem={({ item, index }) => (
          <View style={styles.imageContainer}>
            <Image source={{ uri: item }} style={styles.gridImage} />

            <MaterialIcons
              name="close"
              size={28}
              color="white"
              style={styles.deleteButton}
              onPress={() => deleteImage(index)}
            />
          </View>
        )}
      />
    </View>
  );
}

const numColumns = 2;
const imageSize = Dimensions.get("window").width / numColumns - 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: "#222",
  },

  topContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  listContent: {
    alignItems: "center",
    paddingBottom: 20,
  },

  imageContainer: {
    position: "relative",
    margin: 6,
  },

  gridImage: {
    width: imageSize,
    height: imageSize,
    borderRadius: 8,
  },

  deleteButton: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "rgba(0,0,0,0.6)",
    borderRadius: 20,
    padding: 2,
  },
});