import { useHistory } from "react-router-dom"

import illustrationImg from "../assets/images/illustration.svg"
import logoImg from "../assets/images/logo.svg"
import googleiconImg from "../assets/images/google-icon.svg"

import "../styles/auth.scss"
import { Button } from "../components/Button"
import { useAuth } from "../hooks/userAuth"
import { FormEvent, useState } from "react"
import { database } from "../services/firebase"

export function Home() {
  const history = useHistory(); // exemplo de hook(useHistory)
  const { signInWithGoogle, user } = useAuth()
  const [roomCode, setRoomCode ] = useState('')

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle()
    }
      history.push("/rooms/new")
    } 

    async function handleJoinRoom(event: FormEvent ) {
      event.preventDefault()

      if(roomCode.trim() === '') {
        return
      }

      const roomRef = database.ref(`rooms/${roomCode}`).get()

      if(!(await roomRef).exists()) {
        alert('Room does not exists')
        return
      }

      history.push(`/rooms/${roomCode}`)
    }
  
  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="ilustração simbolizando perguntas e respostas" />
        <strong>Toda pergunta tem uma resposta.</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-content" >
          <img src={logoImg} alt="Letmeask" />
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleiconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom} >
            <input
             type="text"
             placeholder="Digite o código da sala"
             onChange={event =>setRoomCode(event.target.value)}
             value={roomCode}
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>

  )
}