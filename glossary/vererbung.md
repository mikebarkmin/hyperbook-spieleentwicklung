---
name: Vererbung
---

# Vererbung

Die Vererbung ist eines der grundlegenden Konzepte der Objektorientierung und hat große Bedeutung in der Softwareentwicklung. Die Vererbung dient dazu, aufbauend auf existierenden Klassen (Oberklasse) neue Klassen (Unterklassen) zu schaffen, wobei die Beziehung zwischen ursprünglicher und neuer Klasse dauerhaft ist. Die Vererbung dient der Dokumentation von Ähnlichkeiten zwischen Klassen, was insbesondere in den frühen Phasen des Softwareentwurfs von Bedeutung ist.

Das folgende Klassendiagramm zeigt eine Vererbungssituation, bei der die Unterklasse Sportauto und SUV Erweiterungen einer Basisklasse Auto darstellen.

```mermaid
classDiagram

    SUV --|> Auto
    Sportauto --|> Auto

    class Auto {
        geschwindigkeit: int
        farbe: Color
        anzahlTueren: int
        kennzeichen: String

        beschleunigen()
        bremsen()
        umlackieren(neueFarbe: Color)
        gibGeschwindigkeit(): int
    }

    class SUV {
        kofferraumOffen: boolean
        kofferraumOeffnen()
        kofferraumSchliessen()
    }

    class Sportauto {
        tiefergelegt: boolean
        tunen()
        beschleunigen()
    }
```

## Übernehmen, ergänzen und überschreiben

Bei der Vererbung übernimmt die Unterklasse die Attribute und Methoden der Oberklasse.

Eine übernommene Methode kann dabei neu definiert (überschrieben) werden. Im Klassendiagramm ist zum Beispiel gezeigt, dass die Klasse `Sportauto` die Methode `beschleunigen` neu definiert.

Die Unterklasse kann um zusätzliche Attribute und Methoden erweitert werden. Im Klassendiagramm ist zum Beispiel gezeigt, dass die Klasse `SUV` ein neues Attribut `kofferraumOffen` besitzt.

## Spezialisierung und Generalisierung

Wenn eine neue Oberklasse definiert wird, dann sprechen wir von einer Generalisierung.

Wird hingegen eine neue Unterklasse definiert, dann sprechen wir von einer Spezialisierung.

## Überprüfe dich

1. Gegeben ist folgendes Klassendiagramm ([Link zum Mermaid-Live Editor](https://mermaid.live/edit#pako:eNqtkMFuwjAMhl8l8mmTKrQCKuDbJt6A25SL1xqIaJ0qSbVB1Xdfmm4CIXHDp1-ff_u33ENpKwaEsibvt4YOjhotKlYi6r3dc636CY11cJa9Z1RGwg3lb1Mewx1tHRt_x4wPO-rYofqytmYSLdfmuFleXicw_HemSz5ISPgZpzzKgwwadg2ZKj4k5WgIR25YA0ZZkTtp0DL6qAt2d5YSMLiOM-jaigL__Q9wT7WPtCUB7OEHsCgyOAPmy2K2Wb8V83yxWK03UQwZXKyNI3myfyadxodfpW57cQ)). Modifiziere das Klassendiagramm so, dass das Konzept der Vererbung sinnvoll genutzt ist.

```mermaid
classDiagram
    class Apfel {
        groesse: int
        gewicht: int
        preis: int
        istSauer: boolean

        essen()
    }

    class Banane {
        groesse: int
        gewicht: int
        preis: int
        herkunfsland: String

        essen()
    }
```

:::collapsible{id="loesung1" title="Lösung"}
```mermaid
classDiagram
    Apfel --|> Frucht
    Banane --|> Frucht
    class Frucht {
        groesse: int
        gewicht: int
        preis: int

        essen()
    }
    class Apfel {
        istSauer: boolean
    }

    class Banane {
        herkunfsland: String
    }
```
:::
 

2. Es existieren die Klassen Fussballer, Turnerin und Judoka. Eine neue Klasse Sportlerin wird angelegt. Handlet es sich um eine Spezialisierung oder Generalisierung?

:::collapsible{id="loesung2" title="Lösung"}
Generalisierung
:::