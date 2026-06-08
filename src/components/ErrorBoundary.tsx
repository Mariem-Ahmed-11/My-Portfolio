import React from "react";

interface State {
  hasError: boolean;
  error?: Error | null;
  info?: React.ErrorInfo | null;
}

class ErrorBoundary extends React.Component<React.PropsWithChildren<{}>, State> {
  constructor(props: React.PropsWithChildren<{}>) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // You can log to an error reporting service here
    console.error("Unhandled render error:", error, info);
    this.setState({ error, info });
  }

  render() {
    if (!this.state.hasError) return this.props.children as React.ReactElement;

    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-background text-foreground">
        <div className="max-w-3xl w-full bg-card border border-border rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">Something went wrong</h2>
          <p className="text-sm text-muted-foreground mb-4">A runtime error occurred while rendering the app. Details below:</p>
          <details className="whitespace-pre-wrap bg-muted/5 p-3 rounded">
            <summary className="cursor-pointer text-sm text-primary">Show error</summary>
            <pre className="text-xs mt-2">{this.state.error?.stack || String(this.state.error)}</pre>
            {this.state.info && <pre className="text-xs mt-2">{this.state.info.componentStack}</pre>}
          </details>
          <div className="mt-4 text-right">
            <button onClick={() => location.reload()} className="btn-gradient px-4 py-2 rounded">Reload</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ErrorBoundary;
