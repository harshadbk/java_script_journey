const user = {
    name: "Harshad",

    normal: function() {
        console.log(this.name);
    },

    arrow: () => {
        console.log(this.name);
    }
};

user.normal();
user.arrow();