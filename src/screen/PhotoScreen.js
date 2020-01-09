import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

// экран выбраной фотографии
export const PhotoScreen = ({navigation}) =>{

    const img = navigation.getParam('img')

    return(
        <View style={styles.generalBox}>
            <View style={styles.imgWrap}>
                <Image source={{uri: img}} style={styles.image}/>
            </View>
        </View>

    )
}
//конфигурации навигации
PhotoScreen.navigationOptions = ({navigation}) => {
    const Name = navigation.getParam('photoName')
    return{
        headerTitle: Name,
        headerStyle: { backgroundColor: 'rgba(0,0,0, .5)'},
        headerTintColor:'#fff'
    }
}

const styles = StyleSheet.create({
    generalBox:{
        width:'100%',
        height:'100%',
        backgroundColor:'rgba(0,0,0, .9)'
    },  
    imgWrap:{
        width:'100%',
        height:'50%',
        marginTop:'auto',
        marginBottom:'auto',
    },  
    image:{
        width: '100%',
        height: '100%',
        maxWidth:'100%',
        maxHeight:'100%'
    }
  });
  

 