Feature: Agregar y eliminar elementos

    @agregarElemento
    Scenario: Agregar un elemento y verificar su presencia
        Given estoy en la página de Add-Remove Elements
        When agrego un nuevo elemento
        Then debería ver el botón de Delete

    @eliminarElemento
    Scenario: Eliminar un elemento y verificar su ausencia
        Given estoy en la página de Add-Remove Elements
        When agrego un nuevo elemento
        And elimino el elemento
        Then el botón de Delete no debería estar visible