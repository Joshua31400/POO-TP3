package Strategy;

public class Main {
    public static void main(String[] args) {
        Commande c1 = new Commande(20.0, 10.0, new LivraisonStandard());
        c1.afficherRecu();

        Commande c2 = new Commande(20.0, 10.0, new LivraisonExpress());
        c2.afficherRecu();

        Commande c3 = new Commande(20.0, 50.0, new ClickAndCollect());
        c3.afficherRecu();
    }
}