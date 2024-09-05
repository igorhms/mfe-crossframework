declare module "shared-state-lib" {
  // Declare a função setUsername
  export function setUsername(username: string): void;

  // Declare a função getUsernameObservable
  export function getUsernameObservable(): import("rxjs").Observable<
    string | null
  >;

  // Declare a função getUsernameValue
  export function getUsernameValue(): string | null;
}
