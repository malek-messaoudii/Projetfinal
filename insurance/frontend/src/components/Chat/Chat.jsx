import { useState } from "react";
import './Chat.css';
import AuthPage from "./authPage";
import ChatsPage from "./chatsPage";

function App() {
  const [user, setUser] = useState(undefined);
  

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;