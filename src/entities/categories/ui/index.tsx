import React from "react";
import { FlatList } from "react-native";
import { CategoriesCarousel } from "./categories";
import Developer from '../image/developer.svg'




export const Categories = () => {
    const list = [
        {image: "https://w.forfun.com/fetch/da/daf8eb568fea522f6701fb9c66378cdc.jpeg", id: 1, title: "Developer"},
        {image: "https://w.forfun.com/fetch/da/daf8eb568fea522f6701fb9c66378cdc.jpeg", id: 2, title: "Developer"},
        {image: "https://w.forfun.com/fetch/da/daf8eb568fea522f6701fb9c66378cdc.jpeg", id: 3, title: "Developer"},
        {image: "https://w.forfun.com/fetch/da/daf8eb568fea522f6701fb9c66378cdc.jpeg", id: 4, title: "Developer"}
    ]

    return (
        <CategoriesCarousel />
    )
}