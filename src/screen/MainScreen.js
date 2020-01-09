import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import {THEME} from '../theme';
import {Data} from '../data'
import {Photo} from '../components/Photo'

//главный экран
export const MainScreen = ({navigation}) =>{

    const db = new Data();
    const [ data, setData] = useState(null);

    //полчаем список фото и записываем в state
    useEffect(() => {
        db.MyDatabase()
            .then( item=> setData(item) )
            .catch( err => console.log('ERROR: '+ err) )
    })

    //передаем параметры
    openPhotoHandler = item =>{
        navigation.navigate('Photo',{img: item.urls.full})
    }

    return(
        <View style={styles.wrapper}>
            <FlatList
                data={data}
                keyExtractor={photo => photo.id.toString()}
                renderItem={({item}) => (
                    <Photo 
                        post={item}
                        onOpen={openPhotoHandler} />
                    
                )}
            />
        </View>
    )
}





MainScreen.navigationOptions = {
    headerTitle: 'Список картинок',
    headerStyle:{
        backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
    },
    headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    },
  });
  