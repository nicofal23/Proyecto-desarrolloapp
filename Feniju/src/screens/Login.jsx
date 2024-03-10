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
      const userAuthenticated = false; 
      if (userAuthenticated) {
        navigation.replace("Home"); 
      }
    }, []);
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
    };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title} >Login</Text>
      <InputForm label={"Email"} error={errorMail} onChange={setEmail} />
      <InputForm
        label={"Password"}
        error={errorPassword}
        onChange={setPassword}
        isSecure={true}
      />
      {result.isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <SubmitButton title={"Registrarse"} onPress={onSubmit} />
      )}
      <View style={styles.contenedorText}>
        <Text>No tienes cuenta?</Text>
        <Pressable onPress={() => navigation.navigate("Register")}>
            <Text style={styles.link}>REGRISTRARSE</Text>
        </Pressable>
      </View>
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
        marginTop:10,
        justifyContent:'center',
        textAlign:'center'
    },
    link: {
        color: 'blue',
        fontSize: 16,
        textAlign: 'center',
    },
    contenedorText: {
        margin: 10,
        alignItems:'center'
    }
});


