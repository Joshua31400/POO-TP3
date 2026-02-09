package Adapter;

import java.util.Map;

public interface AnalyseurVentes {
    double getTotalVentes();

    int getNbCommandes();

    Map<String, Double> getCAParProduit();
}