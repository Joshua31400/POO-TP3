package Adapter;

public class Main {
    public static void main(String[] args) {
        System.out.println("demarrage de l'analyse");

        LecteurCSV lecteur = new LecteurCSV("src/src/Adapter/ventes.csv");

        AnalyseurVentes adaptateur = new CSVAdapter(lecteur);

        BurgerAnalytics analytics = new BurgerAnalytics(adaptateur);

        analytics.genererRapport();
    }
}
