import React, { useState } from 'react';
import Form from './Form.js';
import UserData from './UserData.js';
import Pagination from './Paging.js';
import axios from "axios";
import '../Styles/Display.css'

function Display() {

    const [user, setUser] = useState("");
    const [currPage, setCurrPage] = useState(1);
    const [length, setLength] = useState(1);
    const [userData, setUserData] = useState("");
    const [loading, setLoading] = useState(false);

    React.useEffect(() => {
        if (user != "") {
            let baseURL = `https://api.github.com/users/${user}`;
            setLoading(true);
            axios.get(baseURL, {
                headers: {
                    'Authorization': process.env.TOKEN,
                }
            })
                .then((response) => {
                    setUserData(response.data);
                    let l = (response.data.public_repos) / 10;
                    // console.log(l.toFixed(0));
                    setLength(l.toFixed(0));
                    // console.log(currPage);
                    setLoading(false)
                })
                .catch(e => { setUserData("--") })
        }
        else {
            setUserData("")
        }


    }, [user]);

    const getFormData = (index) => { // the callback. Use a better name
        // console.log(index);
        setUser(index);
    };
    const pages = (index) => {
        setCurrPage(index);
    };

    return (
        <div >

            <Form getFormData={getFormData} />
            <br />
            <br />
            {userData === "" ? <>
                <div className="Display_message"> Yours search will appear here</div>
            </> : <>
                {
                    userData === "--" ? <><div className="Error_message"> No User exist!</div></> : <>
                        {loading ? <>
                            Loading Data
                        </> : <>
                            <UserData data={userData} page={currPage} />
                            <br />
                            <br />
                            <Pagination len={length} pages={pages} />
                            <br />
                            <br />
                        </>}</>
                }


            </>}



        </div>
    );
}

export default Display;
