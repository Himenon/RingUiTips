import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { HelloRingUI } from "./components/HelloRingUI";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("root")
);

ReactDOM.render(
	<HelloRingUI />,
	document.getElementById('ring-ui-loader')
);