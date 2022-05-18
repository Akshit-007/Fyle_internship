import React, { useState, useEffect } from 'react';
import SingleRepo from './SingleRepo.js';
import '../Styles/GithubRepo.css'

const axios = require('axios');


const GithubRepo = ({ page, user }) => {

    const [info, setInfo] = useState(null);
    // console.log(info);

    // console.log(page, user);
    React.useEffect(() => {
        const config = {
            headers: {
                page,
                user
            }
        };
        // axios.get("https://localhost:7000/user_info", config)
        //     .then(res => setInfo(res.data))
        //     .catch(err => console.log(err))
        axios.get("https://github-search-fyle-task.herokuapp.com/user_info", config)
            .then(res => setInfo(res.data))
            .catch(err => console.log(err))

    }, [page, user]);
    return (
        <div className="all_repo" >
            {info === null ? <>Loading info</> : <>
                {info.map((repo, index) => {
                    return (


                        <>
                            <SingleRepo repo={repo} />


                        </>




                    )
                })}
            </>}
        </div>
    );
}

export default GithubRepo;
