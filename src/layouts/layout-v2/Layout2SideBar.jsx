/* eslint-disable array-callback-return */
import { Box, List, ListItem, styled, Tooltip } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import FlexBox from "components/flexbox/FlexBox";
import { H3, Small } from "components/Typography";
import { Fragment, useState } from "react";
import ScrollBar from "simplebar-react";
import { secondarySideBarGap, secondarySideBarWidth } from "../../constants";
import sideMenuList from "../layout-parts/navList"; // root component interface

// custom styled components
const MainMenu = styled(Box)(({ theme }) => ({
  left: 0,
  width: 80,
  height: "100%",
  position: "fixed",
  boxShadow: theme.shadows[2],
  transition: "left 0.3s ease",
  zIndex: theme.zIndex.drawer + 11,
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.down("md")]: {
    left: -80,
  },
  "& .simplebar-track.simplebar-vertical": {
    width: 7,
  },
  "& .simplebar-scrollbar:before": {
    background: theme.palette.text.primary,
  },
}));
const SecondarySideBar = styled(Box)(({ theme, show }) => ({
  height: "100%",
  position: "fixed",
  width: secondarySideBarWidth,
  zIndex: theme.zIndex.drawer + 1,
  transition: "left 0.3s ease-in-out",
  backgroundColor: theme.palette.background.paper,
  left: show ? 80 : -(secondarySideBarWidth + secondarySideBarGap),
}));
const StyledListItemButton = styled(ListItemButton)(() => ({
  marginBottom: "1rem",
  justifyContent: "center",
  "&:hover": {
    backgroundColor: "transparent",
  },
}));
const Dot = styled(Box)({
  width: 4,
  height: 4,
  marginRight: 10,
  borderRadius: "50%",
});
const SubMenuItem = styled(FlexBox)(({ theme, active }) => ({
  cursor: "pointer",
  alignItems: "center",
  padding: "0.6rem 1.2rem",
  "& div": {
    backgroundColor: active
      ? theme.palette.primary.main
      : theme.palette.text.disabled,
  },
  "& #name": {
    color: active ? theme.palette.primary.main : theme.palette.text.secondary,
  },
  "&:hover": {
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.secondary.light
        : theme.palette.divider,
    "& div": {
      backgroundColor: theme.palette.primary.main,
    },
    "& #name": {
      color: theme.palette.primary.main,
    },
  },
})); // root component

const Layout2SideBar = (props) => {
  const {
    sideBarLocked,
    showMobileSideBar,
    closeMobileSideBar,
    openSecondarySideBar,
    setOpenSecondarySideBar,
  } = props;
  const [active, setActive] = useState("Dashboard");
  const [categoryMenus, setCategoryMenus] = useState(sideMenuList[0].children);
  const downMd = useMediaQuery((theme) => theme.breakpoints.down(1200));

  const handleActiveMainMenu = (menuItem) => () => {
    setActive(menuItem.title);

    if (menuItem.children && menuItem.children.length > 0) {
      setCategoryMenus(menuItem.children);
      const matched = openSecondarySideBar && active === menuItem.title;
      setOpenSecondarySideBar(matched ? false : true);
    } else {
      closeMobileSideBar();
      setOpenSecondarySideBar(sideBarLocked && !menuItem.path);
    }
  };

  const mainSideBarContent = (
    <List
      sx={{
        height: "100%",
      }}
    >
      <StyledListItemButton disableRipple>
        <img src="/static/logo/logo-uko.svg" alt="UKO Logo" width={31} />
      </StyledListItemButton>

      <ScrollBar
        style={{
          maxHeight: "calc(100% - 50px)",
        }}
      >
        {sideMenuList.map((nav, index) => (
          <Tooltip title={nav.title} placement="right" key={index}>
            <StyledListItemButton
              disableRipple
              onClick={handleActiveMainMenu(nav)}
            >
              <nav.Icon
                sx={{
                  color:
                    active === nav.title ? "primary.main" : "text.secondary",
                }}
              />
            </StyledListItemButton>
          </Tooltip>
        ))}
      </ScrollBar>
    </List>
  ); // secondary side bars content

  const secondarySideBarContent = (
    <Fragment>
      <ListItem
        sx={{
          py: 2,
        }}
      >
        <H3>{active}</H3>
      </ListItem>

      {categoryMenus?.map((item) => {
        if (!item.subChildren) {
          return (
            <SubMenuItem key={item.name}>
              <Dot />
              <Small id="name">{item.name}</Small>
            </SubMenuItem>
          );
        }
      })}
    </Fragment>
  ); // for mobile device

  if (downMd) {
    return (
      <Fragment>
        <Box
          sx={{
            width: 60,
            height: "100%",
            position: "fixed",
            boxShadow: (theme) => theme.shadows[1],
            zIndex: (theme) => theme.zIndex.drawer + 3,
            backgroundColor: (theme) => theme.palette.background.paper,
            "& .simplebar-track.simplebar-vertical": {
              width: 7,
            },
            "& .simplebar-scrollbar:before": {
              background: (theme) => theme.palette.text.primary,
            },
            transform: showMobileSideBar
              ? "translateX(0)"
              : "translateX(-100%)",
            transition: "transform 0.3s",
          }}
        >
          {mainSideBarContent}
        </Box>

        {showMobileSideBar && (
          <Box
            onClick={closeMobileSideBar}
            sx={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              position: "fixed",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: (theme) => theme.zIndex.drawer,
            }}
          />
        )}

        <Box
          sx={{
            width: 300,
            height: "100%",
            position: "fixed",
            transition: "left 0.3s",
            left: showMobileSideBar ? 0 : -300,
            backgroundColor: "background.paper",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <Box
            sx={{
              height: "100%",
              marginLeft: "60px",
              position: "relative",
              width: "calc(100% - 60px)",
            }}
          >
            {secondarySideBarContent}
          </Box>
        </Box>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <MainMenu>{mainSideBarContent}</MainMenu>
      <SecondarySideBar show={openSecondarySideBar ? 1 : 0}>
        {secondarySideBarContent}
      </SecondarySideBar>
    </Fragment>
  );
};

export default Layout2SideBar;
