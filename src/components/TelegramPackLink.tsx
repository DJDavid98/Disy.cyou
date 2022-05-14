import { FC, PropsWithChildren } from 'react';

export const TelegramPackLink: FC<PropsWithChildren<{ packName: string }>> = ({ packName, children }) => (
  <a href={`https://t.me/addstickers/${packName}`} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);
