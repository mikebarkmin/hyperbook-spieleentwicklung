---
name: 🥉 Tag und Nacht
---

# Epic: Tag und Nacht

:::collapsible{title="Hilfe: Globale Eigenschaft" id="536496"}

Ob Tag ist, kannst du dir am besten als :t[Attribut]{#attribut} in deiner Level-Klasse speichern. Definiere einen :t[Getter]{#vererbung-java} und schon können alle Objekte, die die :t[Klasse]{#klasse} kennen darauf zugreifen.

```java
private boolean tag = false;

public boolean istTag() {
    return tag;
}
```

:::

:::collapsible{title="Hilfe: Tag abhängig von der Zeit" id="303419"}

Mit einem Timer können für alle paar Sekunden unterschiedliche Anweisungen ausführen.

```java
if (this.getTimer().interalMillis(6000, 4000)) {
    // 6 Sekunden ist Tag
} else {
    // 4 Sekunden ist Nacht
}
```

:::

:::collapsible{title="Hilfe: Beispiel Implementierung" id="9672143"}

::archive[Beispiel Implementierung]{name="epic-tag-und-nacht"}

:::