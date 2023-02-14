import org.openpatch.scratch.*;

public class Plattform extends Sprite
{
    boolean istKaputt;
    boolean beruehrt = false;
    Spieler spieler;
    BunnyHop spiel;

    public Plattform(BunnyHop pSpiel, Spieler pSpieler, boolean pIstKaputt)
    {
        spiel = pSpiel;
        spieler = pSpieler;
        istKaputt = pIstKaputt;
        this.addCostume("ganz", "Grafiken/Environment/ground_grass_small.png");
        this.addCostume("kaputt", "Grafiken/Environment/ground_grass_small_broken.png");
        this.addTimer("verschwinden");
        this.setSize(50);

        if (istKaputt) {
            this.switchCostume("kaputt");
        } else {
            this.switchCostume("ganz");
        }
    }

    public void beruehren() {
        beruehrt = true;
    }

    public void run() {
        this.changeX(-2);
        if (istKaputt && beruehrt && this.getTimer("verschwinden").afterMillis(500)) {
            this.hide();
        }
        if (this.getX() + this.getWidth() < 0) {
            Plattform letzte = spiel.getLetzte();
            this.setX(letzte.getX() + letzte.getWidth() / 2 + this.getWidth() / 2);
            beruehrt = false;
            this.show();
            spiel.setLetzte(this);
        }
    }

}
