

from math import comb


class FoodItem:
    Zinger = ['Zinger Burger',12.99]
    Pattie = ['Pattie Burger',10.99]
    Platter = ['Platter Burger',15.99]
    Mutton = ['Mutton Burger',24.99]
    Beef = ['Beef Burger',20.99]
    # adding the condiments
    Mayo=["Mayo",2.50]
    Cheese = ["Cheese",1.50]
    Red_Sauce=['Red Sauce',1.00]
    Mint_Sauce = ['Mint_Sauce',1.00]
    No = ['No Condiment',0]
    # adding the drinks
    Coke=["Coke",4.99]
    Fanta=["Fanta",4.99]
    Sprite=["Sprite",4.99]
    # adding the sides
    Ketchup = ["ketchup",2.99]
    Pasta_Salad= ["Pasta Salad",7.50]
    Onion_Rings = ["Onion Rings",7.99]
    Baked_Bean = ["Baked Bean",3.99]
    # adding the combo
    pass
class Burger(FoodItem):    
    def __init__(self):
        self.burger_items=[]
    def add_into_burger(self,value):
        self.burger_items.append(value)
    def get_burger_info(self):
        return self.burger_items
    
class Drink(FoodItem):
    def __init__(self):
        self.drink_items=[]
    def add_into_drink(self,value):
        self.drink_items.append(value)
    def get_drink_info(self):
        return self.drink_items

class Side(FoodItem):
    def __init__(self):
        self.side_items=[]
    def add_into_side(self,value):
        self.side_items.append(value)
    def get_side_info(self):
        return self.side_items
class Combo(FoodItem):
    b=Burger();
    d=Drink()
    s=Side()

def user_input_burger():
    b = Burger()
    k=0;
    #ask user for input and store it in burger object 
    while k<1:
        print('\nOur offered Burgers are:')
    # getting the data from the parent class
        print(b.Zinger + "  " +b.Pattie+"  "+b.Platter+"  "+b.Mutton+"  "+b.Beef)
        print("\nPress 1 for Zinger")
        print("Press 2 for Pattie")
        print("Press 3 for Platter")
        print("Press 4 for Mutton")
        print("Press 5 for Beef")
        name = input("\nEnter the Burget that you want to order: ")
        try:
            name = int(name)
            if(name <= 0 or name > 5):
                raise
        except:
            while type(name) != int or name <= 0 or name >5 :
                try:
                    name = int(
                        input("Press 1 to 5 to select an option: "))
                except:
                    name = -1        
        if name==1:
            b.add_into_burger('Zinger')
            print('Zinger Burger added to order' )
        # add the ketchup into the class
        if name==2:
            b.add_into_burger('Pattie')
            print('Pattie Burger  added to order' )
        # add pasta salad to order
        if name==3:
            b.add_into_burger('Platter')
            print('Platter Burger  added to order' )
        # add onion rings to the order
        if name==4:
            b.add_into_burger('Mutton')
            print('Mutton Burger  added to order' )
        if name==5:
            b.add_into_burger('Beef')
            print('Beef Burger  added to order' )
        print('\nOur offered Condiments with Burgers are: ')
    # getting the data from the parent class
        print(b.Mayo + "  " +b.Cheese+"  "+b.Red_Sauce+"  "+b.Mint_Sauce)
        print("\nPress 1 for Mayo")
        print("Press 2 for Cheese")
        print("Press 3 for Red_Sauce")
        print("Press 4 for Mint_Sauce")
        print("Press 5 for No Condiments")
        name = input("\nEnter the condiment that you want to order with the burger: ")
        try:
            name = int(name)
            if(name <= 0 or name > 5):
                raise
        except:
            while type(name) != int or name <= 0 or name >5 :
                try:
                    name = int(
                        input("Press 1 to 5 to select an option: "))
                except:
                    name = -1        
        if name==1:
            b.add_into_burger('Mayo')
            print('Mayo added to order' )
        # add the ketchup into the class
        if name==2:
            b.add_into_burger('Cheese')
            print('Cheese added to order' )
        # add pasta salad to order
        if name==3:
            b.add_into_burger('Red_Sauce')
            print('Red_Sauce Burger  added to order' )
        # add onion rings to the order
        if name==4:
            b.add_into_burger('Mint_Sauce')
            print('Mint_Sauce added to order' )
        if name==5:
            b.add_into_burger('No')
            print('No Condiments' )
        print("\nDo You want to order another burger?")
        print("Press 1 for YES")
        print("Press 2 for NO")
        val=input("Press : ")
        try:
            val = int(val)
            if(val <= 0 or val > 2 ):
                raise
        except:
            while type(val) != int or val <= 0 or val >2 :
                try:
                    val = int(
                        input("Press 1 to 2 to select an option: "))
                except:
                    val = -1        
        
        if val==1:
            k=0
        if val==2:
            # this will stop the while loop
            k=1
# condimant_order_item and burger_order_item ko burger class me store karna
    return b
 
def user_input_drink():
    d = Drink()
    b=0
    while b < 1:
    #ask user for input and store it in side object 
        print('\nOur offered Drinks are: ')
    # getting the data from the parent class
        print(d.Coke + "  " +d.Fanta+"  "+d.Sprite)
        print("\nPress 1 for Coke")
        print("Press 2 for Fanta")
        print("Press 3 for Sprite")
        name = input("\nEnter the Drink that you want to order: ")
        try:
            name = int(name)
            if(name <= 0 or name > 3):
                raise
        except:
            while type(name) != int or name <= 0 or name >3 :
                try:
                    name = int(
                        input("Press 1 to 3 to select an option: "))
                except:
                    name = -1        
        if name==1:
            d.add_into_drink('Coke')
            print('Coke as a side added to order' )
        # add the ketchup into the order
        if name==2:
            drink_order_item='Fanta'
            d.add_into_drink('Fanta')
            print('Pasta Salad as a side added to order' )
        # add pasta salad to order
        if name==3:
            drink_order_item='Sprite'
            d.add_into_drink('Sprite')
            print('Sprite as a side added to order' )
        print('\nEnter size of drink')
        print('Press 1 for Large')
        print('Press 2 for Medium')
        print('Press 3 for Small')
        size=input("Enter : ")
        try:
            size = int(size)
            if(size <= 0 or size > 3):
                raise
        except:
            while type(size) != int or size <= 0 or size >3 :
                try:
                    size = int(
                        input("Press 1 to 3 to select an option: "))
                except:
                    size = -1        

        if size==1:
            d.add_into_drink('Large')
            print('Large drink added to order' )
        # add the ketchup into the order
        if size==2:
            d.add_into_drink('Medium')
            print('Medium drink added to order' )
        # add pasta salad to order
        if size==3:
            d.add_into_drink('Small')
            print('Small drink added to order' )
        # add onion rings to the order
        print("\nDo You want to order another drink?")
        print("Press 1 for YES")
        print("Press 2 for NO")
        val=input("Press : ")
        try:
            val = int(val)
            if(val <= 0 or val >2):
                raise
        except:
            while type(val) != int or val <= 0 or val >2 :
                try:
                    val = int(
                        input("Press 1 to 2 to select an option: "))
                except:
                    val = -1        
        if val==1:
            b=0
        if val==2:
            # this will stop the while loop
            b=1
    return d
 
def user_input_side():
    s = Side()
    c=0
    while c<1:
    #ask user for input and store it in side object 
        print('\nOur offered Side are:')
    # getting the data from the parent class
        print(s.Ketchup + "  " +s.Pasta_Salad+"  "+s.Onion_Rings+"  "+s.Baked_Bean)
        print("\nPress 1 for Ketchup")
        print("Press 2 for Pasta Salad")
        print("Press 3 for Onion Ring")
        print("Press 4 for Baked Bean")
        name = input("\nEnter the Side that you want to order: ")
        try:
            name = int(name)
            if(name <= 0 or name > 4):
                raise
        except:
            while type(name) != int or name <= 0 or name >4 :
                try:
                    name = int(
                        input("Press 1 to 4 to select an option: "))
                except:
                    name = -1        
        
        if name==1:
            s.add_into_side('Ketchup')
            print('Ketchup as a side added to order' )
        # add the ketchup into the order
        if name==2:
            s.add_into_side('Pasta Salad')
            print('Pasta Salad as a side added to order' )
        # add pasta salad to order
        if name==3:
            s.add_into_side('Onion Ring')
            print('Onion Ring as a side added to order' )
        # add onion rings to the order
        if name==4:
            s.add_into_side('Baked Bean')
            print('Baked Bean as a side added to order' )
        print("\nDo You want to order another side?")
        print("Press 1 for YES")
        print("Press 2 for NO")
        val=input("Press : ")
        try:
            val = int(val)
            if(val <= 0 or val >2):
                raise
        except:
            while type(val) != int or val <= 0 or val >2 :
                try:
                    val = int(
                        input("Press 1 to 2 to select an option: "))
                except:
                    val = -1        
                    
        if val==1:
            c=0
        if val==2:
            # this will stop the while loop
            c=1
    # side_order_item ko "Side" class me store karna
    return s
 
def user_input_combo():
    c = Combo()
    #ask user for input and store it in combo object 
    # calling the other function to get the user data
    c.b=user_input_burger()
    c.d=user_input_drink()
    c.s=user_input_side()

    return c 

def menu():
    print("\nWhat do you want to order?")
    print("Press 1 for Burger")
    print("Press 2 for Drink")
    print("Press 3 for Side")
    print("Press 4 for Combo")
    choice = input("Enter Choice: ")
    try:
        choice = int(choice)
        if(choice < 0):
            raise
    except:
        while type(choice) != int or choice <= 0 or choice >4 :
            try:
                choice = int(
                    input("Press 1 to 4 to select an option: "))
            except:
                choice = -1
    return choice

class Order:
    burger_order=[]    
    drink_order=[]    
    side_order=[]    
    def add_into_burger(self,burgers):
        for burger in burgers:
            self.burger_order.append(burger)
        print(self.burger_order)
    def add_into_drink(self,drinks):
        for drink in drinks:
            self.drink_order.append(drink)
    def add_into_side(self,sides):
        for side in sides:
            self.side_order.append(side)
    def add_into_combo(self,burger,drink,side):
        for val in burger:
            self.burger_order.append(val)
        for val in drink:
            self.drink_order.append(val)
        for val in side:
            self.side_order.append(val)
    
    def printOrder(self):
        print(self.burger_order)
        print(self.drink_order)
        print(self.side_order)

    def take_order(self):
    #ask user for name for the order 
    #repeat taking order until client is done 
    #display order details
    #display a thank you message
        print("Welcome to Burger Shop")
        d=0
        while d<1:
            value = menu()
            if value ==1:
                burgers = user_input_burger()
                self.add_into_burger(burgers.get_burger_info())
            if value==2:
                drinks = user_input_drink()
                self.add_into_drink(drinks.get_drink_info())
            if value==3:
                side = user_input_side()
                self.add_into_side(side.get_side_info())
            if value==4:
                combo = user_input_combo()
                self.add_into_combo(combo.b.get_burger_info(),combo.d.get_drink_info(), combo.s.get_side_info())
            print("Do You want to order another thing?")
            print("Press 1 for YES")
            print("Press 2 for NO")
            val=input("Press : ")
            try:
                val = int(val)
                if(val <= 0 or val >2):
                    raise
            except:
                while type(val) != int or val <= 0 or val >2 :
                    try:
                        val = int(
                            input("Press 1 to 2 to select an option: "))
                    except:
                        val = -1        
            
            if val==1:
                d=0
            if val==2:
                # this will stop the while loop
                d=1

order = Order()
order.take_order()
order.printOrder()

