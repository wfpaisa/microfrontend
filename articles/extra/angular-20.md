¡Y apenas estamos comenzando! Angular v20 es nuestra última versión en la que hemos dedicado incontables horas a pulir algunas de nuestras funciones en progreso para ofrecer la experiencia de desarrollador sólida que te mereces.

Algunos de los aspectos más destacados:

- Estabilización de API como `effect`, `linkedSignal`, `toSignal`, hidratación incremental, configuración del modo de renderizado a nivel de ruta y promoción de zoneless a vista previa para desarrolladores.
- Depuración mejorada con Angular DevTools y asociación con Chrome para informes personalizados de Angular directamente en Chrome DevTools.
- Pulido de la experiencia del desarrollador con actualizaciones de la guía de estilo, verificación de tipos y compatibilidad del servicio de lenguaje para enlaces de host, compatibilidad con expresiones literales de plantilla sin etiquetar en plantillas, reemplazo de módulo activo de plantilla por defecto y más.
- Avances en el desarrollo de GenAI con guías y videos de llms.txt y angular.dev para crear aplicaciones de Inteligencia Artificial Generativa.
- Lanzamiento de una solicitud de comentarios para una mascota oficial de Angular.

# Promoción de funciones de reactividad a estables

Pasamos los últimos tres años reconsiderando el modelo de reactividad de Angular para hacerlo más robusto y preparado para el futuro. En Angular v16 lanzamos una vista previa para desarrolladores de Angular Signals y, desde entonces, han tenido una amplia adopción dentro y fuera de Google.

YouTube compartió en el escenario cómo, usando Angular Signals con Wiz, [mejoraron la latencia de entrada](https://www.youtube.com/live/nIBseTi6RVk?t=2444s) en [Living Room](https://developers.google.com/youtube/devices/living-room) en un 35%. Mientras tanto, TC39 inició una investigación para introducir Signals en el lenguaje JavaScript con una implementación de referencia [basada en Angular Signals](https://github.com/proposal-signals/signal-polyfill/blob/1c33f914806f0872229cba05a1c882a38c0def4f/src/signal.ts#L5-L6).

Después de recopilar comentarios de los [RFC](https://github.com/angular/angular/discussions/categories/rfcs) e iterar sobre la implementación, promovimos las API `signal`, `computed`, `input` y las consultas de vista a estables. Hoy, anunciamos que `effect`, `linkedSignal` y `toSignal` también son estables.

# Nuevas API experimentales

Para abordar la gestión del estado asíncrono con Angular, en la v19 desarrollamos la [API de recursos](https://angular.dev/guide/signals/resource). Desde entonces, introdujimos el streaming de recursos y creamos una nueva API llamada `httpResource` que te permite realizar solicitudes HTTP con una API reactiva basada en Signals. Ambas API están disponibles como parte de la v20 como experimentales.

La API `resource` te permite iniciar una acción asíncrona cuando cambia una señal y exponer el resultado de esta acción como una señal:

```ts
const userId: Signal<string> = getUserId();  
const userResource = resource({  
  params: () => ({id: userId()}),  
  loader: ({request, abortSignal}): Promise<User> => {  
    // fetch cancela cualquier solicitud HTTP pendiente cuando el `AbortSignal` dado
    // indica que la solicitud ha sido abortada.
    return fetch(`users/${request.id}`, {signal: abortSignal});  
  },  
});
```

El código anterior recuperará el usuario con el identificador particular, cuando cambie la señal `userId`.

Ahora supongamos que estamos obteniendo datos de un WebSocket. Para este propósito podemos usar un recurso de streaming:

```ts
@Component({  
  template: `{{ dataStream.value() }}`  
})  
export class App {  
  // La lógica de inicialización de WebSocket vivirá aquí...
  // ...  
  // Inicialización del recurso de streaming
  dataStream = resource({  
    stream: () => {  
      return new Promise<Signal<ResourceStreamItem<string[]>>>((resolve) => {  
        const resourceResult = signal<{ value: string[] }>({  
          value: [],  
        });  
  
        this.socket.onmessage = event => {  
          resourceResult.update(current => ({  
             value: [...current.value, event.data]  
          });  
        };  
  
        resolve(resourceResult);  
      });  
    },  
  });  
}
```

En este ejemplo mínimo, declaramos un nuevo recurso de streaming, que devuelve una promesa de una señal. La señal tiene un tipo de valor `ResourceStreamItem<string[]>`, lo que significa que la señal puede contener el valor `{ value: string[] }` o `{error: … }` en caso de que queramos devolver un error.

Emitimos los valores que recibimos a través del WebSocket mediante la señal `resourceResult`.

Sobre la base de este patrón, también lanzamos el `httpResource` experimental:

```ts
@Component({  
  template: `{{ userResource.value() | json }}`  
})  
class UserProfile {  
  userId = signal(1);  
  userResource = httpResource<User>(() =>   
    `https://example.com/v1/users/${this.userId()}`  
  });  
}
```

El fragmento anterior enviará una solicitud HTTP GET a la URL que especificamos cada vez que cambie `userId`. `httpResource` devuelve `HttpResourceRef` que tiene una propiedad `value` de tipo señal a la que podemos acceder directamente en la plantilla. El `userResource` tiene otros valores, como `isLoading`, `headers` y otros también.

Bajo el capó, `httpResource` usa `HttpClient` para que puedas especificar interceptores en el proveedor de `HttpClient`:

```ts
bootstrapApplication(AppComponent, {providers: [  
  provideHttpClient(  
    withInterceptors([loggingInterceptor, cachingInterceptor]),  
  )  
]});
```

# Promoción de Zoneless a vista previa para desarrolladores

Durante los últimos seis meses, hemos progresado mucho en zoneless, específicamente en torno al renderizado del lado del servidor y el manejo de errores.

Muchos desarrolladores usan Zone.js para capturar errores en sus aplicaciones incluso sin darse cuenta. Zone.js también le permite al framework saber cuándo estamos listos para enviar la aplicación renderizada del lado del servidor al cliente. En el mundo de zoneless, tuvimos que encontrar soluciones robustas para estos problemas.

En la v20 ahora [tenemos](https://github.com/angular/angular-cli/pull/28405) un controlador predeterminado para `unhandledRejection` y `uncaughtException` en Node.js durante SSR para evitar que el servidor de nodo se bloquee en caso de errores.

En el cliente, puedes incluir `provideBrowserGlobalErrorListeners` en tus proveedores. Puedes comenzar a usar zoneless hoy actualizando tu lista de proveedores:

```ts
bootstrapApplication(AppComponent, {providers: [  
  provideZonelessChangeDetection(),  
  provideBrowserGlobalErrorListeners()  
]});
```

Además, asegúrate de eliminar el polyfill de zone.js de tu `angular.json`. Obtén más información sobre los beneficios de zoneless y cómo realizar la transición de tu proyecto en nuestra [documentación](https://angular.dev/guide/experimental/zoneless).

Si estás creando un nuevo proyecto de Angular, puedes hacerlo zoneless desde el principio usando la CLI:

![Un gif que muestra la ejecución de `ng new`. Una de las preguntas que hace Angular CLI es si el desarrollador que ejecutó `ng new` quiere crear una aplicación zoneless en vista previa para desarrolladores.](https://miro.medium.com/v2/resize:fit:1400/0*YbIjbBRAfcoiLemp)

# Consolidando Angular en el servidor

En la v20 también nos enfocamos en pulir nuestras funciones insignia de renderizado del lado del servidor: hidratación incremental y configuración del modo de renderizado a nivel de ruta. ¡Hoy, nos complace promover ambas a estables!

Como recordatorio, la hidratación incremental hace que tus aplicaciones sean más rápidas al descargar e hidratar una parte de la página ante un activador particular. De esta manera, tus usuarios no tienen que descargar todo el JavaScript asociado con una página en particular, sino que pueden descargar gradualmente solo las partes que necesitan.

Para comenzar a usar la hidratación incremental hoy, configura la hidratación especificando `withIncrementalHydration`:

import { provideClientHydration, withIncrementalHydration } from '@angular/platform-browser';  
  
// ...  
provideClientHydration(withIncrementalHydration());

En las plantillas de tus componentes ahora puedes usar vistas diferibles:

```ts
@defer (hydrate on viewport) {  
  <shopping-cart/>  
}
```

De esa manera, Angular descargará el componente del carrito de compras junto con sus dependencias transitivas e hidratará esta parte de la interfaz de usuario solo cuando entre en el viewport.

¡Además, ahora puedes usar la configuración del modo de renderizado a nivel de ruta como una API estable! Si diferentes rutas en tu aplicación tienen diferentes requisitos de renderizado, puedes configurarlo en una configuración de ruta del servidor:

```ts
export const routeConfig: ServerRoute = [  
  { path: '/login', mode: RenderMode.Server },  
  { path: '/dashboard', mode: RenderMode.Client },  
  {  
    path: '/product/:id',  
    mode: RenderMode.Prerender,  
    async getPrerenderParams() {  
      const dataService = inject(ProductService);  
      const ids = await dataService.getIds(); // ["1", "2", "3"]  
      // `id` se usa en lugar de `:id` en la ruta.
      return ids.map(id => ({ id }));  
    }  
  }  
];
```

En el fragmento anterior configuramos para renderizar la página de inicio de sesión en el servidor, el panel de control en el cliente y prerenderizar las páginas de productos.

Observa que la página del producto requiere un parámetro de ID. Para resolver los identificadores de cada producto, podemos usar la función asíncrona `getPrerenderParams`. Devuelve un objeto en el que sus claves se asignan a los parámetros del enrutador. En el caso de la página `/product/:id` devolvemos un objeto con una propiedad `id`.

Puedes alojar tus aplicaciones renderizadas del lado del servidor con la mayoría de los proveedores de la nube. Nos asociamos estrechamente con [Firebase App Hosting](https://firebase.google.com/products/app-hosting) en una historia de implementación perfecta que admite el renderizado híbrido (SSR, SSG y CSR) y te brinda la seguridad y escalabilidad de Google Cloud.

# Pulido de la experiencia del desarrollador

Dedicamos mucho tiempo durante el desarrollo de la v20 a la excelencia en ingeniería, puliendo las API existentes para mejorar tu experiencia como desarrollador. Hicimos esto en todos los ámbitos: framework, enrutador, formularios, http, etc. ¡Permíteme compartir más sobre el trabajo que hicimos aquí!

## Información de rendimiento en Chrome DevTools

Para mejorar aún más la experiencia del desarrollador y proporcionar información más detallada sobre el rendimiento de la aplicación, hemos colaborado con el equipo de Chrome DevTools para integrar datos de creación de perfiles específicos de Angular directamente en el panel de Rendimiento. Anteriormente, los desarrolladores a menudo tenían que cambiar entre perfiladores específicos del framework y las DevTools del navegador, lo que dificultaba la correlación de información y la identificación de cuellos de botella, especialmente con código de producción minificado. Esta nueva integración tiene como objetivo resolver eso mostrando datos de tiempo de ejecución de Angular, como el renderizado de componentes, los ciclos de detección de cambios y la ejecución de escuchas de eventos, dentro de la misma línea de tiempo que otras métricas de rendimiento del navegador.

Esta integración directa, disponible a partir de Angular v20, aprovecha la API de extensibilidad del panel de Rendimiento, utilizando específicamente la API `console.timeStamp` por su bajo overhead, asegurando que la creación de perfiles no afecte negativamente el rendimiento de la aplicación. Los desarrolladores ahora pueden obtener una visibilidad mejorada del funcionamiento interno de Angular, con entradas codificadas por colores para distinguir entre el código TypeScript creado por el desarrollador y el código generado por el compilador de Angular. Para habilitar esta función, simplemente ejecuta la utilidad global `ng.enableProfiling()` en tu aplicación o en la consola de DevTools. Este avance proporciona una experiencia de análisis de rendimiento más intuitiva y completa, lo que permite a los desarrolladores crear aplicaciones de Angular aún más eficientes.

![Captura de pantalla de Chrome DevTools. La imagen muestra la pestaña "Rendimiento" en la que hay información específica de Angular, como cuánto tiempo tardó en crearse un componente en particular y cuánto tiempo pasamos en la detección de cambios.](https://miro.medium.com/v2/resize:fit:1400/0*jph7KRHohHXOZTGR)

En la captura de pantalla anterior, puedes ver esta función en acción. Observa cómo en la parte inferior de la línea de tiempo de rendimiento hay una pista dedicada a Angular. Con las barras codificadas por colores, puedes obtener una vista previa de la instanciación de componentes, la ejecución de la detección de cambios, etc. Tanto Angular DevTools como la pista de Angular en la línea de tiempo de rendimiento de Chrome usan los mismos ganchos, con la diferencia de que la línea de tiempo de rendimiento de Chrome puede poner el ciclo de vida de tu aplicación en el contexto de otras llamadas de JavaScript fuera del framework.

Además, la pista de Angular en la línea de tiempo de rendimiento de Chrome muestra algunos datos que actualmente no están presentes en Angular DevTools, como la instanciación de componentes y proveedores.

## Adiciones y mejoras del framework

Para crear dinámicamente un componente de Angular puedes usar la función `createComponent`. En la v20 introducimos nuevas funciones que te permiten aplicar directivas y especificar enlaces a componentes creados dinámicamente:

```ts
import {createComponent, signal, inputBinding, outputBinding} from '@angular/core';  
  
const canClose = signal(false);  
const title = signal('My dialog title');  
  
// Crear MyDialog  
createComponent(MyDialog, {  
  bindings: [  
    // Enlazar una señal a la entrada `canClose`.
    inputBinding('canClose', canClose),  
  
    // Escuchar el evento `onClose` específicamente en el diálogo.
    outputBinding<Result>('onClose', result => console.log(result)),  
     
    // Crea un enlace bidireccional con la propiedad title
    twoWayBinding('title', title),  
  ],  
  directives: [  
    // Aplicar la directiva `FocusTrap` a `MyDialog` sin ningún enlace.
    FocusTrap,  
  
    // Aplicar la directiva `HasColor` a `MyDialog` y enlazar el valor `red` a su entrada `color`.
    // La devolución de llamada a `inputBinding` se invoca en cada detección de cambios.
    {  
      type: HasColor,  
      bindings: [inputBinding('color', () => 'red')]  
    }  
  ]  
});
```

Arriba creamos un componente de diálogo y especificamos:

- Enlace de entrada `canClose`, pasando la señal `canClose` como valor
- Establecer la salida `onClose` a una devolución de llamada que registra el resultado emitido
- Enlace bidireccional entre la propiedad `title` y la señal `title`

Además, agregamos las directivas `FocusTrap` y `HasColor` al componente. Observa que también podemos especificar enlaces de entrada para la directiva `HasColor` que aplicamos a `MyDialog`.

## Sintaxis de expresión de plantilla extendida

Hemos estado cerrando la brecha entre las expresiones de plantilla de Angular y la sintaxis completa de JavaScript para permitir una mayor expresividad y una mejor experiencia de desarrollador. Hoy, presentamos la compatibilidad con el operador exponencial `**` y el operador `in`:

<!-- n elevado a la potencia de dos -->  
`{{ n ** 2 }}`
  
<!-- comprueba si el objeto persona contiene la propiedad nombre -->  
`{{ name in person }}`

En la v20 también te permitimos usar literales de plantilla sin etiquetar directamente en las expresiones:

```html
<div [class]="`layout col-${colWidth}`"></div>
```

## Diagnósticos extendidos

Para proteger contra errores comunes, introdujimos verificaciones estáticas que detectan [la fusión nula inválida](https://github.com/angular/angular/pull/60279), la detección de [importaciones faltantes para directivas estructurales](https://github.com/angular/angular/pull/59443) y una [advertencia](https://github.com/angular/angular/pull/60495) cuando no invocas la función `track` que pasaste a `@for`:

```ts
@Component({  
  template: `  
    @for (user of users; track trackFn) {  
      <!-- ... ->  
    }  
  `  
})  
class UserList {  
  users = getUsers();  
  
  trackFn() {  
    // ... cuerpo
  }  
}
```

El bucle `@for` en las plantillas de Angular acepta una expresión de seguimiento. En la práctica, `trackFn` por sí misma es una expresión que devuelve la función `trackFn`, que es un valor válido. Al mismo tiempo, lo más probable es que hubiéramos querido llamar a `trackFn` y los nuevos diagnósticos facilitan la detección de dichos errores.

## Actualizaciones de la guía de estilo

Después de ver cómo miles de aplicaciones usan Angular durante la última década, decidimos actualizar nuestra guía de estilo. Nuestros objetivos principales son modernizarla y eliminar las complejidades innecesarias.

Después de recopilar comentarios de [un RFC](https://github.com/angular/angular/discussions/58412), introdujimos una serie de simplificaciones: eliminar las prácticas de salud del código no específicas de Angular de la guía de estilo y mover las mejores prácticas de Angular que no están relacionadas con el estilo de codificación a la documentación. También hicimos opcionales los sufijos de nombres de archivo y clase para fomentar una denominación más intencional de las abstracciones, lo que reduce el código repetitivo.

A partir de Angular v20, de forma predeterminada, Angular CLI no generará sufijos para tus componentes, directivas, servicios y pipes. Para proyectos existentes, `ng update` habilitará la generación de sufijos actualizando tu `angular.json`. Para habilitar la generación de sufijos en nuevos proyectos, usa la siguiente configuración de schematics:

```json
{  
  "projects": {  
    "app": {  
      ...  
      "schematics": {  
        "@schematics/angular:component": { "type": "component" },  
        "@schematics/angular:directive": { "type": "directive" },  
        "@schematics/angular:service": { "type": "service" },  
        "@schematics/angular:guard": { "typeSeparator": "." },  
        "@schematics/angular:interceptor": { "typeSeparator": "." },  
        "@schematics/angular:module": { "typeSeparator": "." },  
        "@schematics/angular:pipe": { "typeSeparator": "." },  
        "@schematics/angular:resolver": { "typeSeparator": "." }  
      },  
  ...  
}
```

Angular ha evolucionado mucho a lo largo de los años y queríamos reflejar su evolución también en la guía de estilo. Como resultado, eliminamos la mayoría de las orientaciones relacionadas con NgModules y revisamos el uso de `@HostBinding` y `@HostListener` en favor del objeto `host` dentro de los metadatos de la directiva. Para asegurarnos de no retroceder en la experiencia del desarrollador con las nuevas directrices, también abordamos un par de lagunas en el soporte de enlace de host.

## Enlaces de host mejorados

Una razón por la que históricamente hemos recomendado `@HostBinding` y `@HostListener` fue que tenían un soporte de editor marginalmente mejor que el objeto `host` en los metadatos del componente, ya que puedes usarlos directamente en un enlace o método específico. Al mismo tiempo, podrían ser difíciles de detectar, usar decoradores y podrían conducir a un código más engorroso.

En Angular v20 estamos introduciendo la verificación de tipos y el soporte de lenguaje para expresiones de enlace de host y escucha.

En el gif a continuación puedes ver esta función en acción. Primero obtenemos un error porque llamamos a una función llamada `getAppTile` en lugar de `getAppTitle`. Una vez que solucionamos este problema, el servicio de lenguaje detecta que el programa no verifica los tipos, ya que estamos pasando un argumento a una función que no espera ningún argumento.

![Gif que muestra el soporte mejorado del servicio de lenguaje para enlaces de host. El desarrollador coloca el cursor sobre un enlace de host que dice `getAppTile` y obtenemos el error de que no es un método existente. El desarrollador cambia el nombre del método a `getAppTitle`. El servicio de lenguaje muestra un error de que este método no acepta ningún parámetro, por lo que el desarrollador elimina el parámetro.](https://miro.medium.com/v2/resize:fit:1400/0*TeTw-n02HxtoCJtY)

Para habilitar esta función, establece la propiedad `typeCheckHostBindings` en `angularCompilerOptions` en `tsconfig.json` en `true`. Habilitaremos esta función de forma predeterminada en Angular v21.

## Hidratación incremental en Angular DevTools

Para simplificar la depuración de la hidratación incremental y las vistas diferibles, ¡ahora puedes previsualizarlas directamente en Angular DevTools!

La captura de pantalla a continuación muestra cómo puedes inspeccionar un bloque diferido y el contenido que carga posteriormente.

![Gif que muestra Angular DevTools. El desarrollador explora el árbol de componentes de la aplicación y ve una entrada de bloque `@defer`. Desplaza la aplicación un poco hacia abajo, lo que activa la descarga de los componentes diferidos.](https://miro.medium.com/v2/resize:fit:1400/0*BoxtL68s6hZGWCsr)

Cuando uses bloques diferidos con hidratación incremental, también obtendrás iconos que indican si Angular ya hidrató el componente actual.

## Soporte experimental para vitest

Con la obsolescencia de Karma, trabajamos con los autores de frameworks de prueba para encontrar un reemplazo bien mantenido que permita las pruebas de navegador. Conseguimos una pull request que crea un playground experimental para que probemos diferentes ejecutores de pruebas.

¡En la v20, Angular CLI viene con un soporte experimental de vitest que tiene modo de observación y pruebas de navegador!

Para probar vitest en el entorno de nodo, dentro de tu proyecto ejecuta:

npm i vitest jsdom --save-dev

Después de eso, actualiza tu configuración de prueba en angular.json a:

```ts
"test": {  
    "builder": "@angular/build:unit-test",  
    "options": {  
        "tsConfig": "tsconfig.spec.json",  
        "buildTarget": "::development",  
        "runner": "vitest"  
    }  
}
```

A continuación, es posible que debas actualizar tus archivos de prueba unitaria para incluir las importaciones correctas:

...  
import { describe, beforeEach, it, expect } from 'vitest';  
...

Finalmente, `ng test` para ejecutar tus pruebas unitarias con vitest.

## Mejoras en la calidad de vida en Angular Material

En esta versión pulimos aún más nuestro componente de botón para alinearlo mejor con la especificación M3.

![Una captura de pantalla con 4 botones: "Tonal", "Básico", "Deshabilitado" y "Enlace".](https://miro.medium.com/v2/resize:fit:1400/0*sYsuvsVnwN4XtPCU)

Botón tonal

Algunos de los cambios:

- Implementamos el botón tonal
- Terminología alineada con la especificación M3
- Se agregó la capacidad de establecer la apariencia predeterminada para los botones
- Se agregó el selector `matIconButton` al botón de icono para mayor coherencia

Algunas mejoras en la calidad de vida que implementamos incluyen:

- Nuevo `closePredicate` para diálogo que cierra una [solicitud](https://github.com/angular/components/issues/14292) con 108 👍
- Nuevas API de superposición para un [mejor](https://github.com/angular/components/pull/30929) tree-shaking
- Ahora se maneja `prefers-reduced-motion` [automáticamente](https://github.com/angular/components/pull/30796)
- Nuevo token DI para [deshabilitar](https://github.com/angular/components/pull/30749) animaciones
- `MatButton` y `MatAnchor` se combinan para que los usuarios no tengan que importar ambos.

## Apoyo a los desarrolladores que utilizan GenAI

Para permitir que los LLM produzcan código Angular moderno y permitirte crear aplicaciones con GenAI, iniciamos dos esfuerzos:

- Mantener un archivo `llms.txt` (consulta la [pull request en GitHub](https://github.com/angular/angular/pull/61285)) que ayuda a los modelos de lenguaje grandes a descubrir la documentación y los ejemplos de código más recientes de Angular.
- Proporcionar un punto de partida para los desarrolladores que están creando aplicaciones con GenAI.

Algunos modelos de lenguaje todavía producen una sintaxis de Angular más antigua usando directivas estructurales en lugar del último flujo de control, o usando NgModules en lugar de componentes, directivas y pipes independientes. Resolver este problema es un proceso de varios pasos que comenzamos con la creación de un archivo `llms.txt`. En el futuro, continuaremos proporcionando ejemplos de código utilizando la última sintaxis de Angular y exploraremos el desarrollo de prompts del sistema que indiquen a los LLM que utilicen las API correctas.

El segundo esfuerzo que iniciamos es proporcionar directrices para los desarrolladores que están creando API con funciones de IA. Realizamos múltiples [transmisiones en vivo](https://www.youtube.com/@Angular/streams) que muestran cómo puedes aprovechar Genkit y Vertex AI en tu aplicación Angular. Abrimos el código fuente de las [aplicaciones de ejemplo](https://github.com/angular/examples) y enumeramos algunas de las mejores prácticas que descubrimos en [angular.dev/ai](http://angular.dev/ai).

Eso es solo el comienzo para hacer de Angular la solución para tus aplicaciones de IA agéntica.

# Desuso de NgIf, NgFor y NgSwitch

Introdujimos el flujo de control integrado de Angular en la v17 para traer una serie de mejoras:

- Sintaxis más intuitiva, más cercana a JavaScript
- Uso más simple, sin necesidad de importar otro módulo o directivas individuales
- Mejora del rendimiento al actualizar el algoritmo de diferenciación
- Verificación de tipos mejorada mediante el estrechamiento de tipos

También lanzamos un schematic que con una sola línea de código te permite mover tus proyectos de directivas estructurales al flujo de control integrado:

ng generate @angular/core:control-flow

¡Actualmente, más de la mitad de las aplicaciones Angular v17+ en el conjunto de datos públicos de HTTP Archive usan la nueva sintaxis!

Según el sentimiento de la comunidad y las métricas de adopción, en el futuro vamos a dejar obsoletos `*ngIf`, `*ngFor` y `*ngSwitch` y alentamos a todos a usar el último flujo de control integrado. Esto significa que, según nuestra política de obsolescencia, podemos eliminar las directivas estructurales en la versión 22, dentro de un año.

# Mascota oficial de Angular

A medida que Angular continúa creciendo y evolucionando, nos complace anunciar una nueva iniciativa que enriquecerá aún más nuestra increíble comunidad: ¡la creación de una mascota oficial de Angular! Si bien Angular es un framework bien reconocido y ampliamente adoptado, le ha faltado una representación visual divertida que tantos otros proyectos exitosos de código abierto disfrutan. Hemos escuchado sus solicitudes de algo tangible con lo que conectarse, como un peluche o un llavero, y estamos encantados de embarcarnos en este viaje creativo con todos ustedes. Nuestro equipo colaboró con los diseñadores detrás de las mascotas de Dart y Firebase, compartiendo las fortalezas centrales y el espíritu comunitario de Angular. Este proceso condujo a tres propuestas iniciales de mascotas que estamos ansiosos por compartir.

¡Aquí es donde entras tú, la comunidad de Angular! Fieles a los valores de inclusión y decisiones impulsadas por la comunidad de Angular, estamos abriendo el proceso para que todos contribuyan. Encuentra el RFC oficial de la mascota de Angular en [goo.gle/angular-mascot-rfc](http://goo.gle/angular-mascot-rfc).

Aquí hay un adelanto de los conceptos iniciales:

![Un personaje mascota inspirado en el logo de Angular. Tiene forma de escudo con pies y manos. Está sonriendo.](https://miro.medium.com/v2/resize:fit:1400/0*RAHT7lcpaKI1ocDb)

Dibujo de "personaje con forma de Angular" inspirado en nuestro logo

![Personaje mascota de Angular. Es un rape animado.](https://miro.medium.com/v2/resize:fit:1400/0*psVfUOMcwJWIpqaj)

"Rape" sabio y resistente (¡mucho más lindo que su [contraparte de la vida real](https://en.wikipedia.org/wiki/Anglerfish)!)

![Personaje mascota de Angular. Es un rape animado, similar al anterior, pero con una forma más cuadrada y dos dientes angulares.](https://miro.medium.com/v2/resize:fit:1400/0*0bULt7LGehfJeMzf)

Una variación del Rape.

Te invitamos a consultar el RFC completo, emitir tu voto por una de estas propuestas, sugerir mejoras e incluso proponer nombres. Tus comentarios han sido invaluables para dar forma a las características de Angular, y estamos emocionados de ver ese mismo espíritu colaborativo definir nuestra futura mascota. ¡Creemos algo verdaderamente especial juntos!

# ¡Gracias por todas las contribuciones!

¡En todo el mundo hay miles de autores de bibliotecas, organizadores de conferencias y reuniones, educadores y otras personas que están ayudando a hacer avanzar la web a través de Angular! Nunca hubiéramos llegado aquí sin todos ustedes.

¡Desde la fecha de lanzamiento de la v19, recibimos y fusionamos commits de más de 225 personas en el framework, los componentes y la CLI! Cada cambio que hiciste nos ayuda a mejorar Angular. Quería destacar algunas de las características que obtuvimos de los miembros de la comunidad:

- [Domenico Gemoli](https://github.com/aberonni) agregó `markAllAsDirty` a `AbstractControl` que ahora marca un componente específico y todos sus hijos como sucios.
- [Enea Jahollari](https://github.com/eneajaho) [implementó](https://github.com/angular/angular/pull/60495) un diagnóstico extendido para la función de seguimiento no invocada en `@for`.
- [Enea Jahollari](https://github.com/eneajaho) también [agregó](https://github.com/angular/angular/pull/57342) una migración para convertir plantillas para usar etiquetas de cierre automático para la coherencia del código.
- [Jeri Peier](https://github.com/jeripeierSBB) hizo [posible](https://github.com/angular/angular/pull/45793) usar validadores de formularios con conjuntos.
- [Kevin Brey](https://github.com/manbearwiz) trabajó en diagnósticos extendidos para ayudarte a detectar [importaciones de directivas estructurales faltantes](https://github.com/angular/angular/pull/59443).
- [Lukas Spirig](https://github.com/kyubisation) [introdujo](https://github.com/angular/angular/pull/60290) soporte para elementos personalizados para RouterLink.
- [Meddah Abdallah](https://github.com/MeddahAbdellah) [introdujo](https://github.com/angular/angular/pull/60863) redireccionamientos asíncronos al enrutador.
- [Younes Jaaidi](https://github.com/yjaaidi) hizo posible ejecutar pruebas con compilación anticipada en [Jest](https://github.com/angular/angular-cli/pull/28855) y [Karma](https://github.com/angular/angular-cli/pull/28854).

Gracias a todos 🙏

# ¡Hacia el futuro!

Como parte de la v20, enviamos muchos toques finales a los grandes esfuerzos que iniciamos en los últimos años, como la reactividad, zoneless, la hidratación incremental, las API de framework y formularios. ¡También presentamos bocetos iniciales de alto nivel para los próximos avances, como selectorless, signal-forms, pruebas unitarias y una mascota oficial de Angular!

Estamos construyendo Angular para ti y tu opinión es fundamental en la forma en que avanzamos con cualquiera de estas iniciativas. A medida que nuestros planes de alto nivel para estos proyectos principales tomen forma, compartiremos actualizaciones y solicitudes de comentarios. ¡Hasta ahora, asegúrate de compartir tus ideas para la futura mascota oficial de Angular! Estamos muy emocionados de encontrar una identidad que simbolice el producto y los valores de Angular. ¡Haznos saber lo que piensas sobre los conceptos en el [RFC](http://goo.gle/angular-mascot-rfc)!

Hasta la próxima y gracias por ser parte del viaje de Angular 🙏
