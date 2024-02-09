import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  errorMessage: string;
  children?: ReactNode;
  applyStyle?: boolean;
}

interface State {
  hasError: boolean;
  needsReset: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    needsReset: false
  };

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    this.setState({ hasError: true, needsReset: true });
  }

  private resetError = () => {
    this.setState({ hasError: false, needsReset: false });
  };

  public componentDidUpdate(_prevProps: Props, prevState: State) {
    if (prevState.hasError && this.state.needsReset) {
      this.resetError();
    }
  }

  public render() {
    if (this.state.hasError) {
      this.props.errorMessage;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
