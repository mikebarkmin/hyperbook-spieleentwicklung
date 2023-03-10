---
name: 🥉 Schneller mit der Zeit
---

# Epic: Schneller mit der Zeit

Das Spiel soll alle paar Sekunden schneller werden.

:::collapsible{title="Hilfe: Globale Geschwindigkeit" id="570315"}

Zunächst wollen wir ein Attribut "geschwindigkeit" in der Level haben, welches die Geschwindigkeit des Spiels repräsentiert. Dieses Attribut verändern wir alle 5000 Millisekunden (5 Sekunden).

```java
public class Level extends Stage {
    private float geschwindigkeit = 1;

    // ...

    public void run() {
        if (this.getTimer().everyMillis(5000)) {
            geschwindigkeit += 0.5;
        }
    }
}
```

:::

:::collapsible{title="Hilfe: Geschwindigkeit nutzen" id="330385"}

Damit wir die Geschwindigkeit in anderen Klassen nutzen können, müssen zunächst einen Methode in der Klasse Level hinzufügen.

```java
public float getGeschwindigkeit() {
    return geschwindigkeit;
}
```

Jetzt können wir die Methode in anderen Klassen nutzen.

:::

:::collapsible{title="Hilfe: Beispiel Implementierung" id="967234"}

::archive[BlueJ Projekt: Schneller mit der Zeit]{name="epic-schneller-mit-der-zeit"}

:::