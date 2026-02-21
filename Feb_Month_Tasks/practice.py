#overlaoding with add method
class A:
    def add(self, a, b):
        return a + b

    def add(self, a, b, c):
        return a + b + c        
    
a = A()
print(a.add(1, 2,3)) # This will raise an error because the first add
