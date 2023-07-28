import React, { useState, useEffect } from 'react';

import {  Button } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';
import KeyboardVoiceRoundedIcon from '@mui/icons-material/KeyboardVoiceRounded';

import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import MicOffIcon from '@mui/icons-material/MicOff';
import IconButton from '@material-ui/core/IconButton';
const VoiceButton = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcription, setTranscription] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    let recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    
    recognition.onresult = event => {
      let interimTranscription = '';
      let finalTranscription = '';

      for (let i = event.resultIndex; i < event.results.length; i++) {
        let transcription = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscription += transcription + ' ';
        } else {
          interimTranscription += transcription;
        }
        const command = event.results[i][0].transcript;
    if (command.includes('rate')||command.includes('rating')||command.includes('ratings')) {
      navigate('/rate');
    } else if (command.includes('search') ||command.includes('find')){
      navigate('/search');
      
    } else if (command.includes('home')) {
      navigate('/');
    }
    else if (command.includes('add')||command.includes('playlist')) {
      navigate('/playlist');
    }
    else if (command.includes('play')) {
      navigate('/play');
    }
    
      }

      
     

      setTranscription(finalTranscription);
    };

    recognition.onerror = event => {
      console.error(event.error);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    if (isListening) {
      recognition.start();
    } else {
      recognition.stop();
    }

    return () => {
      recognition.stop();
    };
  }, [isListening]);

  const handleStartButtonClick = () => {
    setIsListening(true);
  };

  const handleStopButtonClick = () => {
    setIsListening(false);
  };

  const handleResetButtonClick = () => {
    setTranscription('');
    setIsListening(false);
  };




  return (
    <div class='vttbtn'>
      {' '}{' '}<IconButton color="default" onClick={handleStartButtonClick} disabled={isListening}>
      <RecordVoiceOverIcon fontSize="medium" />
        Start
      </IconButton>{' '}{' '}{' '}
      
      <IconButton color='primary'  onClick={handleStopButtonClick} disabled={!isListening}>{' '}
        <MicOffIcon fontSize='medium'/>
        Stop
      </IconButton>{' '}{' '}{' '}
      <Button variant='light'onClick={handleResetButtonClick} disabled={transcription === ''}>{' '}
        Reset
      </Button>{' '}{' '}{' '}
      <p>{transcription}</p>
      
    </div>
  );
};

export default VoiceButton;
