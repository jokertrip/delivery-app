import React from 'react';
import {Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {ITEMS} from '../data.js';

const CategoryScreen = props=>{

    const catId = props.route.params.categoryId;

    const displayedItems = ITEMS.filter(item=>item.categoryId === catId);

    const renderItem = itemData=>{
        return (
            <TouchableOpacity onPress={() => {
                props.navigation.navigate(
                    'Item',
                    {
                        itemId: itemData.item.id
                    }
                )
            }}>
                <View style={styles.screen}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.title}> {itemData.item.title}</Text>
                        <Text style={styles.price}> {itemData.item.price}</Text>
                    </View>
                    <Image style={styles.image} source={itemData.item.image}/>
                    <Text style={styles.description}>{itemData.item.description}</Text>

                </View>
            </TouchableOpacity>
        );
    };

    return (
        <FlatList data={displayedItems} renderItem={renderItem}/>
    );
};

export default CategoryScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        height: 150,
        marginBottom: 70
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