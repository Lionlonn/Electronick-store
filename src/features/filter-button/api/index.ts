import { instance } from "src/shared/api"


export type FilterData = {
    title: string,
    data: Array<{label: string, checked: boolean}>
}

export const FilterApi = {
    getFilterData() {
        return instance.get(`api/filter-list`).then(response => {
            return response.data
        }).catch(error => {
            console.error("Ошибка при выполнении запроса:", error);
        })
    }
}

