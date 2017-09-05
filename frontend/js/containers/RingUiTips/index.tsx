import * as React from "react";
import { render } from "react-dom";
import * as RingUI from "../../components/ring-ui";

class RingUiTipsView extends React.Component {
	render() {
		return <dl>
			<dt>Alert</dt>
			<dd><RingUI.Alert /></dd>
			<dt>LoaderInline</dt>
			<dd><RingUI.LoaderInline /></dd>
			<dt>AlertContainer</dt>
			<dd><RingUI.AlertContainer /></dd>
			<dt>Auth DIalog</dt>
			<dd><RingUI.AuthDialog /></dd>
		</dl>;
	}
}

export default RingUiTipsView;