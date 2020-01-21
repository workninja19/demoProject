import React, { Component } from 'react';
import { View } from 'react-native';
import { TransHeader, InputText } from '../../Components';
import IconFontisto from 'react-native-vector-icons/Fontisto';

export default class Search extends Component {
    constructor() {
        super();
        this.state = { search: null, users: null, };
    }

    render() {
        return (
            <View>
                <TransHeader
                    onLeftPress={() => this.props.navigation.goBack()}
                    headerTextColor='#5360F2'
                    headerTitle={'SEARCH'}
                />

                <View style={{ alignSelf: 'center', width: '100%' }}>
                    <InputText
                        placeholder='Search'
                        onChangeText={this.updateSearch}
                        onSubmitEditing={() => this.data()}
                        containerStyle={{ margin: 2 }}
                        value={this.state.search}
                        leftIcon={
                            <IconFontisto
                                name={'search'}
                                size={15}
                                color='#00000099'
                                style={{ paddingRight: 5 }}
                                onPress={() => {
                                    this.setState((state) => ({ showEmoji: !state.showEmoji, showPin: false }));
                                }}
                            />
                        }
                    />
                </View>
            </View>
        );
    }
}
