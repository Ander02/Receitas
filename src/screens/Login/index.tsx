/* eslint-disable react/style-prop-object */
import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import service from '../../services';
import jwtDecode from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import { authenticationSignInAction } from '../../store/reducers/authentication/actions';
import { Button } from '../../components/_commons/Button';
import { Input } from '../../components/_commons/Input';
import { SafeAreaView } from '../../components/_commons/SafeAreaView';
import { CenterView } from '../../components/_commons/CenterView';
import { TotalWidthView } from '../../components/_commons/TotalWidthView';
import { Logo } from '../../components/_commons/Logo';

const Login: React.FC = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const [auth, setAuth] = useState({
    email: 'admin@email.com',
    password: 'senha123',
  });

  const [loading, setLoading] = useState(false);

  const { user, token } = useSelector(({ authentication }) => authentication);

  const handle_auth = async () => {
    setLoading(true);

    try {
      const response = await service
        .post('/auth', auth)
        .then(({ data }) => data);

      const decodeToken = jwtDecode(response.token);
      dispatch(
        authenticationSignInAction(
          { id: decodeToken.sub, name: decodeToken.given_name },
          response.token
        )
      );
      console.log(decodeToken);
    } catch {
      Alert.alert('Erro ao entrar', 'Usuário ou senha inválidos');
    }
    setLoading(false);
  };

  const handle_create_user = async () => {
    navigation.navigate('NewUser');
  };

  return (
    <SafeAreaView>
      <Logo></Logo>
      <CenterView>
        <TotalWidthView>
          <View>
            <Input
              onChangeText={(email) =>
                setAuth((prevAuth) => ({ ...prevAuth, email }))
              }
              placeholder="Nome de usuário"
            />

            <Input
              onChangeText={(password) =>
                setAuth((prevAuth) => ({ ...prevAuth, password }))
              }
              placeholder="Senha"
              secureTextEntry
            />
          </View>
        </TotalWidthView>

        <TotalWidthView>
          <Button onPress={handle_auth} disabled={loading}>
            <Text> {loading ? 'Carregando...' : 'Entrar'}</Text>
          </Button>
          <Button onPress={handle_create_user}>
            <Text> Novo usuário </Text>
          </Button>
        </TotalWidthView>
      </CenterView>
    </SafeAreaView>
  );
};

export default Login;
