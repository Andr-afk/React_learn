import {renderTree} from "./render"
import state, {addPost} from "./redux/state"

renderTree(state, addPost)
