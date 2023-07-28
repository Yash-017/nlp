import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";
import Vtt from "./Vtt";

function TweetBox() {
 
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "im@yashbirajdar",
      username: "yashbirajdar",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://www.firstpost.com/wp-content/uploads/2013/06/Dhoni-CT13-AP.jpg",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://www.firstpost.com/wp-content/uploads/2013/06/Dhoni-CT13-AP.jpg" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
       
        
          

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Post
        </Button>

        
      </form>

      <Vtt/>
      
    </div>
  );
}

export default TweetBox;