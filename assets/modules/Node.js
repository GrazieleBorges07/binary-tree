class Node {
    constructor (data){
        this._data = data;
        this._left = undefined;
        this._right = undefined;
    }

    //Getter
    get left() {
        return this._left;
    }
    get right() {
        return this._right;
    }

    set left(value) {
        this._left = value;
    }

    set right(v) {
        this._right = v;
    }
}

export {Node}
