import * as React from 'react';

import {
  View,
  Modal,
  TouchableOpacity,
  ActivityIndicator,
  Animated,
  ScrollView,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

/** Import Global vars */
import GlobalVars from '../../../global/globalsVars';

/** Import Mock */
import {getSearch} from '../../../mock/Search';

/** Import Custom elements */
import InputSearch from '../../molecules/InputSearch';
import ResultSearchCard from '../../molecules/ResultSearchCard';

import Styles from './style';

const styles = Styles;
const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

const ModalSearch = ({
  visible,
  onShow,
}: {
  visible: boolean;
  onShow: () => void;
}) => {
  const [search, setSearch] = React.useState<string>('');
  const [results, setResult] = React.useState<any>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (search?.length > 0) captureSearch();
    else setResult([]);
  }, [search]);

  const captureSearch = async () => {
    setIsLoading(true);
    const res: any = await getSearch(search);
    res && Array.isArray(res) ? setResult(res) : setResult([]);
    setIsLoading(false);
  };

  const ResultsToSearch = () => {
    // render results
    let res =
      (results?.length &&
        results.map((item: any, i: number) => {
          return (
            <ResultSearchCard
              key={'result_search_' + i}
              name={item.original_title}
              image={`https://image.tmdb.org/t/p/w440_and_h660_face/${item.poster_path}`}
              item={item}
              onShow={onShow}
            />
          );
        })) ||
      null;

    return res;
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        onShow();
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {/** Close Element */}
          <TouchableOpacity
            style={styles.closeElement}
            onPress={() => onShow()}>
            <AntDesign name="down" size={20} color={GlobalVars.firstColor} />
          </TouchableOpacity>

          {/* Search Bar */}
          <View style={styles.viewInput}>
            <InputSearch
              label="Búsqueda"
              iconName={search?.length ? 'x' : 'search'}
              textvariable={search}
              setValueProp={(val: string) => setSearch(val)}
            />
          </View>

          <AnimatedScrollView
            style={styles.stylesResult}
            contentContainerStyle={styles.contentResult}>
            {isLoading ? (
              <View style={styles.centeredSpinner}>
                <ActivityIndicator
                  animating={true}
                  size="large"
                  color={GlobalVars.firstColor}
                  style={{marginVertical: 30}}
                />
              </View>
            ) : (
              ResultsToSearch()
            )}
          </AnimatedScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default ModalSearch;
