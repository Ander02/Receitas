/* eslint-disable react/style-prop-object */
import React, { useState } from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import service from '../../services';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../components/_commons/Button';
import { Input } from '../../components/_commons/Input';
import { SafeAreaView } from '../../components/_commons/SafeAreaView';
import { CenterView } from '../../components/_commons/CenterView';
import { Logo } from '../../components/_commons/Logo';

const NewUser: React.FC = () => {
  const navigation = useNavigation();

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const handleNewUser = async () => {
    await service.post('/users', user).then(({ data }) => data);

    navigation.navigate('Login');
  };

  return (
    <SafeAreaView>
      <Logo></Logo>
      <CenterView>
        <Input
          onChangeText={(name) =>
            setUser((prevUser) => ({ ...prevUser, name }))
          }
          placeholder="Nome de usuário"
        />
        <Input
          onChangeText={(email) =>
            setUser((prevUser) => ({ ...prevUser, email }))
          }
          placeholder="E-mail"
        />

        <Input
          onChangeText={(password) =>
            setUser((prevUser) => ({ ...prevUser, password }))
          }
          placeholder="Senha"
          secureTextEntry
        />
        <Button onPress={handleNewUser} disabled={loading}>
          <Text> {loading ? 'Carregando...' : 'Criar usuário'}</Text>
        </Button>
      </CenterView>
    </SafeAreaView>
  );
};

export default NewUser;
