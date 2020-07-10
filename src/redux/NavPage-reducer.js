//action type

let initialState = {
        friends: [
            {
                id: 0,
                name: "Andrey",
                image: "https://i.pinimg.com/736x/ab/b6/a8/abb6a800ab2193fcedd9bda566b7402c.jpg"
            },
            {
                id: 1,
                name: "Natalia",
                image: "https://sun9-32.userapi.com/impf/c824201/v824201969/173424/ayWCFmi538s.jpg?size=200x0&quality=90&sign=b461a01af900c4374512c2b13455c25d&ava=1"
            },
            {
                id: 2,
                name: "Valera",
                image: "https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg"
            }

        ]
}

const navReducer = (state = initialState, action)=>{
    return state
}

export default navReducer
