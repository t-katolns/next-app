import React, { Fragment, memo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  enabled: boolean;
}

// eslint-disable-next-line react/display-name
export const Display = memo(({ enabled, children }: Props) =>
  enabled ? <Fragment>{children}</Fragment> : <Fragment />
);
