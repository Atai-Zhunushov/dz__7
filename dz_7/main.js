////// 1
class Cars {
    constructor(options) {
        this.model = options.model
        this.color = options.color
        this.wheels = options.wheels
    }
    start () {
        return console.log('Машина заведена!')
    }
}

class Bmv extends Cars {
    constructor(options) {
        super(options);
        this.price = options.price
    }
}
class Mercedes extends Cars {
    constructor(options) {
        super(options);
        this.middleSpeed = options.middleSpeed
    }
}
class Chevrolet extends Cars {
    constructor(options) {
        super(options);
        this.height = options.height
    }
}

const bmv = new Bmv({
    model: 'Gran Coupe ',
    color: 'black',
    wheels: 4 ,
    price: '10000$'

})

const mercedes = new Mercedes({
    model: 'Benz ',
    color: 'white',
    wheels: 4 ,
    middleSpeed: '100km/h'
})
const chevrolet = new Chevrolet({
    model: 'Camaro ',
    color: 'yellow',
    wheels: 4 ,
    height: '1,5m'
})
bmv.start()
console.log(bmv)
console.log(mercedes)
console.log(chevrolet)


////// 2
class Traffic {
    constructor(selector) {
        this.$element = document.getElementById(selector)
    }
}
class Circle extends Traffic {
    constructor(options) {
        super(options.selector);
        this.$element.style.backgroundColor = options.color
    }
}

let color = prompt('Введите цвет светофора')
if (color === 'red') {
    const red = new Circle({
        selector: 'red',
        color: 'red'
    })
} else if (color === 'yellow') {
    const yellow = new Circle({
        selector: 'yellow',
        color: 'yellow'
    })
} else if (color === 'green') {
    const green = new Circle({
        selector: 'green',
        color:'green'
    })
} else {
    alert('error')
}
