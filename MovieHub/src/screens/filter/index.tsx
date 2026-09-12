import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Switch,
  ScrollView,
} from "react-native";
import { styles } from "./styles";

export default function Filter({ navigation, route }: any) {
  const [genero, setGenero] = useState(route.params?.filtros?.genero || "");
  const [status, setStatus] = useState(route.params?.filtros?.status || "Todos");
  const [anoDe, setAnoDe] = useState(route.params?.filtros?.anoDe || "");
  const [anoAte, setAnoAte] = useState(route.params?.filtros?.anoAte || "");
  const [notaMinima, setNotaMinima] = useState(route.params?.filtros?.notaMinima || 0);
  const [apenasFavoritos, setApenasFavoritos] = useState(route.params?.filtros?.apenasFavoritos || false);

  const opcoesStatus = ["Todos", "Quero assistir", "Assistindo", "Assistido"];

  function handleLimpar() {
    setGenero("");
    setStatus("Todos");
    setAnoDe("");
    setAnoAte("");
    setNotaMinima(0);
    setApenasFavoritos(false);
  }

  function handleAplicar() {
    const filtrosSelecionados = {
      genero,
      status,
      anoDe,
      anoAte,
      notaMinima,
      apenasFavoritos,
    };

    navigation.navigate("Search", { filtros: filtrosSelecionados });
  }

  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>Filtros</Text>

        <TouchableOpacity style={styles.limparButton} onPress={handleLimpar}>
          <Text style={styles.limparText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.label}>Gênero</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o gênero (ex: Ação, Comédia)"
          placeholderTextColor="#666"
          value={genero}
          onChangeText={setGenero}
        />

        <Text style={styles.label}>Status</Text>
        <View style={styles.statusContainer}>
          {opcoesStatus.map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.statusChip,
                status === item && styles.statusChipSelected,
              ]}
              onPress={() => setStatus(item)}
            >
              <Text
                style={[
                  styles.statusText,
                  status === item && styles.statusTextSelected,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>Ano de</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: 1990"
              placeholderTextColor="#666"
              keyboardType="numeric"
              maxLength={4}
              value={anoDe}
              onChangeText={setAnoDe}
            />
          </View>

          <View style={styles.column}>
            <Text style={styles.label}>Até</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: 2026"
              placeholderTextColor="#666"
              keyboardType="numeric"
              maxLength={4}
              value={anoAte}
              onChangeText={setAnoAte}
            />
          </View>
        </View>

        <Text style={styles.label}>Nota mínima</Text>
        <View style={styles.starsRow}>
          <View style={styles.starsContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity key={star} onPress={() => setNotaMinima(star)}>
                <Text style={styles.starIcon}>
                  {star <= notaMinima ? "★" : "☆"}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={styles.starLabel}>
            {notaMinima > 0 ? `${notaMinima},0 ou mais` : "Todas"}
          </Text>
        </View>

        <View style={styles.switchRow}>
          <Text style={styles.labelSwitch}>Apenas favoritos</Text>
          <Switch
            trackColor={{ false: "#2A2E39", true: "#2563eb" }}
            thumbColor={apenasFavoritos ? "#FFF" : "#888"}
            onValueChange={setApenasFavoritos}
            value={apenasFavoritos}
          />
        </View>

        <TouchableOpacity style={styles.btnAplicar} onPress={handleAplicar}>
          <Text style={styles.btnAplicarText}>Aplicar filtros</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnCancelar} onPress={() => navigation.goBack()}>
          <Text style={styles.btnCancelarText}>Cancelar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}