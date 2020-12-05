import React, { useEffect, useState } from 'react';
import { Image, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { Button } from '../../components/_commons/Button';
import { useNavigation } from '@react-navigation/native';
import service from '../../services';
import { Input } from '../../components/_commons/Input';
import { string } from 'yup';
import colors from '../../utils/styles/colors';
import Icon from '../../components/_commons/Icon';

// import { Container } from './styles';

const ReceitasScreen: React.FC = () => {
  const { user } = useSelector(({ authentication }) => authentication);

  const navigation = useNavigation();

  const [receitas, setReceitas] = useState([
    { id: '', name: 'sahuahsudhs' },
    { id: '', name: 'sahuahsudhs' },
    { id: '', name: 'sahuahsudhs' },
    { id: '', name: 'sahuahsudhs' },
    { id: '', name: 'sahuahsudhs' },
  ]);

  useEffect(() => {
    //getReceitas('');
  }, []);

  const getReceitas = async (search: string) => {
    const response = await service
      .get(`/receitas?search=${search}`)
      .then(({ data }) => data);
    response.forEach((r) => {
      r.image =
        'https://www.daninoce.com.br/wp-content/uploads/2020/03/melhor-bolo-de-chocolate-do-mundo.jpg';
    });
    console.log(response);
    setReceitas(response);
  };

  const handleTouch = (id) => {
    console.log(id);
    navigation.navigate('DetalhesReceitas', { receitaId: id });
  };

  const handleCreateReceita = () => {
    navigation.navigate('CreateReceitaNavigation');
  };

  const cardReceitas = (receita) => {
    const item = receita.item;

    return (
      <TouchableOpacity
        key={item.id}
        activeOpacity={0.9}
        onPress={() => handleTouch(item.id)}
      >
        <Image
          style={{ width: 400, height: 200 }}
          source={{
            uri: item.image,
          }}
        />
        <Text> {item.nome} </Text>
        <Text> {'Tempo de Preparo ' + item.tempoPreparo} </Text>
      </TouchableOpacity>
    );
  };

  const receitasEmpy = () => {
    return <Text>{'Lista Vazia'}</Text>;
  };

  const listHeader = () => {
    return (
      <Input
        onChangeText={async (text) => {
          await getReceitas(text);
        }}
      />
    );
  };

  return (
    <View>
      <FlatList
        ListHeaderComponent={listHeader()}
        ListEmptyComponent={receitasEmpy}
        data={receitas}
        renderItem={cardReceitas}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={handleCreateReceita}
        style={{
          width: 50,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          right: 20,
          bottom: 20,
          backgroundColor: colors.primary,
          borderRadius: 25,
        }}
      >
        <Icon name="plus" size={20} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
};

export default ReceitasScreen;
