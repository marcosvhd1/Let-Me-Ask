import { useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/Button';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleImage from '../assets/images/google-icon.svg';

import '../styles/auth.scss';

export function Home(){
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  async function handleCreatRoom(){
    if(!user){
      await signInWithGoogle();
    }
    history.push('/rooms/new');
  }

  return (
   <div id="pag-auth">
    <aside>
      <img src={illustrationImg} alt="Ilustração simbolizando pergunta e resposta"/>
      <strong>Crie salas de Q&amp;A ao-vivo</strong>
      <p>Tire as dúvidas da sua audiência em tempo-real</p>
    </aside>      
    <main>
      <div className="main-content">
        <img src={logoImg} alt="Letmeask" />
        <button className="create-room" onClick={handleCreatRoom}>
          <img src={googleImage} alt="Img Google" />
          Crie sua sala com o Google
        </button>
        <div className="separator">ou entre uma sala</div>
        <form>
          <input 
            type="text" 
            placeholder='digite o código da sala'
          />
          <Button type="submit">
            Entrar na sala
          </Button>
        </form>
      </div>
    </main>
   </div>
  );
}