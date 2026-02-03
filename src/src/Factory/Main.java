package Factory;

public class Main {
    public static void main(String[] args) {
        System.out.println("Bonjour\n");

        Burger b1 = BurgerFactory.createBurger(BurgerType.VEGGIE);
        b1.preparer();
        System.out.println("Prix : " + b1.getPrix() + "€\n");

        Burger b2 = BurgerFactory.createBurger(BurgerType.CHEESE);
        b2.preparer();
        System.out.println("Prix : " + b2.getPrix() + "€\n");

        Burger b3 = BurgerFactory.createBurger(BurgerType.CHICKEN);
        b3.preparer();
        System.out.println("Prix : " + b3.getPrix() + "€");
    }
}