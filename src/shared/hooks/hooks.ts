import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "app/store";
import { ActionCreatorsMapObject, bindActionCreators } from "redux";
import { useMemo } from "react";



export const useAppDispatch = useDispatch<AppDispatch>
export const useStateSelector: TypedUseSelectorHook<RootState> = useSelector

export const useActionCreators = <Actions extends ActionCreatorsMapObject>(
    actions: Actions
) => {
    const dispatch = useAppDispatch();

    return useMemo(() => bindActionCreators(actions, dispatch), [])
}
