import { useState, useEffect, createContext, useContext } from "react";
import {
  addHistory,
  getHistory,
  removeAllHistory,
  removeHistory,
} from "../services/historyServices";
import { useAuth } from "./authContext";

const HistoryContext = createContext();

const useUserHistory = () => useContext(HistoryContext);

const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);
  const {
    auth: { isAuthenticated, token },
  } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      (async () => {
        try {
          const response = await getHistory(token);
          if (response.status === 200) {
            const history = response.data.history;
            setHistory(history);
          }
        } catch (error) {
          console.error("ERROR", error);
        }
      })();
    } else {
      setHistory([]);
    }
  }, [isAuthenticated, token]);

  const addToHistory = async video => {
    try {
      const response = await addHistory(token, video);
      setHistory(response.data.history);
    } catch (error) {
      console.error("ERROR", error);
      return error;
    }
  };

  const removeFromHistory = async video => {
    try {
      const response = await removeHistory(token, video);
      setHistory(response.data.history);
    } catch (error) {
      console.error("ERROR", error);
      return error;
    }
  };

  const clearAllHistory = async video => {
    try {
      const response = await removeAllHistory(token);
      setHistory(response.data.history);
    } catch (error) {
      console.error("ERROR", error);
      return error;
    }
  };

  return (
    <HistoryContext.Provider
      value={{
        history,
        addToHistory,
        removeFromHistory,
        clearAllHistory,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

export { HistoryProvider, useUserHistory };
