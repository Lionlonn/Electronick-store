import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View} from "react-native";
import { ProductItem } from "src/entities/product";
import { FieldFilter } from "src/features/input";
import { useStateSelector } from "src/shared/hooks";
import { FilterListAccordion } from "src/widgets/filter-list";
import { MultisliderCustom } from "src/widgets/multislider";

import { ProductsList } from "src/widgets/products-list";



export const SortingItems = ({navigation}: any) => {
    const { item, status} = useStateSelector(state => state.buttonPrudcts);
    const [ text, onChangeText ] = useState<string>('');
    const [ filterItems, setFilterItems ] = useState<ProductItem[] | undefined>()
    const getNewItems = (items: ProductItem[] | undefined) => { 
        return setFilterItems(items)
    }
    

    const SearchFilter = (text: string) => {
        if (text) {
            const newData = item?.filter(item => {
                const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            return getNewItems(newData)
        } else {
            return getNewItems(item)
        }
    }

    useEffect(() => {
        SearchFilter(text)
    }, [text])

    return (
        <View style={{gap: 20, flex: 1}}>
            <FieldFilter 
                    multisliderBlock={<MultisliderCustom/>}
                    listItem={<FilterListAccordion/>}
                    onChangeText={onChangeText}
                    text={text}
                />
                
                <View style={{flex: 1, gap: 20}}>
                    <Text style={styles.textSuggest}>Items</Text>
                    <ProductsList shapeView="box" item={filterItems} navigation={navigation}/>        
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
        gap: 24
    },
    titleContainer: {
        alignSelf: 'flex-start',
        
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