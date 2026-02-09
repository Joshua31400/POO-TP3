package Singleton;

public class TPE {
    private static TPE instance;
    private double ChiffreAffaire;

    private TPE () {
        this.ChiffreAffaire = 0.0;
        System.out.println("Initialisaation du TPE");
    }

    public static TPE getInstance() {
        if (instance == null) {
            instance = new TPE();
        }
        return instance;
    }

    public void encaisser(double montant) {
        this.ChiffreAffaire += montant;
        System.out.println("Encaissement de " + montant + "€. Total actuel : " + this.ChiffreAffaire + "€");
    }

    public double getChiffreAffaires() {
        return ChiffreAffaire;
    }
}
