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
              dimension="60%"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? icons.location_filled : icons.location}
              resizeMode="cover"
              style={{
                marginTop: 20,
                width: 25,
                height: 25,
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
