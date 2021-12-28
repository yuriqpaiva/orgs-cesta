import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Botao from '../../../components/Botao';

import Texto from '../../../components/Texto';

export default function Detalhes({
  nome,
  logoFazenda,
  fazenda,
  descricao,
  preco,
  botao,
}) {
  return (
    <>
      <Texto style={estilos.nome}>{nome}</Texto>
      <View style={estilos.fazenda}>
        <Image source={logoFazenda} style={estilos.imagemFazenda} />
        <Texto style={estilos.nomeFazenda}>{fazenda}</Texto>
      </View>
      <Texto style={estilos.descricao}>{descricao}</Texto>
      <Texto style={estilos.preco}>{preco}</Texto>
      <Botao styles={estilos.botao} onPress={() => console.log('Teste botão')}>
        {botao}
      </Botao>
    </>
  );
}

const estilos = StyleSheet.create({
  nome: {
    fontWeight: 'bold',
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
  botao: {
    marginTop: 16,
  },
});
