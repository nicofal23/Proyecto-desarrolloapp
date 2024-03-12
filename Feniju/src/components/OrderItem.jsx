import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native'; 
import { colors } from '../global/Colors';
import { useGetOrdersQuery } from '../services/shopService';

const OrderItem = () => {
    const { data: orders, error, isLoading, refetch } = useGetOrdersQuery(); 
    const [formattedOrders, setFormattedOrders] = useState([]);

    useEffect(() => {
        refetch(); 
    }, [refetch]); 

    useEffect(() => {
        if (orders) {
            const formatted = Object.keys(orders).map(orderId => {
                const order = orders[orderId];
                const formattedDate = new Date(order.createdAt).toLocaleDateString('es-ES'); // Formatear la fecha
                return { ...order, formattedDate, id: orderId }; 
            });
            setFormattedOrders(formatted);
        }
    }, [orders]);

    useFocusEffect(
        React.useCallback(() => {
            refetch();
        }, [])
    );

    if (isLoading) {
        return <Text>Loading...</Text>;
    }
    
    if (error) {
        return <Text>Error: {error.message}</Text>;
    }
    
    if (!formattedOrders || formattedOrders.length === 0) {
        return <Text>No hay órdenes disponibles</Text>;
    }

    return (
        <FlatList 
            data={formattedOrders}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <View style={styles.card}>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>{item.formattedDate}</Text>
                        <Text style={styles.text2}>${item.total}</Text>
                    </View>
                    <MaterialCommunityIcons name="details" size={24} color="black" />
                </View>
            )}
        />
    );
};

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
