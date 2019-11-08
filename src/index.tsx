import { st } from "springtype/core";
import { route, RouterOutlet } from "springtype/web/router";
import { tsx } from "springtype/web/vdom";
// How to use and customize a global MDC theme?
//
//     yarn add material-components-web
//
// and us it like this:
import "./mdc.global.scss";
import { HomePage } from "./playground/page/home-page";

@route(null, HomePage)
export class AppModule {}

st.render(<RouterOutlet />);
