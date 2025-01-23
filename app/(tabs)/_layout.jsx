import { View, Text } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from "expo-router";

const TabsLayout = () => {
  return (
    <>
        <Tabs>
            <Tabs.Screen name="Home"/>
            <Tabs.Screen name="Events"/>
            <Tabs.Screen name="TaskGame"/>
            <Tabs.Screen name="Profile"/>
        </Tabs>
    </>
  )
}

export default TabsLayout