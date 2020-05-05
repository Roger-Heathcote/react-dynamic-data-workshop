import {token} from "../../token.js";

const checkForError = (req, res) => {
    if (req.status !== 200) {
        console.log(`Error with the request! ${req.status}`);
        return;        
    }

    return req.json();
}

const getUserData = username => {
    console.log("UNAME & TOKEN:", username, token)
    return fetch(`https://api.github.com/users/${username}?access_token=${token}`)
    .then(checkForError)
    .catch(err => {
        throw new Error(`fetch getUserData failed ${err}`);
    });
};

export default getUserData