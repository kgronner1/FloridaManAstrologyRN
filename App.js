import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/Home";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>

    </NavigationContainer>
  );
}
