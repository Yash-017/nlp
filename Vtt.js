import "./App.css"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import {useState,useEffect} from "react";
import React from "react";
import { Button } from "@material-ui/core";



const Vtt = () => {
    
    const [isListening, setIsListening] = useState(false);
    const [transcription, setTranscription] = useState('');
    
    
    const [textToCopy, setTextToCopy] = useState();
    
    const [isCopied, setCopied] = useClipboard("textToCopy", {
        successDuration:1000});
  
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
        <>
            <div className="container" >
                <h3> Post using voice!</h3>
                <br/>
                

                

                <div className="btn-style">

                    <Button onClick={setCopied}>
                        {isCopied ? 'Copied!' : 'Copy to clipboard'}
                    </Button>
                    <Button onClick={handleStartButtonClick}>Start Listening</Button>
                    <Button onClick={SpeechRecognition.stopListening}>Stop Listening</Button>
                    <Button onClick={handleResetButtonClick} >Reset </Button>
                </div>
                <p>{transcription}</p>
            </div>

        </>
    );
};

export default Vtt;