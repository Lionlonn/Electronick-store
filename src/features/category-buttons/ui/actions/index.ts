import { getButtonDeveloperProduct, getButtonProductsAll, getFilmakingProduct, getPhotographyProduct, getPodcastProduct } from "../../model";
import { useAppDispatch } from "src/shared/hooks";

interface ClickHandles {
    [key: string]: () => void;
}

export const ClickHandlesCategory = (
    dispatch: ReturnType<typeof useAppDispatch>,
    setIsPressed: (category: string) => void,
    setCategory: (category: string) => void
): ClickHandles => ({
       'Show all': () => {
            dispatch(getButtonProductsAll());
            setIsPressed('Show all');
            setCategory('Show all');
        },
        'Developer': () => {
            dispatch(getButtonDeveloperProduct());
            setIsPressed('Developer');
            setCategory('Developer');
        },
        'Podcast creator': () => {
            dispatch(getPodcastProduct());
            setIsPressed('Podcast creator');
            setCategory('Podcast creator');
        },
        'Filmaking': () => {
            dispatch(getFilmakingProduct());
            setIsPressed('Filmaking');
            setCategory('Filmaking');
        },
        'Photography': () => {
            dispatch(getPhotographyProduct());
            setIsPressed('Photography');
            setCategory('Photography');
        }  
})