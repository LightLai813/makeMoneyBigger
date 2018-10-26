import React from 'react';

import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import expenseScreen from './components/expense';
import incomeScreen from './components/income';
import transferScreen from './components/transfer';

export default TabNavigator(
  {
    expense: { 
      screen: expenseScreen, 
      navigationOptions: ({ navigation }) => ({
        title: '支出',
      })
    },
    income: { 
      screen: incomeScreen, 
      navigationOptions: ({ navigation }) => ({
        title: '收入',
      })
    },
    transfer: { 
      screen: transferScreen, 
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
