import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useTheme } from './ThemeContext'; 

const Home = ({ navigation }) => {
  const { isDarkMode } = useTheme(); 

  const profileImage = require('./assets/profile.png');
  const searchBar = require('./assets/search.png');
  const cardImage = require('./assets/Card.png');
  const sentImage = require('./assets/send.png');
  const recieveImage = require('./assets/recieve.png');
  const loanImage = require('./assets/loan.png');
  const topUpImage = require('./assets/topUp.png');
  const appleImage = require('./assets/apple.png');
  const spotifyImage = require('./assets/spotify.png');
  const moneyTransfer = require('./assets/moneyTransfer.png');
  const groceryImage = require('./assets/grocery.png');
  const homeImage = require ('./assets/home.png');
  const myCardsImage = require ('./assets/myCards.png');
  const statisticsImage = require('./assets/statictics.png');
  const settingsImage = require('./assets/settings.png');

  const themeStyles = {
    container: {
      backgroundColor: isDarkMode ? '#1E1E1E' : '#FFFFFF',
    },
    text: {
      color: isDarkMode ? '#FFFFFF' : '#000000',
    },
    subText: {
      color: isDarkMode ? '#DCDCDC' : '#555555',
    },

    searchBar:{
      color: isDarkMode ? '#2E2E2E' : '#DCDCDC',
    },

    searchBarContainer: {
      backgroundColor: isDarkMode ? '#2E2E2E' : '#DCDCDC',
    },
    transactionDetailImageContainer: {
      backgroundColor: isDarkMode ? '#2E2E2E' : '#DCDCDC',
    },

    iconContainer: {
      backgroundColor: isDarkMode ? '#2E2E2E' : '#DCDCDC',
    },

    iconTint: {
      tintColor: isDarkMode ? '#FFFFFF' : null,
    },
  };

  return (
    <ScrollView contentContainerStyle={[styles.scrollContainer, themeStyles.container]}>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <View style={styles.profileImageContainer}>
            <Image source={profileImage} style={styles.profileImage} />
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.welcome, themeStyles.subText]}>Welcome Back</Text>
            <Text style={[styles.userName, themeStyles.text]}>Eric Atsu</Text>
          </View>
          <View style={[styles.searchBarContainer, themeStyles.searchBarContainer]}>
            <Image source={searchBar} style={[styles.searchBar, themeStyles.iconTint]} />
          </View>
        </View>

        <View style={styles.cardImageContainer}>
          <Image source={cardImage} style={styles.cardImage}/>
        </View>

        <View style={styles.transactionIconsContainer}>
          <View style={styles.iconGroup}>
            <View style={[styles.iconContainer, themeStyles.iconContainer]}>
              <Image source={sentImage} style={[styles.iconImage, themeStyles.iconTint]}/>
            </View>
            <Text style={[styles.iconLabel, themeStyles.text]}>Sent</Text>
          </View>

          <View style={styles.iconGroup}>
            <View style={[styles.iconContainer, themeStyles.iconContainer]}>
              <Image source={recieveImage} style={[styles.iconImage, themeStyles.iconTint]}/>
            </View>
            <Text style={[styles.iconLabel, themeStyles.text]}>Receive</Text>
          </View>

          <View style={styles.iconGroup}>
            <View style={[styles.iconContainer, themeStyles.iconContainer]}>
              <Image source={loanImage} style={[styles.iconImage, themeStyles.iconTint]}/>
            </View>
            <Text style={[styles.iconLabel, themeStyles.text]}>Loan</Text>
          </View>

          <View style={styles.iconGroup}>
            <View style={[styles.iconContainer, themeStyles.iconContainer]}>
              <Image source={topUpImage} style={[styles.iconImage, themeStyles.iconTint]}/>
            </View>
            <Text style={[styles.iconLabel, themeStyles.text]}>Top Up</Text>
          </View>
        </View>

        <View style={styles.transactionsContainer}>
          <Text style={[styles.transaction, themeStyles.text]}>Transaction</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>

        <View style={styles.transactionDetailsContainer}>
          <View style={styles.transactionDetail}>
            <View style={[styles.transactionDetailImageContainer, themeStyles.transactionDetailImageContainer]}>
              <Image source={appleImage} style={[styles.transactionDetailImage,themeStyles.iconTint]} />
            </View>
            <View style={styles.transactionDetailTextContainer}>
              <Text style={[styles.transactionDetailText, themeStyles.text]}>Apple Store</Text>
              <Text style={[styles.transactionDetailDescription, themeStyles.subText]}>Entertainment</Text>
            </View>
            <Text style={[styles.price, themeStyles.text]}>-$5.99</Text>
          </View>

          <View style={styles.transactionDetail}>
            <View style={[styles.transactionDetailImageContainer, themeStyles.transactionDetailImageContainer]}>
              <Image source={spotifyImage} style={styles.transactionDetailImage} />
            </View>
            <View style={styles.transactionDetailTextContainer}>
              <Text style={[styles.transactionDetailText, themeStyles.text]}>Spotify</Text>
              <Text style={[styles.transactionDetailDescription, themeStyles.subText]}>Music</Text>
            </View>
            <Text style={[styles.price, themeStyles.text]}>-$12.99</Text>
          </View>

          <View style={styles.transactionDetail}>
            <View style={[styles.transactionDetailImageContainer, themeStyles.transactionDetailImageContainer]}>
              <Image source={moneyTransfer} style={[styles.transactionDetailImage,themeStyles.iconTint]} />
            </View>
            <View style={styles.transactionDetailTextContainer}>
              <Text style={[styles.transactionDetailText, themeStyles.text]}>Money Transfer</Text>
              <Text style={[styles.transactionDetailDescription, themeStyles.subText]}>Transaction</Text>
            </View>
            <Text style={[styles.price, styles.moneyTransferPrice]}>$300</Text>
          </View>

          <View style={styles.transactionDetail}>
            <View style={[styles.transactionDetailImageContainer, themeStyles.transactionDetailImageContainer]}>
              <Image source={groceryImage} style={styles.transactionDetailImage} />
            </View>
            <View style={styles.transactionDetailTextContainer}>
              <Text style={[styles.transactionDetailText, themeStyles.text]}>Grocery</Text>
              <Text style={[styles.transactionDetailDescription, themeStyles.subText]}>Foodstuffs</Text>
            </View>
            <Text style={[styles.price, themeStyles.text]}>-$88</Text>
          </View>
        </View>

        <View style={[styles.footerIconsContainer, themeStyles.placeholder, {backgroundColor: isDarkMode ? '#2E2E2E' : null}]}>
          <View style={styles.footerGroup}>
            <View style={styles.footerContainer}>
              <Image source={homeImage} style={styles.footerIcon}/>
            </View>
            <Text style={styles.footerLabel}>Home</Text>
          </View>

          <View style={styles.footerGroup}>
            <View style={styles.footerContainer}>
              <Image source={myCardsImage} style={styles.footerIcon}/>
            </View>
            <Text style={styles.footerLabel}>My Cards</Text>
          </View>

          <View style={styles.footerGroup}>
            <View style={styles.footerContainer}>
              <Image source={statisticsImage} style={styles.footerIcon}/>
            </View>
            <Text style={styles.footerLabel}>Statistics</Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <View style={styles.footerGroup}>
              <View style={styles.footerContainer}>
                <Image source={settingsImage} style={styles.footerIcon}/>
              </View>
              <Text style={styles.footerLabel}>Settings</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 17,
  },
  profileImageContainer: {
    paddingLeft: 0,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    flexDirection: 'column',
    marginRight: 130,
    marginLeft: 16,
  },
  welcome: {
    color: '#DCDCDC',
    fontSize: 14,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  searchBarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#DCDCDC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar: {
    width: 30,
    height: 30,
    color: 'black',
  },
  cardImageContainer: {
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  transactionIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  iconGroup: {
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 34,
    backgroundColor: '#DCDCDC',
    justifyContent: 'center',
  },
  iconImage: {
    width: 20,
    height: 20,
  },
  iconLabel: {
    marginTop: 5,
    textAlign: 'center',
  },
  transactionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 15,
  },
  transaction: {
    fontWeight: 'bold',
  },
  seeAll: {
    color: 'blue',
  },
  transactionDetailsContainer: {
    paddingHorizontal: 20,
    marginTop: 15,
  },
  transactionDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  transactionDetailImageContainer: {
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 34,
    justifyContent: 'center',
  },
  transactionDetailImage: {
    width: 20,
    height: 20,
    
  },
  transactionDetailTextContainer: {
    marginLeft: 15,
  },
  transactionDetailText: {
    fontWeight: 'bold',
  },
  transactionDetailDescription: {
    color: '#DCDCDC',
  },
  price: {
    marginLeft: 'auto',
    fontWeight: 'bold',
  },
  footerIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    paddingTop: 20,
    paddingBottom: 40,
    paddingLeft: 20,
    paddingHorizontal: 15,
  },
  footerGroup: {
    alignItems: 'center',
    color: '#FFFFFF',
  },
  footerIcon: {
    width: 40,
    height: 40,
  },
  footerLabel: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 5,
    fontSize: 20,
    color: '#DCDCDC',
  },
  moneyTransferPrice: {
    color: 'blue',
  },
});

export default Home;