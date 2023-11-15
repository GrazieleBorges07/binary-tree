import {Node} from './Node.js';

class BinaryTree{

    constructor (data = undefined){
        if(data){
            this.root = new Node(data);
        }else{
            this.root = undefined;
        }

        this.expression = '';
    }

    //Getter
    get root() {
        return this._root;
    }

    get expression() {
        return this._expression;
    }

    //Setter
    set root(v) {
        this._root = v;
    }

    set expression(v) {
        this._expression = v;
    }

    // Percurso simétrico
    inOrder(node = undefined) {
        if(!(node)){
            node = this.root;
        }

        if(node.left){
            this.expression = this.expression + '(';
            this.inOrder(node.left);
        }
        this.expression = this.expression +''+ node._data;

        if(node.right){
            this.inOrder(node.right);
            this.expression = this.expression + ')';
        }
    }

    //Percurso Pós-Ordem
    posOrder(node = undefined){
        if(!node){
            node = this.root;
        }

        if(node.left){
            this.posOrder(node.left);
        }

        if(node.right){
            this.posOrder(node.right);
        }

        this.expression = this.expression + node._data;
    }

    height(node = undefined){
        if(!node){
            node = this.root
        }
        var hleft = 0
        var hright = 0

        if (node.left){
            hleft = this.height(node.left);
        }

        if(node.right){
            hright = this.height(node.right);
        }

        if(hright > hleft){
            return hright + 1;
        }

        return hleft + 1;
    }
}

export {BinaryTree}
