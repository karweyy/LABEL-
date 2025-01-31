



pdf.setTextColor(0, 0, 255); // Couleur bleue pour les liens
pdf.text(ficheClient, 10, 75);
pdf.text(diagnostic, 10, 100);
pdf.text(Facture, 10, 125);

// Ajouter les liens cliquables dans le PDF
pdf.link(10, 75, pdf.getTextWidth(ficheClient), 10, { url: ficheClient });
pdf.link(10, 100, pdf.getTextWidth(diagnostic), 10, { url: diagnostic });
pdf.link(10, 130, pdf.getTextWidth(Facture), 10, { url: Facture });
