import React, { useEffect, useState } from 'react';
import { StyleSheet,View, FlatList, Pressable, ActivityIndicator } from 'react-native'; 
import { Octicons } from '@expo/vector-icons';
import { useFocusEffect, useNavigation } from '@react-navigation/native'; 
import { colors } from '../global/Colors';
import { useGetOrdersQuery } from '../services/shopService';
import { useSelector } from 'react-redux';
import StyledText from '../styledComponents/StyledText';

const OrderItem = () => {
    const user = useSelector((state) => state.authReducer.value.user); 
    const { data: orders, error, isLoading, refetch } = useGetOrdersQuery(); 
    const [formattedOrders, setFormattedOrders] = useState([]);
    const navigation = useNavigation(); 

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
        return <ActivityIndicator style={styles.loader} size="large" color={colors.primary} />;
    }
    
    if (error) {
        return <StyledText errorColor >Error: {error.message}</StyledText>;
    }
    
    if (!formattedOrders || formattedOrders.length === 0) {
        return (
            <View style={styles.noProductsContainer}>
                <StyledText font text>No hay órdenes disponibles</StyledText>
            </View>
        );
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
                        <StyledText text>{item.formattedDate}</StyledText>
                        <StyledText font text>${item.total}</StyledText>
                    </View>
                    <Pressable onPress={() => handleOrderDetail(item)}>
                        <Octicons name="info" size={24} color="black" />
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
    noProductsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default OrderItem;
