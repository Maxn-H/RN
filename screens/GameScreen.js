import { useEffect, useState } from "react";
import { View, TextInput, StyleSheet, Image, Pressable, Text, Alert, TouchableOpacity, ScrollView } from "react-native";

function GameScreen() {
    const IMAGES = [];
    IMAGES[0] = 'https://i.scdn.co/image/ab6761610000e5eb73d4facbd619ae025b5588c7'
    IMAGES[1] = 'https://envertmedia.com/wp-content/uploads/2021/08/Larry-June-1600x991.png'

    const ARTISTS = [];
    ARTISTS[0] = 'Carti'
    ARTISTS[1] = 'Larry'
    const [rand, setRand] = useState(IMAGES[Math.floor(Math.random()*IMAGES.length)]);
    const carti =  'https://i.scdn.co/image/ab6761610000e5eb73d4facbd619ae025b5588c7';
    const [text, setText] = useState('');
    const [counter, setCounter] = useState(1); 
    const [divOpacity, setivOpacity] = useState(1)
    const [buri, setUri] = useState(carti)
    const [artc, setArtc] = useState(0)
    

    const handleClick1 = () => { 
        setCounter(counter + 1); 
        console.log(counter)
        if (counter >= 9) {
            
            Alert.alert('Over!!!🤯 Next ROUND!!' )
            setCounter(1);
            changeImageSrc();
            
        }
    }; 

    const changeImageSrc = () => {
        let imageC = 0;
        imageC++;
        setUri(IMAGES[imageC])
    //setUri('https://envertmedia.com/wp-content/uploads/2021/08/Larry-June-1600x991.png');
    
  }

 

const handleChange = (enterText) => {
    let g = artc
    setText(enterText);
    if (enterText == ARTISTS[artc]) {
        Alert.alert('Over! You Got it in ' + counter + ' tries')
        changeImageSrc()
        g++;
        setArtc(g)
        setCounter(1)
    }
   
  };

  
    return (
 <ScrollView>
    <View>
    <Image source={{uri: buri}}
       style={{width: 400, height: 400}} />
      </View> 
      <TouchableOpacity onPress={handleClick1} style={{width: 133.3, height: 133.3, backgroundColor:'red', left:0, top:-267}}></TouchableOpacity><View></View>
      <TouchableOpacity onPress={handleClick1} style={{width: 133.3, height: 134.3, backgroundColor:'red', position:'absolute', left: 0, top: 266}}></TouchableOpacity><View></View>
      <TouchableOpacity onPress={handleClick1} style={{width: 133.3, height: 133.3, backgroundColor:'red', position:'absolute', left: 0, top:0}}></TouchableOpacity><View></View>
      <TouchableOpacity onPress={handleClick1} style={{width: 133.3, height: 133.3, backgroundColor:'red', left:133, top:-399}}></TouchableOpacity><View></View>
      <TouchableOpacity onPress={handleClick1} style={{width: 133.3, height: 133.3, backgroundColor:'red', position:'absolute', left: 133, top: 267}}></TouchableOpacity><View></View>
      <TouchableOpacity onPress={handleClick1} style={{width: 133.3, height: 134.8, backgroundColor:'red', position:'absolute', left: 133, top:-0.4}}></TouchableOpacity><View></View>
      <TouchableOpacity onPress={handleClick1} style={{width: 133.3, height: 133.3, backgroundColor:'red', left:266.3, top:-399.5}}></TouchableOpacity><View></View>
      <TouchableOpacity onPress={handleClick1} style={{width: 133.3, height: 134.3, backgroundColor:'red', position:'absolute', left: 266, top: 133}}></TouchableOpacity><View></View>
      <TouchableOpacity onPress={handleClick1} style={{width: 133.3, height: 133.3, backgroundColor:'red', position:'absolute', left: 266, top:0}}></TouchableOpacity><View></View>
<View style={styles.inputContainer}>
<TextInput onChangeText={handleChange} placeholderTextColor='white'  placeholder="Enter Artist Guess" style={styles.textInput}></TextInput>
    </View>
    </ScrollView>
    );

}


export default GameScreen;

const styles = StyleSheet.create({
   
    inputContainer: {
        marginTop: -398,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: 'grey',
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    textInput: {
        height: 50,
        fontSize: 32,
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        color: 'white',
        marginVertical: 8,
        },
    
       
})