import HomeScreen from '../components/screen/HomeScreen';
import SearchingScreen from '../components/screen/SearchingScreen';
import FavoriteScreen from '../components/screen/FavoriteScreen';
import SettingsScreen from '../components/screen/SettingsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native';



const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
         {/* <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator> */}

      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
                iconName = focused
                  ? Platform.select({
                      //ios: 'ios-information-circle',
                      //android: 'md-information-circle',
                      ios: 'accessibility-sharp',
                      android:'aperture-sharp',
                    })
                  : Platform.select({
                      //ios: 'ios-information-circle-outline',
                      //android: 'md-information-circle-outline',
                      ios: 'accessibility-sharp',
                      android:'aperture-sharp',
                    });
              } else if (route.name === 'Settings') {
                iconName = focused
                  ? Platform.select({
                      ios: 'ios-list',
                      android: 'md-list',
                    })
                  : Platform.select({
                      ios: 'ios-list',
                      android: 'md-list',
                    });
              }
            // if (route.name === 'Home') {
            //   iconName = focused

            //     ? 'ios-information-circle'
            //     : 'ios-information-circle-outline';
            // } else if (route.name === 'Settings') {
            //   iconName = focused ? 'ios-list' : 'ios-list';
            // }

            // Add a fallback value in case the iconName is undefined
            iconName = iconName || 'add'; // Replace empty string with a suitable fallback icon name
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        })}
        // tabBarOptions={{
        //   activeTintColor: 'tomato',
        //   inactiveTintColor: 'gray',
        // }}
        >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Searching" component={SearchingScreen} />
        <Tab.Screen name="Favorite" component={FavoriteScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;