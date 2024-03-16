import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFocusEffect, useNavigation } from '@react-navigation/native'; 
import { colors } from '../global/Colors';
import { useGetOrdersQuery } from '../services/shopService';
import { useSelector } from 'react-redux';

const OrderItem = () => {
    const user = useSelector((state) => state.authReducer.value.user); 
    const { data: orders, error, isLoading, refetch } = useGetOrdersQuery(); 
    const [formattedOrders, setFormattedOrders] = useState([]);
    const navigation = useNavigation(); // Obtiene el objeto de navegación

    useEffect(() => {
        refetch(); 
    }, [refetch]); 

    useEffect(() => {
        if (orders) {
            const formatted = Object.keys(orders).map(orderId => {
                const order = orders[orderId];
                const formattedDate = new Date(order.createdAt).toLocaleDateString('es-ES');
                return { ...order, formattedDate, id: orderId }; 
            });

            formatted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

            const userOrders = formatted.filter(order => order.user === user);
            setFormattedOrders(userOrders);
        }
    }, [orders, user]);

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

    const handleOrderDetail = (order) => {
        navigation.navigate('OrdersDetail', { orders: formattedOrders, selectedOrder: order }); 
    };

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
                    <Pressable onPress={() => handleOrderDetail(item)}>
                        <MaterialCommunityIcons name="details" size={24} color="black" />
                    </Pressable>
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
