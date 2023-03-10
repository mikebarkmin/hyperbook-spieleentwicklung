---
name: 🥈 Pause 
---

# Epic Pause

Das Spiel soll beim Drücken einer Taste pausiert werden. Beim erneuten Drücken der Taste soll das Spiel wieder aufgenommen werden.

:::collapsible{title="Hilfe: Attribut Pause" id="461068"}

Damit wir das Spiel global pausieren können, brauchen wir ein Attribut in der Level-Klasse und eine Methode `istPausiert`.

Außerdem müssen wir das Attribut verändern, wenn die P-Taste gedrückt wird.

```java
public class Level extends Stage {
    // ...
    private boolean pause;

    // ...
    public boolean istPausiert() {
        return pause;
    }
    // ...
    public void whenKeyPressed(int pKeyCode) {
        if(pKeyCode == KeyCode.VK_P) {
            // pause umkehren;
            this.pause = !this.pause;
        }
    }
    // ...
```

:::

:::collapsible{title="Hilfe: Pause in anderen Klassen nutzen" id="392533"}

In den anderen Klassen wie Spieler und Plattform, müssen wir das Level bekannt machen und in der run-Methode abfragen, ob das Spiel pausiert ist. Wenn dies der Fall ist, dann beenden wir den Methodenaufruf an dieser Stelle.

```java
public void run() {
    if (level.istPausiert()) {
        return;
    }
}
```

:::

:::collapsible{title="Hilfe: Beispiel Implementierung" id="967325"}

::archive[Beispiel Implementierung]{name="epic-pause"}

:::