import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Button = ({ onPress, iconName, title, btnStyle, textStyle }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[style.buttonStyle, btnStyle]}>
            <Icon name={iconName} size={25} color='#fff' style={{ position: 'absolute', left: 30 }} />
            <Text style={[style.titleStyle, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

const style = {
    buttonStyle: {
        width: '100%',
        height: 36,
        borderRadius: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    titleStyle: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        width: '90%',
    }
};

export { Button };
