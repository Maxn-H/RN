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
                        of a rapper will be covered completely by a red grid. Each guess you make, a frame of that 
                        picture will be revealed. If you select Easy it'll be removed permanently and if you 
                        select Hard it'll be removed temporarily. You are  granted a limited number of attempts(8). 
                        The objective is to enter the rappers name.
                    </Text>
            </View>
            <View style={styles.buttonView}>
                <Pressable  onPress={() =>
        navigation.navigate('EasyGame')
      }>
                    <Text style={styles.buttonText}>Easy</Text>
                </Pressable>
                
            </View>
            <View style={styles.secondButtonView}>
                <Pressable  onPress={() =>
        navigation.navigate('HardGame')
      }>
                    <Text style={styles.buttonText}>Hard</Text>
                </Pressable>
                
            </View>
     </View>
);
}

export default WelcomeScreen;

const styles = StyleSheet.create({
container: {
    flex: 1,
    marginTop: 0, 
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
    marginRight: 100,
    borderWidth: 8,
    borderColor: 'grey',
    marginTop: 140,
    borderRadius: 28,
    backgroundColor: 'grey'
},
buttonText: {
    color: 'white',
    fontSize: 20,
    },
    secondButtonView: {
        marginLeft: 120,
        marginTop: -38,
        backgroundColor: 'grey',
        borderWidth: 8,
        borderColor: 'grey',
        borderRadius: 28
    }

});