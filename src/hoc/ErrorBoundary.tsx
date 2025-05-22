import { Component, ErrorInfo, ReactNode } from 'react';
import './styles.scss'; // Custom styles

interface IProps {
  children: ReactNode;
}

interface IState {
  hasError: boolean;
  errorMessage: string;
  errorInfo: string;
}

class ErrorBoundaryComponent extends Component<IProps, IState> {
  public state: IState = {
    hasError: false,
    errorMessage: '',
    errorInfo: '',
  };

  public static getDerivedStateFromError(error: Error): IState {
    // Update state to show fallback UI
    return { hasError: true, errorMessage: `Uncaught error: ${error.message}`, errorInfo: '' };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    this.setState({ errorInfo: errorInfo.componentStack as any });
  }

  public render(): ReactNode {
    const { children } = this.props;
    const { hasError, errorMessage, errorInfo } = this.state;

    if (hasError) {
      return (
        <div className="error-boundary">
          <div className="error-content">
            <h1>Oops! Something went wrong.</h1>
            <p>We’re sorry - something has gone wrong. Please try again or contact support.</p>
            <div className="error-details">
              <p>
                <strong>Error Message:</strong> {errorMessage}
              </p>
              <p>
                <strong>Details:</strong> {errorInfo}
              </p>
            </div>
            <button className="retry-button" onClick={() => window.location.reload()}>
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundaryComponent;
