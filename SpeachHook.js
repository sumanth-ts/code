import { useState, useEffect } from 'react';

const useTextToSpeech = () => {
  const [speechSynthesis, setSpeechSynthesis] = useState(null);

  useEffect(() => {
    const synth = window.speechSynthesis;

    if ('speechSynthesis' in window) {
      setSpeechSynthesis(synth);
    } else {
      console.warn('Text to Speech is not supported in this browser');
    }

    return () => {
      if (synth) {
        synth.cancel();
      }
    };
  }, []);

  const speak = (text) => {
    if (speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    }
  };

  const stop = () => {
    if (speechSynthesis) {
      speechSynthesis.cancel();
    }
  };

  return { speak, stop };
};

export default useTextToSpeech;


// -------------------------------------------

import React, { useState } from 'react';
import useTextToSpeech from './useTextToSpeech';

const App = () => {
  const { speak, stop } = useTextToSpeech();
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSpeak = () => {
    speak(text);
  };

  const handleStop = () => {
    stop();
  };

  return (
    <div>
      <h1>Text to Speech</h1>
      <textarea value={text} onChange={handleChange} />
      <button onClick={handleSpeak}>Speak</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default App;
