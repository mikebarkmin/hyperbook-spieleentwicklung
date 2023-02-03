import org.openpatch.scratch.*;

public class Plattform extends Sprite
{
    boolean istKaputt;
    
    public Plattform(boolean pIstKaputt)
    {
        istKaputt = pIstKaputt;
        this.addCostume("ganz", "Grafiken/Environment/ground_grass_small.png");
        this.addCostume("kaputt", "Grafiken/Environment/ground_grass_small_broken.png");
        
        if (istKaputt) {
            this.switchCostume("kaputt");
        } else {
            this.switchCostume("ganz");
        }
    }
}
