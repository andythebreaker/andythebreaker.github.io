import React from 'react';
import {
  FeedSummary,
  FeedLabel,
  FeedEvent,
  FeedDate,
  FeedContent,
  CardHeader,
  CardContent,
  Card,
  Feed,
  Button,
  Grid,
  Segment,
  Divider,
  Header,
  Popup,
  Container,
  Rail,
  ButtonGroup,
} from 'semantic-ui-react'
import { useFsStore } from '../stores/useFsStore';
import PlayGround from './PlayGround'

function MainDisplay() {
  const currentId = useFsStore(state => state.currentId);
  const currentName = useFsStore(state => state.currentName);
  const goParent = useFsStore(state => state.goParent);
  return (
    <div>
      <Container>
        <Divider horizontal>
          <Header as='h4'>
            <Popup content={currentId} trigger={<Button icon='file alternate outline' />} />
            {currentName}
          </Header>
        </Divider>
        <Rail attached internal position='right'>
          <Segment compact floated='right'>
            <ButtonGroup
              buttons={[
                { key: '0', icon: 'arrow alternate circle left outline' ,onClick:goParent},
                { key: '1', icon: 'arrow alternate circle right outline' },
              ]}
            />
          </Segment>
        </Rail>
        <PlayGround></PlayGround>
      </Container>
    </div>
  );
}

export default MainDisplay;