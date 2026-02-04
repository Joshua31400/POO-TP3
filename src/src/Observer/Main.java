package Observer;

public class Main {
    public static void main(String[] args) {
        BurgerFastRestaurant restaurant = new BurgerFastRestaurant();

        ClientVIP joshua = new ClientVIP("Joshua");
        ClientVIP sarah = new ClientVIP("Sarah");
        ClientVIP marc = new ClientVIP("Marc");

        restaurant.ajouterClient(joshua);
        restaurant.ajouterClient(sarah);


        restaurant.nouvellePromotion("Veggie Delight", 20.0);

        System.out.println("---");

        restaurant.ajouterClient(marc);
        restaurant.retirerClient(joshua);

        restaurant.nouvellePromotion("Chicken Mega Deal", 50.0);
    }
}