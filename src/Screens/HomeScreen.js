import {useNavigation} from '@react-navigation/native';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import AppStyles from '../../assets/AppStyles';
import AllIterativeLists from '../../Lists/AllIterativeLists';

const {width, height} = Dimensions.get('screen');

export default function HomeScreen() {
  const nav = useNavigation();
  
  const Greetings = () => {
    return (
      <View style={styles.greetingsHeader}>
        <View style={{marginLeft: 20}}>
          <Text style={styles.defaultText}>Tuesday, July 23 2024</Text>
          <Text style={styles.helloText}>Hello! Absaar</Text>
          <Text style={styles.greetText}>Have a nice day</Text>
        </View>
      </View>
    );
  };

  const OptionList = () => {
    return (
      <View style={styles.optionList}>
        {AllIterativeLists.homeOptions.map((item, index) => (
          <TouchableOpacity
            onPress={() => nav.navigate('whereTo')}
            key={index}
            activeOpacity={0.7}
            style={styles.listBtns}>
            <View style={styles.btnView}>
              <Image
                source={item.img}
                style={{width: 80, height: 50}}
                resizeMode="contain"
              />
              <Text style={[styles.defaultText, {textAlign: 'center'}]}>
                {item.label}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const DiscountView = () => {
    return (
      <View style={styles.discountView}>
        <View style={styles.discountCard}>
          <View style={{padding: 10, flex: 1, alignSelf: 'center'}}>
            <Text
              style={[
                styles.defaultText,
                {color: 'white', textAlign: 'center', letterSpacing: 0.2},
              ]}>
              Get special discount
            </Text>
            <Text
              style={[
                styles.helloText,
                {color: 'white', textAlign: 'center', letterSpacing: 2},
              ]}>
              Upto 60%
            </Text>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                borderRadius: 5,
                backgroundColor: 'white',
                padding: 10,
                marginTop: 15,
                width: width / 3,
                alignSelf: 'center',
              }}>
              <Text
                style={[
                  styles.defaultText,
                  {textAlign: 'center', fontWeight: '600'},
                ]}>
                Order Now
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}>
            <Image
              source={require('../../assets/HomeAssets/burger.png')}
              resizeMode="contain"
              style={{width: 183, height: 155}}
            />
          </View>
        </View>
      </View>
    );
  };

  const SpecialOfferView = () => {
    return (
      <View style={styles.specialOfferView}>
        <View>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 20,
              color: AppStyles.textColor,
              marginLeft: 10,
            }}>
            Special Offer
          </Text>
          <Image
            source={require('../../assets/HomeAssets/CardinalChips.png')}
            style={{height: 150, alignSelf: 'center'}}
            resizeMode="contain"
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 10,
              alignItems: 'center',
            }}>
            <Text style={[styles.defaultText, {fontSize: 13}]}>
              Cardinal Chips
            </Text>
            <Text
              style={[
                styles.defaultText,
                {
                  borderRadius: 15,
                  backgroundColor: AppStyles.appSubBackground,
                  padding: 5,
                  fontSize: 13,
                },
              ]}>
              4.3
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      {Greetings()}
      {OptionList()}
      {DiscountView()}
      {SpecialOfferView()}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.appBackground,
  },
  greetingsHeader: {
    marginTop: 10,
    backgroundColor: AppStyles.appSubBackground,
    padding: 10,
  },
  optionList: {
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
  },
  discountView: {
    // flex: 0.8,
  },
  specialOfferView: {
    flex: 1,
    margin: 10,
  },
  defaultText: {
    fontSize: 12,
    color: AppStyles.textColor,
  },
  helloText: {
    paddingVertical: 3,
    fontSize: 25,
    color: AppStyles.textColor,
    fontWeight: '800',
  },
  greetText: {
    fontSize: 12,
    color: AppStyles.subTextColor,
    fontWeight: '400',
  },
  listBtns: {
    width: width / 3.6,
    margin: 5,
    borderRadius: 20,
    backgroundColor: AppStyles.appSubBackground,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 3,
    padding: 15,
  },
  btnView: {
    alignSelf: 'center',
  },
  discountCard: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: 'black',
    borderRadius: 25,
    padding: 5,
    overflow: 'hidden',
  },
});
