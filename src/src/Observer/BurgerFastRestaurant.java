package Observer;

import java.util.ArrayList;
import java.util.List;

public class BurgerFastRestaurant {
    private List<Observateur> abonnes = new ArrayList<>();

    public void ajouterClient(Observateur client) {
        abonnes.add(client);
        System.out.println("Nouveau VIP ajouté à la liste.");
    }
    public void retirerClient(Observateur client) {
        abonnes.remove(client);
        System.out.println("Un VIP s'est désabonné.");
    }
    public void nouvellePromotion(String nomPromo, double reduction) {
        Promotion p = new Promotion(nomPromo, reduction);
        System.out.println("\nLANCEMENT DE LA PROMO : " + nomPromo);

        notifierToutLeMonde(p);
    }
    private void notifierToutLeMonde(Promotion p) {
        for (Observateur obs : abonnes) {
            obs.update(p);
        }
    }
}