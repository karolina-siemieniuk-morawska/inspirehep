import React, { Component, ReactNode } from 'react';
import { Button, Drawer } from 'antd';

type DrawerHandleProps = typeof DrawerHandle.defaultProps & {
  children: ReactNode;
  drawerTitle: ReactNode;
};

interface DrawerHandleState {
  isDrawerVisible: boolean;
}

export default class DrawerHandle extends Component<
  DrawerHandleProps,
  DrawerHandleState
> {
  static defaultProps = {
    width: 304,
    handleText: 'Open',
    className: '',
  };

  state = {
    isDrawerVisible: false,
  };

  onDrawerHandleClick = () => {
    this.setState({ isDrawerVisible: true });
  };

  onDrawerClose = () => {
    this.setState({ isDrawerVisible: false });
  };

  render() {
    const { children, drawerTitle, width, handleText, className } = this.props;
    const { isDrawerVisible } = this.state;
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Button
          data-test-id="handle-button"
          className={className}
          onClick={this.onDrawerHandleClick}
        >
          {handleText}
        </Button>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Drawer
          title={drawerTitle}
          placement="left"
          width={width}
          visible={isDrawerVisible}
          onClose={this.onDrawerClose}
        >
          {children}
        </Drawer>
      </>
    );
  }
}
