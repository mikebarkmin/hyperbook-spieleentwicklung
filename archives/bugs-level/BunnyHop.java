import org.openpatch.scratch.*;
import org.openpatch.scratch.extensions.*;

public class BunnyHop extends Stage
{
    private Spieler bugs;
    private StachelFeind ingo;
    private Plattform letzte;
    private int distanz = 0;
    private boolean geladen = false;

  public static void main(String[] args) {
    new BunnyHop();
  }

    public BunnyHop()
    {
        super(800, 400, Renderer.JAVA);
        this.setDebug(false);
        this.reset();
        geladen = true;
    }

    public void reset() {
        distanz = 0;
        bugs = new Spieler();
        bugs.setPosition(80, 180);
        this.add(bugs);

        ingo = new StachelFeind(bugs);
        ingo.setPosition(750, 210);
        this.add(ingo);

        letzte = new Plattform(this, bugs, false);
        letzte.setPosition(0, 340);
        for (int i = 0; i < 10; i++) {
            Plattform p = new Plattform(this, bugs, this.pickRandom(1, 10) > 5);
            p.setPosition(letzte.getX() + letzte.getWidth() / 2 + p.getWidth() / 2, 340);
            letzte = p;
            this.add(p);
        }
    }

    public Plattform getLetzte() {
        return this.letzte;
    }

    public void setLetzte(Plattform pLetzte) {
        this.letzte = pLetzte;
    }

    public void run() {
        if (!geladen) return;
        if (!bugs.hatVerloren()) {
            this.distanz++;
            this.display("Punkte: " + this.distanz);
        } else {
            this.removeAll();
            this.display("Game Over: " + this.distanz + " (Drücke r für einen Neustart)");
            if (this.isKeyPressed(KeyCode.VK_R)) {
                this.reset();
            }
        }

    }
}
