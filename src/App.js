import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState('')
  const [id, setId] = useState('nomikazu-x')
  const ids = ['nomikazu-x', 'gaearon', 'aws', 'google', 'facebook']
  const getRondomId = () => {
    const _id = ids[Math.floor(Math.random() * ids.length)]
    setId(_id)
  }

  useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setName(data.name)
      })
      .catch(error => {
        console.error(error)
      })
  }, [id])

  return (
    <div>
      <p>{id}の、GitHubの名前は{name}です。</p>
      <button onClick={getRondomId}>ID変更</button>
    </div>
  );
}

export default App;
