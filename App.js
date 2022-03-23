import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Olá Mundo!!
      </Text>
      <Text>Thiago Ferreira Cavalcante
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#66CDAA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
