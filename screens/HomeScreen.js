
import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

export default function HomeScreen({ navigation }) {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, darkMode && styles.dark]}>
      <Text style={styles.title}>Bienvenue sur MobileTask Manager</Text>

      <Button
        title="Voir les tâches"
        onPress={() => navigation.navigate('Taches')}
      />

      <View style={{ marginTop: 10 }}>
        <Button
          title="Voir les utilisateurs"
          onPress={() => navigation.navigate('Utilisateurs')}
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Button
          title="Changer le thème"
          onPress={toggleTheme}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },

  dark: {
    backgroundColor: '#d6d6d6'
  },

  title: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
