import React, {useState} from 'react';
import {
  View,
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
  noVisible?: boolean;
  visibilityProp?: boolean;
  setValueProp?: (v: string) => void;
}

const styles = Styles;

const InputEntry = ({
  iconName,
  label,
  textvariable,
  pass = false,
  type = 'none',
  keyboard = 'default',
  maxlong = 2000,
  noVisible,
  visibilityProp,
  setValueProp,
}: IProps) => {
  const [hiddenstatus, setHiddenstatus] = useState(false);

  if (noVisible) return null;
  const visibility = visibilityProp ? true : null;
  const IconRender = iconName ? (
    <Feather
      style={styles.iconstyle}
      name={iconName}
      size={25}
      color={GlobalVars.firstColor}
    />
  ) : null;

  const setValue = (value: string) => {
    if (setValueProp) {
      setValueProp(value);
    }
  };

  let iconeye = null;
  if (visibility) {
    iconeye = hiddenstatus ? (
      <Feather
        style={styles.eye}
        name="eye"
        color={GlobalVars.firstColor}
        onPress={() => setHiddenstatus(!hiddenstatus)}
        size={25}
      />
    ) : (
      <Feather
        style={styles.eye}
        name="eye-off"
        color={GlobalVars.firstColor}
        onPress={() => setHiddenstatus(!hiddenstatus)}
        size={25}
      />
    );
  }

  return (
    <View style={styles.rootView}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            {IconRender}
            {!hiddenstatus && pass ? (
              <TextInput
                placeholder={label}
                style={styles.textInput}
                onChangeText={text => setValue(text)}
                value={textvariable}
                secureTextEntry={true}
                keyboardType={keyboard}
                textContentType={type}
                maxLength={maxlong}
              />
            ) : (
              <TextInput
                placeholder={label}
                style={styles.textInput}
                onChangeText={text => setValue(text)}
                value={textvariable}
                secureTextEntry={false}
                keyboardType={keyboard}
                textContentType={type}
                maxLength={maxlong}
              />
            )}

            {iconeye}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

export default InputEntry;
