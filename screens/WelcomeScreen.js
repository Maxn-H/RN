import { View, Text, StyleSheet, Image, Pressable, Button } from "react-native";


function WelcomeScreen({navigation}) {
    return(
    
    <View style={styles.container}>
        <View>
            <Text style={styles.text}>Guess The Rapper Game</Text>
            </View>
            <View style={styles.instructions}>
                <Image style={styles.imageContainer} source={require('../assets/silhouette.jpg')}/>
                <Text style={styles.text}>Instructions</Text>
                    <Text style={styles.instructionText}>Welcome to the Guess the Rapper Game. In this game a picture 
                        of a rapper will be covered completely to begin. Each guess you make, a frame of that picture will be 
                        revealed . You are granted a limited number of attempts. You must enter the rappers short name not 
                         temporarily while your finger is on it.
                    </Text>
            </View>
            <View style={styles.buttonView}>
                <Pressable  onPress={() =>
        navigation.navigate('Game')
      }>
                    <Text style={styles.buttonText}>Continue</Text>
                </Pressable>
            </View>
     </View>
);
}

export default WelcomeScreen;

const styles = StyleSheet.create({
container: {
    flex: 1,
    marginTop: 50, 
    alignItems: 'center',
    backgroundColor: 'black',

},
text: {
    fontSize: 20,
    textDecorationLine: "underline",
   textDecorationStyle: "solid",
   textDecorationColor: "white",
   color: 'white',
},
instructions: {
    alignItems: 'center',
    marginTop: 130,
    
},
instructionText: {
    marginTop: 20,
    fontSize: 15,
    color: 'white'
},
imageContainer: {
    height: 200,
    width: 200
},
buttonView: {
    marginTop: 35,
    borderRadius: 10
},
buttonText: {
    marginTop: 120,
    color: 'black',
    backgroundColor:'white',
    fontSize: 20,
    borderRadius: 28,
},

});