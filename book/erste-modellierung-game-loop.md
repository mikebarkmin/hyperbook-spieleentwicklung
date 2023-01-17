---
name: 🖊 Erste Modellierung des Game Loops
index: 3
---

# Erste Modellierung des Game Loops

Die [Modellierung von Klassen](/erste-modellierung-von-klassen) legt die Grundlage für die weitere Arbeit am Spiel. Die wahrscheinlich wichtigste Komponente im Spiel ist der sogenannte Game Loop.

Diesen werden wir jetzt für unser Spiel Bunny Hop modellieren. Im Allgemeinen kann der Game Loop in drei Phasen aufgeteilt werden.

1. **Eingabe**: Verarbeitung der Eingabe des Spielers
2. **Simulation**: Veränderung der Attribute der Objekte
3. **Ausgabe**: Darstellung/Zeichnen der Objekte

:::alert{info}
Der Game Loop wird kontinuierlich ausgeführt und ist meisten beschränkt. In userem Fall auf 60 Ausführungen in der Sekunde.
:::

Für jede der Phasen müssen wir nun überlegen was in unserem Spiel passieren soll.

## Eingabe

In dieser Phase werden zu Beginn des Game Loop Durchlaufs alle Eingaben verarbeitet, die ein Benutzer seit dem letzten Durchlauf getätigt hat.

### 🖊 Aufgabe

Lest euch nochmal die [Spielidee](/die-spielidee) durch und formuliert welche Eingabe auf einer Tastatur einen Effekt auf unser Spiel haben sollen.

## Simulation

In dieser Phase wird auf Grundlage der eventuellen Eingaben des Benutzers sowie des alten Zustands der Objekte neue Zustände der Objekte berechnet. Diese Phase wird auch ausgeführt, wenn keine Benutzereingaben getätigt worden sind.

### 🖊 Aufgabe

Gegen ist der folgende Zustand der Objekte im Spiel:

::excalidraw{src="/assets/game-loop-simulation.excalidraw" aspectRatio="4/3" autoZoom=true center=true}

Formuliert wie sich die Zustände der Objekte verändern sollen, wenn der Benutzer bestimmte Eingaben getätigt hat oder wenn keine Eingabe registriert wurde.

## Ausgabe

In der dritten Phase werden die neuen Zustände der Objekte grafisch dargestellt.

### 🖊 Aufgabe

Zeichen das Spiel für die folgenden Zustände der Objekte.

::excalidraw{src="/assets/game-loop-simulation.excalidraw" aspectRatio="4/3" autoZoom=true center=true}

Nutzt dazu diese Vorlage: [Excalidraw](https://excalidraw.com/#json=zfDczD_y173juwVFxjf7i,lpv40HUWlo-JnN54BvdteQ)