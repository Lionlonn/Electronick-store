import {StyleSheet, StatusBar} from "react-native";

export const categoryStyle = StyleSheet.create({
    container: {
      flex: 1,
      margin: 20,
      
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    seeMore: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        paddingRight: 20
    },
    HeaderTitle: {
        fontWeight: '800',
        fontSize: 18,
        color: '#040B14',
    },
    item: {
        marginTop: 10,
        backgroundColor: '#F4F5F7',
        width: 136,
        height: 178,
        alignItems: 'center',
        paddingTop: 8,
        paddingBottom: 8,
        borderRadius: 8

    },
    itemTitle: {
        color: '#000',
        fontFamily: 'Avenir',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '800',
        marginTop: 20,
    },
    itemCount: {
        color: '#A6A798',
        fontSize: 12,
        fontWeight: '500'
    },
    image: {
        width: 0,
        height: 0,
    }


})

