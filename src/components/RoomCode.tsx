import copyImg from '../assets/images/copy.svg';

import '../styles/room-code.scss';

type RoomCodeProps = {
  code: string;
}

export function RoomCode(props: RoomCodeProps){
  function copy(){
    navigator.clipboard.writeText(props.code)
  }

  return(
    <button className="room-code" onClick={copy}>
      <div>
        <img src={copyImg} />
      </div>
      <span>Sala #{props.code}</span>
    </button>
  )
}