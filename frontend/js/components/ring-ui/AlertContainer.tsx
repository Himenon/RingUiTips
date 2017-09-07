import * as React from 'react';
import { render } from 'react-dom';
import Button from '@jetbrains/ring-ui/components/button/button';
import Alert, { Container } from '@jetbrains/ring-ui/components/alert/alert';

export interface IState {
  alerts: any[];
}

class AlertContainer extends React.Component<{}, IState> {
  public state = {
    alerts: [
      {type: Alert.Type.WARNING, key: 1, message: 'Test warning', isClosing: false},
      {type: Alert.Type.MESSAGE, key: 2, message: 'Test message', isClosing: false},
    ],
  };

  public yetAnotherMessage = () => {
    this.setState({
      alerts: [{
          key: Date.now(),
          message: 'Another message at ' + new Date(),
          type: Alert.Type.MESSAGE,
        },
        ...this.state.alerts,
      ],
    });
  }

  public onCloseAlert = (closedAlert: any) => {
    this.setState({
      alerts: this.state.alerts.filter(alert => alert !== closedAlert),
    });
  }

  public onCloseAlertClick = (alert) => {
    const alertToClose = this.state.alerts.filter(it => alert.key === it.key)[0];
    alertToClose.isClosing = true;
    this.setState({alerts: [...this.state.alerts]});
  }

  public render() {
    return (
      <div>
        <Button onClick={this.yetAnotherMessage}>Create another message</Button>

        <Container>
          {this.state.alerts.map(alert => {
            const {message, ...rest} = alert;
            return (
              <Alert
                {...rest}
                onCloseRequest={() => this.onCloseAlertClick(alert)}
                onClose={() => this.onCloseAlert(alert)}
              >
                {message}
              </Alert>
            );
          })}
        </Container>
      </div>
    );
  }
}

export default AlertContainer;
