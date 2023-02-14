import org.openpatch.scratch.*;
import java.util.List;

public class Spieler extends AnimatedSprite
{
    Boolean springt = false;
    Boolean faellt = false;
    Boolean verloren = false;
    float sprungGeschwindigkeit = 5;
    float sprungHoehe = 40;

    float fallGeschwindigkeit = 5;
    float bodenHoehe = 185;

    public Spieler()
    {
        this.addAnimation("gehen", "Grafiken/Players/bunny1_walk%d.png", 2);
        this.addCostume("verletzt", "Grafiken/Players/bunny1_hurt.png");
        this.setSize(50);
    }

    public void verletzten() {
        this.verloren = true;
    }
    
    public boolean hatVerloren() {
        return this.verloren;
    }

    public void springen() {
        changeY(-sprungGeschwindigkeit);
        if (getY() <= sprungHoehe) {
            faellt = true;
            springt = false;
            setY(sprungHoehe);
        }
    }
    
    public void gravitation() {
        this.changeY(fallGeschwindigkeit);
        List<Sprite> plattformen = this.getTouchingSprites(Plattform.class);
        for (Sprite plattform : plattformen) {
            ((Plattform) plattform).beruehren();
        }
        faellt = true;
        while(this.getY() < 320 && plattformen.size() > 0) {
            this.changeY(-0.1);
            faellt = false;
            plattformen = this.getTouchingSprites(Plattform.class);
        }
    }

    public void run() {

        if (!verloren) {
            this.playAnimation("gehen");
            if (springt) {
                this.springen();
            } else {
                this.gravitation();
            }

            if (!faellt && !springt && isKeyPressed(KeyCode.VK_SPACE)) {
                springt = true;
            }
            if (this.getY() - this.getHeight() > 400) {
                this.verletzten();
            }
        } else {
            this.switchCostume("verletzt");
        }
    }
}
