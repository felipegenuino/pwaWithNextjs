import Image from 'next/image'

export default function Avatars({ avatars }) {

    return (
<ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridGap: '4em' }}>
        {avatars.map(avatar => {
          return (
            <li key={avatar._id}>
                
                <p>{ avatar.name }</p>
                <img src={avatar.photoUrl} width="100%" alt={ avatar.name } />

            </li>
          )
        })}
      </ul>
      )
  }


  export async function getStaticProps() {
    const avatars = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/avatar').then(res => res.json());
    return {
      props: {
        avatars
      }
    }
  }