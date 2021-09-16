import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

import {ITEMS} from '../data.js'
import {useDispatch} from 'react-redux';
import {addToShopCart} from '../redux/actions.js';

const ItemScreen = props =>{

    const itemId = props.route.params.itemId

    const selectedItem = ITEMS.find(item => item.id === itemId)

    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(addToShopCart(selectedItem))
    }

    return (
        <View style={styles.screen}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.title}> {selectedItem.title}</Text>
                <Text style={styles.price}> {selectedItem.price}</Text>
            </View>
            <Image style={styles.image} source={selectedItem.image}/>
            <Text style={styles.description}>{selectedItem.description}</Text>
            <View style={styles.button}>
                <Button title='Добавить в корзину' onPress={addToCart}/>
            </View>

        </View>
    );
};

export default ItemScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        height: 150,
        marginBottom: 70
    },
    image: {
        width: '100%',
        height: '50%'
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