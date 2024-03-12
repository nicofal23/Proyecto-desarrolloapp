// OrderItem.js
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../global/Colors';

const OrderItem = React.memo(({ item, total }) => {
    return (
        <View style={styles.card} onPress={() => {}}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{new Date(item.createdAt).toLocaleString()}</Text>
                <Text style={styles.text2}>${total}</Text>
            </View>
            <MaterialCommunityIcons name="details" size={24} color="black" />
        </View>
    );
});

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 100,
        backgroundColor: colors.header,
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textContainer: {
        width: '70%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    text: {
        fontSize: 17,
        color: 'black',
    },
    text2: {
        fontSize: 19,
        color: 'black',
    },
});

export default OrderItem;
