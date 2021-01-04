import * as React from 'react';
import ViewerJS from 'viewerjs';
import 'viewerjs/dist/viewer.css';

interface RViewerJSProps {
  className?: string;
  options?: ViewerJS.Options;
}

export default class RViewerJS extends React.PureComponent<RViewerJSProps> {
  private viewer: ViewerJS | null = null;

  private onRef = (el: HTMLDivElement | null) => {
    if (!el) {
      return;
    }
    if (this.viewer) {
      this.viewer.destroy();
    }
    this.viewer = new ViewerJS(el, this.props.options);
  };

  public componentDidUpdate() {
    if (this.viewer) {
      this.viewer.update();
    }
  }

  public componentWillUnmount() {
    if (this.viewer) {
      this.viewer.destroy();
    }
    this.viewer = null;
  }

  public render() {
    return (
      <div ref={this.onRef} className={this.props.className}>
        {this.props.children}
      </div>
    );
  }
}
