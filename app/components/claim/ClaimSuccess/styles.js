import { StyleSheet } from 'react-native';
import { DefaultTheme } from 'react-native-paper';

const styles = StyleSheet.create({
    headline : {
        fontSize: 40,
        color: DefaultTheme.colors.primary,
        fontWeight: 'bold'
    },
    code : {
        fontSize: 30,
        fontWeight: 'bold'
    },
    subheading : {
        fontWeight: 'bold'
    }
});

export default styles;
