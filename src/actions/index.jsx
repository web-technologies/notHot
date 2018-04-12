export const GET_USERS = 'GET_USERS'

export const getUsers = () => ({
    type: GET_USERS,
    items: [
        {
            id: 1,
            name: 'Marke3'
        },
        {
            id: 2,
            name: 'Bill'
        },
        {
            id: 3,
            name: 'Dayna'
        }
    ]
})