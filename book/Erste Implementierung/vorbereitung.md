---
name: 🖊 Vorbereitung
index: 0
---

# Vorbereitung

Nun werden wir mit der Implementierung des Spiels beginnen. Dazu laden wir uns zuerst die Bibliothek **Scratch for Java** herunter. Diese wird uns die Spieleentwicklung vereinfachen.

::download[Scratch for Java]{src="https://github.com/openpatch/scratch-for-java/releases/download/v3.0.0/scratch-standalone-windows-amd64.jar"}

Anschließend laden wir uns die Grafiken für unser Spiel herunter.

::download[Grafiken]{src="https://www.kenney.nl/content/3-assets/110-jumper-pack/jumperpack_kenney.zip"}

## Einrichtung BlueJ

Wir öffnen BlueJ und legen ein neues Projekt an.

![](/assets/vorbereitung/neues-projekt.png)

Dieses Projekt nennen wir **Bunny Hop**.

Jetzt müssen wir die Bibliothek **Scratch for Java** registrieren. Das machen wir durch die folgenden Schritte:

1. Den Projekt-Ordner von **Bunny Hop** im Dateimanager öffnen.
2. Einen Ordner **+libs** im Hauptverzeichnis des Projekt-Ordners anlegen.
3. Die Jar-Datei von Scratch for Java in den Ordner **+libs** verschieben.
4. BlueJ neustarten. Erst danach wir die neue Bibliothek registriert.

Als nächstes wollen wir die Grafiken verfügbar machen. Dazu führen wir folgende Schritte durch:

1. Den Projekt-Ordner von **Bunny Hop** im Dateimanager öffnen.
2. Einen Ordner Grafiken anlegen.
3. Die Zip-Datei jumperpack_kenny.zip entpacken.
4. Den Inhalt des Ordners PNG in den Ordner Grafiken verschieben.

Deine Ordnerstruktur sollte jetzt wie folgt aussehen:

```bash
├── assets
│   ├── Background
│   │   ├── bg_layer1.png
│   │   ├── bg_layer2.png
│   │   ├── bg_layer3.png
│   │   └── bg_layer4.png
│   ├── Enemies
│   │   ├── cloud.png
│   │   ├── flyMan_fly.png
│   │   ├── flyMan_jump.png
│   │   ├── flyMan_stand.png
│   │   ├── flyMan_still_fly.png
│   │   ├── flyMan_still_jump.png
│   │   ├── flyMan_still_stand.png
│   │   ├── spikeBall1.png
│   │   ├── spikeBall_2.png
│   │   ├── spikeMan_jump.png
│   │   ├── spikeMan_stand.png
│   │   ├── spikeMan_walk1.png
│   │   ├── spikeMan_walk2.png
│   │   ├── springMan_hurt.png
│   │   ├── springMan_stand.png
│   │   ├── sun1.png
│   │   ├── sun2.png
│   │   ├── Thumbs.db
│   │   ├── wingMan1.png
│   │   ├── wingMan2.png
│   │   ├── wingMan3.png
│   │   ├── wingMan4.png
│   │   └── wingMan5.png
│   ├── Environment
│   │   ├── cactus.png
│   │   ├── grass1.png
│   │   ├── grass2.png
│   │   ├── grass_brown1.png
│   │   ├── grass_brown2.png
│   │   ├── ground_cake_broken.png
│   │   ├── ground_cake.png
│   │   ├── ground_cake_small_broken.png
│   │   ├── ground_cake_small.png
│   │   ├── ground_grass_broken.png
│   │   ├── ground_grass.png
│   │   ├── ground_grass_small_broken.png
│   │   ├── ground_grass_small.png
│   │   ├── ground_sand_broken.png
│   │   ├── ground_sand.png
│   │   ├── ground_sand_small_broken.png
│   │   ├── ground_sand_small.png
│   │   ├── ground_snow_broken.png
│   │   ├── ground_snow.png
│   │   ├── ground_snow_small_broken.png
│   │   ├── ground_snow_small.png
│   │   ├── ground_stone_broken.png
│   │   ├── ground_stone.png
│   │   ├── ground_stone_small_broken.png
│   │   ├── ground_stone_small.png
│   │   ├── ground_wood_broken.png
│   │   ├── ground_wood.png
│   │   ├── ground_wood_small_broken.png
│   │   ├── ground_wood_small.png
│   │   ├── mushroom_brown.png
│   │   ├── mushroom_red.png
│   │   ├── spike_bottom.png
│   │   ├── spikes_bottom.png
│   │   ├── spikes_top.png
│   │   └── spike_top.png
│   ├── HUD
│   │   ├── carrots.png
│   │   ├── coin_bronze.png
│   │   ├── coin_gold.png
│   │   ├── coin_silver.png
│   │   └── lifes.png
│   ├── Items
│   │   ├── bronze_1.png
│   │   ├── bronze_2.png
│   │   ├── bronze_3.png
│   │   ├── bronze_4.png
│   │   ├── bubble.png
│   │   ├── carrot_gold.png
│   │   ├── carrot.png
│   │   ├── gold_1.png
│   │   ├── gold_2.png
│   │   ├── gold_3.png
│   │   ├── gold_4.png
│   │   ├── jetpack_item.png
│   │   ├── jetpack.png
│   │   ├── portal_orange.png
│   │   ├── portal_yellow.png
│   │   ├── powerup_bubble.png
│   │   ├── powerup_bunny.png
│   │   ├── powerup_empty.png
│   │   ├── powerup_jetpack.png
│   │   ├── powerup_wings.png
│   │   ├── silver_1.png
│   │   ├── silver_2.png
│   │   ├── silver_3.png
│   │   ├── silver_4.png
│   │   ├── spring_in.png
│   │   ├── spring_out.png
│   │   ├── spring.png
│   │   ├── wing_left.png
│   │   └── wing_right.png
│   ├── Particles
│   │   ├── flame.png
│   │   ├── lighting_blue.png
│   │   ├── lighting_yellow.png
│   │   ├── particle_beige.png
│   │   ├── particle_blue.png
│   │   ├── particle_brown.png
│   │   ├── particle_darkBrown.png
│   │   ├── particle_darkGrey.png
│   │   ├── particle_green.png
│   │   ├── particle_grey.png
│   │   ├── particle_pink.png
│   │   ├── portal_orangeParticle.png
│   │   ├── portal_yellowParticle.png
│   │   └── smoke.png
│   └── Players
│       ├── bunny1_hurt.png
│       ├── bunny1_jump.png
│       ├── bunny1_ready.png
│       ├── bunny1_stand.png
│       ├── bunny1_walk1.png
│       ├── bunny1_walk2.png
│       ├── bunny2_hurt.png
│       ├── bunny2_jump.png
│       ├── bunny2_ready.png
│       ├── bunny2_stand.png
│       ├── bunny2_walk1.png
│       └── bunny2_walk2.png
├── +libs
│   └── scratch-standalone-windows-amd64.jar
├── package.bluej
└── README.TXT
```

## Das erste Programm

Um zu überprüfen, ob alles funktioniert hat, werden wir jetzt ein kleines erstes Programm erstellen.

Erstelle dazu eine Klasse **BunnyHop** und eine Klasse **Bugs**. Anschließend kopiere d

::::tabs{id="845876"}

:::tab{title="BunnyHopp" id="605171"}

```java
import org.openpatch.scratch.*;

public class BunnyHop extends Stage
{
    Spieler bugs; 
    
    public BunnyHop()
    {
       bugs = new Spieler();
       this.add(bugs);
    }
}

```

:::

:::tab{title="Bugs" id="605170"}

```java
import org.openpatch.scratch.*;

public class Spieler extends Sprite
{
    
    public Spieler()
    {
      this.addCostume("stehen", "Grafiken/Players/bunny1_stand.png");
    }

}

```

:::

::::

Um Bugs auf der Bühne zu sehen, musst du das Programm nur noch ausführen. Erzeuge dazu ein neues Objekt von der Klasse **BunnyHop**.

![](/assets/vorbereitung/ausführen.png)

Anschließend solltest du die folgende Ausgabe sehen.

![](/assets/vorbereitung/bunny.png)

:::alert{warn}
Es kann immer nur ein Objekt der Klasse Stage erzeugt werden. Sei also sicher, dass du das Fenster immer schließt, sonst kommt es zu einer Fehlermeldung.

![](/assets/vorbereitung/nur-eine-stage-fehler.png)
:::