import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import * as Contacts from 'expo-contacts';


export default function ContactsComponent () {
    
    const [contacts, setContacts ] = useState([]);

    const [hasPermission, setHasPermission] = useState(null);


    useEffect(() => {
        (async () => {
            
            const { status } = await Contacts.requestPermissionsAsync();
            
            setHasPermission(status === 'granted');

            if (status === 'granted'){

                const { data } = await Contacts.getContactsAsync({

                    fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Emails],
                });

                setContacts(data || []);

            }
        })();

    }, []);

if (hasPermission === null) {

    return <View />;
}

if (hasPermission === false) {

    return <Text>No acess to contacts</Text>;
}

return (
    <View style={styles.container}>

        <FlatList data={contacts} keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

            <View style={styles.row}>
                
                <Text style={styles.name}>{item.firstName || item.name || "Sem nome"}</Text>


                {item.phoneNumbers && item.phoneNumbers.map((phone, index ) => (

                    <Text key={index} style={styles.number}>{phone.number}</Text>
                ))}

            </View>
        )}
        />
    </View>
);

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  row: {
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  number: {
    fontSize: 14,
    color: '#666',
  },
});