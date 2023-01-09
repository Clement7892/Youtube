/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';

const ViewVideoItem = ({video}) => {
  return <AuthorTitle>{video.watch}</AuthorTitle>;
};

const AuthorTitle = styled.Text`
  font-size: 17px;
  padding-top: 4px;
  font-weight: bold;
`;

export default ViewVideoItem;
