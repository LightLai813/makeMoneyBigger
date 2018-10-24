import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // 6.2.2
import { TabNavigator, TabBarBottom } from 'react-navigation'; // 1.0.0-beta.27

class expenseScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>expenseScreen!</Text>
      </View>
    );
  }
}

class incomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>incomeScreen!</Text>
      </View>
    );
  }
}

class transferScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>transferScreen!</Text>
      </View>
    );
  }
}

export default TabNavigator(
  {
    expense: { 
      screen: expenseScreen, 
      navigationOptions: ({ navigation }) => ({
        title: '支出',
      })
    },
    income: { 
      screen: expenseScreen, 
      navigationOptions: ({ navigation }) => ({
        title: '收入',
      })
    },
    transfer: { 
      screen: expenseScreen, 
      navigationOptions: ({ navigation }) => ({
        title: '轉帳',
      })
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;

        return <Ionicons name={(()=>{
          switch(routeName){
            case 'expense':
              return 'ios-log-out';
            case 'income':
              return 'ios-log-in';
            case 'transfer':
              return 'ios-repeat';
          }
        })()} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
);
