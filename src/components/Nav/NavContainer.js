import Nav from "./Nav";
import {connect} from "react-redux";

let mapStateToProps = (state)=>({NavPage: state.NavPage})
let mapDispatchToProps = (dispatch)=>({})

const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav)

export default NavContainer
