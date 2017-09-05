import * as React from "react";
import { render } from "react-dom";
import Alert from '@jetbrains/ring-ui/components/alert/alert';

class RingUiAlert extends React.Component {
	state = {
		show: true,
		isClosing: false
	};

	onClose = () => {
		this.setState({show :false});
	}

	onCloseRequest = () => {
		this.setState({isClosing: true});
	}

	render() {
		const {show, isClosing} = this.state;
		if (!show) {
			return null;
		}

		return <Alert
			type={Alert.Type.SUCCESS}
			onClose={this.onClose}
			showWithAnimation={false}
			onCloseRequest={this.onCloseRequest}
			isClosing={isClosing}
		>
		  Ring UI Button
		</Alert>;
	}
}

export default RingUiAlert;