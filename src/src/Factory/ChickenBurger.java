package Factory;

public class ChickenBurger implements Burger {
    @Override
    public void preparer() {
        System.out.println("Préparation Chicken : Pain burger, poulet pané croustillant, sauce BBQ.");
    }

    @Override
    public double getPrix() {
        return 9.0;
    }
}
