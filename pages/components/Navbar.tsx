import {
  AppBar,
  Avatar,
  Box,
  Grid,
  Link,
  Toolbar,
  Typography,
  Hidden,
  IconButton,
  SwipeableDrawer,
  Divider,
  List,
  ListItem,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
const navigationLinks = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Awards", href: "/awards" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar>
      <Box
        sx={{
          display: "flex",
          background: "#010552",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          justifyContent: "space-between",
          fontWeight: "0",
        }}
      >
        <Avatar
          sx={{
            marginLeft: "5%",
            color: "black",
            background: "#349eeb",
            borderRadius: 0,
            border: "2px solid gray",
            borderLeft: "7px solid ",
            borderRight: "7px solid ",
          }}
        >
          GL
        </Avatar>
        <Hidden smDown>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginRight: "5%",
              justifyContent: "flex-end",
            }}
          >
            {navigationLinks.map((item, idx) => (
              <Link
                href={item.href}
                sx={{
                  fontSize: "1.25rem",
                  color: "white",
                  marginRight: "3rem",
                  cursor: "pointer",
                  fontWeight: "lighter",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                <Typography fontWeight="0.1rem">{item.name}</Typography>
              </Link>
            ))}
          </Box>
        </Hidden>
        <Hidden smUp>
          <IconButton>
            <MenuIcon
              sx={{ color: "white", marginRight: "0.5rem" }}
              onClick={() => setOpen(true)}
            />
          </IconButton>
        </Hidden>
      </Box>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <Box>
          <IconButton>
            <ChevronRightIcon onClick={() => setOpen(false)} />
          </IconButton>
        </Box>
        <Divider />
        <List className="hamburger">
          {navigationLinks.map((item) => (
            <ListItem>
              <Link
                href={item.href}
                sx={{
                  fontSize: "1.25rem",
                  color: "black",
                  marginRight: "3rem",
                  cursor: "pointer",
                  fontWeight: "lighter",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                <Typography fontWeight="0.1rem">{item.name}</Typography>
              </Link>
            </ListItem>
          ))}
          <Stack
            justifyContent={"center"}
            marginLeft="10%"
            gap="1rem"
            marginTop="0.5rem"
          >
            <InstagramIcon
              href="/about"
              sx={{
                width: "2.5rem",
                height: "2.5rem",
                background: "transparent",
                borderRadius: "50%",
                border: "2px solid grey",
                color: "pink",
                cursor: "pointer",
              }}
            />
            <LinkedInIcon
              sx={{
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "50%",
                border: "2px solid grey",
                color: "pink",
              }}
            />
            <DescriptionIcon
              sx={{
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "50%",
                border: "2px solid grey",
                color: "pink",
              }}
            />
            <GitHubIcon
              sx={{
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "50%",
                border: "2px solid grey",
                color: "pink",
              }}
            />
            <EmailIcon
              sx={{
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "50%",
                border: "2px solid grey",
                color: "pink",
              }}
            />
          </Stack>
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
};

export default Navbar;
