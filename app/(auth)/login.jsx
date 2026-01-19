import { StyleSheet, Pressable, Text, TextInput } from 'react-native'
import { Link } from 'expo-router'
import { Colors } from '../../constants/Colors'
import { useState } from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useUser } from '../../hooks/useUser'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const { login } = useUser()

    const handleSubmit = async () => {
        try {
            await login(email, password)
        } catch (error) {

        }
    }

  return (
    <ThemedView style={styles.container}>

        <Spacer/>
        <ThemedText title={true} style={styles.title}>
        Login to your account
        </ThemedText>


         <ThemedTextInput
          style={{ width: '80%', marginBottom: 20 }}
            placeholder="Email"
            keyboardType="email-address"
           onChangeText={setEmail}
           value={email}
         />

         <ThemedTextInput
          style={{ width: '80%', marginBottom: 20 }}
            placeholder="Password"
            keyboardType="default"
           onChangeText={setPassword}
           value={password}
           secureTextEntry
         />
    
        <ThemedButton onPress={handleSubmit}>
            <Text style={{ color: '#f2f2f2' }}>Login</Text>
        </ThemedButton>

        <Spacer height={100} />
        <Link href='/register'>
            <ThemedText style={{ textAlign: 'center' }}>
                Register Instead
            </ThemedText>
        </Link>
    </ThemedView>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 30
    },
    btn: {
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 5,
    },  
    pressed: {
        opacity: 0.8,
    },
})