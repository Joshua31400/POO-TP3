package Adapter;

import java.util.HashMap;
import java.util.Map;

public class CSVAdapter implements AnalyseurVentes {

    // On garde les résultats en cache pour répondre rapidement aux méthodes
    private double totalVentes = 0;
    private int nbCommandes = 0;
    private Map<String, Double> caParProduit = new HashMap<>();

    // Constructeur : c'est ici qu'on fait le "Sale Boulot" de conversion
    public CSVAdapter(LecteurCSV lecteur) {
        analyserDonnees(lecteur);
    }

    private void analyserDonnees(LecteurCSV lecteur) {
        // On boucle à partir de 1 pour sauter l'en-tête (header) "date,produit..."
        for (int i = 1; i < lecteur.getNbLignes(); i++) {
            try {
                String[] colonnes = lecteur.getColonnes(i);

                String nomProduit = colonnes[1].trim();
                String prixQuantite = colonnes[2].trim();

                // Découpage de la chaîne pour récupérer prix et quantité
                String[] parts = prixQuantite.split("x");
                double prix = Double.parseDouble(parts[0]);
                int quantite = Integer.parseInt(parts[1]);

                double totalLigne = prix * quantite;

                this.totalVentes += totalLigne;
                this.nbCommandes++;

                // Ajout au total spécifique de ce produit
                double ancienTotalProduit = this.caParProduit.getOrDefault(nomProduit, 0.0);
                this.caParProduit.put(nomProduit, ancienTotalProduit + totalLigne);

            } catch (Exception e) {
                System.err.println("Ligne ignorée (erreur format) à l'index " + i);
            }
        }
    }

    @Override
    public double getTotalVentes() {
        return this.totalVentes;
    }
    @Override
    public int getNbCommandes() {
        return this.nbCommandes;
    }
    @Override
    public Map<String, Double> getCAParProduit() {
        return this.caParProduit;
    }
}
