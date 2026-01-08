import { StyleSheet, Text, View, Image } from 'react-native'
import { Link } from 'expo-router'
import logo from '../assets/logo.png'

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.img}/>  

      <Text style={styles.title}>The number 1</Text>
      
      <Text style={{marginTop:10, marginBottom:30}}>Reading list app</Text>

    <Link href="/about" style={styles.link}>About Page</Link>
    <Link href="/contact" style={styles.link}>Contact Page</Link>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    img: {
        marginVertical: 20,
    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1,
    }
})