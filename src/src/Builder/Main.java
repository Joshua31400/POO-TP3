package Builder;

public class Main {
    public static void main(String[] args) {
        Sandwich complet = new SandwichBuilder("Complet")
                .ajouterViande("Poulet")
                .ajouterFromage("Cheddar")
                .ajouterLegume("Tomate")
                .ajouterLegume("Laitue")
                .ajouterSauce("Mayo")
                .faireGriller()
                .build();

        Sandwich vege = new SandwichBuilder("Ciabatta")
                .ajouterFromage("Emmental")
                .ajouterLegume("Oignon")
                .ajouterLegume("Cornichon")
                .ajouterSauce("Moutarde")
                .build();

        Sandwich simple = new SandwichBuilder("Baguette")
                .ajouterViande("Jambon")
                .build();

        System.out.println("Commande1: ");
        System.out.println(complet);

        System.out.println("\nCommande2: ");
        System.out.println(vege);

        System.out.println("\nCommande3: ");
        System.out.println(simple);
    }
}