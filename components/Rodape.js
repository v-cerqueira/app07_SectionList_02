import { StyleSheet, Text, View } from 'react-native';

function formatarNumero(valor) {
  return String(valor).padStart(2, '0');
}

function obterDataAtual() {
  const hoje = new Date();

  return `${formatarNumero(hoje.getDate())}/${formatarNumero(
    hoje.getMonth() + 1
  )}/${hoje.getFullYear()}`;
}

export default function Rodape() {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarTexto}>VC</Text>
      </View>
      <Text style={styles.nome}>Vinicius</Text>
      <Text style={styles.data}>{obterDataAtual()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginTop: 10,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#19314d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  nome: {
    flex: 1,
    fontSize: 16,
    marginLeft: 14,
  },
  data: {
    fontSize: 16,
  },
});
