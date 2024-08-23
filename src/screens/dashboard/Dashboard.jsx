import { View, Text, Dimensions, FlatList } from 'react-native'
import React from 'react'
import AppBar from './AppBar'
import Metrics from './Metrics'
import { LineChart } from 'react-native-chart-kit'
import Chart from './Chart'
import RecentOrder from './RecentOrder'
import { SafeAreaView } from 'react-native-safe-area-context'

const Dashboard = () => {
  return (
    <SafeAreaView className="p-4">
      <AppBar />

      <FlatList
      showsVerticalScrollIndicator={false}
        data={[1]}
        renderItem={({ item }) => (
          <>
            <Metrics />
            <Chart />
            <RecentOrder />
          </>
        )}
      />
    </SafeAreaView>
  );
}

export default Dashboard