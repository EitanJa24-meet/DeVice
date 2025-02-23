// imports
import { View, Text, Alert, ScrollView  } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// function for page
export default function TaskGame() {
  // useState for score
  const [points, setPoints] = useState(0);
  const [challenge, setChallenge] = useState("Loading challenge...");

  const apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyDXQQ3SsSt3u8SRmjpPyrdZVcyyh3xEKoc"
;

  // useEffect to show alert every 20 seconds
  useEffect(() => {
    let interval = setInterval(() => {      /*repeat */
      alert('Get off this game!, Also are you cheating?');
    }, 20000); /*every 20 seconds alert*/ 
  }, []); 

  // Function to fetch a new challenge
  const fetchData = async () => {
    try {
      const response = await axios.post(apiUrl, {
        contents: [
          {
            parts: [
              {
                text: "Generate a short, clear dopamine detox challenge. Keep it under 20 words. Make it actionable and easy with an emphasis on real social interactions."
              }
            ]
          }
        ]
      }, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      });
  
      // Extract generated text
      const generatedText = response.data.candidates?.[0]?.content?.parts?.[0]?.text || "Failed to load challenge.";
      setChallenge(generatedText);
  
    } catch (error) {
      console.error("Error fetching challenge:", error);
      setChallenge("Failed to load challenge.");
    }
  };


  // useEffect to fetch a new challenge every 1 minute
  useEffect(() => {
    fetchData(); // Fetch an initial challenge
    const interval = setInterval(fetchData, 180000); // Run every 180 seconds (3 minutes)

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);


  // the tasks
  return (
    <View style={{ flex: 1, padding: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>TasksGame</Text>
        <Text style={{ fontSize: 35, marginBottom: 10 }}>Points: {points}</Text>

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>  
        {/* Task buttons */}
        {/* AI 'Daily' task */}
        <NewTask
          Name={challenge}
          Points={500}
          BgColor="red"
          TxtColor="black"
          setPoints={setPoints}
        />
        {/* running task */}
        <NewTask
          Name="Run 1 km without using your phone"
          Points={300}
          BgColor="lightblue"
          TxtColor="black"
          setPoints={setPoints}
        />
        {/* reading task */}
        <NewTask
          Name="Read 10 pages of a book"
          Points={100}
          BgColor="#8FBC8F"
          TxtColor="black"
          setPoints={setPoints}
        />
        {/* meditating task */}
        <NewTask
          Name="Meditate for 5 minutes"
          Points={200}
          BgColor="#006400"
          TxtColor="white"
          setPoints={setPoints}
        />
      </ScrollView>
    </View>
  );
}

// reusable component for the Tasks/Game
function NewTask({ Name, Points, BgColor, TxtColor, setPoints }) {
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

