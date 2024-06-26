import { getButtonDeveloperProduct, getButtonProductsAll, getFilmakingProduct, getPhotographyProduct, getPodcastProduct } from "../../model";
import { useAppDispatch } from "src/shared/hooks";

interface ClickHandles {
    [key: string]: () => void;
}

export function handleClickCategoryActions(dispatch: ReturnType<typeof useAppDispatch>, setIsPressed: (category: string) => void): ClickHandles {
    return {
        'Show all': () => {
            dispatch(getButtonProductsAll());
            setIsPressed('Show all');
        },
        'Developer': () => {
            dispatch(getButtonDeveloperProduct());
            setIsPressed('Developer');
        },
        'Podcast creator': () => {
            dispatch(getPodcastProduct());
            setIsPressed('Podcast creator');
        },
        'Filmaking': () => {
            dispatch(getFilmakingProduct());
            setIsPressed('Filmaking');
        },
        'Photography': () => {
            dispatch(getPhotographyProduct());
            setIsPressed('Photography');
        }
    };
}
