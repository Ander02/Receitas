/* eslint-disable no-use-before-define */
/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from '../../components/_commons/SafeAreaView';
import { Button } from '../../components/_commons/Button';
import { CenterView } from '../../components/_commons/CenterView';
import service from '../../services';
import Empty from '../../components/_commons/Empty';

const DetalhesReceitaScreen: React.FC = () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  const [receita, setReceita] = useState(null);

  const getReceita = async () => {
    await service
      .get(`/receitas/${params.receitaId}`)
      .then(({ data }) => setReceita(data))
      .catch(e => console.log(e));
  };


  
  useEffect(() => {
    if (params.receitaId) {
      getReceita();
    }
  }, [params.receitaId]);

  if (!receita) 
    return <Empty message="Nenhuma receita encontrada" />;

  return (
    <>
      <SafeAreaView>
        <Text>{JSON.stringify(receita)}</Text>
      </SafeAreaView>
    </>
  );
};

export default DetalhesReceitaScreen;
