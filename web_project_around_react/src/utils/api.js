class Api {
    constructor({ adress, groupId, token }) {
        this._adress = adress;
        this._groupId = groupId;
        this._token = token;
    }

    _handleResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
    }

    getUserInfo() {
        return fetch(`${this._adress}/v1/${this._groupId}/users/me`, {
            headers: {
                authorization: this._token,
            },

        }).then(this._handleResponse);
    }
}

const api = new Api({
    adress: 'https://around.nomoreparties.co',
    groupId: 'web_es_12',
    token:  'cff91bad-a8c7-417a-948a-f02fc6d5768b',
});

export default api;