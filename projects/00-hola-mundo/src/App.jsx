import { TwitterFollowCard } from "./TwitterFollowCard";

export const App = () => {
  const formatUserName = (username) => `@${username}`;
  

  return (
    <section className="App">
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="ehalfonso"
        initialisFollowing>
            Eric Armando
        </TwitterFollowCard>
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="e2hvaldez"
        initialisFollowing={false}>
            Eric Emilio
        </TwitterFollowCard>
        
    
     
    </section>
  );
};
