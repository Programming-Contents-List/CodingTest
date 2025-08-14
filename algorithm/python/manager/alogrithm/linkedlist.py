class Node() :
    def __init__(self, data):
        self.data = data
        self.next = None

head = Node(1)
head.next = Node(2)
head.next.next = Node(3)

node = head
while node:
    if node.next is None:
        node.next = Node(4)
        break
    node = node.next

# 연결 리스트 출력
node = head
while node:
    print(node.data, end=" -> ")
    node = node.next
print("None")