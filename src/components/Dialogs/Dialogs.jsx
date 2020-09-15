import React from "react";
import "./Dialogs.scss";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((d) => (
    <Dialog name={d.name} id={d.id} />
  ));

  let messagesElements = props.dialogsPage.messages.map((m) => (
    <Message id={m.id} message={m.message} />
  ));

  const messageRef = React.createRef();

  const addMessage = () => {
    let message = messageRef.current.value;
    alert(message);
  };

  return (
    <div className="dialogs_container">
      <div className="dialogs">{dialogsElements}</div>
      <div className="messages">
        {messagesElements}
        <textarea className="messages__textarea" ref={messageRef} placeholder="Your message"></textarea>
        <button className="messages__btn" onClick={addMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Dialogs;
