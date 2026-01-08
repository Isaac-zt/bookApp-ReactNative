import { Image, useColorScheme } from 'react-native'

//the images
import DarkLogo from '../assets/dark_logo.png'
import LightLogo from '../assets/light_logo.png'

const ThemedLogo = ({ ...props }) => {
    const colorScheme = useColorScheme()

    const logo = colorScheme === 'dark' ? DarkLogo : LightLogo

    return (
        <Image source={logo} {...props} />
    )
}

export default ThemedLogo