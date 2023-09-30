import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
         container : {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
         },
         text: {
            fontSize: 24,
            fontWeight: 'bold',
          },
          textInput : {
            fontSize: 20,
            borderWidth: 2,          
            borderColor: 'green',     
            borderRadius: 5,           
            paddingHorizontal: 10,    
            paddingVertical: 5,      
          }
});

export default styles;