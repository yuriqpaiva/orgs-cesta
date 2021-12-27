import { View, StatusBar, Text, SafeAreaView } from 'react-native';
import Cesta from './src/screens/Cesta';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

export default function App() {
  const [fonteCarregada] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  if (!fonteCarregada) {
    return <View />;
  }

  return (
    // Cria uma margem para o conteúdo ficar abaixo da barra de utilitários (iPhone):
    <SafeAreaView>
      {/* Cria uma status bar (Android) */}
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}
