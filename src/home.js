import React from 'react';
import {
    ScrollView, StyleSheet, ActivityIndicator
} from 'react-native';
import UserList from './user-list';

class Home extends React.Component {
    state = {
        users : [],
        loading: true
    };

    async getUsers() {
        const res = await fetch('https://randomuser.me/api/?results=20');
        const {results} = await res.json();
        this.setState({
            users : results.slice(0),
            loading: false
        })
    }
    
    componentDidMount() {
        this.getUsers();
    }

    render() {
        let {users, loading} = this.state;
        let scrollComponent = (
            <ActivityIndicator
                        style={[styles.centering, styles.gray]}
                        size="large"
                        color="#22a0ce"></ActivityIndicator>
        )

        if (!loading) {
            scrollComponent = <UserList users={users}/>;
        }

        return (
            <ScrollView
                noSpacer={true}
                noScroll={true}
                style={styles.container}>

                {scrollComponent}

            </ScrollView>
        )
    }
}

var styles = StyleSheet.create({
    container: {
      backgroundColor: "whitesmoke"
    },
    centering: {
      alignItems: "center",
      justifyContent: "center",
      padding: 8,
      height: '100vh'
    }
});

export default Home;