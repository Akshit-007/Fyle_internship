import React from 'react';
import GithubRepo from './GithubRepo.js'
import { MdLocationOn } from "react-icons/md";
import { MdLink } from "react-icons/md";
import '../Styles/UserData.css'

const UserData = ({ data, page }) => {
    // console.log(data);

    let twitter_url = "https://twitter.com/";
    return (
        <div >
            <div className="userProfile">
                <div className="upper_profile">
                    <div className="user_photo">
                        <img src={data.avatar_url} className="user_profile_photo" />
                    </div>
                    <div className="user_profile">
                        <div className="user_name">{data.name === null ? <>{data.login}</> : <>{data.name}</>}</div>
                        <br />
                        <div className="user_data">
                            {data.bio}
                            <br />
                            <br />
                            <MdLocationOn /> {data.location === null ? <>NA</> : <>{data.location}</>}
                            <br />
                            <br />
                            Twitter: {
                                data.twitter_username === null ? <>NA</> : <>
                                    {`${twitter_url}${data.twitter_username}`}</>
                            }
                        </div>

                    </div>
                </div>
                <div className="github_link">
                    <MdLink /> <a href={data.html_url}>{data.html_url}</a>
                </div>
                <GithubRepo page={page} user={data.login} />
            </div>
        </div>
    );
}

export default UserData;
