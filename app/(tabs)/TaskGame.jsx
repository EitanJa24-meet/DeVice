// imports if react native
import { View, Text, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';

// function for page
export default function TasksGame() {
  // useState for score
  const [points, setPoints] = useState(0); 

// intervention to help with addiction (just an example)
useEffect(() => {
  let interval = setInterval(() => {      /*repeat */
    alert('Get off this game!, Also are you cheating?');
  }, 10000); /*every 10 seconds alert*/ 
}, []); 

// the tasks
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>TasksGame</Text>
      <Text style={{ fontSize: 35, marginBottom: 10 }}>Points: {points}</Text>

      {/* Task buttons */}
      {/* runining task */}
      <NewTask
        Name="Run 1 km without using your phone"
        Points={300}
        BgColor="lightblue"
        TxtColor = 'black'
        setPoints={setPoints} 
      />
       {/* reading task */}
      <NewTask
        Name="Read 10 pages of a book"
        Points={100}
        BgColor="#8FBC8F"
        setPoints={setPoints} 
      />
      {/* mediating task */}
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
// resuable component for the Tasks/Game
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
