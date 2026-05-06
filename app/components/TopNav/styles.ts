import { mediaQuery } from "@/utils/mediaQuery";
import styled from "styled-components";

export const TopNavWrapper = styled.div(({ theme }) => ({
  padding: `${theme.sizes.xs} 20%`,
  background: theme.navBarBackground,
  boxShadow: `0px 8px 14px 0 ${theme.secondaryBackground}`,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: theme.sizes.xs,
  [mediaQuery.mobile]: {
    padding: `${theme.sizes.xs} ${theme.sizes.s}`,
  },
}));

export const HeaderStyled = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.sizes.s,
}));

export const SearchOptionWrapper = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));
