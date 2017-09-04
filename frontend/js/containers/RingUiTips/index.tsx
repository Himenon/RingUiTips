import * as React from "react";
import { render } from "react-dom";
import RingUiAlert from "../../components/RingUiAlert";
import RingUiLoaderInline from "../../components/RingUiLoaderInline";

class RingUiTipsView extends React.Component {
	render() {
		return <dl>
			<dt>RingUiAlert</dt>
			<dd><RingUiAlert /></dd>
			<dt>RingUiLoaderInline</dt>
			<dd><RingUiLoaderInline /></dd>
		</dl>;
	}
}

export default RingUiTipsView;