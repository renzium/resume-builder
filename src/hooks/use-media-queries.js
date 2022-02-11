import { useMediaQuery } from "react-responsive";

export function useMediaQueries() {
  const isMinimumTabModalScreen = useMediaQuery({
    query: "(min-width: 550px)",
  });

  return {
    isMinimumTabModalScreen,
  };
}
