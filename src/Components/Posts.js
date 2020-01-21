import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import { Avatar } from 'react-native-elements';
import { SingleImage } from 'react-native-zoom-lightbox';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

const Posts = ({ avatarImg, username, postImg, like, likes, comments }) => {
    var _menu = null;

    const setMenuRef = (ref) => {
        _menu = ref;
    };

    const hideMenu = () => {
        _menu.hide();
    };
    return (
        <View
            style={[
                shadowView.mainView
            ]}
        >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingLeft: 15,
                    alignItems: 'center'
                }}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Avatar rounded source={avatarImg} />
                    <Text style={{ marginLeft: 10, fontSize: 17, textTransform: 'capitalize' }}>{username}</Text>
                </View>
            </View>
            <View style={{ width: '100%', height: 250, backgroundColor: '#fff' }}>
                {/* <Image source={postImg} style={{ width: '100%', height: '100%' }} /> */}
                <SingleImage
                    uri={postImg}
                    style={{
                        height: '100%',
                        width: '100%',
                        borderRadius: 0
                    }}
                />
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 15
                    // paddingHorizontal: 15
                }}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={like ? require('../Assets/iConSet/like.png') : require('../Assets/iConSet/deslike.png')}
                        style={{ width: 25, height: 25, marginRight: 10, tintColor: like ? '#EE1A1A' : '#000' }}
                    />
                    <Text>
                        <Text style={{ fontWeight: 'bold' }}>{likes}</Text> Likes
					</Text>
                </View>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text>
                        <Text style={{ fontWeight: 'bold' }}>{comments}</Text> Comments
					</Text>
                    <Image
                        source={require('../Assets/iConSet/comment-post.png')}
                        style={{
                            width: 23,
                            height: 23,
                            marginLeft: 10,
                            tintColor: '#000'
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};
const shadowView = {
    mainView: {
        width: '95%',
        borderRadius: 10,
        alignSelf: 'center',
        backgroundColor: '#fff',
        marginBottom: 10
    }
};
export { Posts };
