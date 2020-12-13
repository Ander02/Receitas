import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '../../../components/_commons/Button';
import StepHeader from '../../../components/_commons/StepHeader';
import colors from '../../../utils/styles/colors';

// import { Container } from './styles';

const ConfirmationStepScreen: React.FC = () => {
  const navigation = useNavigation();
  const { params } = useRoute();

  const handleCreateReceita = () => {};

  console.log(params);
  return (
    <View>
      <StepHeader currentStep={3} totalSteps={3} />
      <View
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

        {params.receitaIngredients.map((item, index) => {
          return (
            <View>
              <Text>{`${item.quantidade} ${item.unidade.nome} de ${item.ingrediente.name}`}</Text>
            </View>
          );
        })}

        {params.modoDePreparo.map((passo, index) => {
          return (
            <View>
              <Text>{`Passo - ${index + 1}`}</Text>
              <Text>{passo.descricao}</Text>
              <Text>{passo.tempo}</Text>
            </View>
          );
        })}

        <Button>Criar receita!</Button>
      </View>
    </View>
  );
};

export default ConfirmationStepScreen;
