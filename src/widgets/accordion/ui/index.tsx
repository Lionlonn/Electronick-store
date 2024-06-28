import {Animated, Dimensions, ScrollView, SectionList, StyleSheet, Text, TextInput, View, useWindowDimensions} from 'react-native';
import { SearchInputField } from "src/features/input";
import { MultisliderCustom } from "src/widgets/multislider";





export const AccordionContent = () => {
    

    return (
        <View>
            <SearchInputField multisliderBlock={
                <MultisliderCustom/>
                }/>
        </View>
    )    
}