import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ifIphoneX } from 'react-native-iphone-x-helper';

const TransHeader = ({
    onLeftPress,
    onRightPress,
    headerTextColor,
    headerTitle,
    leftIconStyle,
    leftSource,
    rightIconStyle,
    rightSource
}) => (
        <View
            style={{
                height: 60,
                justifyContent: 'flex-end',
                backgroundColor: 'transparent'
            }}
        >
            <View
                style={{
                    // position: 'absolute',
                    height: '100%',
                    backgroundColor: 'transparent',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 15
                }}
            >
                <TouchableOpacity
                    style={{
                        width: 25,
                        height: 25,
                        position: 'absolute',
                        left: '0.5%',
                        padding: 30,
                        zIndex: 9999,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    onPress={onLeftPress}
                >
                    <Image style={leftIconStyle} source={leftSource} />
                </TouchableOpacity>
                <Text
                    style={{
                        color: headerTextColor,
                        width: '80%',
                        textTransform: 'capitalize',
                        fontSize: 18,
                        fontWeight: '500',
                        alignSelf: 'center',
                        textAlign: 'center'
                    }}
                    numberOfLines={1}
                >
                    {headerTitle}
                </Text>

                <TouchableOpacity
                    style={{
                        width: 25,
                        height: 25,
                        position: 'absolute',
                        right: '0.5%',
                        padding: 30,
                        zIndex: 9999,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    onPress={onRightPress}
                >
                    <Image style={rightIconStyle} source={rightSource} />
                </TouchableOpacity>
            </View>
        </View>
    );

export { TransHeader };
