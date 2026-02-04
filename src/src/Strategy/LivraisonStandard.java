package Strategy;

public class LivraisonStandard implements StrategieLivraison {
    @Override
    public double calculerFrais(double distanceKm) {
        return 2.0 + (distanceKm * 0.5);
    }
}