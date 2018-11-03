import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    itemContainer: {
        margin: 12,
    },
    itemDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemDetailsLeft:{
        flexDirection: 'column',
        maxWidth: '50%',
    },
    itemDetailsRight:{
        flexDirection: 'column',
        alignItems: 'flex-end'
    },
    backgroundImg: {
        width:'100%',
        height: '100%',
    },
    title: {
        flex: 1,
        paddingHorizontal: 12,
        fontSize: 16
    }
});

export default styles;
