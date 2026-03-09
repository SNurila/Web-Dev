from models import Dog, Cat


def main():
    dog1 = Dog("Buddy", 3, "Golden Retriever")
    cat1 = Cat("Whiskers", 2, "White")

    animals = [dog1, cat1]

    for animal in animals:
        print(animal)          
        print(animal.info())   
        print(animal.speak())  
        print()

    print(dog1.fetch())
    print(cat1.climb())


if __name__ == "__main__":
    main()