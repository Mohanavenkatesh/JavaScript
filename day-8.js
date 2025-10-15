// this Keyword

// function one() {

//     console.log(this);

// }

// one()

const nas = {
    one: "one", two: function namee() {
        console.log(this.one);

    }
};

nas.two()



