import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Text, View } from "react-native";
import { CategoryButtons } from "./button";
import { useAppDispatch, useStateSelector } from "src/shared/hooks";
import { DeveloperProductsApi } from "../api";
import { useDispatch } from "react-redux";


export const ContainerCategoryButton = () => {
    return (
        <View>
            
            
            <CategoryButtons/>
        </View>
    )
}