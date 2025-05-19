import { createContext, useContext, useState } from "react";

const LocationContext = createContext();

function LocationProvider({ children }) {
  const [location, setLocation] = useState("Tehran");
  const handleSetLocation = (loc) => {
    setLocation(loc)
  };

  return (
    <LocationContext.Provider value={{ handleSetLocation, location }}>
      {children}
    </LocationContext.Provider>
  );
}

export default LocationProvider;

export function useLocation() {
  const context = useContext(LocationContext);

  if (context === undefined)
    throw new Error("LocationContext was used outside of LocationProvier");

  return context;
}
