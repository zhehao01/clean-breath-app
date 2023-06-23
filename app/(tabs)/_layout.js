import { Image } from "react-native";
import { Tabs } from "expo-router";

import { icons } from "../../constants";
import { TabBarBtn } from "../../components";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <TabBarBtn
              focused={focused}
              iconUrl={icons.home}
              filled_iconUrl={icons.home_filled}
              dimension={25}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <TabBarBtn
              focused={focused}
              iconUrl={icons.location}
              filled_iconUrl={icons.location_filled}
              dimension={25}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
