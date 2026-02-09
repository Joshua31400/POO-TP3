package Facade;

public class Main {
    public static void main(String[] args) {
        CommandeValidation guichet = new CommandeValidation();

        guichet.validerCommande("Joshua_Budgen", "Campus Ynov Toulouse");
    }
}