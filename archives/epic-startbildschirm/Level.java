import org.openpatch.scratch.*;

public class Level extends Stage {

    private Plattform letzte;
    private Window window;

    public Level(Window pWindow) {
        this.window = pWindow;
        
        Spieler bugs = new Spieler(this);
        bugs.setPosition(100, 250);
        this.add(bugs);

        letzte = new Plattform(this);
        letzte.setPosition(0, 340);

        for(int i = 0; i < 20; i++) {
            this.neuePlattform();
        }
    }
    
    public void whenKeyPressed(int pKeyCode) {
        if(pKeyCode == KeyCode.VK_S) {
            this.window.switchStage("startbildschirm");
        }
    }
    public void neuePlattform() {
        Plattform p = new Plattform(this);
        // die neue Plattform an die Letzte anreihen
        p.setPosition(letzte.getX() + letzte.getWidth() / 2 + p.getWidth() /2, 340);
        // die neue Plattform der Bühne (Stage) hinzufügen            
        this.add(p);
        // die neue Plattform soll nun unsere neue letzte Plattform sein
        letzte = p;
    }
    
    public void run() {
        this.display("Drücke S, um zum Startbildschirm zu gelangen. Das Level wird pausiert!");
    }
}