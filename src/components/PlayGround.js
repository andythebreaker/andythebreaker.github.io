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
    Grid,
    Icon,
    Button,
    Segment,
} from 'semantic-ui-react'
import { useFsStore } from '../stores/useFsStore';

function isEmptyObject(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}

function isDirArrayOrFileArray(obj) {
    var tmp = 'no';
    if ('directories' in obj) {
        tmp = 'yes, dir';
    }
    if ('files' in obj) {
        tmp = 'yes, files';
    }
    return tmp;
}

function PlayGround() {
    const currentContent = useFsStore(state => state.currentContent);
    const setId = useFsStore(state => state.setId);
    return (
        <div>
            {isEmptyObject(currentContent) ?
                <Segment>'Nothing inside!'</Segment>
                : isDirArrayOrFileArray(currentContent) === 'yes, dir' ?
                    <Grid textAlign='center' columns={3} doubling>
                        {currentContent.directories.map((item, index) => (
                            <Grid.Column key={index}>
                                <Button icon labelPosition='right' color='pink' onClick={() => { setId(item.id); }}>
                                    {item.name}
                                    <Icon name='right arrow' />
                                </Button>
                            </Grid.Column>
                        ))}
                    </Grid>
                    : isDirArrayOrFileArray(currentContent) === 'yes, files' ?
                        <Grid textAlign='center' columns={3} doubling>
                            {currentContent.files.map((item, index) => (
                                <Grid.Column key={index}>
                                    <Button icon labelPosition='right' color='pink' onClick={() => { setId(item.id); }}>
                                        {item.name}
                                        <Icon name='right arrow' />
                                    </Button>
                                </Grid.Column>
                            ))}
                        </Grid>
                        :
                        <Segment>
                            {currentContent.content}
                        </Segment>
            }
        </div>
    );
}

export default PlayGround;