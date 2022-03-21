import React from 'react';
import './App.scss';
import { Modal, ColorsList} from './components';
import Button from './components/Button/Button';
import { useModal } from './utilits/customHooks/useModal';

const App: React.FC = () => {
  const { showModal, toggle } = useModal();

  return (
    <>
      <section className='app-colors'>
        <div className="container">
          <div>
          <div className='box'>
            <Button onClick={toggle} type="button" btnClass="btn__basic" title="Add Color" />
          </div>
            <div className='box-colorsList'>
            {!showModal && <ColorsList showModal={showModal}  /> }
          </div>
          </div>
        </div>
        <Modal showModal={showModal} onCancel={toggle} />
      </section>
    </>
  );
}

export default App;

