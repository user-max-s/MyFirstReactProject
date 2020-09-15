import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/_Settings/Settings";
import "./App.scss";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <div className="container">
          <Header />
          <div className="flex-container">
            <Navbar />
            <Route
              path="/profile"
              render={() => (
                <Profile
                  posts={props.appState.profilePage.posts}
                  addPost={props.addPost}
                  updateNewPostText={props.updateNewPostText}
                  newPostText={props.appState.profilePage.newPostText}
                />
              )}
            />
            <Route
              path="/dialogs"
              render={() => (
                <Dialogs
                  dialogsPage={props.appState.dialogsPage}
                  dialogsPage={props.appState.dialogsPage}
                />
              )}
            />
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/settings" render={() => <Settings />} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
