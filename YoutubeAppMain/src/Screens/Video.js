/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {FlatList, Text, View} from 'react-native';
import Header from '../Components/Header';
import youtube from '../../assets/videoyoutube.json';
import ViewVideoItem from '../Components/ViewVideo';

const Video = ({video}) => {
  return (
    <View>
      <FlatList
        data={youtube}
        renderItem={Data => <ViewVideoItem video={Data.item} />}
      />
      <Header />
    </View>
  );
};

export default Video;
