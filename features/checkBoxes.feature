Feature: Interacción con checkboxes
    
    @seleccionarCasilla
    Scenario: Seleccionar una casilla si no está marcada
        Given estoy en la página de checkboxes
        When selecciono la primera casilla
        Then la primera casilla debería estar seleccionada