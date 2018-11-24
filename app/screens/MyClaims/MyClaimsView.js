import React, { Component } from 'react';
import { View, Text, SectionList } from 'react-native';
import {List} from 'react-native-paper';

//TODO: Add a list object to match notification list

class MyClaimsView extends Component {
    constructor(props) {
        super(props);
    }

    renderClaimsHistoryItem = ({item}) => {
        return (
            <List.Item 
                left={()=><List.Icon icon='folder'/>}
                title={item.title}
                description='testing description'
            />
        )
    };

    renderActiveClaimsItem = ({item}) => {
        return (
            <List.Item 
                left={()=><List.Icon icon='folder'/>}
                title={item.title}
                description='testing description'
                onPress={()=>this.props.navigation.navigate('Claim')}
            />
        )
    };

    render() {
        return (
            <View>
                <SectionList
                    sections={[
                        {title:'ACTIVE CLAIMS', data:this.props.activeClaims, renderItem:this.renderActiveClaimsItem},
                        {title:'PREVIOUS CLAIMS', data:this.props.claimsHistory, renderItem:this.renderClaimsHistoryItem}
                    ]}
                    keyExtractor={(item, index) => item + index}

                    renderSectionHeader={({section: {title}})=><Text>{title}</Text>}
                />
            </View>
        );
    }
}

export default MyClaimsView;
