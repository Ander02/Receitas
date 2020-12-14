import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  Modal,
  Text,
  View,
  Picker,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import IngredientItem from '../../../components/IngredientItem';

import { Button } from '../../../components/_commons/Button';
import Icon from '../../../components/_commons/Icon';
import { Input } from '../../../components/_commons/Input';
import StepHeader from '../../../components/_commons/StepHeader';
import service from '../../../services';
import colors from '../../../utils/styles/colors';

// import { Container } from './styles';

const IngredientStepScreen: React.FC = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [unidades, setUnidades] = useState([]);
  const [categorias, setCategorias] = useState([]);

  const [categoriaSelecionada, setCategoriaSelecionada] = useState({});

  const [receitaIngredients, setReceitaIngredients] = useState([]);
  const [receitaIngredient, setReceitaIngredient] = useState({
    ingrediente: {},
    unidade: {},
    quantidade: 0,
  });
  const [nomeReceita, setNomeReceita] = useState('');
  const [descricaoReceita, setDescricaoReceita] = useState('');

  const setDefaultReceitaIngredient = () => {
    if (ingredients.length && unidades.length) {
      setReceitaIngredient({
        ingrediente: ingredients[0],
        unidade: unidades[0],
        quantidade: 0,
      });
    }

    if (categorias.length) {
      setCategoriaSelecionada(categorias[0]);
    }
  };

  useEffect(() => {
    getIngredients();
    getUnidades();
    getCategorias();
  }, []);

  useEffect(() => {
    setDefaultReceitaIngredient();
  }, [ingredients, unidades, categorias]);

  const getListItem = (list: any[], id: string) => {
    return list.find((d) => d.id == id);
  };

  const getIngredients = async () => {
    const response = await service.get(`/ingredients`).then(({ data }) => data);

    setIngredients(response);
  };

  const getUnidades = async () => {
    const response = await service.get(`/unidades`).then(({ data }) => data);

    setUnidades(response);
  };

  const getCategorias = async () => {
    const response = await service.get(`/categorias`).then(({ data }) => data);

    setCategorias(response);
  };

  const renderIngredientsOptions = () => {
    return ingredients.map((ingredient) => (
      <Picker.Item
        key={ingredient.id}
        value={ingredient.id}
        label={ingredient.name}
      />
    ));
  };

  const renderUnidadesOptions = () => {
    return unidades.map((unidade) => (
      <Picker.Item key={unidade.id} value={unidade.id} label={unidade.nome} />
    ));
  };

  const renderCategoriasOptions = () => {
    return categorias.map((categoria) => (
      <Picker.Item
        key={categoria.id}
        value={categoria.id}
        label={categoria.nome}
      />
    ));
  };

  const handleAddIngredient = async () => {
    await setReceitaIngredients((prevState) => [
      ...prevState,
      receitaIngredient,
    ]);
    setDefaultReceitaIngredient();
    await setModalVisible(false);
  };

  const handleRemoveIngredient = (index) => {
    setReceitaIngredients((prevState) => {
      return prevState.filter((data, i) => i !== index);
    });
  };

  const renderAddedIngredients = ({ item, index }) => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
        }}
      >
        <IngredientItem
          item={item}
          onPress={() => handleRemoveIngredient(index)}
          showDeleteItem
        />
      </View>
    );
  };

  const handleNextStep = () => {
    navigation.navigate('ModoDePreparoStep', {
      nomeReceita: nomeReceita,
      descricaoReceita: descricaoReceita,
      receitaIngredients: receitaIngredients,
      categorias: [categoriaSelecionada],
    });
  };

  return (
    <View>
      <StepHeader currentStep={1} totalSteps={3} />

      <Text
        style={{
          fontSize: 25,
          color: colors.grayLight,
          marginHorizontal: 20,
          marginVertical: 10,
        }}
      >
        Vamos criar uma nova receita!
      </Text>

      <View
        style={{
          marginHorizontal: 20,
        }}
      >
        <Input
          style={{
            marginBottom: 20,
          }}
          placeholder={'Nome'}
          value={nomeReceita}
          onChangeText={(text) => setNomeReceita(text)}
        />

        <Input
          style={{
            marginBottom: 20,
          }}
          placeholder={'Descrição'}
          value={descricaoReceita}
          onChangeText={(text) => setDescricaoReceita(text)}
        />

        <Picker
          style={{
            backgroundColor: colors.light,
            marginBottom: 20,
          }}
          selectedValue={categoriaSelecionada.id}
          onValueChange={(val) =>
            setCategoriaSelecionada(getListItem(categorias, val))
          }
        >
          {renderCategoriasOptions()}
        </Picker>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 20,
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 20,
          }}
        >
          Adicionar ingrediente
        </Text>
        <Icon
          size={20}
          onPress={() => setModalVisible(true)}
          name="plus"
          color={colors.primary}
        />
      </View>

      <FlatList
        keyExtractor={(_, index) => String(index)}
        data={receitaIngredients}
        renderItem={renderAddedIngredients}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          padding: 20,
        }}
      >
        <Icon
          onPress={handleNextStep}
          size={20}
          color={colors.primary}
          name="arrow-right"
        />
      </View>

      <Modal
        animationType="slide"
        onDismiss={() => setModalVisible(false)}
        visible={modalVisible}
        transparent
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0, 0.3)',
          }}
        >
          <ScrollView
            style={{
              flex: 1,
            }}
          >
            <TouchableOpacity
              activeOpacity={0}
              style={{
                height: 450,
              }}
              onPress={() => {
                setModalVisible(false);
              }}
            />
            <View
              style={{
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                backgroundColor: 'white',
                padding: 20,
              }}
            >
              <Picker
                style={{
                  backgroundColor: colors.light,
                  marginBottom: 20,
                }}
                selectedValue={receitaIngredient?.ingrediente?.id}
                onValueChange={(val) =>
                  setReceitaIngredient({
                    ...receitaIngredient,
                    ingrediente: getListItem(ingredients, val),
                  })
                }
              >
                {renderIngredientsOptions()}
              </Picker>

              <View
                style={{
                  flexDirection: 'row-reverse',
                }}
              >
                <Picker
                  style={{
                    flex: 1,
                    backgroundColor: colors.light,
                  }}
                  selectedValue={receitaIngredient?.unidade?.id}
                  onValueChange={(val) => {
                    setReceitaIngredient({
                      ...receitaIngredient,
                      unidade: getListItem(unidades, val),
                    });
                  }}
                >
                  {renderUnidadesOptions()}
                </Picker>

                <Input
                  style={{
                    width: 100,
                    marginRight: 20,
                  }}
                  keyboardType="numeric"
                  placeholder={'Qtd'}
                  value={String(receitaIngredient.quantidade)}
                  onChangeText={(text) =>
                    setReceitaIngredient({
                      ...receitaIngredient,
                      quantidade: Number(text),
                    })
                  }
                />
              </View>

              <Button onPress={handleAddIngredient}>
                <Text>Adicionar</Text>
              </Button>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

export default IngredientStepScreen;
