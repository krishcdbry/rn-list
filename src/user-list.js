import React from 'react';
import { SwipeableFlatList } from 'react-native';
import UserItem from './user-item';

const UserList = (props) => {
    return (
        <SwipeableFlatList
            data={props.users}
            renderItem={UserItem}
            maxSwipeDistance={160}
            bounceFirstRowOnMount={true}>
        </SwipeableFlatList>
    )
}

export default UserList;