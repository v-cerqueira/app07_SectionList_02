import { useMemo, useState } from 'react';
import {
  Alert,
  Pressable,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

function formatarNumero(valor) {
  return String(valor).padStart(2, '0');
}

function dataAtualFormatada() {
  const hoje = new Date();

  return `${formatarNumero(hoje.getDate())}/${formatarNumero(
    hoje.getMonth() + 1
  )}/${hoje.getFullYear()}`;
}

function validarData(texto) {
  const match = texto.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);

  if (!match) {
    return null;
  }

  const [, diaTexto, mesTexto, anoTexto] = match;
  const dia = Number(diaTexto);
  const mes = Number(mesTexto);
  const ano = Number(anoTexto);
  const data = new Date(ano, mes - 1, dia);

  if (
    data.getFullYear() !== ano ||
    data.getMonth() !== mes - 1 ||
    data.getDate() !== dia
  ) {
    return null;
  }

  return data;
}

export default function Conteudo() {
  const [tarefa, setTarefa] = useState('');
  const [data, setData] = useState('');
  const [tarefas, setTarefas] = useState([
    { id: '1', titulo: 'tarefa1', data: '10/05/2026' },
    { id: '2', titulo: 'tarefa2', data: '10/05/2026' },
    { id: '3', titulo: 'tarefa3', data: '11/05/2026' },
  ]);

  const secoes = useMemo(() => {
    const mapa = tarefas.reduce((acc, item) => {
      if (!acc[item.data]) {
        acc[item.data] = [];
      }

      acc[item.data].push(item);
      return acc;
    }, {});

    return Object.keys(mapa)
      .sort((a, b) => validarData(a) - validarData(b))
      .map((tituloSecao) => ({
        title: tituloSecao,
        data: mapa[tituloSecao],
      }));
  }, [tarefas]);

  function adicionarTarefa() {
    const nomeTarefa = tarefa.trim();
    const dataInformada = data.trim();
    const dataValida = validarData(dataInformada);

    if (!nomeTarefa || !dataInformada) {
      Alert.alert('Campos obrigatorios', 'Informe a tarefa e a data.');
      return;
    }

    if (!dataValida) {
      Alert.alert('Data invalida', 'Use o formato dd/mm/aaaa com uma data real.');
      return;
    }

    setTarefas((estadoAtual) => [
      ...estadoAtual,
      {
        id: `${Date.now()}`,
        titulo: nomeTarefa,
        data: dataInformada,
      },
    ]);

    setTarefa('');
    setData('');
  }

  function confirmarExclusao(item) {
    Alert.alert(
      'Excluir tarefa',
      `Deseja excluir a tarefa "${item.titulo}"?`,
      [
        {
          text: 'Nao',
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: () => {
            setTarefas((estadoAtual) =>
              estadoAtual.filter((tarefaAtual) => tarefaAtual.id !== item.id)
            );
          },
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={tarefa}
        onChangeText={setTarefa}
        placeholder="Digite a tarefa"
        placeholderTextColor="#333"
        style={styles.input}
      />

      <TextInput
        value={data}
        onChangeText={setData}
        placeholder="Data (ex: 10/05/2026)"
        placeholderTextColor="#333"
        style={styles.input}
        keyboardType="number-pad"
        maxLength={10}
      />

      <Pressable style={styles.botao} onPress={adicionarTarefa}>
        <Text style={styles.botaoTexto}>Adicionar</Text>
      </Pressable>

      <SectionList
        sections={secoes}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        style={styles.lista}
        contentContainerStyle={styles.listaConteudo}
        ListEmptyComponent={
          <Text style={styles.listaVazia}>Nenhuma tarefa cadastrada.</Text>
        }
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.cabecalhoSecao}>
            <Text style={styles.cabecalhoSecaoTexto}>{title}</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <Pressable
            style={styles.item}
            onPress={() => confirmarExclusao(item)}
          >
            <Text style={styles.itemTexto}>{item.titulo}</Text>
          </Pressable>
        )}
      />

      <Text style={styles.dataOculta}>{dataAtualFormatada()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    width: '62%',
    backgroundColor: '#ffe3a0',
    borderRadius: 4,
    paddingVertical: 14,
    paddingHorizontal: 12,
    fontSize: 18,
    marginBottom: 12,
  },
  botao: {
    backgroundColor: '#98120a',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  botaoTexto: {
    color: '#ff8c1a',
    fontSize: 18,
  },
  lista: {
    width: '100%',
    flex: 1,
  },
  listaConteudo: {
    paddingBottom: 16,
  },
  listaVazia: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 8,
    padding: 18,
    textAlign: 'center',
    color: '#555',
  },
  cabecalhoSecao: {
    backgroundColor: '#ddd',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 8,
    marginTop: 2,
  },
  cabecalhoSecaoTexto: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  item: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 18,
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  itemTexto: {
    fontSize: 16,
  },
  dataOculta: {
    display: 'none',
  },
});
