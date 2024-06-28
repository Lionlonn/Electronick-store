import MultiSlider from "@ptomasroos/react-native-multi-slider";
import React, { useEffect, useRef, useState } from "react";
import {Animated, Dimensions, ScrollView, SectionList, StyleSheet, Text, TextInput, View, useWindowDimensions} from 'react-native';
import { RenderItem } from "src/features/filter-button";
import { fetchFilterData } from "src/features/filter-button/model";
import { ButtonFilterTest } from "src/features/filter-button/ui/button-test";
import { SearchInputField } from "src/features/input";
import { useAppDispatch, useStateSelector } from "src/shared/hooks";
import { Button } from "src/shared/ui";
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