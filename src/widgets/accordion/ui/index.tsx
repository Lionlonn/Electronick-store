import { View } from 'react-native';
import { SearchInputField } from "src/features/input";
import { FilterListAccordion } from 'src/widgets/filter-list';
import { MultisliderCustom } from "src/widgets/multislider";





export const AccordionContent = () => {
    

    return (
        <View>
            <SearchInputField 
                multisliderBlock={<MultisliderCustom/>}
                listItem={<FilterListAccordion/>}
                />
                
        </View>
    )    
}