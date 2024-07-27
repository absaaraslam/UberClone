import {useNavigation} from '@react-navigation/native';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  TextInput,
} from 'react-native';
import AppStyles from '../../assets/AppStyles';
import {useEffect, useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AllIterativeLists from '../../Lists/AllIterativeLists';

const {width, height} = Dimensions.get('screen');

export default function YourTripScreen({route}) {
  //using routes since not alot of data to implement
  const {pickUp, destination} = route.params;
  const nav = useNavigation();
  const [pressIn, setPressIn] = useState(false);

  const MapView = () => {
    return (
      <View style={styles.mapView}>
        <Image
          source={require('../../assets/DefaultAssets/Map.png')}
          resizeMode="contain"
          style={{
            width: width,
            alignSelf: 'center',
            height: height / 1.33,
          }}
        />
      </View>
    );
  };
  const YourTripView = () => {
    return (
      <View style={styles.yourTripView}>
        <View style={styles.yourTripModal}>
          <View style={styles.headerView}>
            <View style={styles.viewNotch}></View>
            <Text style={styles.headerText}>Your Trip</Text>
          </View>
          <View style={styles.toFromView}>
            <View style={styles.toFromCard}>
              <View style={styles.toFromCardImg}>
                <Image
                  source={require('../../assets/DefaultAssets/logo.png')}
                  style={styles.imageStyle}
                />
              </View>
              <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 10, color: 'black'}}>Pickup</Text>
                <Text style={{fontSize: 12, color: 'black'}}>{pickUp}</Text>
              </View>
            </View>
            <View style={{borderBottomWidth: 1, borderColor: 'black'}}></View>
            <View style={styles.toFromCard}>
              <View style={styles.toFromCardImg}>
                <Image
                  source={require('../../assets/DefaultAssets/logo.png')}
                  style={styles.imageStyle}
                />
              </View>
              <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 10, color: 'black'}}>Destination</Text>
                <Text style={{fontSize: 12, color: 'black'}}>
                  {destination}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.rideSelection}>
            {AllIterativeLists.tripOptions.map((item, index) => (
              <TouchableOpacity
                onPress={() =>
                  nav.navigate('payment', {
                    pickUp: pickUp,
                    destination: destination,
                    rideDetails: item,
                  })
                }
                style={styles.rideStyle}>
                <Image
                  source={item.img}
                  style={{width: 50, height: 30}}
                  resizeMode="contain"
                />
                <View style={{flex: 1, marginLeft: 10}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.listHeader}>{item.label}</Text>
                    {item.capacity !== null && (
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons
                          name="person"
                          size={12}
                          color={'black'}
                          style={{marginLeft: 10}}
                        />
                        <Text style={[styles.listHeader, {marginLeft: 5}]}>
                          {item.capacity}
                        </Text>
                      </View>
                    )}
                  </View>
                  <Text style={styles.listSubHeader}>{item.subLabel}</Text>
                </View>
                <View>
                  <Text style={[styles.listHeader, {textAlign: 'center'}]}>
                    {item.price}
                  </Text>
                  <Text style={[styles.listSubHeader, {textAlign: 'center'}]}>
                    {item.time}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor="white"
      />
      <Image
        source={require('../../assets/DefaultAssets/NavBtn.png')}
        style={styles.navBtnImg}
      />
      {MapView()}
      {YourTripView()}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.appBackground,
  },
  navBtnImg: {
    position: 'absolute',
    width: 30,
    height: 30,
    alignSelf: 'flex-end',
    top: 40,
    zIndex: 10,
    right: 20,
  },
  mapView: {
    flex: 2,
  },
  yourTripView: {
    flex: 2.2,
  },
  yourTripModal: {
    padding: 5,
    borderRadius: 15,
    backgroundColor: AppStyles.appBackground,
    width: width / 1.1,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  headerView: {
    marginTop: 5,
  },
  headerText: {
    letterSpacing: 0.5,
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 20,
    fontWeight: '700',
    color: AppStyles.textColor,
    marginLeft: 10,
  },
  viewNotch: {
    borderRadius: 30,
    alignSelf: 'center',
    width: width / 3,
    borderBottomWidth: 5,
    borderBottomColor: AppStyles.textColor,
  },
  toFromView: {
    marginTop: 10,
  },
  toFromCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  imageStyle: {
    width: 20,
    height: 20,
  },
  toFromCardImg: {
    padding: 6,
    backgroundColor: AppStyles.textColor,
    borderRadius: 10,
  },
  rideSelection: {
    marginTop: 15,
    marginHorizontal: 10,
  },
  rideStyle: {
    padding: 10,
    borderBottomColor: AppStyles.appSubBackground,
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  rideStylePick: {
    backgroundColor: AppStyles.appSubBackground,
    borderWidth: 2,
    borderColor: AppStyles.textColor,
    padding: 10,
    borderBottomColor: AppStyles.appSubBackground,
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  listHeader: {
    fontSize: 13,
    color: 'black',
  },
  listSubHeader: {
    fontSize: 10,
    color: AppStyles.subTextColor,
  },
});
