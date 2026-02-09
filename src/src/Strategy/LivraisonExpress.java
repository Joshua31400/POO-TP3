package Strategy;

public class LivraisonExpress implements StrategieLivraison {
    @Override
    public double calculerFrais(double distanceKm) {
        return 5.0 + (distanceKm * 1.0);
    }
}