import React from 'react';
import Modal from 'react-modal';
import style from './addLink.module.scss';
import {connect} from 'react-redux';

// Icons
import {IoMdClose} from 'react-icons/io'

// Components
import LinksForms from './LinksForm/LinksForm.component';

// Actions
import {AddLinkAC} from '../../redux/reducer/links/links.action';



const AddLink = (props) => {

  Modal.setAppElement('#root');

  const [modalIsOpen, setIsOpen] = React.useState(false);

  let closeModal = () => {
    setIsOpen(false);
  }

  let openModal = () => {
    setIsOpen(true)
  }

  let onSubmit = (formData) => {
    props.AddLinkAC(formData);
  }
  return(
    <>
    <p onClick={openModal} className={style.addLink}>Добавить ссылку</p>
    <Modal
      isOpen={modalIsOpen}
      overlayClassName={{
        base: style.overlay,
        afterOpen: style.afterOpen,
        beforeClose: style.beforeClose
      }}
      className={style.modal}
      onRequestClose={closeModal} >

        <div className={style.addLinkContainer}>
            <div className={style.addLinkContainer__top}>
              <p className={style.addLinkContainer__text}>Добавить ссылку</p>
              <IoMdClose onClick={closeModal}  className={style.addLinkContainer__icon} />
            </div>
            <LinksForms closeModal={closeModal} onSubmit={onSubmit} />
        </div>
    </Modal>
    </>
  )
}


export default connect(null, {AddLinkAC})(AddLink);