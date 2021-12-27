import React from 'react';
import {
  Image,
  StyleSheet,
  Dimensions,
  Text,
  SafeAreaView,
  View,
} from 'react-native';

import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

function Cesta() {
  return (
    <SafeAreaView>
      <Image source={topo} style={estilos.topo} />
      <Text style={estilos.titulo}>Detalhe da Cesta</Text>
      <View style={estilos.cesta}>
        <Text style={estilos.nome}>Cesta de Verduras</Text>
        <View style={estilos.fazenda}>
          <Image source={logo} style={estilos.imagemFazenda} />
          <Text style={estilos.nomeFazenda}>Jenny Jack Farm</Text>
        </View>
        <Text style={estilos.descricao}>
          Uma cesta com produtos selecionados cuidadosamente da fazenda direto
          para sua cozinha
        </Text>
        <Text style={estilos.preco}>RS 40,00</Text>
      </View>
    </SafeAreaView>
  );
}

const width = Dimensions.get('screen').width;
const larguraImagemTopo = 768;
const alturaImagemTopo = 578;

const estilos = StyleSheet.create({
  topo: {
    width: '100%',
    height: (alturaImagemTopo / larguraImagemTopo) * width,
  },
  titulo: {
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
    fontSize: 16,
    lineHeight: 26,
    color: 'white',
    fontWeight: 'bold',
    padding: 16,
  },
  cesta: {
    fontFamily: 'MontserratRegular',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  nome: {
    fontFamily: 'MontserratBold',
    color: '#464646',
    fontSize: 26,
    lineHeight: 42,
  },
  fazenda: {
    paddingVertical: 12,
    flexDirection: 'row',
  },
  imagemFazenda: {
    width: 32,
    height: 32,
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  descricao: {
    color: '#a3a3a3',
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: '#2a9f85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});

export default Cesta;
