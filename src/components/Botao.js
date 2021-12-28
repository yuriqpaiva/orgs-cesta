import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Texto from './Texto';

export default function Botao({ botao, styles, onPress, children }) {
  return (
    <TouchableOpacity style={[estilos.botao, styles]} onPress={() => onPress()}>
      <Texto style={estilos.textoBotao}>{children}</Texto>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  botao: {
    backgroundColor: '#2A9F85',
    paddingVertical: 16,
    borderRadius: 6,
  },
  textoBotao: {
    textAlign: 'center',
    color: '#ffff',
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold',
  },
});
