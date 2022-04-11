const welcome = (req, res) => {
    res.send("welcome!");
};

const greet = (req, res) => {
    res.send("Hello, Everyone");
};

const protected = (req, res) => {
    res.send("You can see this beacause you are authenticated")
}

module.exports = {
    welcome,
    greet,
    protected
};