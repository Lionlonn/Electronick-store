import React from "react";
import { ScrollView, StyleSheet, Text, View} from "react-native";
import { SearchInputField } from "src/features/input";
import { useStateSelector } from "src/shared/hooks";
import { AccordionContent } from "src/widgets/accordion";

import { ProductsList } from "src/widgets/products-list";


export const ProducstWorkSpace = ({navigation, route}: any) => {
    const { item, status} = useStateSelector(state => state.buttonPrudcts)
    const categoryTitle = route.params.title
    const totalItems = item?.length

    const handleCategoryTitle = (category: string) => {
        return (
            <Text style={styles.titleWorkspace}>{category} Workspace</Text>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}> 
                <View style={styles.titleContainer}>
                    {categoryTitle && handleCategoryTitle(categoryTitle)}
                    <Text style={styles.textSuggest}>{totalItems} suggested items</Text>
                </View>
                <View style={{marginBottom: 24}}>
                    {/* <SearchInputField/> */}
                    <AccordionContent/> 
                </View>
                
                <Text style={styles.textSuggest}>Items</Text>
                <ProductsList shapeView="box" item={item} navigation={navigation}/>
            </View>
        </View>
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
    titleContainer: {
        alignSelf: 'flex-start',
        marginBottom: 24
    },
    titleWorkspace: {
        fontSize: 21,
        lineHeight: 29,
        fontWeight: '900',
        fontFamily: 'Avenir-Heavy',
        color: 'black',
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