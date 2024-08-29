import React from "react";

class Chat extends React.Component {
  openForm = () => {
    document.getElementById("myForm").style.display = "block";
  };

  closeForm = () => {
    document.getElementById("myForm").style.display = "none";
  };

  render() {
    return (
      <div>
        <button className="open-button" onClick={this.openForm}>
          Chat
        </button>

        <div className="chat-popup" id="myForm">
          <form action="/action_page.php" className="form-container">
            <h1>Chat</h1>

            <label htmlFor="msg">
              <b>Message</b>
            </label>
            <textarea
              placeholder="Type message.."
              name="msg"
              required
            ></textarea>

            <button type="submit" className="btn">
              Send
            </button>
            <button
              type="button"
              className="btn cancel"
              onClick={this.closeForm}
            >
              Close
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Chat;
