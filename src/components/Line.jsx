import React, { useEffect, useState } from 'react';
import { auth, db } from "../firebase";
import SendMessage from './SendMessage';
import SignOut from './SignOut';

const Line = () => {

  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection('messages').orderBy("createdAt").limit(50).onSnapshot((Snapshot) => {
      setMessages(Snapshot.docs.map((doc) => doc.data()));
    });
}, []);
   
  return (
    <div>
      {console.log(messages)}
        <SignOut />
        <div className="msgs">
          {messages.map(({id, text, photoURL, uid}) => (
            <div>
              <div key={id} className={`msg ${uid === auth.currentUser.uid ? "sent" : "recieved"}`}>
                 <img src={photoURL} alt="" />
                 <p>{text}</p>
              </div>
            </div>
))}
        </div>
        <SendMessage style={{ color: "#7AC2FF", marginLeft: "20px" }} />
    </div>
  )
}

export default Line
