import { useState, useEffect, useRef } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { TextInputMask } from 'react-native-masked-text';
import { format } from 'date-fns';

export default function DatePickCustom(props) {
    const [dateFormatted, onChangeDate] = useState('');

    const [digitsDay, onChangeDigitsDay] = useState('');
    const [digitsMonth, onChangeDigitsMonth] = useState('');
    const [digitsYear, onChangeDigitsYear] = useState('');

    // reference to inputs
    const inputDay = useRef(null);
    const inputMonth = useRef(null);
    const inputYear = useRef(null);

    const filledDay = () => {
      if (digitsDay.length > 1) {
        return true;
      }
      return false;
    }

    const filledMonth = () => {
      if (digitsMonth.length > 1) {
        return true;
      }
      return false;
    }

    const filledYear = () => {
      if (digitsYear.length > 3) {
        return true;
      }
      return false;
    }

    const filledOutDateCheck = (where) => {

      // if all three are filled out
      // format the date and send it up to playerselect then home
      const filledD = filledDay();
      const filledM = filledMonth();
      const filledY = filledYear();

      // otherwise send them to an empty one
      if (filledD && filledM && filledY) {
        console.log("do stuff");
        const quickDate = digitsDay + "/" + digitsMonth + "/" + digitsYear;
        console.log(quickDate);
      }
      else if (where == 0 && filledD) {
        inputMonth.current.getElement().focus();
      }
      else if (where == 1 && filledM) {
        inputYear.current.getElement().focus();
      }     

      if (where != 0 && digitsDay.length == 1) {
        onChangeDigitsDay("0"+digitsDay);
        return;
      }
      if (where != 1 && digitsMonth.length == 1) {
        onChangeDigitsMonth("0"+digitsMonth);
        return;
      }
      
    }

    const handleBlurD = () => {
      if (digitsDay.length == 1) {
        onChangeDigitsDay("0"+digitsDay);
      }
    };

    const handleBlurM = () => {
      if (digitsMonth.length == 1) {
        onChangeDigitsMonth("0"+digitsMonth);
      }
    };

    useEffect(() => {
      filledOutDateCheck(0);
    }, [digitsDay]); // Run the effect whenever digitsDay changes

    useEffect(() => {
      filledOutDateCheck(1);
    }, [digitsMonth]); // Run the effect whenever digitsMonth changes

    useEffect(() => {
      filledOutDateCheck(2);
    }, [digitsYear]); // Run the effect whenever digitsYear changes


    return (


          
        <View className="flex flex-row w-full gap-2.5 pt-3">
                    {/* <View style={calendarButtonStyles.calBut} className="flex flex-row justify-center items-center">
              <Ionicons name="md-calendar-sharp" size={20} color="#ffffff" />                        
          </View> */}
          {/* <CalendarPicker onDateChange={handleDateChange}/>     */}
            <Text className="block rounded-md pt-3 text-white sm:text-sm">Birthday: </Text>
            <TextInputMask
            ref={inputDay}
            onBlur={handleBlurD}
            className="block w-full bg-white rounded-md border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChangeText={onChangeDigitsDay}
            type={'only-numbers'}
            maxLength={2}
            placeholder="DD"
            keyboardType="numeric"
            value={digitsDay}
            />
            <TextInputMask
            ref={inputMonth}
            onBlur={handleBlurM}
            className="block w-full bg-white rounded-md border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChangeText={onChangeDigitsMonth}
            type={'only-numbers'}
            placeholder="MM"
            maxLength={2}
            keyboardType="numeric"
            value={digitsMonth}
            />
            <TextInputMask
            ref={inputYear}
            className="block w-full bg-white rounded-md border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChangeText={onChangeDigitsYear}
            type={'only-numbers'}
            maxLength={4}
            placeholder="YYYY"
            keyboardType="numeric"
            value={digitsYear}
            />  
          </View> 
    );
};