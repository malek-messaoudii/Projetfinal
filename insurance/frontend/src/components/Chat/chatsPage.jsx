import { PrettyChatWindow } from "react-chat-engine-pretty";
import './Chat.css'

const ChatsPage = (props) => {
  // Define the agent contact
  const agentContact = {
    username: 'AgentAssurance', 
    avatar: 'URL_TO_AGENT_AVATAR', 
  };

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <PrettyChatWindow
        projectId={'59661944-4359-4abe-9d8b-580fcf15727d'}
        username={props.user.username}
        secret={props.user.secret} 
        style={{ height: "100%" }}
        contacts={[agentContact]} // Include the agent contact
        
      />

    </div>
  );
};

export default ChatsPage;
