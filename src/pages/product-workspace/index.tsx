import React from "react";
import { ScrollView, StyleSheet, Text, View} from "react-native";
import { SearchInputField } from "src/features/input";
import { useStateSelector } from "src/shared/hooks";
import { ProductsList } from "src/widgets/products-list";


export const ProducstWorkSpace = ({navigation}: any) => {
    const { item, status} = useStateSelector(state => state.buttonPrudcts)
    const categoryTitle = item?.find(obj => {return obj.category})

    const handleCategoryTitle = (category: string) => {
        return (
            <Text style={styles.titleWorkspace}>{category} Workspace</Text>
        )
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                {categoryTitle && handleCategoryTitle(categoryTitle.category)}
                <SearchInputField/>
                <Text style={styles.textSuggest}>Suggest items</Text>
                <ProductsList shapeView="box" item={item} navigation={navigation}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        marginLeft: 25,
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 16,
        color: 'rgb(138, 139, 122)',
        fontFamily: 'Avenir-Heavy'
    }    
})