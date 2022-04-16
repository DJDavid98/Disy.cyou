import { CANONICAL_URL, IS_CLIENT_SIDE } from '../config';

export const assembleSeoUrl = (pathname?: string): string => {
  const protocol = IS_CLIENT_SIDE ? location.protocol : 'https:';
  const host = IS_CLIENT_SIDE ? location.host : undefined;
  return `${host ? `${protocol}//${host}` : CANONICAL_URL}${pathname || ''}`;
};
