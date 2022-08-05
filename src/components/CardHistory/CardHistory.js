import { MainContainer, Button, DivName, DivButton } from "./styled"

// Redux
import { useDispatch} from "react-redux";
import { setModalTrue } from "../../redux/modalSlice";
import { removeFromHistory } from "../../redux/historySlice";
import { setUser} from "../../redux/userSlice";


// Requests
import axios from "axios";
import { BASE_URL } from "../../constants/urls";





const CardHistory = (props) => {

    const dispatch = useDispatch()

    const functions = (name) => {
        const url = (`${BASE_URL}${name}`)
        axios.get(url)
            .then((response) => {
                dispatch(setUser(response.data))
                dispatch(setModalTrue())
            })
            .catch((error) => {
                console.log(error)
                alert("Can't load data, refresh your browser")
            })
    }

    return (
        <MainContainer >
            <DivName>
                {props.name}
            </DivName>

            <DivButton>
                <Button onClick={() => functions(props.name)}>+</Button>
                <Button onClick={() => dispatch(removeFromHistory(props.id))}>x</Button>
            </DivButton>



        </MainContainer>
    )
}

export default CardHistory