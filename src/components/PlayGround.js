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

    return (
        <div>
            {isEmptyObject(currentContent) ?
                <FeedSummary>
                    'Nothing inside!'
                </FeedSummary>
                : isDirArrayOrFileArray(currentContent) === 'yes, dir' ?
                    currentContent.directories.map((item, index) => (
                        <FeedSummary>
                            {item.name}
                        </FeedSummary>
                    ))
                    : isDirArrayOrFileArray(currentContent) === 'yes, files' ?
                        currentContent.files.map((item, index) => (
                            <FeedSummary>
                                {item.name}
                            </FeedSummary>
                        ))
                        :
                        <FeedSummary>
                            {currentContent.name}
                        </FeedSummary>
            }
        </div>
    );
}

export default PlayGround;