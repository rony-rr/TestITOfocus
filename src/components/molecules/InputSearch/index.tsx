import React from 'react';
import {
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
  Platform,
  KeyboardTypeOptions,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

/** Import Global Variables */
import GlobalVars from '../../../global/globalsVars';

/** Import Styles for this Screen */
import Styles from './style';

type TypeInput =
  | 'none'
  | 'URL'
  | 'addressCity'
  | 'addressCityAndState'
  | 'addressState'
  | 'countryName'
  | 'creditCardNumber'
  | 'emailAddress'
  | 'familyName'
  | 'fullStreetAddress'
  | 'givenName'
  | 'jobTitle'
  | 'location'
  | 'middleName'
  | 'name'
  | 'namePrefix'
  | 'nameSuffix'
  | 'nickname'
  | 'organizationName'
  | 'postalCode'
  | 'streetAddressLine1'
  | 'streetAddressLine2'
  | 'sublocality'
  | 'telephoneNumber'
  | 'username'
  | 'password'
  | 'newPassword'
  | 'oneTimeCode'
  | undefined;

interface IProps {
  iconName?: string;
  label?: string;
  textvariable?: string;
  pass?: boolean;
  type?: TypeInput;
  keyboard?: KeyboardTypeOptions;
  maxlong?: number;
  setValueProp: (v: string) => void;
}

const styles = Styles;

const InputSearch = ({
  iconName,
  label,
  textvariable,
  type = 'nickname',
  keyboard = 'default',
  maxlong = 2000,
  setValueProp,
}: IProps) => {
  const IconRender = iconName ? (
    textvariable?.length ? (
      <TouchableOpacity
        style={styles.iconstyle}
        onPress={() => setValueProp('')}>
        <Feather name={iconName} size={25} color={GlobalVars.firstColor} />
      </TouchableOpacity>
    ) : (
      <Feather
        style={styles.iconstyle}
        name={iconName}
        size={25}
        color={GlobalVars.firstColor}
      />
    )
  ) : null;

  return (
    <View style={styles.rootView}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            {IconRender}
            <TextInput
              placeholder={label}
              style={styles.textInput}
              onChangeText={(text: string) => setValueProp(text)}
              value={textvariable}
              secureTextEntry={false}
              keyboardType={keyboard}
              textContentType={type}
              maxLength={maxlong}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

export default InputSearch;
