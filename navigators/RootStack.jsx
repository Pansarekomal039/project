import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Colors } from "../components/style";
const { primary, tertiary } = Colors;

import splash from "../app/splash";
import Login from "../app/login";  
import Signup from "../app/signup";
import Welcome from "../app/Welcome";
import O_Login from "../app/O_Login"; 
import O_signup from "../app/O_signup";  
import RestProfile from "../app/RestProfile";
import RestList from "../app/RestList";
import DrawerNav from "../app/Location";
import Reserve from "../app/Reservation";
// import AboutScreen from "../app/About";
import RestD from "../app/RestaurentDetails";
// import ContactUsScreen from "../app/Contact";
const Stack = createStackNavigator();
 
const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="splash"
      screenOptions={{
        headerStyle: { backgroundColor: "transparent" },
        headerTintColor: tertiary,
        headerTransparent: true,
        headerTitle: "",
        headerLeftContainerStyle: { paddingLeft: 20 },
      }}
    >
      <Stack.Screen name="splash" component={splash} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }}/>
      <Stack.Screen name="Welcome" component={Welcome} options={{ headerTintColor: primary }} />
      <Stack.Screen name="DrawerNav" component={DrawerNav} options={{ headerShown: false }} />
      <Stack.Screen name="O_Login" component={O_Login} options={{ headerShown: false }} />
      <Stack.Screen name="O_signup" component={O_signup} options={{ headerShown: false }} />
      <Stack.Screen name="RestProfile" component={RestProfile} options={{ headerShown: false }} />
      <Stack.Screen name="RestList" component={RestList} />
      <Stack.Screen name="Reserve" component={Reserve} options={{ headerShown: true }}/>
      {/* <Stack.Screen name="AboutScreen" component={AboutScreen} /> */}
      <Stack.Screen name="RestD" component={RestD} options={{ headerShown: false }}/>
      {/* <Stack.Screen name="ContactUsScreen" component={ContactUsScreen} options={{ headerShown: false }}/> */}
    </Stack.Navigator>
  );
};

export default RootStack;
