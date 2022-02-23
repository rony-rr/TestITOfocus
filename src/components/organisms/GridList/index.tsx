import * as React from 'react';
import {View, ActivityIndicator, Animated, ScrollView} from 'react-native';

/** Import Mock */
import {getList} from '../../../mock/Lists';

/** Import Global Variables */
import GlobalVars from '../../../global/globalsVars';

/** Import Componentes Custom */
import ListCard from '../../molecules/ListCard';

/** Import Styles for this Screen */
import Styles from './style';

const styles = Styles;
const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

export default function GridList({process = 'list'}: {process?: string}) {
  const [result, setResult] = React.useState<any>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    /** Get */
    DispatchProcess();
  }, []);

  const GET_LIST = async () => {
    setIsLoading(true);
    const res: any = await getList();
    res && Array.isArray(res) ? setResult(res) : setResult([]);
    setIsLoading(false);
  };

  const DispatchProcess = () => {
    switch (process) {
      case 'list':
        GET_LIST();
        break;
      default:
        GET_LIST();
        break;
    }
  };

  let cards =
    (result?.length &&
      result.map((item: any, i: number) => (
        <ListCard key={'movie_item_' + i} itemList={item} />
      ))) ||
    null;

  return (
    <View style={styles.rootView}>
      <View style={styles.viewContainer}>
        <AnimatedScrollView
          style={styles.stylesCarousel}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          snapToInterval={2}
          decelerationRate="fast"
          bounces={false}
          bouncesZoom={true}
          pagingEnabled
          contentContainerStyle={styles.contentCarousel}>
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
            cards
          )}
        </AnimatedScrollView>
      </View>
    </View>
  );
}
