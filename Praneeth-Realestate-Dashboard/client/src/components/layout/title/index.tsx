import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button, useTheme } from "@pankod/refine-mui";

import { logo, praneeth, praneethDark } from "../../../assets";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();
  let logoMode = useTheme().palette.mode === "dark" ? praneethDark : praneeth;

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={logo} alt="praneeth" width="28px" />
        ) : (
          <img src={logoMode} alt="praneeth" width="140px" />
        )}
      </Link>
    </Button>
  );
};
