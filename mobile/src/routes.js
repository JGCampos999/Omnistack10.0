import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Main from './pages/Main'
import Profile from './pages/Profile'

const AppStack = createStackNavigator()

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: '#FFF',
                headerStyle: {
                    backgroundColor: '#7D40E7'
                }
            }}>
                <AppStack.Screen name="DevRadar" component={Main} />
                <AppStack.Screen name="Profile" options={{
                    headerTitle: 'Perfil no Github'
                }} component={Profile} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}