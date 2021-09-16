import React, {useCallback, useEffect} from 'react';
import {FlatList, Image, View, StyleSheet, Text, Button, TouchableOpacity} from 'react-native';

import {CATEGORY} from '../data.js';
import {getCategories} from '../redux/actions.js';
import {useDispatch, useSelector} from 'react-redux';

const MainScreen = props =>{
    const categories = useSelector(state => state.categories)

    const dispatch = useDispatch()

    // const addCategory = async () => {
    //
    //     const response = await fetch(
    //         'https://deliveryapp-ce7b5-default-rtdb.firebaseio.com/category.json',
    //         {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 title: 'Итальянская еда',
    //                 imageUrl: 'https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466_960_720.jpg'
    //             })
    //         }
    //     )
    // }

    const loadProducts = useCallback(async()=>{
        try{
            await dispatch(getCategories())
        }catch (err){
            console.log(err.message)
        }
    },[dispatch])

    useEffect(()=>{
        loadProducts()
    },[loadProducts])

    const renderItem = itemData => {
        return(
            <TouchableOpacity onPress={() => {
                props.navigation.navigate(
                    'Category',
                    {
                        categoryId: itemData.item.id
                    }
                )
            }}>
                <View style={styles.screen}>
                    <Text style={{fontSize: 20, textAlign:'center',fontFamily:'open-sans-bold'}}>{itemData.item.title}</Text>
                    <Image style={styles.image} source={{uri: itemData.item.image}}/>
                </View>
            </TouchableOpacity>
        )
    }



    return (
        <View>
        <FlatList data={categories} renderItem={renderItem}/>

        </View>
    );
};

export default MainScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        margin: 5,
        height: 150,
    },
    image: {
        width: '100%',
        height: '100%'
    }
})