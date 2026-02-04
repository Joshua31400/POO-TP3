package Strategy;

public class Commande {
    private double prixPlats;
    private double distanceKm;

    private StrategieLivraison modeLivraison;

    public Commande(double prixPlats, double distanceKm, StrategieLivraison modeLivraison) {
        this.prixPlats = prixPlats;
        this.distanceKm = distanceKm;
        this.modeLivraison = modeLivraison;
    }

    public double calculerTotal() {
        // On délègue le calcul complexe à l'objet stratégie
        double frais = modeLivraison.calculerFrais(this.distanceKm);
        return prixPlats + frais;
    }

    public void afficherRecu() {
        double frais = modeLivraison.calculerFrais(this.distanceKm);
        double total = calculerTotal();

        // On récupère le nom de la classe pour savoir quel mode est utilisé
        String nomMode = modeLivraison.getClass().getSimpleName();

        System.out.println("Commande (" + nomMode + ")");
        System.out.println("Plats : " + prixPlats + "€");
        System.out.println("Distance : " + distanceKm + " km");
        System.out.println("Frais livraison : " + frais + "€");
        System.out.println("TOTAL : " + total + "€\n");
    }
}