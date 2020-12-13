import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import IngredientItem from '../../../components/IngredientItem';
import { Button } from '../../../components/_commons/Button';
import Icon from '../../../components/_commons/Icon';
import StepHeader from '../../../components/_commons/StepHeader';
import service from '../../../services';
import colors from '../../../utils/styles/colors';

// import { Container } from './styles';

const ConfirmationStepScreen: React.FC = () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  const { user } = useSelector(({ authentication }) => authentication);

  const [loading, setLoading] = useState(false);

  const handleCreateReceita = async () => {
    setLoading(true);
    try {
      const receita = {
        nome: params.nomeReceita,
        descricao: params.descricaoReceita,        
        autorId: user.id,
        modoDePreparo: params.modoDePreparo.map((item, index) => {
          return {
            ...item,
            index: index,
            tempo: Number(item.tempo),
          };
        }),
        categorias: params.categorias.map((item) => item.id),
        ingredientes: params.receitaIngredients.map((item) => ({
          ingredienteId: item.ingrediente.id,
          unidadeId: item.unidade.id,
          quantidade: item.quantidade,
        })),
      };

      console.log(receita);

      await service.post('receitas', receita);

      navigation.navigate('Receitas');
    } catch (error) {
      console.log(error);
      Alert.alert('Erro ao cadastrar receita', 'Tente novamente mais tarde');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View>
      <StepHeader currentStep={3} totalSteps={3} />
      <ScrollView
        style={{
          margin: 20,
        }}
      >
        <Text
          style={{
            fontSize: 25,
            color: colors.grayLight,
          }}
        >
          {params.nomeReceita}
        </Text>

        {params.categorias.map((categoria) => {
          return (
            <Text
              style={{
                fontWeight: 'bold',
              }}
            >
              {categoria.nome}
            </Text>
          );
        })}

        <Text>{params.descricaoReceita}</Text>

        <Text
          style={{
            fontSize: 18,
            marginTop: 20,
          }}
        >
          Ingredientes
        </Text>
        {params.receitaIngredients.map((item, index) => {
          return <IngredientItem item={item} />;
        })}

        <Text
          style={{
            fontSize: 18,
            marginTop: 20,
          }}
        >
          Modo de Preparo
        </Text>
        {params.modoDePreparo.map((passo, index) => {
          return (
            <View
              style={{
                marginBottom: 20,
              }}
            >
              <Text>{`Passo - ${index + 1}`}</Text>
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
          );
        })}

        <Button disabled={loading} onPress={handleCreateReceita}>
          {loading ? 'Carregando...' : 'Criar receita!'}
        </Button>
      </ScrollView>
    </View>
  );
};

export default ConfirmationStepScreen;
