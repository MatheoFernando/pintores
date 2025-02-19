import { Slot } from "expo-router";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen"
import { useFonts ,
   Roboto_400Regular , 
   Roboto_500Medium ,  
   Roboto_700Bold
  } from "@expo-google-fonts/roboto";
SplashScreen.preventAutoHideAsync()
export default function HomeLayout() {
 const [fontLoaders] = useFonts({
    Roboto_400Regular , 
   Roboto_500Medium ,  
   Roboto_700Bold
  })
  if(fontLoaders){
    SplashScreen.hideAsync()
}

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
 {  fontLoaders &&  <Slot />}
    </GestureHandlerRootView>
  );
}
