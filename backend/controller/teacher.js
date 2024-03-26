const create = (req, res) => {console.log('you are allowed')};

const read = (req, res) => {console.log("you are allowed");};

const update = (req, res) => {};

const delete_ = (req, res) => {};

module.exports = {
    create, read, update, delete_
}