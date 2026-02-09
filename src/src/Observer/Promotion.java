package Observer;

public class Promotion {
    private String nom;
    private double reduction; // En pourcentage ou montant

    public Promotion(String nom, double reduction) {
        this.nom = nom;
        this.reduction = reduction;
    }

    @Override
    public String toString() {
        return "Promo Flash : " + nom + " (-" + reduction + "%)";
    }
}
