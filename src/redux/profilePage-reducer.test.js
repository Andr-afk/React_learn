import profileReducer, {addPost, deletePost} from "./profilePage-reducer";
//1. data
let state = {
    posts: [
        {
            id: 1,
            image: "https://avatars.mds.yandex.net/get-pdb/788379/a5ec9e90-5b8f-4888-8c46-ad5ead630338/s1200?webp=false",
            message: 'hard text',
            count_like: 0
        }
    ]
}



test('Add_Post', () => {
    const My_expectation = "All lives matter"

    let action = addPost(My_expectation);
    let new_state = profileReducer(state, action)

    let last_element = new_state.posts.length - 1

    expect(new_state.posts.length).toBe(2)
    expect(new_state.posts[last_element].message).toBe(My_expectation)
    expect(new_state.posts[last_element].count_like).toBe(0)
})

test('delete_Post', () => {

    let action = deletePost(1);
    let new_state = profileReducer(state, action)

    expect(new_state.posts.length).toBe(0)
})

test("element shouldn't be deleted if incorrect ID",()=>{
    let action = deletePost(-1);
    let new_state = profileReducer(state, action)

    expect(new_state.posts.length).toBe(1)
})



