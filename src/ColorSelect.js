import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ColorPicker from 'react-native-wheel-color-picker'

export default function ColorSelect({color}) {

  const [color, setColor] = React.useState(color);
  const [open, setOpen] = React.useState(false);

  const onConfirmSingle = React.useCallback(
    (params) => {
      setOpen(false);
    
      setColor(params);
    },
    [setOpen, setColor]
  );

  return (
    <SafeAreaProvider>
        <TouchableOpacity onPress={() => setOpen(true)} className="flex flex-row justify-center items-center">
          <View style={[playerColorPicker.but, color]}>                            
          </View>                     
        </TouchableOpacity>
        
    </SafeAreaProvider>
  );
}


const playerColorPicker=StyleSheet.create({
  but:{
      elevation:2,
      height:35,
      width:35,
      position:'relative',
      borderRadius:999,
      overflow:'hidden',
  }    
})