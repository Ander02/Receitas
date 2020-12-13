import React from 'react';
import { View, Text } from 'react-native';
import colors from '../../utils/styles/colors';
import Icon from '../_commons/Icon';

// import { Container } from './styles';

const IngredientItem: React.FC = ({ item, onPress, showDeleteItem }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
      }}
    >
      <Icon name="circle" color={colors.primary} size={8} />
      <Text
        style={{
          flex: 1,
          marginLeft: 10,
        }}
      >{`${item.quantidade} ${item.unidade.nome} de ${item.ingrediente.name}`}</Text>
      {showDeleteItem && (
        <Icon
          size={20}
          onPress={onPress}
          color={colors.grayLight}
          name="minus"
        />
      )}
    </View>
  );
};

IngredientItem.defaultProps = {
  showDeleteItem: false,
};

export default IngredientItem;
