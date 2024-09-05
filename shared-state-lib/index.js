import { BehaviorSubject } from "rxjs";

const usernameSubject = new BehaviorSubject(null);

export const setUsername = (username) => {
  usernameSubject.next(username);
};

export const getUsernameObservable = () => {
  return usernameSubject.asObservable();
};

export const getUsernameValue = () => {
  return usernameSubject.getValue();
};
