import { Text, StyleSheet } from "react-native";
import { FontWeb } from '../global/fonts'
import { colors } from '../global/Colors'

const styles = StyleSheet.create({
    general: {
        fontFamily: FontWeb,
        fontSize: 16,
    },
    link: {
        color: colors.link,
        textAlign: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
        textAlign:'center'
    },
    text: {
        fontWeight: 'bold'
    },
    errorColor:{
        color: colors.red,
    },
    textCategori:{
        fontSize: 45,
    },
    font: {
        fontSize: 20,
    },
    label:{
        marginBottom: 5,
    },
    white:{
        color: colors.font,
    },
})

export default function StyledText({children, link, title, text, errorColor,textCategori, font,label,focus,white, ...props}) {
    const textStyles = [
        styles.general,
        link && styles.link,
        title && styles.title,
        text && styles.text,
        errorColor && styles.errorColor,
        textCategori && styles.textCategori,
        font && styles.font,
        label && styles.label,
        white && styles.white,
    ];
    return <Text style={[textStyles, { ...props }]}>{children}</Text>
}
