import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Button } from 'react-native-paper';
import { DatePickerModal } from 'react-native-paper-dates';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons'; 
import { format } from 'date-fns';
import { FlipInEasyX } from "react-native-reanimated";

export default function CalendarPicker() {
  const [date, setDate] = React.useState(undefined);
  const [formattedDate, setFormattedDate] = React.useState("Select a date.");
  const [open, setOpen] = React.useState(false);

  const onDismissSingle = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = React.useCallback(
    (params) => {
      setOpen(false);
      
      const formattedDate = format(params.date, "MMMM d, yyyy");
      setFormattedDate(formattedDate);

      console.log("get that date", params.date, formattedDate);

      setDate(params.date);
    },
    [setOpen, setDate]
  );

  return (
    <SafeAreaProvider>
      <View className="sm:leading-6 block w-full rounded-md px-3.5 py-2">
        <TouchableOpacity onPress={() => setOpen(true)} className="flex flex-row justify-center items-center">
            <View style={calendarButtonStyles.calBut} className="flex flex-row justify-center items-center">
              <Ionicons name="md-calendar-sharp" size={20} color="#ffffff" />
            </View>
            <Text className="block w-full rounded-md px-3.5 py-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                    {
                    typeof date === "undefined" ?
                    "Select a date." : new String(formattedDate)
                    }
            </Text>            
        </TouchableOpacity>
        <DatePickerModal
          locale="en"
          mode="single"
          visible={open}
          onDismiss={onDismissSingle}
          date={date}
          onConfirm={onConfirmSingle}
        />
      </View>
    </SafeAreaProvider>
  );
}

const calendarButtonStyles=StyleSheet.create({
    calBut:{
        elevation:2,
        height:35,
        width:35,
        backgroundColor:'#333333',
        position:'relative',
        borderRadius:999,
        overflow:'hidden',
    }    
})