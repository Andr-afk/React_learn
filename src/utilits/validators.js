export const required = (value) => {
    if (value) return undefined
    else return "It's a required field"
}

export const maxLength = (max) => (value) => {
    if (value && value.length > max) return "Max length of this field "
    else return undefined
}

export const isEmail = (value) => {
    let regular = /@/

    if (regular.test(value)) return undefined
    else return "It's not email"
}

// export const isSite = (value) => {
//     const regular = /[^a-z0-9\_\-\.]/
//
//     if (regular.test(value)) return undefined
//     else return "Invalid URL"
// }