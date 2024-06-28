import React from "react";
import { ScrollView, StyleSheet, Text, View} from "react-native";
import { SearchInputField } from "src/features/input";
import { useStateSelector } from "src/shared/hooks";
import { ProductsList } from "src/widgets/products-list";


export const ProducstWorkSpace = ({navigation, route}: any) => {
    const { item, status} = useStateSelector(state => state.buttonPrudcts)
    const categoryTitle = route.params.title

    const handleCategoryTitle = (category: string) => {
        return (
            <Text style={styles.titleWorkspace}>{category} Workspace</Text>
        )
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.contentContainer}> 
                {categoryTitle && handleCategoryTitle(categoryTitle)}
                <SearchInputField/>
                <Text style={styles.textSuggest}>Items</Text>
                <ProductsList shapeView="box" item={item} navigation={navigation}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFF',
        paddingHorizontal: 20,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 20,
    },
    titleWorkspace: {
        fontSize: 21,
        lineHeight: 29,
        fontWeight: '900',
        fontFamily: 'Avenir-Heavy',
        color: 'black',
        marginLeft: 25,
        marginTop: 20
    },
    textSuggest: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 16,
        color: 'rgb(138, 139, 122)',
        fontFamily: 'Avenir-Heavy',
        alignSelf: 'flex-start',
        
    }    
})