/* eslint-disable no-use-before-define */
/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from 'react';
import { Text, Image, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from '../../components/_commons/SafeAreaView';
import { Button } from '../../components/_commons/Button';
import { CenterView } from '../../components/_commons/CenterView';
import service from '../../services';
import Empty from '../../components/_commons/Empty';
import IngredientItem from '../../components/IngredientItem';
import { ScrollView } from 'react-native-gesture-handler';
import colors from '../../utils/styles/colors';
import Icon from '../../components/_commons/Icon';

const DetalhesReceitaScreen: React.FC = () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  const [receita, setReceita] = useState(null);
  const image =
    receita?.imagems[0]?.uri ||
    'https://www.receitasnestle.com.br/images/default-source/recipes/196-ovo-frito-receitas-nestle.jpg';
  
    const getReceita = async () => {
    await service
      .get(`/receitas/${params.receitaId}`)
      .then(({ data }) => setReceita(data.receita))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    if (params.receitaId) {
      getReceita();
    }
  }, [params]);

  console.log(receita);

  return (
    <SafeAreaView>
      {receita ? (
        <ScrollView
          style={{
            padding: 20,
          }}
        >
          <Image
            style={{ width: 400, height: 200 }}
            source={{
              uri: image,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}
          >
            <Text
              style={{
                fontSize: 25,
                color: colors.grayLight,
              }}
            >
              {receita.nome}
            </Text>
            <View
              style={{
                flexDirection: 'row',
              }}
            >
              <Icon name="clock" color={colors.primary} size={16} />
              <Text>{receita.tempoPreparo}</Text>
            </View>
          </View>

          <Text>{receita.descricao}</Text>

          {receita.categorias.map((item) => (
            <Text
              style={{
                fontWeight: 'bold',
              }}
            >
              {item.categoria.nome}
            </Text>
          ))}
          <Text
            style={{
              fontSize: 18,
              marginTop: 20,
            }}
          >
            {'Ingredientes'}
          </Text>
          {receita.ingredientes.map((item) => (
            <IngredientItem
              item={{
                ingrediente: {
                  id: item.ingrediente.id,
                  name: item.ingrediente.name,
                },
                unidade: {
                  id: item.unidade.id,
                  nome: item.unidade.nome,
                },
                quantidade: item.quantidade,
              }}
            />
          ))}

          <Text
            style={{
              fontSize: 18,
              marginTop: 20,
            }}
          >
            Modo de Preparo
          </Text>
          {receita.modoDePreparo.map((passo, index) => (
            <View
              style={{
                marginBottom: 20,
              }}
            >
              <Text>{`Passo ${index + 1}`}</Text>
              <Text>{passo.descricao}</Text>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: 'row',
                }}
              >
                <Icon name="clock" color={colors.primary} size={16} />
                <Text
                  style={{
                    marginLeft: 5,
                  }}
                >
                  {passo.tempo}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      ) : (
        <Empty message="Nenhuma receita encontrada" />
      )}
    </SafeAreaView>
  );
};

export default DetalhesReceitaScreen;
