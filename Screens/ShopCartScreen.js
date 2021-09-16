import React from 'react';
import {Button, FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const ShopCartScreen = ()=>{
    const shopCartList = useSelector(state => state.shopCartList)

    const renderItem = itemData=>{
    return (
        <View style={styles.screen}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.title}> {itemData.item.title}</Text>
                <Text style={styles.price}> {itemData.item.price}</Text>
            </View>
            <Image style={styles.image} source={itemData.item.image}/>
            <Text style={styles.description}>{itemData.item.description}</Text>

        </View>
    );}

    return (
        <FlatList data={shopCartList} renderItem={renderItem}/>
    );
};

export default ShopCartScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        height: 300,
        marginBottom: 70,
        paddingTop: 100
    },
    image: {
        width: '100%',
        height: '100%'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        textAlign: 'left'
    },
    description: {
        fontFamily: 'open-sans',
        fontSize: 15,
        textAlign: 'center'
    },
    price: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'red'
    },
    button: {
        marginTop: 30
    }
});