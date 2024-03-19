import { StyleSheet, Text, View, Pressable, ActivityIndicator, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import SubmitButton from "../components/SubmitButton";
import { useLoginMutation } from "../services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { loginSchema } from "../validations/loginSchema";
import { insertSession } from "../db/";

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [errorMail, setErrorMail] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [triggerSignin, result] = useLoginMutation();
    const dispatch = useDispatch();
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        const userAuthenticated = false;
        if (userAuthenticated) {
            navigation.replace("Home");
        }
    }, []);

    useEffect(() => {
        if (result.data) {
            dispatch(setUser(result.data));
            insertSession({
                email: result.data.email,
                localId: result.data.localId,
                token: result.data.idToken
            })
            .then((result) => console.log(result))
            .catch(err => console.log(err.message))
            }
        }, [result]);

    const onSubmit = () => {
        try {
            loginSchema.validateSync({ password, email });
            triggerSignin({ email, password });
        } catch (err) {
            switch (err.path) {
                case "email":
                    setErrorMail(err.message);
                    break;
                case "password":
                    setErrorPassword(err.message);
                    break;
                default:
                    break;
            }
            setShowAlert(true); 
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Inicio Sesión</Text>
            <InputForm label={"Email"} error={errorMail} onChange={setEmail} />
            <InputForm
                label={"Contraseña"}
                error={errorPassword}
                onChange={setPassword}
                isSecure={true}
            />
            {result.isLoading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <SubmitButton title={"Ingresar"} onPress={onSubmit} />
            )}
            <View style={styles.contenedorText}>
                <Text>No tienes cuenta?</Text>
                <Pressable onPress={() => navigation.navigate("Register")}>
                    <Text style={styles.link}>REGISTRATE</Text>
                </Pressable>
            </View>
            {showAlert && (
                Alert.alert(
                    "Usuario y/o contraseña incorrecto",
                    "Por favor, verifica tus credenciales e intenta nuevamente.",
                    [
                        { text: "OK", onPress: () => setShowAlert(false) }
                    ]
                )
            )}
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
        justifyContent: 'center',
        textAlign: 'center'
    },
    link: {
        color: 'blue',
        fontSize: 16,
        textAlign: 'center',
    },
    contenedorText: {
        margin: 10,
        alignItems: 'center',
        margin: 20,
    }
});
