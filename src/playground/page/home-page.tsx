import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { tsx } from "springtype/web/vdom";

@component()
export class HomePage extends st.component implements ILifecycle {

  render() {
    return (
      <div>
        <h2>Playground</h2>
      </div>
    );
  }
}
