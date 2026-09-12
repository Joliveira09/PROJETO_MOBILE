import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { styles, colors } from "./styles";

export default function ProfileScreen({ navigation }: any) {
  const [usuario, setUsuario] = useState<any>(null);
  const [stats, setStats] = useState({
    total: 0,
    favoritos: 0,
    assistidos: 0,
    queroAssistir: 0,
  });

  useFocusEffect(
    useCallback(() => {
      carregarDados();
    }, [])
  );

  async function carregarDados() {
    try {
      const userData = await AsyncStorage.getItem("@user_data");
      if (userData) {
        setUsuario(JSON.parse(userData));
      }

      const filmesData = await AsyncStorage.getItem("@filmes_data");
      if (filmesData) {
        const filmes = JSON.parse(filmesData);
        setStats({
          total: filmes.length,
          favoritos: filmes.filter((f: any) => f.favorito === true).length,
          assistidos: filmes.filter((f: any) => f.status === "Assistido").length,
          queroAssistir: filmes.filter((f: any) => f.status === "Quero assistir").length,
        });
      }
    } catch (error) {
      console.log("Erro ao carregar dados do perfil:", error);
    }
  }

  const menuItems = [
    { id: "1", title: "Editar perfil", icon: "user" },
    { id: "2", title: "Alterar foto", icon: "camera" },
    { id: "3", title: "Alterar senha", icon: "lock" },
    { id: "4", title: "Preferências", icon: "sliders" },
    { id: "5", title: "Sincronizar dados", icon: "cloud" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ width: 24 }} />
        <Text style={styles.headerTitle}>Meu Perfil</Text>
        <TouchableOpacity>
          <Feather name="settings" size={22} color={colors.text} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <View style={styles.profileContainer}>
          <View style={styles.avatarContainer}>
            {usuario?.foto ? (
              <Image source={{ uri: usuario.foto }} style={styles.avatar} />
            ) : (
              <View style={[styles.avatar, styles.avatarPlaceholder]}>
                <Feather name="user" size={40} color={colors.textSecondary} />
              </View>
            )}
            <TouchableOpacity 
              style={styles.cameraButton}
              onPress={() => navigation.navigate("Cadastro")}
            >
              <Feather name="camera" size={14} color="#FFF" />
            </TouchableOpacity>
          </View>

          <View style={styles.userInfo}>
            <Text style={styles.userName}>{usuario?.nome || "Usuário"}</Text>
            <Text style={styles.userEmail}>{usuario?.email || "email@exemplo.com"}</Text>
            <View style={styles.memberSinceRow}>
              <Feather name="calendar" size={14} color={colors.textSecondary} />
              <Text style={styles.memberSinceText}>
                Membro desde {new Date().getFullYear()}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Ionicons name="film-outline" size={24} color={colors.primary} />
            <Text style={styles.statLabel}>Total de filmes</Text>
            <Text style={styles.statNumber}>{stats.total}</Text>
          </View>

          <View style={styles.statCard}>
            <Ionicons name="heart-outline" size={24} color={colors.primary} />
            <Text style={styles.statLabel}>Favoritos</Text>
            <Text style={styles.statNumber}>{stats.favoritos}</Text>
          </View>

          <View style={styles.statCard}>
            <Ionicons name="checkmark-circle-outline" size={24} color={colors.primary} />
            <Text style={styles.statLabel}>Assistidos</Text>
            <Text style={styles.statNumber}>{stats.assistidos}</Text>
          </View>

          <View style={styles.statCard}>
            <Ionicons name="bookmark-outline" size={24} color={colors.primary} />
            <Text style={styles.statLabel}>Quero assistir</Text>
            <Text style={styles.statNumber}>{stats.queroAssistir}</Text>
          </View>
        </View>

        <View style={styles.menuContainer}>
          {menuItems.map((item) => (
            <TouchableOpacity key={item.id} style={styles.menuItem}>
              <View style={styles.menuLeft}>
                <Feather name={item.icon as any} size={20} color={colors.textSecondary} />
                <Text style={styles.menuText}>{item.title}</Text>
              </View>
              <Feather name="chevron-right" size={20} color={colors.textSecondary} />
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity 
          style={styles.logoutButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Feather name="log-out" size={20} color={colors.danger} />
          <Text style={styles.logoutText}>Sair da conta</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}