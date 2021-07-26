import { CLEAR_CATEGORY, SET_ACTIVE_CATEGORY } from "./types"

const initState = {
    mainPage: [
        {
            id: 1,
            img: '/img/man.png',
            title: "man", // Man
            name: "man", // lowerCase
            categories: [
                {
                    id: 1,
                    title: 'T-Shirts',
                    name: 't-shirts'
                },
                {
                    id: 2,
                    title: 'Polo shirts',
                    name: 'polo-shirts'
                },
                {
                    id: 3,
                    title: 'SHORTS',
                    name: 'shorts'
                },
                {
                    id: 4,
                    title: 'JEANS',
                    name: 'jeans'
                },
                {
                    id: 5,
                    title: 'suits',
                    name: 'suits'
                },
                {
                    id: 6,
                    title: 'BLAZERS',
                    name: 'blazers'
                },
                {
                    id: 7,
                    title: 'JACKETS | TRENCH COATS',
                    name: 'jackets'
                },
                {
                    id: 8,
                    title: 'OVERSHIRTS',
                    name: 'overshirts'
                },
                {
                    id: 9,
                    title: 'KNITWEAR',
                    name: 'knitwear'
                },
                {
                    id: 10,
                    title: 'HOODIES | SWEATSHIRTS',
                    name: 'hodies'
                },
                {
                    id: 11,
                    title: 'SHOES',
                    name: 'shoes'
                },
                {
                    id: 12,
                    title: 'BAGS | BACKPACKS',
                    name: 'bags'
                },
                {
                    id: 13,
                    title: 'ACCESSORIES',
                    name: 'accessories'
                },
                {
                    id: 14,
                    title: 'PERFUMES',
                    name: 'perfumes'
                }
            ],
        },
        {
            id: 2,
            img: '/img/woman.png',
            title: "woman",
            name: "man",
            categories: [
                {
                id: 1,
                title: 'T-Shirts',
                name: 't-shirts'
                },
                {
                    id: 2,
                    title: 'Polo shirts',
                    name: 'polo-shirts'
                },
                {
                    id: 3,
                    title: 'SHORTS',
                    name: 'shorts'
                },
                {
                    id: 4,
                    title: 'JEANS',
                    name: 'jeans'
                },
                {
                    id: 5,
                    title: 'suits',
                    name: 'suits'
                },
                {
                    id: 6,
                    title: 'BLAZERS',
                    name: 'blazers'
                },
                {
                    id: 7,
                    title: 'JACKETS | TRENCH COATS',
                    name: 'jackets'
                },
                {
                    id: 8,
                    title: 'OVERSHIRTS',
                    name: 'overshirts'
                },
                {
                    id: 9,
                    title: 'KNITWEAR',
                    name: 'knitwear'
                },
                {
                    id: 10,
                    title: 'HOODIES | SWEATSHIRTS',
                    name: 'hodies'
                },
                {
                    id: 11,
                    title: 'SHOES',
                    name: 'shoes'
                },
                {
                    id: 12,
                    title: 'BAGS | BACKPACKS',
                    name: 'bags'
                },
                {
                    id: 13,
                    title: 'ACCESSORIES',
                    name: 'accessories'
                },
                {
                    id: 14,
                    title: 'PERFUMES',
                    name: 'perfumes'
                }
            ],
        },
        {
            id: 3,
            img: '/img/kid.png',
            title: "kid",
            name: 'kid',
            categories: [
                {
                id: 1,
                title: 'T-Shirts',
                name: 't-shirts'
                },
                {
                    id: 2,
                    title: 'Polo shirts',
                    name: 'polo-shirts'
                },
                {
                    id: 3,
                    title: 'SHORTS',
                    name: 'shorts'
                },
                {
                    id: 4,
                    title: 'JEANS',
                    name: 'jeans'
                },
                {
                    id: 5,
                    title: 'suits',
                    name: 'suits'
                },
                {
                    id: 6,
                    title: 'BLAZERS',
                    name: 'blazers'
                },
                {
                    id: 7,
                    title: 'JACKETS | TRENCH COATS',
                    name: 'jackets'
                },
                {
                    id: 8,
                    title: 'OVERSHIRTS',
                    name: 'overshirts'
                },
                {
                    id: 9,
                    title: 'KNITWEAR',
                    name: 'knitwear'
                },
                {
                    id: 10,
                    title: 'HOODIES | SWEATSHIRTS',
                    name: 'hodies'
                },
                {
                    id: 11,
                    title: 'SHOES',
                    name: 'shoes'
                },
                {
                    id: 12,
                    title: 'BAGS | BACKPACKS',
                    name: 'bags'
                },
                {
                    id: 13,
                    title: 'ACCESSORIES',
                    name: 'accessories'
                },
                {
                    id: 14,
                    title: 'PERFUMES',
                    name: 'perfumes'
                }
            ],
        }
    ],
    activeCategory: null
}

export const MainPageReducer = (state = initState, action) => {
    switch(action.type){
        case SET_ACTIVE_CATEGORY:
            return {
                ...state,
                activeCategory: action.payload
            }
        case CLEAR_CATEGORY:
            return {
                ...state,
                activeCategory: null
            }
        default:
            return state
    }
}