
import './App.css'

import { TwitterFollowCard } from './TwitterFollowCard.jsx'
const users = [
  {
    userName: 'gaby',
    name: 'Gaby mi esposa',
    isFollowing: true
  },
  {
    userName: 'zyborg',
    name: 'Zyborg',
    isFollowing: false
  },
  {
    userName: 'amanda',
    name: 'Amanda la peos',
    isFollowing: true
  },
  {
    userName: 'basti',
    name: 'Bastybabito bebe',
    isFollowing: false
  }
]


export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}


export default App