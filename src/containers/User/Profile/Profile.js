import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { ContactInfo } from "../../../components/ContactInfo/ContactInfo";
import UpdatePassword from "../../../components/UpdatePassword/UpdatePassword";
import "./Profile.scss";
import Container from "@material-ui/core/Container";
import DeactivateAccount from "../../../components/DeactivateAccount/DeactivateAccount";
import { TabPanel } from "../../../components/TabPanal/TabPanel";
import { MyOffers } from "../../../components/Myoffers/MyOffers";
import Footer from "../../Footer/Footer";

function additionalProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const user = {
	name: "Abdullah",
	email: "abdullah@email.com",
	phone: "0123456789",
	address: "Aleandria, Egypt",
	gender: "male",
	profileImg: "/profiles/profile4.jpg",
	dob: "1994-7-10"
};

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
		<Container component="main">
    <div className="container">
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        className="tabs"
      >
        <Tab label="Contact Info" {...additionalProps(0)} />
        <Tab label="My offers" {...additionalProps(1)} />
        <Tab label="Change Password" {...additionalProps(2)} />
        <Tab label="Deactivate Account" {...additionalProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ContactInfo user={user}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MyOffers />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <UpdatePassword />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <DeactivateAccount />
      </TabPanel>
    </div>
		{/* <Box mt={8}> */}
      <Footer/>
		{/* </Box> */}
		</Container>
  );
}
