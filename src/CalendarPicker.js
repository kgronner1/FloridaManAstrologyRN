import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Button } from 'react-native-paper';
import { DatePickerModal } from 'react-native-paper-dates';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons'; 

export default function CalendarPicker() {
  const [date, setDate] = React.useState(undefined);
  const [open, setOpen] = React.useState(false);

  const onDismissSingle = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = React.useCallback(
    (params) => {
      setOpen(false);
      setDate(params.date);
    },
    [setOpen, setDate]
  );

  return (
    <SafeAreaProvider>
      <View className="">
        <TouchableOpacity onPress={() => setOpen(true)} style={calendarButtonStyles.calBut} className="flex justify-center items-center">
            <Ionicons name="md-calendar-sharp" size={35} color="#ffffff" />
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
        height:50,
        width:50,
        backgroundColor:'#333333',
        position:'relative',
        borderRadius:999,
        overflow:'hidden',
    }    
})