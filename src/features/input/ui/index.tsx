import MultiSlider from "@ptomasroos/react-native-multi-slider";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import {Animated, Dimensions, ScrollView, SectionList, StyleSheet, Text, TextInput, View, useWindowDimensions} from 'react-native';
import { ButtonFilter, RenderItem } from "src/features/filter-button";
import { fetchFilterData } from "src/features/filter-button/model";
import { useAppDispatch, useStateSelector } from "src/shared/hooks";
import { Button } from "src/shared/ui";

interface SearchInputFieldProps {
    multisliderBlock: ReactNode
}

export const SearchInputField:React.FC<SearchInputFieldProps> = ({multisliderBlock}) => {
    const { items, status } = useStateSelector(item => item.filter);
    const [text, onChangeText] = React.useState('');
    const [isOpen, setIsOpen] = useState<boolean>(false) 
    const { width, height} = useWindowDimensions()

    const animatedController = useRef(new Animated.Value(0)).current;
    const bodyWidth = width
    const bodyHeight = animatedController.interpolate({
        inputRange: [0, 1],
        outputRange: [0, height - 100],
    });

    const handleCheckboxChange = (label: string, checked: boolean) => {
        const newData = items.map((item) => {
            const updateProductData = item.data.map((dataItem) =>
                dataItem.label == label ? {...dataItem, checked} : dataItem
                
            );
            
            return {...item, data: updateProductData}
        })
        
    }
   

    const toggleListItem = () => {
        const targetHeight = isOpen ? 0 : height - 100
        Animated.timing(animatedController, {
            duration: isOpen ? 400 : 500,
            toValue: isOpen ? 0 : 1,
            useNativeDriver: false
          }).start();
         
        setIsOpen(!isOpen);
    };


    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchFilterData())
    }, [dispatch])


    
   


    return (
        <View style={styles.container}>
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
            <View style={{flex: 1, display: isOpen ? 'flex' : 'none'}}>
                <Animated.View style={[styles.contentContainer, {
                    width: bodyWidth, 
                    height:bodyHeight,
                }
                ]}>
                    <ScrollView >
                        <Text style={styles.titleFilter}>Filter by</Text>
                        <Text style={styles.priceTitle}>Price</Text>
                        
                        <View style={[styles.multisliderStyle, {display: isOpen ? 'flex' : 'none'}]}>
                            {multisliderBlock}
                        </View>


                        <SectionList 
                            sections={items}
                            keyExtractor={(item) => item.label}
                            scrollEnabled={false}
                            renderItem={({item}) => (
                                <View style={styles.item}>
                                    <RenderItem {...item} onChange={handleCheckboxChange}/>
                                </View>
                            )}
                            renderSectionHeader={({section: {title}}) => (
                                <Text style={styles.headerItem}>{title}</Text>
                            )}
                        />

                        <View style={[
                            styles.sectionButton, {display: isOpen ? 'flex' : 'none',}]}>
                            <Button buttonColor="white" onClick={toggleListItem} type='Cansel'/>
                            <Button buttonColor="yellow" onClick={toggleListItem} type='Apply'/>
                        </View>

                    </ScrollView>
                                        
                    
            </Animated.View> 
            </View>
            
            

            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        minWidth: '100%',
        
    },
    wrapper: {
        alignSelf: 'center'
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
        paddingLeft: 22,
        paddingRight: 20,
        marginBottom: 20,
        marginTop: 20,
    },
    checkbox: {
        width: 20,
        height: 20,
    },
    headerItem: {
        fontFamily: 'Avenir-Black',
        fontSize: 16,
        fontWeight: '500',
        color: '#8A8B7A',
        fontStyle: 'normal',
        paddingLeft: 22,
        paddingRight: 20,
        marginBottom: 20,
        marginTop: 20,
    },
    item: {
        paddingLeft: 22,
        paddingRight: 20,
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
        marginHorizontal: 20,
        marginBottom: 30,
        gap: 40
        
    },
    multisliderStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'relative',
    },
    priceTitle: {
        color: '#8A8B7A',
        paddingLeft: 22,
    },
    priceText: {
        color: 'black',
        fontFamily: 'Avenir-Black',
        fontWeight: '400',
        fontSize: 16,
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        
        paddingLeft: 22,
        paddingRight: 20,
        
       
    },
    
})