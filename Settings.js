import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated } from 'react-native';
import { useTheme } from './ThemeContext';

const Settings = ({ navigation }) => {
    const { isDarkMode, toggleTheme } = useTheme();

    // State and animation setup for switch control
    const [switchOn, setSwitchOn] = useState(isDarkMode);
    const switchTranslateX = useRef(new Animated.Value(isDarkMode ? 20 : 0)).current;

    // Function to toggle switch
    const toggleSwitch = () => {
        const newValue = !switchOn;
        setSwitchOn(newValue);
        Animated.timing(switchTranslateX, {
            toValue: newValue ? 20 : 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
        toggleTheme(); // Toggle theme when switch is toggled
    };

    return (
        <View style={[styles.container, { backgroundColor: isDarkMode ? '#1E1E1E' : '#FFFFFF' }]}>

        
                 <Text style={[styles.text, { color: isDarkMode ? 'white' : 'black' }]}>Settings</Text>
            
            <View style={styles.settingsTextItems}>
                {['Language', 'My Profile', 'Contact Us', 'Change Password', 'Privacy Policy'].map((item, index) => (
                    <View key={index} style={styles.settingsTextContainer}>
                        <Text style={[styles.settingsText, { color: isDarkMode ? '#FFFFFF' : 'black' }]}>{item}</Text>
                        <Image source={require('./assets/next.png')} style={styles.nextImage} />
                        <View style={[styles.divider, {borderBottomColor : isDarkMode ? '#2E2E2E' : '#DCDCDC'}]} />
                    </View>
                ))}
                <View style={styles.themeContainer}>
                    <Text style={[styles.settingsText, styles.themeText, { color: isDarkMode ? '#FFFFFF' : 'black' }]}>Theme</Text>
                    <TouchableOpacity onPress={toggleSwitch} style={styles.switchContainer}>
                        <View style={[styles.switchTrack, switchOn ? styles.switchTrackOn : null]}>
                            <Animated.View style={[styles.switchButton, { transform: [{ translateX: switchTranslateX }] }]} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={[styles.footerIconsContainer, {backgroundColor: isDarkMode ? '#2E2E2E' : null}]}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <View style={styles.footerGroup}>
                        <View style={styles.footerContainer}>
                            <Image source={require('./assets/home.png')} style={styles.footerIcon} />
                        </View>
                        <Text style={[styles.footerLabel,  {color: isDarkMode ? '#3E3E3E' : '#DCDCDC'}]}>Home</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.footerGroup}>
                    <View style={styles.footerContainer}>
                        <Image source={require('./assets/myCards.png')} style={styles.footerIcon} />
                    </View>
                    <Text style={[styles.footerLabel,  {color: isDarkMode ? '#3E3E3E' : '#DCDCDC'}]}>My Cards</Text>
                </View>

                <View style={styles.footerGroup}>
                    <View style={styles.footerContainer}>
                        <Image source={require('./assets/statictics.png')} style={styles.footerIcon} />
                    </View>
                    <Text style={[styles.footerLabel,  {color: isDarkMode ? '#3E3E3E' : '#DCDCDC'}]}>Statistics</Text>
                </View>

                <View style={styles.footerGroup}>
                    <View style={styles.footerContainer}>
                        <Image source={require('./assets/settings.png')} style={styles.footerIcon} />
                    </View>
                    <Text style={[styles.footerLabel,  {color: isDarkMode ? '#3E3E3E' : '#DCDCDC'}]}>Settings</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'black', // Default text color for light mode
    },
    settingsTextItems: {
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    settingsTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    settingsText: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    nextImage: {
        width: 20,
        height: 20,
    },
    divider: {
        borderBottomWidth: 2,
        borderBottomColor: '#DCDCDC',
        marginTop: 10,
        width: '100%',
        position: 'absolute',
        bottom: -10,
    },
    themeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 20,
        marginBottom: 80,
    },
    themeText: {
        marginLeft: -20,
        fontSize: 20,
    },
    switchContainer: {
        flex: 1,
        alignItems: 'flex-end',
        paddingLeft: 50,
    },
    switchTrack: {
        width: 50,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#DCDCDC',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 5,
    },
    switchTrackOn: {
        backgroundColor: 'green',
    },
    switchButton: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        position: 'absolute',
        left: 5,
    },
    footerIconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30,
        paddingTop: 20,
        paddingBottom: 50,
        paddingHorizontal: 10,  
        
    },
    footerGroup: {
        alignItems: 'center',
        marginRight: 20,
    },
    footerIcon: {
        width: 40,
        height: 40,
    },
    footerLabel: {
        textAlign: 'center',
        marginTop: 5,
        fontSize: 25, 
        color: '#DCDCDC', 
    },
});

export default Settings;