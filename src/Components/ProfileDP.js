import React from 'react';
import { TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { SingleImage } from 'react-native-zoom-lightbox';
import { Image } from 'react-native-elements';

const ProfileDP = ({ source, containerStyle, imageStyle }) => {
    return (
        <View style={[style.containerStyle, containerStyle]}>
            <SingleImage uri={source} style={[style.dpImage, imageStyle]} />
        </View>
    );
};
const style = {
    containerStyle: {
        alignSelf: 'center',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderWidth: 4,
        shadowColor: '#000',
        shadowRadius: 20,
        elevation: 10
    },
    dpImage: {
        // width: 57,
        // height: 57,
        height: 110,
        width: 110,
        backgroundColor: '#d0d0d0',
        borderRadius: 100,
        overflow: 'hidden'
    }
};
export { ProfileDP };
