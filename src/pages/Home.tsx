import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button'

import '../styles/auth.scss'


export function Home() {
  return (
    <div id='page-auth'>
      <aside>
        <img src={illustrationImg} alt="Ilustração de perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire as dúvidas de sua audiêcia em tempo real </p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Question" />
          <button className='create-room'>
            <img src={ googleIconImg } alt="Logo google" />
            Crie sua sala com o google
          </button>

          <div className="separator">ou entre em uma sala</div>

          <form>
            <input
              type="text"
              placeholder="Digite o código da sala"
            />
          </form>
          <Button type="submit">
            Entrar na sala
          </Button>
        </div>
      </main>
    </div>
  )
}