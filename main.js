import {BinaryTree} from './assets/modules/BinaryTree.js';
import {Node} from './assets/modules/Node.js';

let clickBtn = document.querySelector("#btnPrincipal");

clickBtn.addEventListener("click", () => {
    let result;
    let option = document.querySelector("#traversal").value;

    switch (option){
        case 'in_order':
            let in_order = inorder_example_tree();
            in_order.inOrder();
            result = in_order.expression;
        break;

        case 'pos_order':
            let pos_order = postorder_example_tree();
            pos_order.posOrder();
            console.log(pos_order.height());
            result = pos_order.expression;
        break;

        case 'pre_order':
            let pre_order = preorder_example_tree();
            pre_order.preOrder();
            result = pre_order.expression;
        break;
    }
    document.querySelector("#text").innerText = result;
});

function postorder_example_tree(){
    var tree = new BinaryTree()
    let n1 = new Node('A')
    let n2 = new Node('R')
    let n3 = new Node('V')
    let n4 = new Node('O')
    let n5 = new Node('R')
    let n6 = new Node('E')
    let n7 = new Node('B')
    let n8 = new Node('I')
    let n9 = new Node('N')
    let n0 = new Node('A')

    n0.left = n6
    n0.right = n9
    n6.left = n1
    n6.right = n5
    n5.left = n2
    n5.right = n4
    n4.right = n3
    n9.left = n8
    n8.right = n7

    tree.root = n0
    return tree;
}

function inorder_example_tree(){
    // #      '+'
    // #    /     \
    // #  'a'      '*'
    // #          /   \
    // #        'b'    '-'
    // #              /    \
    // #            '/'    'e' 
    // #           /   \
    // #         'c'   'd'

    // # (a + (b * ((c/d) - e)))

    var tree = new BinaryTree();
    let n1 = new Node('a');
    let n2 = new Node('+');
    let n3 = new Node('*');
    let n4 = new Node('b');
    let n5 = new Node('-');
    let n6 = new Node('/');
    let n7 = new Node('c');
    let n8 = new Node('d');
    let n9 = new Node('e');

    n6._left = n7;
    n6._right = n8;
    n5._left = n6;
    n5._right = n9
    n3._left = n4;
    n3._right = n5;
    n2._left = n1;
    n2._right = n3;

    tree.root = n2;
    return tree;
}

   // const tree = new BinaryTree(7);
    // tree.root.left = new Node(18);
    // tree.root.right = new Node(14);

    // console.log(tree.root._data);
    // console.log(tree.root.left._data);
    // console.log(tree.root.right._data);