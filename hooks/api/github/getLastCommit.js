import React, {useState, useEffect} from 'react'
import axios from 'axios'
import moment from 'moment'

export function getLastCommit() {
    const [lastCommit, setLastCommit] = useState('Loading...');


    useEffect(async () => {
        try {
            const response = await axios.get('https://api.github.com/repos/Evgeny-Bukovski/it-efrem.com/commits');
            setLastCommit(
                getLastCommitDate(response.data)
            )
        } catch {
            setLastCommit('GitHub server is not available')
        }
    }, []);

    function getLastCommitDate(commits) {
        if (commits) {
            try {
                const {date} = commits[0].commit.committer;

                if (date) {
                    return moment(date, moment.HTML5_FMT.DATETIME_LOCAL_MS).format('LL');
                } else {
                    throw new Error();
                }
            } catch (err) {
                return 'GitHub API changed'
            }
        }
    }

    return lastCommit
}
