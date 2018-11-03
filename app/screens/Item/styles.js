import { StyleSheet } from 'react-native';
import { DefaultTheme } from 'react-native-paper';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    image: {
        width: '100%',
        height: 200
    },
    title:{
        lineHeight: 25,
    },
    subTitle:{
        fontWeight: 'bold'
    },
    address: {
        color: DefaultTheme.colors.backdrop
    },
    contentContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: 10,
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    detailsLeft:{
        flexDirection: 'column',
        maxWidth: '50%',
    },
    detailsRight:{
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    priceTag : {
        fontWeight: 'bold',
        fontSize: 20,
        color: DefaultTheme.colors.primary
    },
    divider : {
        marginTop: 10,
        marginBottom: 10,
    },
    claimButton : {
        marginTop: 'auto',
        marginBottom: 10,
        marginHorizontal: 5
    }
});

export default styles;
