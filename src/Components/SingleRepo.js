import React, { useState, useEffect } from 'react';
import '../Styles/SingleRepo.css';
const axios = require('axios');

const GithubRepo = ({ repo }) => {

    const [language, setLanguage] = useState("");


    React.useEffect(() => {

        axios.get(repo.languages_url)
            .then(res => setLanguage(res.data))
            .catch(err => console.log(err))

    }, []);
    return (
        <div className="repo_box">
            {language === "" ? <>Loading</> : <>

                <div className="repo_heading">{repo.name}</div>

                <br />
                <div className="repo_description">
                    {repo.description === null ? <>No Description</> : <>{repo.description}</>}
                </div>


                <br />
                <div className="repo_languages">
                    {Object.keys(language).map((lang) => {
                        return (
                            <div className="language">
                                {lang}
                            </div>
                        )
                    })}
                </div>
            </>}

        </div>
    );
}

export default GithubRepo;
