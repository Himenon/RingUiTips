import {render} from 'react-dom';
import * as React from 'react';
import AuthDialog from '@jetbrains/ring-ui/components/auth-dialog/auth-dialog';
import Button from '@jetbrains/ring-ui/components/button/button';
import youtrackLogo from '@jetbrains/logos/youtrack/youtrack.svg';

class RingUiAuthDialog extends React.Component {
  state = {
    confirm: {
      show: true,
      onConfirm: () => {},
      onReject: () => {},
    }
  };

  componentDidMount() {
    this.showAuthDialog();
  }

  hideAuthDialog = () => {
    this.setState({confirm: {show: false}});
  }

  showAuthDialog = () => {
    return new Promise((resolve, reject) => {
      this.setState({
        confirm: {
          show: true,
          errorMessage: 'Authorization lost',
          serviceName: 'YouTrack',
          onLogin: () => this.hideAuthDialog() || resolve(),
          onCancel: () => this.hideAuthDialog() || reject()
        }
      });
    }).
      then(() => console.info('Confirmed')).
      catch(() => console.warn('Rejected'));
  }

  render() {
    return (
    <div>
      <div>
        <Button onClick={this.showAuthDialog}>Show confirm</Button>
      </div>
      <AuthDialog
        {...this.state.confirm}
        serviceImage={youtrackLogo}
        loginLabel="Log in"
        cancelLabel="Stay as guest"
      />
    </div>
    );
  }
 }

 export default RingUiAuthDialog;