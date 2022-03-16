import * as React from "react";

// theme type definition
type State = {
  value: "light" | "dark" | undefined;
};

// All theme actions
type Action = {
  type: "UPDATE_THEME";
  payload?: Partial<State>;
};

type ContextProps = [State, React.Dispatch<Action>];

type ProviderProps = {
  reducer: any;
  initialState: any;
};

type Reducer = (prevState: State, action: Action) => State;

// React expects the context to be created with default values
// This object contain Provider and Consumer
export const ThemeContext = React.createContext<ContextProps | null>(null);

/**
 * @objectives
 * Storing the theme preference in localStorage
 * Checking value of the locale URL parameter on every client-side route change
 * Synchronizing the context state with the locale embedded in the URL
 */
export const ThemeProvider: React.FunctionComponent<ProviderProps> = ({
  reducer,
  initialState,
  children,
}) => {
  // full control over reduce and initial state data inside our app
  const [state, dispatch] = React.useReducer<Reducer>(reducer, initialState);

  return (
    // nice trick to let reducer available in any component
    <ThemeContext.Provider value={[state, dispatch]}>
      {children}
    </ThemeContext.Provider>
  );
};

// A custom hook to access our minimalistic state management in any component with less amount of code
export const useTheme = (): any => React.useContext(ThemeContext);

export default {
  initialState: {
    value: "dark",
  },
  /**
   * @description designing the theme state shape
   * @param state current data
   * @param action action to handle
   */
  reducer(state: State, action: Action): State {
    switch (action.type) {
      case "UPDATE_THEME":
        return {
          ...state,
          value: action?.payload?.value,
        };
      default:
        return state;
    }
  },
};
