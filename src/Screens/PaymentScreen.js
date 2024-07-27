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

const {width, height} = Dimensions.get('screen');

export default function PaymentScreen({route}) {
  const {pickUp, destination, rideDetails} = route.params;
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const nav = useNavigation();

  const Header = () => {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={() => nav.goBack()}>
          <View style={styles.headerView}>
            <Ionicons name="chevron-back" size={25} color={'black'} />
            <Text
              style={[styles.headerText, {fontSize: 20, fontWeight: 'normal'}]}>
              Back
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const ToFrom = () => {
    return (
      <View style={styles.toFromView}>
        <View style={{flexDirection: 'row'}}>
          <MaterialCommunityIcons
            name="map-marker"
            color={'red'}
            size={20}
            style={{
              marginRight: 30,
            }}
          />
          <View>
            <Text style={styles.subText}>Current Location</Text>
            <Text style={[styles.mainText, {marginTop: 5}]}>{pickUp}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <MaterialCommunityIcons
            name="map-marker"
            color={'black'}
            size={20}
            style={{
              marginRight: 30,
            }}
          />
          <View>
            <Text style={styles.subText}>Drop Location</Text>
            <Text style={[styles.mainText, {marginTop: 5}]}>{destination}</Text>
          </View>
        </View>
      </View>
    );
  };

  const RideStyle = () => {
    return (
      <View style={styles.rideStyle}>
        <Image
          source={rideDetails.img}
          style={{width: 50, height: 30}}
          resizeMode="contain"
        />
        <View style={{flex: 1, marginLeft: 10}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.listHeader}>{rideDetails.label}</Text>
          </View>
          <Text style={styles.listSubHeader}>{rideDetails.subLabel}</Text>
        </View>
        <View>
          <Text style={[styles.listHeader, {textAlign: 'center'}]}>
            {rideDetails.price}
          </Text>
          <Text style={[styles.listSubHeader, {textAlign: 'center'}]}>
            {rideDetails.time}
          </Text>
        </View>
      </View>
    );
  };

  const DetailInput = () => {
    return (
      <View style={styles.detailInput}>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TextInput
            placeholderTextColor={'grey'}
            placeholder="Date"
            style={[styles.textInputs, {flex: 1}]}
          />
          <TextInput
            placeholderTextColor={'grey'}
            placeholder="Time"
            style={[styles.textInputs, {flex: 1}]}
          />
        </View>
        <View style={{marginTop: 10}}>
          <TextInput
            placeholderTextColor={'grey'}
            placeholder="Enter Promo Code"
            style={styles.textInputs}
          />
        </View>
      </View>
    );
  };

  const SelectPayment = () => {
    return (
      <View style={styles.SelectPaymentView}>
        <Text style={[styles.mainText, {fontSize: 17, letterSpacing: 0.5}]}>
          Select Payment Method
        </Text>
        <View style={styles.paymentList}>
          <TouchableOpacity
            onPress={() => setSelectedPaymentMethod('visa')}
            style={
              selectedPaymentMethod == 'visa'
                ? styles.listCardSelect
                : styles.listCard
            }>
            <View style={styles.listCardView}>
              <Image
                source={require('../../assets/PaymentAssets/visa.png')}
                style={{width: 45, height: 35}}
                resizeMode="contain"
              />
              <View style={{marginLeft: 10}}>
                <Text style={styles.listHeader}>**** **** **** 8970</Text>
                <Text style={styles.listSubHeader}>Expires: 12/26</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedPaymentMethod('mastercard')}
            style={
              selectedPaymentMethod == 'mastercard'
                ? styles.listCardSelect
                : styles.listCard
            }>
            <View style={styles.listCardView}>
              <Image
                source={require('../../assets/PaymentAssets/mastercard.png')}
                style={{width: 45, height: 35}}
                resizeMode="contain"
              />
              <View style={{marginLeft: 10}}>
                <Text style={styles.listHeader}>**** **** **** 2050</Text>
                <Text style={styles.listSubHeader}>Expires: 11/25</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedPaymentMethod('wallet')}
            style={
              selectedPaymentMethod == 'wallet'
                ? styles.listCardSelect
                : styles.listCard
            }>
            <View style={styles.listCardView}>
              <Image
                source={require('../../assets/PaymentAssets/wallet.png')}
                style={{width: 45, height: 35}}
              />
              <View style={{marginLeft: 10}}>
                <Text style={styles.listHeader}>My Wallet</Text>
                <Text style={styles.listSubHeader}>$900</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedPaymentMethod('cash')}
            style={
              selectedPaymentMethod == 'cash'
                ? styles.listCardSelect
                : styles.listCard
            }>
            <View style={styles.listCardView}>
              <Image
                source={require('../../assets/PaymentAssets/cash.png')}
                style={{width: 45, height: 35}}
                resizeMode="contain"
              />
              <View style={{marginLeft: 10}}>
                <Text style={styles.listHeader}>Cash</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.confirmBtn}>
          <Text style={{fontSize: 15, color: 'white', textAlign: 'center'}}>
            Confirm Booking
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Image
        source={require('../../assets/DefaultAssets/NavBtn.png')}
        style={styles.navBtnImg}
      />
      {Header()}
      {ToFrom()}
      {RideStyle()}
      {DetailInput()}
      {SelectPayment()}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.appBackground,
  },
  header: {
    marginTop: 10,
  },
  navBtnImg: {
    position: 'absolute',
    width: 30,
    height: 30,
    alignSelf: 'flex-end',
    top: 35,
    zIndex: 10,
    right: 20,
  },
  headerView: {
    marginHorizontal: 10,
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
  toFromView: {
    margin: 20,
  },
  subText: {
    fontSize: 12,
    color: AppStyles.subTextColor,
  },
  mainText: {
    fontSize: 15,
    color: AppStyles.textColor,
  },
  rideStyle: {
    backgroundColor: AppStyles.appSubBackground,
    borderWidth: 1,
    borderColor: AppStyles.textColor,
    borderRadius: 10,
    marginHorizontal: 10,
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
  detailInput: {
    margin: 10,
  },
  textInputs: {
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: AppStyles.subTextColor,
    color: 'black',
  },
  SelectPaymentView: {
    margin: 10,
  },
  paymentList: {
    marginTop: 10,
  },
  listCard: {
    marginTop: 10,
    opacity: 0.3,
    backgroundColor: AppStyles.appSubBackground,
    borderWidth: 1,
    borderColor: AppStyles.textColor,
    borderRadius: 10,
  },
  listCardSelect: {
    marginTop: 10,
    backgroundColor: AppStyles.appSubBackground,
    borderWidth: 1,
    borderColor: AppStyles.textColor,
    borderRadius: 10,
  },
  listCardView: {
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  confirmBtn: {
    marginTop: 10,
    backgroundColor: '#263238',
    padding: 15,
    borderRadius: 15,
  },
});
