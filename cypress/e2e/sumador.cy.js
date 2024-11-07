describe("Contador de Cadenas", () => {
  it("Muestra la suma correcta de los números en la cadena", () => {
    // Cambia la URL a donde se está ejecutando tu servidor local
    cy.visit("http://localhost:3000"); // Asegúrate de que tu servidor está corriendo en este puerto

    // Ingresar una cadena con números separados por coma
    cy.get("#cadena").type("2,3,5");

    // Si es necesario, ingresar un delimitador personalizado
    cy.get("#delimitador").type(","); // Esto es solo si tu input para delimitador existe

    // Hacer clic en el botón para procesar la cadena
    cy.get("#procesar-button").click();

    // Verificar que el resultado sea correcto
    cy.get("#resultado-div").should("contain", "10");
  });

  it("Si la cadena está vacía, debe devolver 0", () => {
    cy.visit("http://localhost:3000");
    
    cy.get("#cadena").type(""); // Cadena vacía
    
    cy.get("#procesar-button").click();

    cy.get("#resultado-div").should("contain", "0");
  });

  it("Si hay un número mayor a mil, debe ser ignorado", () => {
    cy.visit("http://localhost:3000");

    cy.get("#cadena").type("2,3,1002,5"); // Incluyendo un número mayor a mil

    cy.get("#procesar-button").click();

    cy.get("#resultado-div").should("contain", "10"); // El número 1002 debe ser ignorado
  });
});

