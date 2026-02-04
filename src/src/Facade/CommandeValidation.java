package Facade;

public class CommandeValidation {
    private ServiceUtilisateur userSvc;
    private ServiceStock stockSvc;
    private ServiceHoraire horaireSvc;
    private ServiceLivraison livraisonSvc;
    private ServiceGeolocalisation geoSvc;

    public CommandeValidation() {
        this.userSvc = new ServiceUtilisateur();
        this.stockSvc = new ServiceStock();
        this.horaireSvc = new ServiceHoraire();
        this.livraisonSvc = new ServiceLivraison();
        this.geoSvc = new ServiceGeolocalisation();
    }

    public void validerCommande(String idUser, String adresse) {
        System.out.println("Début de la validation de la commande");

        if (!userSvc.verifierConnexion(idUser)) {
            System.out.println("ERREUR : Utilisateur non connecté.");
            return;
        }
        if (!horaireSvc.estOuvert()) {
            System.out.println("ERREUR : Restaurant fermé.");
            return;
        }
        if (!geoSvc.adresseDansPerimetre(adresse)) {
            System.out.println("ERREUR : Adresse hors zone.");
            return;
        }
        if (!stockSvc.verifierIngredients()) {
            System.out.println("ERREUR : Rupture de stock.");
            return;
        }
        if (!livraisonSvc.livreurDisponible()) {
            System.out.println("ERREUR : Pas de livreur.");
            return;
        }
        System.out.println("Commande validée");
    }
}