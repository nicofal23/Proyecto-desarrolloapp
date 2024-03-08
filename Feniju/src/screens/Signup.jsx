import { Pressable, StyleSheet, Text, View, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import { useSignUpMutation } from "../services/authService";
import SubmitButton from "../components/SubmitButton";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { signupSchema } from "../validations/signupSchema";
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
    const navigation = useNavigation();
    const [name, setName] = useState(""); 
    const [errorname, setErrorName] = useState("");
    const [email, setEmail] = useState("");
    const [errorMail, setErrorMail] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
    const [triggerSignup, result] = useSignUpMutation();

    const dispatch = useDispatch();

    const onSubmit = () => {
        if (!name.trim()) { // Validación para el campo nombre
            setErrorName("Nombre requerido");
            return;
        }
        if (!email.trim()) {
            setErrorMail("Email requerido");
            return;
        }
        if (!email.includes("@")) {
            setErrorMail("Correo electrónico inválido");
            return;
        }
        if (!password.trim()) {
            setErrorPassword("Contraseña requerida");
            return;
        }
        if (!confirmPassword.trim()) {
            setErrorConfirmPassword("Confirmar contraseña");
            return;
        }

        try {
            setErrorMail("");
            setErrorPassword("");
            setErrorConfirmPassword("");

            signupSchema.validateSync({ name, password, confirmPassword, email }); // Validación incluyendo el nombre
            triggerSignup({ name, email, password });
        } catch (err) {
            console.log("path", err.path);
            switch (err.path) {
                case "name":
                    setErrorName(err.message);
                    break;
                case "email":
                    setErrorMail(err.message);
                    break;
                case "password":
                    setErrorPassword(err.message);
                    break;
                case "confirmPassword":
                    setErrorConfirmPassword(err.message);
                    break;
                default:
                    break;
            }
        }
    };

    useEffect(() => {
        if (result.data) {
            dispatch(setUser(result));
            Alert.alert("Registro Exitoso", `¡Bienvenido ${name}!`);
        }
    }, [result]);

    return (
        <View style={styles.container}>
            <Text>Registrarse</Text>
            <InputForm label={"Nombre"} error={errorname} onChange={setName} style={styles.input} />
            <InputForm label={"Email"} error={errorMail} onChange={setEmail} style={styles.input} />
            <InputForm
                label={"Contraseña"}
                error={errorPassword}
                onChange={setPassword}
                isSecure={true}
                style={styles.input}
            />
            <InputForm
                label={"Confirmar Contraseña"}
                error={errorConfirmPassword}
                onChange={setConfirmPassword}
                isSecure={true}
                style={styles.input}
            />
            <SubmitButton title={"Registrarme"} onPress={onSubmit} />
            <Pressable onPress={() => navigation.navigate('Login')}>
                <Text style={styles.link}>Ya tenes cuenta ?  Ingresar a mi cuenta</Text>
            </Pressable>
        </View>
    );
};
export default Signup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    input: {
        width: '70%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    link: {
        color: 'blue',
        fontSize: 16,
        textAlign: 'center',
        marginTop:10,
    },
});
