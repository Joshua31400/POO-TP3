package Factory;

public class CheeseBurger implements Burger {
    @Override
    public void preparer() {
        System.out.println("Préparation Cheese : Pain sésame, steak haché, cheddar fondu.");
    }

    @Override
    public double getPrix() {
        return 10.0;
    }
}
