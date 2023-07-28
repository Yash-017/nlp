import React from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";
import VoiceButton from "./Vtt2";
import WhatshotIcon from '@material-ui/icons/Whatshot';
const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });


function Widgets() {
  return (
    
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>Navigate using Voice! <WhatshotIcon fontSize="small"></WhatshotIcon></h2>
        
        <TwitterTweetEmbed tweetId={"@elonmusk"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Elon Musk"
          options={{ height: 400 }}
        />

        <TwitterShareButton>
        onClick={SpeechRecognition.stopListening}Stop Listening
        </TwitterShareButton>

      

      </div>
      <VoiceButton/>
    </div>
    
    
  );
}

export default Widgets;