export default function Character({ character }) {
    return (
      <div>
        <img src={character.photoUrl} alt="" />
        <div>
          <h1>{ character.name }</h1>
          <p>Affiliation: { character.affiliation }</p>
        </div>
      </div>
    )
  }
  
  export async function getStaticProps() {
    const results = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters?name=korra').then(res => res.json());
    return {
      props: {
        character: results[0]
      }
    }
  }