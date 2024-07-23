// 876. Mitad de la lista enlazada

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//Solucion no aceptada por LeetCode, al ser una lista enlazada no se puede usar length
/* let middleNode = function(head) {
    let middle = Math.trunc(head.length / 2);
     head = head.slice(middle)

    return head;
}; */


//Solucion no aceptada por LeetCode, al ser una lista enlazada no se puede usar length
/* let middleNode2 = function(head) {
    let middle = Math.trunc(head.length / 2);
    let newList=[];
    for (let i = 0; i < head.length; i++) {
       if (i < middle) {
           continue;
       }
       newList.push(head[i])
    }
    return newList;
}; */


//Se creo esta clase para representar la lista que me psaba como parmetro en la pagina
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

//Solución aceptada
let middleNode = function(head) {
    let slow = head;
    let fast = head;
    while (fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next
    } 
    return slow
};

//Creación de nodos
let nodo5 = new Node(5);
let nodo4 = new Node(4, nodo5);
let nodo3 = new Node(3, nodo4);
let nodo2 = new Node(2, nodo3);
let nodo1 = new Node(1, nodo2);



console.log(middleNode(nodo1));
