import { StyleSheet, Text, View, Pressable, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import SubmitButton from "../components/SubmitButton";
import { useLoginMutation } from "../services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { loginSchema } from "../validations/loginSchema";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [triggerSignin, result] = useLoginMutation();

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(result);
    if (result.data) {
      dispatch(setUser(result.data));
    }
  }, [result]);

  const onSubmit = () => {
    try {
        loginSchema.validateSync({ password, email });
        triggerSignin({ email, password });
    } catch (err) {
        if (err && err.path) {
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
        }
    }
};
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Iniciar Sesión</Text>
            <InputForm label="Email" error={errorMail} onChange={setEmail} isSecure={false} />
            <InputForm label="Contraseña" error={errorPassword} onChange={setPassword} isSecure={true} />
            <SubmitButton title={"Login"} onPress={onSubmit} />
            <Pressable onPress={() => navigation.navigate('Register')}>
                <Text style={styles.link}>¿No tienes cuenta? Crea una aquí</Text>
            </Pressable>
        </View>
    );
};

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
        marginBottom: 20,
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    link: {
        color: 'blue',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default Login;
