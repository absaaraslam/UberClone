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
import {Picker} from '@react-native-picker/picker';
import {useEffect, useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AllIterativeLists from '../../Lists/AllIterativeLists';

const {width, height} = Dimensions.get('screen');

export default function WhereToScreen() {
  const nav = useNavigation();
  const [selectedTimeMode, setSelectedTimeMode] = useState('Now');
  const [pickUp, setPickUp] = useState('');
  const [destination, setDestination] = useState('');
  const [popularSearchView, setPopularSearchView] = useState(false);
  const [proceed, setProceed] = useState(false);
  useEffect(() => {
    if (pickUp !== '' || destination !== '') {
      setPopularSearchView(true);
    } else {
      setPopularSearchView(false);
    }
    if (pickUp !== '' && destination !== '') setProceed(true);
    else setProceed(false);
  }, [pickUp, destination]);

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

  const WhereTo = () => {
    return (
      <View style={styles.whereToView}>
        <View style={styles.whereToModal}>
          {!popularSearchView ? (
            <View style={styles.headerView}>
              <Text style={styles.headerText}>Where to?</Text>
              <View
                style={{
                  backgroundColor: AppStyles.appSubBackground,
                  flex: 2,
                  borderRadius: 30,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: 20,
                }}>
                <MaterialCommunityIcons
                  name="clock-time-three"
                  size={18}
                  color={'black'}
                  style={{marginLeft: 10}}
                />
                <Picker
                  dropdownIconColor={AppStyles.textColor}
                  style={{flex: 1.5}}
                  selectedValue={selectedTimeMode}
                  onValueChange={setSelectedTimeMode}
                  mode="dropdown">
                  <Picker.Item
                    label="Now"
                    value={'Now'}
                    style={styles.pickerItem}
                  />
                  <Picker.Item
                    label="Later"
                    value={'Later'}
                    style={styles.pickerItem}
                  />
                </Picker>
              </View>
            </View>
          ) : (
            <TouchableOpacity onPress={() => setPopularSearchView(false)}>
              <View style={[styles.headerView, {marginTop: 40}]}>
                <Ionicons name="chevron-back" size={25} color={'black'} />
                <Text
                  style={[
                    styles.headerText,
                    {fontSize: 20, fontWeight: 'normal'},
                  ]}>
                  Back
                </Text>
              </View>
            </TouchableOpacity>
          )}

          <View style={styles.textInputView}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 20,
              }}>
              <FontAwesome
                name="circle-o"
                size={8}
                color={'black'}
                style={{marginRight: 10}}
              />
              <TextInput
                style={{color: AppStyles.textColor}}
                placeholderTextColor={'grey'}
                placeholder="Add a Pick-up location"
                value={pickUp}
                onChangeText={setPickUp}
              />
            </View>
          </View>
          {!popularSearchView && (
            <MaterialCommunityIcons
              name="dots-vertical"
              size={30}
              color={'black'}
              style={{
                position: 'absolute',
                marginTop: 117,
                marginLeft: 9,
                zIndex: 5,
              }}
            />
          )}
          <View style={styles.textInputView}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 20,
                justifyContent: 'space-between',
              }}>
              <FontAwesome
                name="square-o"
                size={8}
                color={'black'}
                style={{marginRight: 10, flex: 0.1}}
              />
              <TextInput
                placeholderTextColor={'grey'}
                style={{flex: 3, color: AppStyles.textColor}}
                placeholder="Enter your destination"
                value={destination}
                onChangeText={setDestination}
              />
              {proceed && (
                <TouchableOpacity
                  onPress={() =>
                    nav.navigate('yourTrip', {
                      pickUp: pickUp,
                      destination: destination,
                    })
                  }
                  style={{flex: 0.3}}>
                  <Ionicons
                    name="arrow-forward-circle"
                    color={'black'}
                    size={20}
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>
          {popularSearchView && (
            //SearchScreen implemented here through logic
            <View>
              <View
                style={{
                  backgroundColor: AppStyles.appSubBackground,
                  width: width / 2.5,
                  alignSelf: 'flex-end',
                  // flex: 1.5,
                  borderRadius: 30,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                  marginHorizontal: 20,
                }}>
                <MaterialCommunityIcons
                  name="clock-time-three"
                  size={18}
                  color={'black'}
                  style={{marginLeft: 10}}
                />
                <Picker
                  dropdownIconColor={AppStyles.textColor}
                  style={{flex: 1.5}}
                  selectedValue={selectedTimeMode}
                  onValueChange={setSelectedTimeMode}
                  mode="dropdown">
                  <Picker.Item
                    label="Now"
                    value={'Now'}
                    style={styles.pickerItem}
                  />
                  <Picker.Item
                    label="Later"
                    value={'Later'}
                    style={styles.pickerItem}
                  />
                </Picker>
              </View>
              <View style={styles.searchCardsView}>
                <Text style={{color: AppStyles.subTextColor, fontSize: 12}}>
                  POPULAR LOCATIONS
                </Text>
                {AllIterativeLists.popularSearchList.map((item, index) => (
                  <TouchableOpacity style={styles.searchCards}>
                    <View>
                      <MaterialCommunityIcons
                        name="map-marker"
                        color={'black'}
                        size={20}
                        style={[
                          styles.icon,
                          {
                            marginRight: 20,
                          },
                        ]}
                      />
                    </View>
                    <View>
                      <Text style={[styles.defaultText, {fontWeight: '600'}]}>
                        {item.label}
                      </Text>
                      <Text style={[styles.defaultText, {fontSize: 14}]}>
                        {item.subLabel}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
                <TouchableOpacity
                  onPress={() => setPopularSearchView(false)}
                  style={[styles.searchCards, {justifyContent: 'center'}]}>
                  <Text style={[styles.defaultText, {fontWeight: '600'}]}>
                    Set Location on map
                  </Text>
                  <View>
                    <MaterialCommunityIcons
                      name="map-search"
                      color={'black'}
                      size={20}
                      style={[
                        styles.icon,
                        {
                          marginLeft: 10,
                        },
                      ]}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          )}
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
      {!popularSearchView ? MapView() : null}
      {WhereTo()}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.appBackground,
  },
  defaultText: {
    fontSize: 15,
    color: 'black',
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
  whereToView: {
    flex: 1,
  },
  whereToModal: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: AppStyles.appBackground,
    width: width / 1.1,
    alignSelf: 'center',
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    alignItems: 'center',
  },
  headerText: {
    flex: 2,
    fontSize: 25,
    fontWeight: '700',
    color: AppStyles.textColor,
    marginLeft: 10,
  },
  pickerItem: {
    color: 'black',
    fontSize: 11,
    backgroundColor: AppStyles.appSubBackground,
  },
  textInputView: {
    borderRadius: 15,
    alignSelf: 'center',
    width: width / 1.1,
    marginTop: 10,
    backgroundColor: AppStyles.appSubBackground,
  },
  searchCards: {
    width: width / 1.1,
    borderBottomWidth: 1,
    borderBottomColor: AppStyles.appSubBackground,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  searchCardsView: {
    marginTop: 20,
  },
  icon: {
    padding: 10,
    backgroundColor: AppStyles.appSubBackground,
    borderRadius: 30,
  },
});
