package Observer;

public class ClientVIP implements Observateur {
    private String nom;

    public ClientVIP(String nom) {
        this.nom = nom;
    }

    @Override
    public void update(Promotion promo) {
        System.out.println("Notification pour " + nom + " : Super ! Je viens de recevoir une " + promo);
    }
}
