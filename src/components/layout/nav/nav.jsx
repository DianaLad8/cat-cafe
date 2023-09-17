import React from "react";
import Button from "/src/components/ui/button/button";
import { AppRoute } from "/src/const";
import { StyledButton } from "./styles";
import { useLocation } from "react-router-dom";

const buttons = [
  {
    to: AppRoute.MAIN,
    item: (
      <StyledButton minWidth={260} key={AppRoute.MAIN} link={AppRoute.MAIN}>
        Главная
      </StyledButton>
    )
  },
  {
    to: AppRoute.BUY,
    item: (
      <Button minWidth={260} key={AppRoute.BUY} link={AppRoute.BUY}>
        Купить билет
      </Button>
    )
  }
];

function Nav() {
  const pageUrl = useLocation().pathname;
  return (
    <nav>
      <nav>
        {buttons
          .filter((button) => button.to !== pageUrl)
          .map((button) => button.item)}
      </nav>
    </nav>
  );
}

export default Nav;
