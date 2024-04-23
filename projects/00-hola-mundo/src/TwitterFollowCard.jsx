import { useState } from "react";
export const TwitterFollowCard = ({ formatUserName, userName, children, initialisFollowing }) => {
  const [isFollowing, setIsFollowing] = useState(initialisFollowing);
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";
  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="avatar de prueba"
          src="https://unavatar.io/deviantart/spyed"
        />
        <div className="tw-followCard-info">
          <strong className="tw-followCard-infoUserName">
            {children}
          </strong>
          <span>{formatUserName(userName)}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stipFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
};
