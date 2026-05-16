import { StyleSheet, Text, View } from 'react-native';

export default function Cabecalho() {
  return (
    <View style={styles.container}>
      <Text style={styles.tituloPrincipal}>SECTIONLIST</Text>
      <View style={styles.iconeBox}>
        <Text style={styles.iconeTexto}>TL</Text>
      </View>
      <Text style={styles.subtitulo}>Lista de Tarefas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 18,
  },
  tituloPrincipal: {
    color: '#fff',
    fontSize: 24,
    letterSpacing: 1,
    marginBottom: 14,
  },
  iconeBox: {
    width: 68,
    height: 68,
    borderRadius: 14,
    backgroundColor: '#56d0c9',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  iconeTexto: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
  },
  subtitulo: {
    color: '#ff7a1a',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
