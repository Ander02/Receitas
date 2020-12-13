import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Button } from '../../../components/_commons/Button';
import Icon from '../../../components/_commons/Icon';
import { Input } from '../../../components/_commons/Input';
import StepHeader from '../../../components/_commons/StepHeader';
import colors from '../../../utils/styles/colors';

const initialStepItem = {
  descricao: '',
  tempo: 0,
};

const ModoDePreparoScreen: React.FC = () => {
  const navigation = useNavigation();
  const { params } = useRoute();

  const [stepItems, setStepItems] = useState([initialStepItem]);

  const renderStep = ({ item, index }) => {
    return (
      <View
        style={{
          margin: 20,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
            justifyContent: 'space-between',
          }}
        >
          <Text>{`Passo - ${index + 1}`}</Text>
          <Icon
            name={'minus'}
            size={20}
            color={colors.grayLight}
            onPress={() => handleRemoveStep(index)}
          />
        </View>
        <Input
          style={{
            marginBottom: 20,
          }}
          onChangeText={(text) => handleStepChange('descricao', text, index)}
          placeholder="Descrição"
          numberOfLines={5}
          multiline
          value={item.descricao}
        />
        <Input
          onChangeText={(text) => handleStepChange('tempo', text, index)}
          placeholder="Tempo"
          keyboardType="numeric"
          value={item.tempo}
        />
      </View>
    );
  };

  const handleRemoveStep = (index) => {
    setStepItems((prevState) => {
      return prevState.filter((data, i) => i !== index);
    });
  };

  const handleStepChange = (key, value, index) => {
    setStepItems((prevState) =>
      prevState.map((data, i) => {
        if (i === index) {
          return {
            ...data,
            [key]: value,
          };
        }
        return data;
      })
    );
  };

  const handleAddStep = () => {
    setStepItems((prevState) => [...prevState, initialStepItem]);
  };

  const renderHeader = () => (
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
        Agora o modo de Preparo!
      </Text>
      <View
        style={{
          alignItems: 'flex-end',
        }}
      >
        <Icon
          color={colors.primary}
          name={'plus'}
          size={20}
          onPress={handleAddStep}
        />
      </View>
    </View>
  );

  const handleNextStep = () => {
    navigation.navigate('ConfirmationStep', {
      ...params,
      modoDePreparo: stepItems,
    });
  };

  const renderFooter = () => {
    return <Button onPress={() => handleNextStep()}>Confirmar passos</Button>;
  };

  return (
    <View>
      <StepHeader currentStep={2} totalSteps={3} />

      <FlatList
        contentContainerStyle={{
          paddingBottom: 40,
        }}
        data={stepItems}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        ListFooterComponentStyle={{
          marginHorizontal: 20,
        }}
        keyExtractor={(_, index) => String(index)}
        renderItem={renderStep}
      />
    </View>
  );
};

export default ModoDePreparoScreen;
