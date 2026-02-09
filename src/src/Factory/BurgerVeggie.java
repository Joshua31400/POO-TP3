package Factory;

public class BurgerVeggie implements Burger {
    @Override
    public void preparer() {
        System.out.println("Préparation Veggie : Pain complet, salade, tomate, carotte");
    }

    @Override
    public double getPrix() {
        return 8.0;
    }
}