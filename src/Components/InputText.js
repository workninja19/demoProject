import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input } from 'react-native-elements';

const InputText = ({
    label,
    refer,
    onSubmitEditing,
    returnKeyType,
    placeholder,
    keyboardType,
    multiline,
    maxLength,
    secureTextEntry,
    onChangeText,
    value,
    containerStyle,
    inputContainerStyle,
    inputStyle,
    onFocus,
    onBlur,
    blurOnSubmit,
    autoCapitalize,
    //
    leftIcon,
    rightIcon
}) => (
        <View>
            <Input
                ref={refer}
                onSubmitEditing={onSubmitEditing}
                //
                returnKeyType={returnKeyType}
                //
                containerStyle={[style.containerStyles, containerStyle]}
                inputContainerStyle={[style.inputContainerStyles, inputContainerStyle]}
                inputStyle={[style.inputStyles, inputStyle, { alignSelf: multiline ? 'flex-start' : 'center' }]}
                labelStyle={style.labelStyle}
                //
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                //
                multiline={multiline}
                maxLength={maxLength}
                //
                label={label}
                placeholder={placeholder}
                //
                onChangeText={onChangeText}
                value={value}
                //
                autoCorrect={false}
                //
                onFocus={onFocus}
                onBlur={onBlur}
                blurOnSubmit={blurOnSubmit}
                //
                autoCapitalize={autoCapitalize}
                //
                leftIcon={leftIcon}
                rightIcon={rightIcon}
            />
        </View>
    );

const style = {
    containerStyles: {
        width: '100%',
        padding: 5,
        margin: 15
    },

    inputContainerStyles: {
        width: '97.5%',
        maxHeight: 48,
        backgroundColor: '#fff',
        borderRadius: 25,
        borderColor: '#B7B6BE',
        borderWidth: 1,
        borderBottomWidth: 1
    },
    inputStyles: {
        fontSize: 16,
        alignSelf: 'center'
    },
    labelStyle: {
        fontSize: 16,
        padding: 7,
        paddingLeft: 0,
        color: '#828282'
    },
    errView: { flexDirection: 'row', marginLeft: '5%' },
    errText: { color: 'red', fontSize: 12, zIndex: -999 }
};

export { InputText };
