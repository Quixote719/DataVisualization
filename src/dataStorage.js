import axios from 'axios';

let url = 'http://localhost:3000/randomrequest?1527735321173';

export const ServerData = {
    sendGet: function()
    {
        let date = new Date().getTime().toString();
        axios({
            method: 'get',
            url: url + '?' + date,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then(function (res) {
            console.log(res.data);
            return res.data;
        });
    }
}

