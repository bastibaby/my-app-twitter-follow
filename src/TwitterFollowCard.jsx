import { useState } from 'react'

export function TwitterFollowCard({children, userName, initialIsFollowing}){
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    const imgSrc = 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png'
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
      ? 'tw-followCard-button is-following'
      : 'tw-followCard-button'
  
    const handleClick = () => {
      setIsFollowing(!isFollowing)
    }
    return (
        <article className='tw-followCard'>
          <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar' alt='image' src={imgSrc}></img>
            <div className='tw-followCard-info'>
                <strong>{children}</strong>
              <span className='tw-followCard-infoUserName'>@{userName}</span>
            </div>
          </header>
          <aside>
            <button className={buttonClassName} onClick={handleClick}>
                <span className='tw-followCard-text'>{text}</span>
                <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
            </button>
          </aside>   
        </article>
      )
}
    
