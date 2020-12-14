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

  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    getReceitas('');
  }, []);

  const images = [
    'https://craftlog.com/m/i/2834256=s1280=h960',
    'https://img.itdg.com.br/tdg/images/recipes/000/000/876/324587/324587_original.jpg?mode=crop&width=710&height=400',
    'https://staticr1.blastingcdn.com/media/photogallery/2019/6/23/660x290/b_1200x680/bolo-de-brigadeiro-custuma-ser-um-sucesso-entre-as-pessoas-imagem-blasting-news_2283435.jpg',
    'https://s2.glbimg.com/OPM_PH9YxzVRUOqaCH4el6jQ3iE=/0x0:1280x960/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/y/1/BWBqK7Qtq2ODuC8wiuFg/sorvete-de-chocolate-cremoso-3.jpg',
    'https://www.oetker.com.br/Recipe/Recipes/oetker.com.br/br-pt/dessert/image-thumb__40064__RecipeDetail/sorvete-de-chantilly.jpg',
  ];

  const getReceitas = async (search: string) => {
    const response = await service
      .get(`/receitas?search=${search}`)
      .then(({ data }) => data);
    response.forEach((r) => {
      r.image =
        r.imageUri ||
        'https://www.receitasnestle.com.br/images/default-source/recipes/196-ovo-frito-receitas-nestle.jpg';
    });
    setReceitas(response);
  };

  const handleTouch = (id) => {
    navigation.navigate('DetalhesReceitas', { receitaId: id });
  };

  const handleCreateReceita = () => {
    navigation.navigate('CreateReceitaNavigation');
  };

  const cardReceitas = (receita) => {
    const item = receita.item;

    return (
      <View
        style={{
          marginBottom: 20,
        }}
      >
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
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
              justifyContent: 'space-between',
              alignContent: 'center',
            }}
          >
            <Text> {item.nome} </Text>
            <View
              style={{
                flexDirection: 'row',
              }}
            >
              <Icon name="clock" color={colors.primary} size={16} />
              <Text
                style={{
                  marginLeft: 5,
                }}
              >
                {item.tempoPreparo + 'min'}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const receitasEmpy = () => {
    return <Text>{'Lista Vazia'}</Text>;
  };

  const listHeader = () => {
    return (
      <Input
        placeholder="Buscar"
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
        ListHeaderComponentStyle={{
          margin: 20,
        }}
        ListEmptyComponent={receitasEmpy}
        data={receitas}
        renderItem={cardReceitas}
        style={{
          paddingHorizontal: 20,
        }}
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
