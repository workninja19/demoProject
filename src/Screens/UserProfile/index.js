import React, { Component } from 'react';
import {
    Image,
    View,
    TouchableOpacity,
    Text,
    ImageBackground,
    ScrollView, AsyncStorage
} from 'react-native';
import { ProfileDP } from '../../Components';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import LinearGradient from 'react-native-linear-gradient';
import firebase from 'firebase';

export default class ViewProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    logout = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Login');
    };

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
                <View style={styles.viewContainer}>
                    <ImageBackground
                        source={{ uri: 'https://papers.co/desktop/wp-content/uploads/papers.co-vu08-wood-texture-pattern-blue-29-wallpaper-320x180.jpg' }}
                        imageStyle={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}
                        style={styles.ImageBackground}
                    >
                        <LinearGradient
                            locations={[0, 1.0]}
                            colors={['#919AFF', '#2D3CE2']}
                            style={styles.LinearGradient}
                        />
                    </ImageBackground>
                </View>
                <TouchableOpacity
                    style={{
                        position: 'absolute',
                        width: 25,
                        height: 25,
                        padding: 30,
                        zIndex: 9999,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    onPress={() => this.props.navigation.goBack()}
                >
                    <Image
                        source={require('../../Assets/iConSet/back-w.png')}
                        style={{
                            width: 10,
                            height: 20,
                            tintColor: '#fff'
                        }}
                    />
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ marginBottom: '5%' }} showsVerticalScrollIndicator={false}>
                    <View style={styles.profileContainer}>
                        <ProfileDP
                            source={'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'}
                            containerStyle={{
                                top: -75,
                                marginBottom: -70
                            }}
                            imageStyle={{
                                width: 120,
                                height: 120
                            }}
                        />
                        <View>
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: '#000',
                                    fontWeight: 'bold',
                                    alignSelf: 'center',
                                    lineHeight: 30
                                }}
                            >
                                Work Ninja
                                    </Text>
                        </View>
                        <View style={{}}>
                            <TouchableOpacity onPress={this.logout}>
                                <Image style={{ height: 40, width: 40, alignSelf: 'center', marginTop: 50 }} source={require('../../Assets/iConSet/exit.png')} onPress={this.logout} />
                                <Text style={{ alignSelf: 'center' }}>Log Out</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ height: 80 }} />
                </ScrollView>
            </View>
        );
    }
}
const styles = {
    ImageBackground: {
        flex: 1
    },
    profileDPContainer: {
        alignSelf: 'center',
        borderRadius: 70,
        alignItems: 'center',
        justifyContent: 'center'
    },
    profileDP: {
        alignSelf: 'center',
        resizeMode: 'cover',
        width: 140,
        height: 140,
        borderRadius: 70,
        top: '-50%',
        marginBottom: '-20%'
    },
    indicator: {
        backgroundColor: 'transparent'
    },
    tabbar: {
        backgroundColor: '#fff',
        borderBottomColor: '#B7B6BE',
        borderBottomWidth: 0.2
    },
    buttonStyle: {
        height: 30,
        width: 100,

        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#5360F2'
    },
    perentContainer: {
        flexDirection: 'row',
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    childViewStyle: {
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerStyle: {
        zIndex: 9999,
        position: 'absolute',
        marginTop: getStatusBarHeight() + 12,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
        backgroundColor: 'transparent',
        right: 20
    },
    viewContainer: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '30%',
        alignSelf: 'center'
    },
    profileContainer: {
        marginTop: getStatusBarHeight() + 150,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10,
        marginBottom: '2%',
        backgroundColor: '#fff',
        padding: 15
    },
    LinearGradient: {
        width: '100%',
        height: '100%',
        opacity: 0.8,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    followBtnContainer: {
        flexDirection: 'row',
        marginTop: 10,
        width: '60%',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center'
    }
};
