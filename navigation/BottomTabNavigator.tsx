import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import BlocksTabScreen from '../screens/BlocksTabScreen';
import TransactionsTabScreen from '../screens/TransactionsTabScreen';
import { BottomTabParamList, BlocksTabParamList, TransactionsTabParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Blocks"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Blocks"
        component={BlocksTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Transactions"
        component={TransactionsTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const BlocksTabStack = createStackNavigator<BlocksTabParamList>();

function BlocksTabNavigator() {
  return (
    <BlocksTabStack.Navigator>
      <BlocksTabStack.Screen
        name="BlocksTabScreen"
        component={BlocksTabScreen}
        options={{ headerTitle: 'Blocks' }}
      />
    </BlocksTabStack.Navigator>
  );
}

const TransactionsTabStack = createStackNavigator<TransactionsTabParamList>();

function TransactionsTabNavigator() {
  return (
    <TransactionsTabStack.Navigator>
      <TransactionsTabStack.Screen
        name="TransactionsTabScreen"
        component={TransactionsTabScreen}
        options={{ headerTitle: 'Transactions' }}
      />
    </TransactionsTabStack.Navigator>
  );
}
