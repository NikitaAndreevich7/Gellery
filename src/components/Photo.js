import React from 'react';
import { View,Text, StyleSheet, ImageBackground,TouchableOpacity} from 'react-native';
import { THEME } from '../theme';
// компонент отдельного поста
export const Photo = ({post, onOpen}) =>{

    return(
        <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(post)}>
            <View style={styles.photo}>
                <ImageBackground source={{uri: post.urls.full}}style={styles.image}>
                <View style={styles.boxText}>
                    <Text style={styles.textWrap}>
                        <Text style={styles.text}>Name:  </Text>
                        {post.user.username}
                    </Text>
                    <Text style={styles.textWrap}>
                        <Text style={styles.text}>Author:  </Text>
                        {post.user.name}
                    </Text>
                    
                </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    photo:{
        marginBottom: 15,
        overflow: 'hidden'
    },
    image:{
        width:'100%',
        height: 200
    },
    boxText:{
        height:'100%',
        justifyContent:'flex-end',
    },
    textWrap:{
        backgroundColor:'rgba(0,0,0, .5)',
        padding: 5,
        width:'100%',
        color:'#fff'
    },
    text:{
        color: 'silver'
    }

})

