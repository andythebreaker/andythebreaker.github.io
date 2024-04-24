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
} from 'semantic-ui-react'
import { useFsStore } from '../stores/useFsStore';
import PlayGround from './PlayGround'

function MainDisplay() {
  const currentId = useFsStore(state => state.currentId);
  const idAdd = useFsStore(state => state.idAdd);
  const idMinus = useFsStore(state => state.idMinus);
  const currentName = useFsStore(state => state.currentName);

  return (
    <div>
      <Card>
        <CardContent>
          <CardHeader>MainDisplay</CardHeader>
        </CardContent>
        <CardContent>
          <Feed>
            <FeedEvent>
              <FeedLabel image='/img/bear.jpg' />
              <FeedContent>
                <FeedDate content='current id' />
                <FeedSummary>
                  {currentId}
                  <div>
                    <Button primary onClick={idAdd}>idAdd</Button>
                    <Button secondary onClick={idMinus}>idMinus</Button>
                  </div>
                </FeedSummary>
              </FeedContent>
            </FeedEvent>

            <FeedEvent>
              <FeedLabel image='/img/bear.jpg' />
              <FeedContent>
                <FeedDate content='name' />
                <FeedSummary>
                  {currentName}
                </FeedSummary>
              </FeedContent>
            </FeedEvent>

            <FeedEvent>
              <FeedLabel image='/img/bear.jpg' />
              <FeedContent>
                <FeedDate content='PlayGround' />
                <PlayGround></PlayGround>
              </FeedContent>
            </FeedEvent>
          </Feed>
        </CardContent>
      </Card>
      <Divider horizontal>
      <Header as='h4'>
        <Popup content={currentId} trigger={<Button icon='file alternate outline' />} />
        {currentName}
      </Header>
    </Divider>
      <Grid columns={3} doubling>
        <Grid.Column>
          <Segment>Content</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Content</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Content</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Content</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Content</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Content</Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default MainDisplay;