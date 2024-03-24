import { StyleSheet, View } from "react-native";
import { colors } from '../global/Colors'

const styles = StyleSheet.create({
    general: {
        fontSize: 16,
    },
})

export default function StyledView({children,...props}) {
    const viewStyles = [
        styles.general,
    ];
    return <View style={[viewStyles, { ...props }]}>{children}</View>
}
