import React, { useState } from 'react';
import "./VirtualAssistant.css";

function VirtualAssistant() {
  const [assistantResponse, setAssistantResponse] = useState('');

  const handleAssistantRequest = () => {
    const accessToken = 'YOUR_GOOGLE_ASSISTANT_ACCESS_TOKEN';

    const apiEndpoint = 'https://https://actions.googleapis.com/v2.google.com/assistant/sdk/reference/rpc#google.assistant.devices.v1alpha2.devicesplatformservice';
    const url = `${apiEndpoint}/conversations:execute`;
    
    const request = {
      "user": {
        "userId": "USER_ID"
      },
      "queryInput": {
        "text": {
          "text": "Hello",
          "languageCode": "en-US"
        }
      }
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    })
      .then((response) => response.json())
      .then((data) => {
        setAssistantResponse(data.queryResult.fulfillmentText);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Virtual Personal Assistant</h1>
      <button onClick={handleAssistantRequest}>Ask for Help</button>
      <p>{assistantResponse}</p>
    </div>
  );
}

export default VirtualAssistant;
