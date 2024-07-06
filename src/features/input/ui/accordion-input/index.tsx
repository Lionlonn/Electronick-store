import MultiSlider from "@ptomasroos/react-native-multi-slider";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { Dimensions, FlatList, LayoutAnimation, Platform, ScrollView, SectionList, StyleSheet, Text, TextInput, UIManager, View, useWindowDimensions} from 'react-native';

import { ButtonFilter } from "src/features/filter-button";
import { fetchFilterData } from "src/features/filter-button/model";
import { useAppDispatch, useStateSelector } from "src/shared/hooks";
import { Button } from "src/shared/ui";
interface SearchInputFieldProps {
    multisliderBlock: ReactNode;
    listItem: ReactNode;
    text?: string;
    onChangeText?: (titleText: string) => void;
}

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}



export const FieldFilter:React.FC<SearchInputFieldProps> = ({multisliderBlock, listItem, onChangeText, text}) => {
    // const [text, onChangeText] = React.useState('');
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { width, height} = useWindowDimensions()

    const sizeFlex = width > 420 ? 10 : 2


    const toggleListItem = () => {
        LayoutAnimation.configureNext({
            duration: 100,
            create: { type: 'linear', property: 'opacity' },
            update: {
                type: LayoutAnimation.Types.spring,
                springDamping: 0.3,
            },
            delete: {
                type: 'linear',
                property: 'opacity',
            },
            });
            setIsOpen(!isOpen);
            console.log('OPEN')
        };


    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchFilterData())
    }, [dispatch])


    

    return (
        
        <View style={[styles.container, {flex: isOpen ? 2 : 0}]}>
            <View style={styles.wrapper}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}  
                    placeholder="Search product name"
                    placeholderTextColor="#888C93"
                    underlineColorAndroid='transparent'
                    autoCorrect={false}
                />
                <View style={styles.inputInnerContainer}>
                        <ButtonFilter toggleButton={toggleListItem}/>
                </View>
                
             </View>
                {isOpen && 
                <View style={{flex: 1}}>
                    <ScrollView 
                        keyboardDismissMode="on-drag" 
                        style={[styles.scrollViewStyle,]} 
                        contentContainerStyle={{ paddingBottom: 20}} 
                        showsVerticalScrollIndicator={false}
                        >
                        <View style={{flex: 1,}}>
                            <Text style={styles.titleFilter}>Filter by</Text>
                            <Text style={styles.priceTitle}>Price</Text>
                            
                            <View style={[styles.multisliderStyle]}>
                                {multisliderBlock}
                            </View>
                            
                            {listItem}
                            
                            <View style={[
                                styles.sectionButton]}>
                                <Button buttonColor="white" onClick={toggleListItem} type='Cansel'/>
                                <Button buttonColor="yellow" onClick={toggleListItem} type='Apply'/>
                            </View>
                        </View> 
                    </ScrollView>
                
               </View> 
}    
                                    
            
            
            

            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        
    },
    wrapper: {
        alignSelf: 'center',
        position: 'relative'
    },
    scrollViewStyle: {
        borderRadius: 8,
        flex: 1,
       
    },
    input: {
        minWidth: '100%',
        height: 50,
        borderWidth: 0.6,
        borderRadius: 6,
        borderColor: "#C9CEDA",
        paddingLeft: 24,
        color: 'black',
        fontWeight: '400',
        fontSize: 16,
        fontFamily: 'Avenir-Roman',
    
      
        
    },
    inputInnerContainer: {
        position: 'absolute',
        alignSelf: 'flex-end',
    },
    titleFilter: {
        fontFamily: 'Avenir-Black',
        fontWeight: '900',
        fontSize: 21,
        color: 'black',
        marginBottom: 20,
        marginTop: 20,
    },
    
    contentContainer: {
        zIndex: 1,
        borderRadius: 16,
        backgroundColor: 'rgb(229, 229, 229)',
    },
    sectionButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 40
        
    },
    multisliderStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        // position: 'relative',
    },
    priceTitle: {
        color: '#8A8B7A',
        fontFamily: "Avenir-Black"
    },
    priceText: {
        color: 'black',
        fontFamily: 'Avenir-Black',
        fontWeight: '400',
        fontSize: 16,
    },
    
    
})