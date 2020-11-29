import React, { useEffect, useState } from 'react';
import { Image, Text, View, FlatList, ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';
import { Button } from '../../components/_commons/Button';
import { useNavigation } from '@react-navigation/native';
import service from '../../services';
import { Input } from '../../components/_commons/Input';
import { string } from 'yup';

// import { Container } from './styles';

const ReceitasScreen: React.FC = () => {
  const { user } = useSelector(({ authentication }) => authentication);

  const navigation = useNavigation();

  const [receitas, setReceitas] = useState([]);

  const getReceitas = async (search : string) => {
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

  useEffect(() => {
    getReceitas("");
  }, []);

  const handleTouch = (id) => {
    console.log(id);
    navigation.navigate('DetalhesReceita');
  };

  const cardReceitas = (receita) => {
    const item = receita.item;

    return (
      <View key={item.id} onTouchStart={() => handleTouch(item.id)}>
        <Image
          style={{ width: 400, height: 200 }}
          source={{
            uri: item.image,
          }}
        />
        <Text> {item.nome} </Text>
        <Text> {'Tempo de Preparo ' + item.tempoPreparo} </Text>
      </View>
    );
  };

  const receitasEmpy = () => {
    return <Text>{'Lista Vazia'}</Text>;
  };

  return (
    <View>
      <Input
        onChangeText={async (text) => {
          await getReceitas(text)
        }}
      />
      <FlatList
        ListEmptyComponent={receitasEmpy}
        data={receitas}
        renderItem={cardReceitas}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
};

export default ReceitasScreen;
