
import { useEffect, useState } from "react";
import { View, TextInput, StyleSheet, Image, Pressable, Text, Alert, TouchableOpacity, ScrollView } from "react-native";


function EasyGameScreen() {
   const IMAGES = [];
   IMAGES[0] = 'https://i.scdn.co/image/ab6761610000e5eb73d4facbd619ae025b5588c7'
   IMAGES[1] = 'https://envertmedia.com/wp-content/uploads/2021/08/Larry-June-1600x991.png'
   IMAGES[2] = 'https://media.npr.org/assets/img/2021/11/16/gettyimages-1235223332_sq-e88ad790d447bd7dfcb0c1571047db26d39a8ee0.jpg'
   IMAGES[3] = 'https://i.scdn.co/image/ab6761610000e5eb95ccca370d8bd50e84c222bc'
   IMAGES[4] = 'https://www.ohio.edu/sites/default/files/styles/max_1300x1300/public/2024-01/Earl%20Sweatshirt%20copy%202.jpg?itok=J0wR5xhY'
   IMAGES[5] = 'https://media.pitchfork.com/photos/662bb31e7e9055ca45187186/2:1/w_2560%2Cc_limit/drake%2520kendrick%2520lamar%2520diss%25202pac.jpg'

       const ARTISTS = [];
       ARTISTS[0] = 'Carti'
       ARTISTS[1] = 'Larry'
       ARTISTS[2] = 'Travis'
       ARTISTS[3] = 'Ken'
       ARTISTS[4] = 'Earl'
       ARTISTS[5] = 'Drake'

       const [rand, setRand] = useState(IMAGES[Math.floor(Math.random()*IMAGES.length)]);
   const carti =  'https://i.scdn.co/image/ab6761610000e5eb73d4facbd619ae025b5588c7';
    const [text, setText] = useState('');
    const [counter, setCounter] = useState(1);
    const [divOpacity, setivOpacity] = useState(1)
    const [buri, setUri] = useState(carti)
    const [artc, setArtc] = useState(0)
    const [color, setColor] = useState('red')
    const [colorTwo, setColorTwo] = useState('red')
    const [colorThree, setColorThree] = useState('red')
    const [colorFour, setColorFour] = useState('red')
    const [colorFive, setColorFive] = useState('red')
    const [colorSix, setColorSix] = useState('red')
    const [colorSeven, setColorSeven] = useState('red')
    const [colorEight, setColorEight] = useState('red')
    const [colorNine, setColorNine] = useState('red')
    const [count, setCount] = useState(1);

    const handleClick1 = () => {
       setCounter(counter + 1);
       console.log(counter)
       if (counter >= 9) {
           Alert.alert('Over!!!🤯 Next ROUND!!')
           restart()
           setCounter(1);
           changeImageSrc();
           //restart()
       }
   };
function restart() {
       setColor('red')
       setColorTwo('red')
       setColorThree('red')
       setColorFour('red')
       setColorFive('red')
       setColorSix('red')
       setColorSeven('red')
       setColorEight('red')
       setColorNine('red')
}
const changeImageSrc = () => {
    //let imageC = 0;
    setCount(count + 1)
  //  imageC + 1;
    setUri(IMAGES[count])
    setArtc(count)

}


const colorChangeOne = () => {
   let newColor = null
setColor(newColor)
}
const colorChangeTwo = () => {
   let newColor = null
setColorTwo(newColor)
}
const colorChangeThree = () => {
   let newColor = null
setColorThree(newColor)
}
const colorChangeFour = () => {
   let newColor = null
setColorFour(newColor)
}
const colorChangeFive = () => {
   let newColor = null
setColorFive(newColor)
}
const colorChangeSix = () => {
   let newColor = null
setColorSix(newColor)
}
const colorChangeSeven = () => {
   let newColor = null
setColorSeven(newColor)
}
const colorChangeEight = () => {
   let newColor = null
setColorEight(newColor)
}
const colorChangeNine = () => {
   let newColor = null
setColorNine(newColor)
}
const handleChange = (enterText) => {
   let g = artc
   setText(enterText);
   if (enterText == ARTISTS[artc]) {
       Alert.alert('Over! You Got it in ' + counter + ' tries')
       changeImageSrc()
       restart()
       g++;
       setArtc(g)
       setCounter(0)
   }
 
 };


   
   return (
<ScrollView>
   <View>
   <Image source={{uri: buri}}
      style={{width: 400, height: 400}} />
     </View>
     <TouchableOpacity onPress = {() => {handleClick1(); colorChangeOne();}} style={{width: 133.3, height: 133.3, backgroundColor: color, left:0, top:-267}}></TouchableOpacity><View></View>
     <TouchableOpacity onPress = {() => {handleClick1(); colorChangeTwo();}} style={{width: 133.3, height: 134.3, backgroundColor: colorTwo, position:'absolute', left: 0, top: 266}}></TouchableOpacity><View></View>
     <TouchableOpacity onPress = {() => {handleClick1(); colorChangeThree();}} style={{width: 133.3, height: 133.3, backgroundColor: colorThree, position:'absolute', left: 0, top:0}}></TouchableOpacity><View></View>
     <TouchableOpacity onPress = {() => {handleClick1(); colorChangeFour();}} style={{width: 133.3, height: 133.3, backgroundColor: colorFour, left:133, top:-399}}></TouchableOpacity><View></View>
     <TouchableOpacity onPress = {() => {handleClick1(); colorChangeFive();}} style={{width: 133.3, height: 133.3, backgroundColor: colorFive, position:'absolute', left: 133, top: 267}}></TouchableOpacity><View></View>
     <TouchableOpacity onPress = {() => {handleClick1(); colorChangeSix();}} style={{width: 133.3, height: 134.8, backgroundColor: colorSix, position:'absolute', left: 133, top:-0.4}}></TouchableOpacity><View></View>
     <TouchableOpacity onPress = {() => {handleClick1(); colorChangeSeven();}} style={{width: 133.3, height: 133.3, backgroundColor: colorSeven, left:266.3, top:-399.5}}></TouchableOpacity><View></View>
     <TouchableOpacity onPress = {() => {handleClick1(); colorChangeEight();}} style={{width: 133.3, height: 134.3, backgroundColor: colorEight, position:'absolute', left: 266, top: 133}}></TouchableOpacity><View></View>
     <TouchableOpacity onPress = {() => {handleClick1(); colorChangeNine();}} style={{width: 133.3, height: 133.3, backgroundColor: colorNine, position:'absolute', left: 266, top:0}}></TouchableOpacity><View></View>
<View style={styles.inputContainer}>
<TextInput onChangeText={handleChange} placeholderTextColor='white'  placeholder="Enter Artist Guess" style={styles.textInput}></TextInput>
   </View>
   </ScrollView>
   );


}








export default EasyGameScreen;


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
