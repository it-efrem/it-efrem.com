import React, {useState, useEffect} from 'react'
import axios from 'axios'
import moment from 'moment'

export function getLastCommit() {
    const [commits, setCommits] = useState();
    const [lastCommit, setLastCommit] = useState('Loading...');


    useEffect(() => {
        axios.get('https://api.github.com/repos/Evgeny-Bukovski/it-efrem.com/commits')
            .then(response => {
                setCommits(response.data)
            })
            .catch(err => {
                setLastCommit('GitHub server is not available');
            })
    }, []);

    useEffect(() => {
        if (commits) {
            try {
                const _data = commits[0].commit.committer.date;

                if (_data) {
                    setLastCommit(
                        moment(_data, moment.HTML5_FMT.DATETIME_LOCAL_MS).format('LL')
                    );
                } else {
                    throw new Error();
                }
            } catch (err) {
                setLastCommit('GitHub API changed')
            }
        }
    }, [commits]);

    return lastCommit
}