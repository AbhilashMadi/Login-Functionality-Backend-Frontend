import { FC, lazy } from 'react';
import resources from '../constants/resources';

import { 
  USERNAME,
  PASSWORD,
  PROFILE,
  RECOVERY,
  REGISTER,
  RESET,
  PAGE_NOT_FOUND,
 } from './path';

const Username = lazy(() => import('../pages/Username'));
const Password = lazy(() => import('../pages/Password'));
const Profile = lazy(() => import('../pages/Profile'));
const Recovery = lazy(() => import('../pages/Recovery'));
const Reset = lazy(() => import('../pages/Reset'));
const Register = lazy(() => import('../pages/Register'));
const PageNotFound = lazy(() => import('../pages/PageNotFound'));


export interface IRouteObject {
  name: string;
  element: FC;
  path: string;
  isPrivate?: boolean;
}

const routerObjectCreater = (name: string, element: FC, path: string, isPrivate: boolean) => {
  return { name, element, path, isPrivate }
}

export const routes: IRouteObject[] = [
  routerObjectCreater(
    resources?.username,
    Username,
    USERNAME,
    false,
  ),
  routerObjectCreater(
    resources?.password,
    Password,
    PASSWORD,
    false
  ),
  routerObjectCreater(
    resources?.profile,
    Profile,
    PROFILE,
    true,
  ),
  routerObjectCreater(
    resources?.recovery,
    Recovery,
    RECOVERY,
    true,
  ),
  routerObjectCreater(
    resources?.reset,
    Reset,
    RESET,
    true,
  ),
  routerObjectCreater(
    resources?.register,
    Register,
    REGISTER,
    false,
  ),
  routerObjectCreater(
    resources?.pageNotFound,
    PageNotFound,
    PAGE_NOT_FOUND,
    false,
  )
]