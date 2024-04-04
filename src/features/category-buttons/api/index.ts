import { err } from "react-native-svg"
import { instance } from "src/shared/api"

export const DeveloperProductsApi = {
    getProduct() {
        return instance.get('/api/developer-products').then(response => {
            return response.data

        })
    }
}

export const FilmakingProductsApi = {
    getProduct() {
        return instance.get('/api/filmaking-products').then(response => {
            return response.data

        })
    }
}

export const PhotographyProductsApi = {
    getProduct() {
        return instance.get('/api/photography-products').then(response => {
            return response.data

        })
    }
}

export const PodcastProductsApi = {
    getProduct() {
        return instance.get('/api/podcast-creator').then(response => {
            return response.data

        })
    }
}