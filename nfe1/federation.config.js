const {
  withNativeFederation,
  shareAll,
} = require("@angular-architects/native-federation/config");

module.exports = withNativeFederation({
  name: "mfe1",

  exposes: {
    "./Component": "./src/app/app.component.ts",
    "./FlightsComponent": "./src/app/components/flights/flights.component.ts",
  },

  /**
   * Bajo shared, la configuración lista todas las dependencias que el remoto
   * quiere compartir con otros remotos y el anfitrión. Para evitar una lista
   * exhaustiva de todos los paquetes npm requeridos, se utiliza la función de ayuda shareAll.
   * Incluye todos los paquetes que están en el package.json bajo dependencies.
   * Los detalles sobre los parámetros pasados a shareAll se pueden encontrar en uno de los capítulos
   * anteriores sobre Module Federation.
   */
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },

  /**
   * Los paquetes que shareAll no debería compartir se ingresan en skip.
   * Esto puede mejorar ligeramente el rendimiento de compilación e inicio de la aplicación.
   * Además, los paquetes que están destinados para su uso con NodeJS deben agregarse a skip,
   * ya que no pueden compilarse para su uso en el navegador.
   */
  skip: [
    "rxjs/ajax",
    "rxjs/fetch",
    "rxjs/testing",
    "rxjs/webSocket",
    // Add further packages you don't need at runtime
  ],

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0
});
