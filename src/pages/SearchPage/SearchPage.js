// React
import React from "react";
import { useEffect } from "react";

// Routes
import { useNavigate } from "react-router-dom";
import { goToHistoryPage } from "../../router/coordinator"

// Hooks
import useForm from "../../hooks/useForm";

// Assets
import LOGO from "../../assets/logo.png"

// Redux
import { useDispatch, useSelector } from "react-redux";
import { addToHistory, updateHistory } from "../../redux/historySlice";
import { setModalTrue } from "../../redux/modalSlice";
import { setUser } from "../../redux/userSlice";

// Requests
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

// Modal
import CardModal from "../../components/CardModal/CardModal";

// Style
import { MainContainer, SubMainContainer, DivTitle, DivForm, DivButton, Button, Form } from "./styled";


// App
const SearchPage = () => {

    // States and Constants
    const navigate = useNavigate()

    const { form, onChange, cleanFields } = useForm({
        user: ""
    });

    const { user } = useSelector(state => state.user)
    const { history } = useSelector(state => state.history)
    const dispatch = useDispatch()

    // UseEffect
    useEffect(() => {
        if (history.length) {
            window.sessionStorage.setItem("history", JSON.stringify(history))
        }
    }, [history]);

    useEffect(() => {
        if (Object.keys(user).length) {
            window.sessionStorage.setItem("user", JSON.stringify(user))
        }
    }, [user]);

    useEffect(() => {
        const history = window.sessionStorage.getItem("history")
        const user = window.sessionStorage.getItem("user")
        if (history) {
            const historyObj = JSON.parse(history)
            dispatch(updateHistory(historyObj))
        }
        if (user) {
            const userObj = JSON.parse(user)
            dispatch(setUser(userObj))
        }
    }, []);


    // Functions
    const onSubmitForm = (event) => {
        event.preventDefault();
        const url = (`${BASE_URL}${form.user}`)
        axios.get(url)
            .then((response) => {
                dispatch(setUser(response.data))
                dispatch(addToHistory(response.data))
                dispatch(setModalTrue())
                cleanFields()
            })
            .catch((error) => {
                alert("Can't load data, refresh your browser")
            })
    }
 
  
    return (
        <MainContainer >
            <SubMainContainer>



                <DivTitle> <img src={LOGO} /></DivTitle>

                <DivForm>
                    <Form onSubmit={onSubmitForm}>
                        <input
                            name={"user"}
                            value={form.user}
                            onChange={onChange}
                            placeholder="User"
                            required
                        />
                        <Button>Search</Button>
                    </Form>
                </DivForm>



                <DivButton>
                    <Button onClick={() => goToHistoryPage(navigate)}>History Page</Button>
                </DivButton>



                <CardModal
                    user={user.name}
                    pic={user.avatar_url}
                    bio={user.bio}
                    email={user.email}
                    login={user.login}
                />

            </SubMainContainer>
        </MainContainer >
    )
}

export default SearchPage