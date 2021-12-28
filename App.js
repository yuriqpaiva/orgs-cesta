import { View, StatusBar, SafeAreaView } from 'react-native';
import Cesta from './src/screens/Cesta';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

import AppLoading from 'expo-app-loading';
import mock from './src/mocks/cesta.js';

export default function App() {
  const [fonteCarregada] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  if (!fonteCarregada) {
    return <AppLoading />;
  }

  return (
    // Cria uma margem para o conteúdo ficar abaixo da barra de utilitários (iPhone):
    <SafeAreaView>
      {/* Cria uma status bar (Android) */}
      <StatusBar />
      <Cesta {...mock} />
      {/* Equivale a: <Cesta topo={mock.topo} detalhes={mock.detalhes} /> */}
    </SafeAreaView>
  );
}
