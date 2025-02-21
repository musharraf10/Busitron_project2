import * as React from "react";
import Box from "@mui/joy/Box";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import Breadcrumbs from "@mui/joy/Breadcrumbs"; 
import Link from "@mui/joy/Link";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Tabs from "@mui/joy/Tabs";
import Tab from "@mui/joy/Tab";
import TabList from "@mui/joy/TabList";
import tabClasses from "@mui/joy/Tab/tabClasses";
import Profile from "./Settings/Profile";
import Plan from "./Settings/Plan";
import ChangePassword from "./Settings/ChangePassword";
import Billing from "./Settings/Billing";
import BecomeCreator from "./Settings/BecomeCreator";

export default function Settings({ props, setSelectedComponent }) {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <Box sx={{ flex: 1, width: "100%" }}>
      {/* Breadcrumbs and Tabs section */}
      <Box sx={{ px: { xs: 2, md: 6 } }}>
        <Breadcrumbs
          size="sm"
          aria-label="breadcrumbs"
          separator={<ChevronRightRoundedIcon fontSize="sm" />}
          sx={{ pl: 0 }}
        >
          <Link
            underline="none"
            color="neutral"
            href="/"
            aria-label="Home"
            onClick={() => setSelectedComponent("dashboard")}
          >
            <HomeRoundedIcon />
          </Link>
          <Typography color="primary" sx={{ fontWeight: 500, fontSize: 12 }}>
            Settings
          </Typography>
        </Breadcrumbs>
        <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2 }}>
          {props.name} profile
        </Typography>
      </Box>
      <Tabs defaultValue={0} 
      sx={{ bgcolor: "transparent" }}
      value={activeTab}
      onChange={(e, v) => setActiveTab(v)}>
        <TabList
          tabFlex={1}
          size="sm"
          sx={{
            pl: { xs: 0, md: 4 },
            justifyContent: "left",
            [`&& .${tabClasses.root}`]: {
              fontWeight: "600",
              flex: "initial",
              color: "text.tertiary",
              [`&.${tabClasses.selected}`]: {
                bgcolor: "transparent",
                color: "text.primary",
                "&::after": {
                  height: "2px",
                  bgcolor: "primary.500",
                },
              },
            },
          }}
        >
          <Tab sx={{ borderRadius: "6px 6px 0 0" }} indicatorInset value={0}>
            Settings
          </Tab>
          <Tab sx={{ borderRadius: "6px 6px 0 0" }} indicatorInset value={1}>
            Plan
          </Tab>
          <Tab sx={{ borderRadius: "6px 6px 0 0" }} indicatorInset value={2}>
            Billing
          </Tab>
          <Tab sx={{ borderRadius: "6px 6px 0 0" }} indicatorInset value={3}>
              Privacy & Security
          </Tab>
          <Tab sx={{ borderRadius: "6px 6px 0 0" }} indicatorInset value={4}>
              Become a Creator
          </Tab>
        </TabList>
      </Tabs>
      
      <Stack
        spacing={4}
        sx={{
          display: "flex",
          maxWidth: "800px",
          mx: "auto",
          px: { xs: 2, md: 6 },
          py: { xs: 2, md: 3 },
        }}
      >
      {activeTab === 0 && (
        <Profile/>
      )}

      {activeTab === 1 && (
        <Plan/>
      )}
      
      {activeTab === 2 && (
        <Billing/>
      )}

      {activeTab === 3 && (
          <ChangePassword/>
        )}

      {activeTab === 4 &&(
        <BecomeCreator/>
      )}
      

      </Stack>
    </Box>
  );

}
