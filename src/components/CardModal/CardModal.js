// React
import React from 'react';

// Hooks
import useRequestData from '../../hooks/useRequestData';

// Redux
import { useDispatch, useSelector } from "react-redux";

// Modal
import Modal from 'react-modal';
import { setModalFalse, setModalTrue } from '../../redux/modalSlice';

// Urls
import { BASE_URL } from '../../constants/urls';

// Components
import CardRepo from '../CardRepo/CardRepo';

// Styles
import { IMG, Title, DivText, SubTitle, DivRepo } from './styled';



Modal.setAppElement('#root');


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: "500px",
  },
  overlay: {
    background: "rgb(94, 113, 106, 0.5)",
  }
};


// App
const CardModal = (props) => {

  // States and Constants
  const { modal } = useSelector(state => state.modal)
  const dispatch = useDispatch()

  //Requests
  const repos = useRequestData([], `${BASE_URL}${props.login}/repos`)

  // Render

  const reposMap = repos && repos.map ((repo) => {
    return(
      <CardRepo
      key = {repo.id}
      name = {repo.name}
      url = {repo.html_url}
      />
    )
  })  

  return (
    <Modal
      isOpen={modal}
      onRequestClose={() => dispatch(setModalFalse())}
      style={customStyles}
      contentLabel="modal"
    >
      <Title>{props.user !== null ? props.user : "Not Informed"}</Title>
      <IMG src={props.pic} />
      <SubTitle>E-mail:</SubTitle>
      <DivText>{props.email !== null ? props.email : "Not Informed"}</DivText>
      <SubTitle>Bio:</SubTitle>
      <DivText>{props.bio !== null ? props.bio : "Not Informed"}</DivText>
      {/* <button onClick={() =>dispatch(setModalFalse())}>close</button> */}
      <SubTitle>Repositories:</SubTitle>
      <DivRepo>{reposMap}</DivRepo>
    </Modal>

  )
}

export default CardModal