import { FC, Fragment } from 'react';

export const CommaSeparatedComponents: FC<{ children: JSX.Element[] }> = ({ children }) => {
  return (
    <>
      {children.map((child, i) => (
        <Fragment key={i}>
          {child}
          {i !== children.length - 1 && ', '}
        </Fragment>
      ))}
    </>
  );
};
