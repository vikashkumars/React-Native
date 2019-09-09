import React from 'react';
import {View,TextInput,StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';



const SearchBar=({term,onTermChange,onTermSubmit})=>{
 return(
     <View style={styles.background}>
         <Feather name="search" style={styles.iconStyle}/>
         <TextInput style={styles.inputStyle} placeholder="Search"
            value={term}
            autoCapitalize={false}
            autoCorrect={false}
            style={styles.inputStyle}
            autoCapitalize="none"
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
            //onSubmitEditing={onTermSubmit}
         />
     </View>
 );


};
const styles = StyleSheet.create({
    background:{
        backgroundColor:'#F0EEEE',
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:'row'
       },
       inputStyle:{
           borderColor:'black',
           borderWidth:1,
           flex:1

       },
       iconStyle:{
           fontSize:35,
           alignSelf:'center'
       }
});

export default SearchBar;