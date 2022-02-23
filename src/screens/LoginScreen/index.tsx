import React, {useState} from 'react';

import {View, ActivityIndicator} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

/** Import Global Variables */
import GlobalVars from '../../global/globalsVars';

/** Import helpers */
import validateEmail from '../../helpers/validateMail';
import validatePass from '../../helpers/validatePass';
import Fetching from '../../helpers/FetchPost';
import Storage from '../../helpers/localStorahe';

/** Import components */
import TitleComponent from '../../components/atoms/Titles';
import StatusBarComponent from '../../components/atoms/StatusBar';
import ImageLocalComponent from '../../components/atoms/ImageLocalComponent';
import ButtonComponent from '../../components/atoms/ButtonComponent';
import InputEntry from '../../components/molecules/InputEntry';
import ModalAlert from '../../components/templates/ModalAlert';

/** Styles */
import Styles from './style';

const styles = Styles;

interface IProps {
  navigation?: any;
}

const LoginScreen = ({navigation}: IProps) => {
  const [mail, setMail] = useState('');
  const [password, setPass] = useState('');

  const [loading, setLoading] = useState(false);
  const [textAlert, setTextAlert] = useState('Alerta');
  const [isShowingAlert, setShowhingAlert] = useState(false);

  const SignInProcess = async () => {
    setLoading(true);
    try {
      if (validateEmail(mail) && validatePass(password)) {
        setTimeout(async () => {
          let dataSend = {
            email: mail,
            password: password,
          };
          const res: any = await Fetching.FetchPost(
            `${GlobalVars.urlApi}/login`,
            dataSend,
            '',
          );
          if (!res || res?.error) {
            setLoading(false);
            setTextAlert(
              'Error en los campos, revise sus credenciales: ' + res.error,
            );
            setShowhingAlert(!isShowingAlert);
          } else {
            setLoading(false);
            setTextAlert('Bienvenido');
            setShowhingAlert(!isShowingAlert);
            Storage.storeData('_Token', res.token);
            navigation.navigate('Home');
          }
        }, 3000);
      } else {
        setTimeout(() => {
          setLoading(false);
          setTextAlert('Error en los campos, revise sus credenciales');
          setShowhingAlert(!isShowingAlert);
        }, 700);
      }
    } catch (e) {
      setLoading(false);
      setTextAlert('Ha ocurrido un error, intente de nuevo');
      setShowhingAlert(!isShowingAlert);
      // console.log(e);
    }
  };

  return (
    <View style={styles.viewHome}>
      <StatusBarComponent />
      <ModalAlert
        text={textAlert}
        openModal={isShowingAlert}
        onHelp={() => setShowhingAlert(!isShowingAlert)}
      />
      <LinearGradient
        colors={[GlobalVars.firstColor, GlobalVars.whiteLight]}
        start={{x: -0.2, y: 0}}
        end={{x: 1, y: 2}}
        style={styles.linearGradient}>
        <ImageLocalComponent
          img={require('../../../assets/logo.png')}
          width={GlobalVars.windowWidth / 5}
          height={GlobalVars.windowHeight / 5}
        />
      </LinearGradient>

      <View style={styles.collection}>
        <TitleComponent
          title="Inicia sesión"
          color={GlobalVars.whiteLight}
          size={20}
          weight="800"
        />
        <View style={styles.entries}>
          <InputEntry
            label="Correo electrónico"
            iconName="mail"
            textvariable={mail}
            setValueProp={(val: string) => setMail(val)}
          />
          <InputEntry
            label="Contraseña"
            textvariable={password}
            setValueProp={(val: string) => setPass(val)}
            visibilityProp={true}
            pass={true}
          />
        </View>
        {!loading ? (
          <ButtonComponent
            text="Iniciar sesión"
            color={GlobalVars.redColor}
            textColor={GlobalVars.whiteLight}
            customStyleBtn={{
              width: '80%',
            }}
            Action={() => SignInProcess()}
          />
        ) : (
          <ActivityIndicator
            animating={true}
            size="large"
            color={GlobalVars.firstColor}
            style={{marginVertical: 30}}
          />
        )}
      </View>
    </View>
  );
};

export default LoginScreen;
