import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import PaymentScreen from '../Screens/PaymentScreen';
import WhereToScreen from '../Screens/WhereToScreen';
import YourTripScreen from '../Screens/YourTripScreen';

const Stack = createNativeStackNavigator();

export default MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="userHome">
        <Stack.Screen name="userHome" component={HomeScreen} />
        <Stack.Screen name="whereTo" component={WhereToScreen} />
        <Stack.Screen name="yourTrip" component={YourTripScreen} />
        <Stack.Screen name="payment" component={PaymentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
