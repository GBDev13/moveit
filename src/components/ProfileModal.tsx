import { Overlay } from '../styles/components/ProfileModalStyles';

export function ProfileModal({badge, closeProfileModal}) {

  return (
    <Overlay>
      <div className="container">
        <div>
          <header>
            <img src={badge.image}/>
          </header>

          <p>{badge.description}</p>

          <button type="button" onClick={closeProfileModal}>
            <img src="/icons/close.svg" alt="Fechar modal"/>
          </button>
        </div>
      </div>
    </Overlay>
  )
}