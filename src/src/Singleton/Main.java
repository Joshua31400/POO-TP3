package Singleton;

public class Main {
    public static void main(String[] args) {

        System.out.println("Caissier1: ");
        TPE tpe1 = TPE.getInstance();
        tpe1.encaisser(15.0);

        System.out.println("\nCaissier2: ");
        TPE tpe2 = TPE.getInstance();
        tpe2.encaisser(10.0);

        System.out.println("\nCaissiers3:");
        TPE tpe3 = TPE.getInstance();
        tpe3.encaisser(50.0);

        // PREUVE que c'est le même objet
        System.out.println("\nTest");
        if (tpe1 == tpe3) {
            System.out.println("Succès : Il n'y a qu'un seul TPE !");
        } else {
            System.out.println("Erreur : Il y a plusieurs TPE, c'est impossible !");
        }
        System.out.println("Total après reset : " + tpe1.getChiffreAffaires() + "€");
    }
}