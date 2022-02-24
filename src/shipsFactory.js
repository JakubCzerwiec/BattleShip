

const shipFactory = (length, name) => {
    let model = () => [];
    for (let i = 0; i < length; i++) {
        model.push(0)
    }

    let isHit = (index) => {
        model.splice(index, 1, 1);
        console.log(model);
        
    }

    let isSunk = () => {
        let sum = model.reduce((acc, val) => {
            acc += val;
            return acc;
        }, 0);

        if (sum < length) {
            return false;
        } else if (sum === length) {
            return true;
        }
    }

    return {length, name, model, isHit, isSunk};
}

/*const destroyer = shipFactory(5, 'enter', 0);

export {destroyer}

const ships = [];
ships.push(destroyer)

export {shipFactory}
export {ships} */

module.exports = shipFactory