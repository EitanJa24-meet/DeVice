import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function TasksGame() {
  const [points, setPoints] = useState(0); // State to track total points

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>TasksGame</Text>
      <Text style={{ fontSize: 16, marginBottom: 10 }}>Points: {points}</Text>

      {/* Task buttons */}
      {/* run task */}
      <NewTask
        Name="Run 1 km without using your phone"
        Points={300}
        BgColor="lightblue"
        TxtColor = 'black'
        setPoints={setPoints} 
      />
       {/* read task */}
      <NewTask
        Name="Read 10 pages of a book"
        Points={100}
        BgColor="#8FBC8F"
        setPoints={setPoints} 
      />
      {/* mediate task */}
        <NewTask
        Name='Meditate for 5 minutes'
        Points = {200}
        BgColor='#006400'
        TxtColor='white'
        setPoints={setPoints}
        />

      


    </View>
  );
}

function NewTask({ Name, Points, BgColor,TxtColor, setPoints }) {
  return (
    <button
      style={{
        backgroundColor: BgColor,
        color: TxtColor,
        padding: '10px 10px 10px 20px', // Top, Right, Bottom, Left
        marginVertical: 5,
        marginBottom: 15,
        width: '80%',
        textAlign: 'left',
        display: 'block',
        border: 'none',
        cursor: 'pointer',
        border: '0.8px solid #000', 
      }}
      onClick={() => setPoints((prev) => prev + Points)} 
    >
      {Name} ({Points} points)
    </button>
  );
}
