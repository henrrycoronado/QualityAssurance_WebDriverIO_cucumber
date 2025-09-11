Feature: Selección de opciones en un dropdown
    
    @dropdownExitoso
    Scenario: Seleccionar la opción 1
        Given estoy en la página de dropdown
        When selecciono la opción "Option 1"
        Then la opción "Option 1" debería estar seleccionada
    
    @dropdownOtroCaso
    Scenario: Seleccionar la opción 2
        Given estoy en la página de dropdown
        When selecciono la opción "Option 2"
        Then la opción "Option 2" debería estar seleccionada