import useLocalStorage from "use-local-storage";
import { HeaderStyled, SearchOptionWrapper, TopNavWrapper } from "./styles";
import { AutocompleteInput } from "../../atoms/input";
import { ChangeEvent, useCallback } from "react";
// import { debounce } from "../../utils/debounce";
// import { useDispatch } from "react-redux";
// import {
//   addToHistory,
//   swapToCelsius,
//   updateWeather,
// } from "../../actions/weatherActions/weatherSlice";
import { Switch } from "../../atoms/switch";
import { Typography } from "../../atoms/typography";

export const TopNav = () => {
  // const dispatch = useDispatch();
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", true);
  const [metricPreference, setMetricPreference] = useLocalStorage(
    "tempMetric",
    true
  );

  const switchTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const switchTempMetric = useCallback(() => {
    setMetricPreference((prev) => {
      // dispatch(swapToCelsius(!prev));
      return !prev;
    });
  }, [metricPreference, setMetricPreference]);

  // const handleInput = debounce(async (e: ChangeEvent<HTMLInputElement>) => {
  //   dispatch(addToHistory(e.target.value));
  //   const data = await fetchCurrentWeather(e.target.value, metricPreference);
  //   if (data) {
  //     dispatch(updateWeather(data));
  //   }
  // });

  return (
    <TopNavWrapper>
      <HeaderStyled>
        <Typography>ProMeteo</Typography>
        <Switch onClick={switchTheme} initialState={darkMode} />
      </HeaderStyled>
      {/* <AutocompleteInput onChange={handleInput} /> */}
      <SearchOptionWrapper>
        <Typography variant="H2">Show Result In</Typography>
        <Switch
          onClick={switchTempMetric}
          initialState={metricPreference}
          insignia={metricPreference ? "C°" : "F°"}
        />
      </SearchOptionWrapper>
    </TopNavWrapper>
  );
};
