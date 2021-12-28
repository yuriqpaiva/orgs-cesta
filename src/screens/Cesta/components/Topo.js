import React from 'react';
import { StyleSheet, Dimensions, Image } from 'react-native';

import topo from '../../../../assets/topo.png';
import Texto from '../../../components/Texto';

export default function Topo({ titulo }) {
  return (
    <>
      <Image source={topo} style={estilos.topo} />
      <Texto style={estilos.titulo}>{titulo}</Texto>
    </>
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
});
