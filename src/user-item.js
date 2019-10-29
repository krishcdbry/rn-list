import React from 'react';
import {
    Image, View, Text, StyleSheet
} from 'react-native';

const UserItem = ({item: user}) => {
    return (
        <View style={styles.row}>
            <Image style={styles.rowIcon} source={user.picture.medium}/>
            <View style={styles.rowData}>
                <Text style={styles.rowDataText}>
                {`${user.name.title} ${user.name.first} ${user.name.last}`}
                </Text>
                <Text style={styles.rowDataSubText}>{user.email}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row : {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        padding: 15,
        marginBottom: 5,
        backgroundColor: "#FFFFFF",
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "rgba(0,0,0,0.1)"
    },
    rowIcon : {
        width: 70,
        height: 70,
        borderRadius: "50%",
        marginRight: 20,
        boxShadow: "0px 0px 3px rgba(0,0,0,0.5)"
    },
    rowData: {
        flex: 1
    },
    rowDataText : {
        fontSize: 15,
        color: "#404040",
        textTransform: "capitalize"
    },
    rowDataSubText: {
        fontSize: 12,
        color: "#999"
    }
})

export default UserItem;