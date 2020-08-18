import Nav from "./Nav";
import {connect} from "react-redux";

let mapStateToProps = (state)=>({NavPage: state.NavPage})

const NavContainer = connect(mapStateToProps, null)(Nav)

export default NavContainer
