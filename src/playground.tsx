import { st } from "springtype/core";
import { tsx } from "springtype/web/vdom";
// How to use and customize a global MDC theme?
//
//     yarn add material-components-web
//
// and us it like this:
// 
// import "./mdc.scss"; 
//
// But because we use it in html as css global style we don't need to.
import { HomePage } from "./playground/home-page";
import './demo.css'

st.render(<HomePage />);
