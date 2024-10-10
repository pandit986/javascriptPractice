class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList{

    constructor(){
        this.head = null  // Initially, the list is empty
    }

    append(data){
        const newNode = new Node(data)
        console.log(newNode)

        // If the list is empty, make the new node the head
        if(this.head === null){
            this.head = newNode
            return
        }

        let current = this.head;

        while(current.next != null){
             current = current.next
        }
        current.next = newNode
    }

    traversal(){
        let current = this.head;

        while(current != null){
            console.log(current.data)
            current = current.next
        }
    }

    length(){
        let current = this.head
        let count = 0
        while(current != null){
            count++;
            current = current.next
        }
        console.log(`length of the linkList is ${count}`)
    }

    searching(data){
        let node = this.head
        while(node != null){
            if(node.data === data){
                console.log(`Element Found`)
                return
            }
            node = node.next
        }
        console.log("Element Not Present In LinkedList")
    }

    appendEnd(data){
        const newNode = new Node(data)

        let current = this.head
        while(current.next != null){
            current  = current.next
        }
        current.next = newNode
        this.traversal()
    }

    appendSpecificPosition(data,position){
                  
    }

}

let list = new LinkedList()

list.append(10)
list.append(20)
list.append(40)
list.append(50)
list.traversal()
list.length()
list.searching(30)
list.appendEnd(100)
