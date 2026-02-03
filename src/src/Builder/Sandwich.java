package Builder;

import java.util.List;
import java.util.ArrayList;

public class Sandwich {
    private String pain;
    private String viande;
    private String fromage;
    private List<String> legumes = new ArrayList<>();
    private String sauce;
    private boolean grille;

    public Sandwich(String pain, String viande, String fromage, List<String> legumes, String sauce, boolean grille) {
        this.pain = pain;
        this.viande = viande;
        this.fromage = fromage;
        this.legumes = legumes;
        this.sauce = sauce;
        this.grille = grille;
    }

    @Override
    public String toString() {
        return "Builder.Sandwich [" +
                "Pain='" + pain + '\'' +
                ", Viande='" + (viande != null ? viande : "Aucune") + '\'' +
                ", Fromage='" + (fromage != null ? fromage : "Aucun") + '\'' +
                ", Légumes=" + (legumes.isEmpty() ? "Aucun" : legumes) +
                ", Sauce='" + (sauce != null ? sauce : "Aucune") + '\'' +
                ", Grillé=" + (grille ? "Oui" : "Non") +
                ']';
    }
}