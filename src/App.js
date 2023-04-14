import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
function App() {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <div className="App">
    <ChatEngine
    height="100vh" 
    projectID={"a3384a48-3587-4eeb-88cb-2f06d00a2e82"}
    userName={"omnia rafat"}
    userSecret={"1234"}
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}


    />
    </div>
  );
}

export default App;
