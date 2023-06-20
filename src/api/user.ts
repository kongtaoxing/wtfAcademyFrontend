import request from "./request";
import {TAuthUser} from "@site/src/typings/auth";
import {TResult} from "@site/src/typings/common";

export const getProfile = (token: string) => {
  const headers = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
  return request.get(`/user`, { headers });
}

export const updateProfile = (token: string) => {
  const headers = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
  return request.put(`/user`, { headers });
}

export const getUserInfo = () => {
    return request.get<unknown, TResult<TAuthUser>>(`/user`).then((res) => res.data);
}