import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ProductItem } from "src/entities/product"
import { CartItem } from "src/entities/product/model/action-creators";

export type StackParamList = {
    WelcomePage: undefined;
    HomePage: undefined;
    WorkSpaces: undefined;
    SearchPage: undefined;
    ShopingCartPage: undefined;
    ProductsWorkspace: undefined;
    ViewItem: {item: CartItem};
    BasketPage: undefined;
    CheckOutPage: undefined;
    PaidPage: undefined;
    OrdersPage: undefined;
    LoginPage: undefined;
    RegistrationPage: undefined;
}

export type PropsParam = NativeStackScreenProps<StackParamList, 'ViewItem'>