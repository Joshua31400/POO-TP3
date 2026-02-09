package Builder;

import java.util.ArrayList;
import java.util.List;

public class SandwichBuilder {
    private String pain;
    private String viande;
    private String fromage;
    private List<String> legumes = new ArrayList<>();
    private String sauce;
    private boolean grille = false;

    // Le Pain est obligatoire
    public SandwichBuilder(String pain) {
        this.pain = pain;
    }

    public SandwichBuilder ajouterViande(String viande) {
        this.viande = viande;
        return this;
    }
    public SandwichBuilder ajouterFromage(String fromage) {
        this.fromage = fromage;
        return this;
    }
    public SandwichBuilder ajouterLegume(String legume) {
        this.legumes.add(legume);
        return this;
    }
    public SandwichBuilder ajouterSauce(String sauce) {
        this.sauce = sauce;
        return this;
    }
    public SandwichBuilder faireGriller() {
        this.grille = true;
        return this;
    }

    public Sandwich build() {
        return new Sandwich(pain, viande, fromage, legumes, sauce, grille);
    }
}