import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container } from './src/components/Container/Container';

export default function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }
  const deincrement = () => {
    setCount(count - 1)
  }
  const zero = () => {
    setCount(0)
  }

  //useEffect
  useEffect(() => {
    console.warn(`Contador atualizado: ${count}`)
  }, [count])


  return (
    <Container style={styles.container}>

      <View>
        <Text>Contador: {count}</Text>
      </View>
      
      <View style={styles.view}>

        <TouchableOpacity onPress={increment} style={styles.opcoes}>
          <Text>Incrementar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={deincrement} style={styles.opcoes}>
          <Text>Desencrementar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={zero} style={styles.opcoes}>
          <Text>zero</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    flex: 0.8,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  opcoes: {
    borderWidth: 1,
    borderColor: "red",
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%'
  },
  view: {
    flex: 0.5,
    borderWidth: 1,
    justifyContent: 'space-around',
    width: '90%',
    alignItems: 'center'
  }
});
