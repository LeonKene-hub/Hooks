import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import { Container } from './src/components/Container/Container';
import { Button } from './src/components/Button/Button';
import { Title } from './src/components/Title/Title';
import { Plate } from './src/components/Plate/Plate';
import { ImagemLogo } from './src/components/ImagemLogo/ImagemLogo';

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
    <Container>

      <ImagemLogo source={require("./src/Imagens/math.png")}/>
      <Title>
        <Text>Contador: {count}</Text>
      </Title>
      
      <Plate>
        <Button onPress={increment}>
          <Text>Incrementar</Text>
        </Button>

        <Button onPress={deincrement}>
          <Text>Desencrementar</Text>
        </Button>

        <Button onPress={zero}>
          <Text>zero</Text>
        </Button>
      </Plate>

      <StatusBar style="auto" />
    </Container>
  );
}