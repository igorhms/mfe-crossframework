// hooks/useUsername.js
import { useState, useEffect } from "react";
import { getUsernameObservable } from "shared-state-lib";

export const useUsername = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const subscription = getUsernameObservable().subscribe((value) => {
      setUsername(value || '');
    });

    return () => subscription.unsubscribe();
  }, []);

  return username;
};
