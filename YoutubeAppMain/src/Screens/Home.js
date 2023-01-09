/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import Header from '../Components/Header';
import {View, FlatList} from 'react-native';
import youtube from '../../assets/videoyoutube.json';
import Footer from '../Components/Footer';
import styled from 'styled-components';
import VideoItem from '../Components/Video/VideoItem';

const Home = props => {
  return (
    <Container>
      <Header />
      <View style={{flex: 10}}>
        <FlatList
          data={youtube}
          renderItem={Data => <VideoItem video={Data.item} />}
        />
      </View>
      <ContainerFooter>
        <Footer/>
      </ContainerFooter>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;
const ContainerFooter = styled.View`
  flex: 1;
  margin-left: 15px;
`;

export default Home;
