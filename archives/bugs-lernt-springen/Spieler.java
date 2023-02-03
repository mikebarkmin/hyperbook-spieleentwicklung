import org.openpatch.scratch.*;

public class Spieler extends AnimatedSprite
{
    Boolean springt = false;
    Boolean faellt = false;
    float sprungGeschwindigkeit = 1;
    float sprungHoehe = 50;
    
    float fallGeschwindigkeit = 1;
    float bodenHoehe = 185;

    public Spieler()
    {
        this.addAnimation("gehen", "Grafiken/Players/bunny1_walk%d.png", 2);
    }

    public void run() {
        this.playAnimation("gehen");
        
        if (springt) {
            changeY(-sprungGeschwindigkeit);
            if (getY() <= sprungHoehe) {
                faellt = true;
                springt = false;
                setY(sprungHoehe);
            }
        } else if (faellt) {
            changeY(fallGeschwindigkeit);
            if (getY() >= bodenHoehe) {
                faellt = false;
                setY(bodenHoehe);
            }
        }
        
        if (!faellt && !springt && isKeyPressed(KeyCode.VK_SPACE)) {
            springt = true;
        }
    }
}
