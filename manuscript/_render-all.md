# Enterprise Angular: Micro Frontends and Moduliths with Angular Module Federation - Nx - DDD

- [Introducción](#introducción)
  - [Estructura de Este
    Libro](#estructura-de-este-libro)
  - [Formaciones y
    Consultoría](#formaciones-y-consultoría)
  - [¡Ayuda a Mejorar este
    Libro!](#ayuda-a-mejorar-este-libro)
  - [Agradecimientos](#agradecimientos)
- [01. Diseño Estratégico Guiado por el
  Dominio](#01-diseño-estratégico-guiado-por-el-dominio)
  - [¿Qué es el Diseño Guiado por el
    Dominio?](#qué-es-el-diseño-guiado-por-el-dominio)
  - [Encontrando Dominios con Diseño
    Estratégico](#encontrando-dominios-con-diseño-estratégico)
  - [Los Dominios se Modelan por
    Separado](#los-dominios-se-modelan-por-separado)
  - [Mapeo de Contextos
    (Context-Mapping)](#mapeo-de-contextos-context-mapping)
  - [Subdominios vs. Contextos
    Delimitados](#subdominios-vs-contextos-delimitados)
  - [Topologías de Equipos y Diseño
    Estratégico](#topologías-de-equipos-y-diseño-estratégico)
  - [Conclusión](#conclusión)
- [02. Arquitecturas con Sheriff y Componentes Independientes
  (Standalone)](#02-arquitecturas-con-sheriff-y-componentes-independientes-standalone)
  - [La Matriz de
    Arquitectura](#la-matriz-de-arquitectura)
  - [Estructura del Proyecto para la Matriz de
    Arquitectura](#estructura-del-proyecto-para-la-matriz-de-arquitectura)
  - [Aplicando tu Arquitectura con
    Sheriff](#aplicando-tu-arquitectura-con-sheriff)
  - [Mapeos de Rutas
    Ligeros](#mapeos-de-rutas-ligeros)
  - [Conclusión](#conclusión-1)
- [03. Rendimiento de Compilación con
  Nx](#03-rendimiento-de-compilación-con-nx)
  - [Compilaciones Incrementales -- Primeros
    Pasos](#compilaciones-incrementales--primeros-pasos)
  - [Más cómodo y más potente:
    Nx](#más-cómodo-y-más-potente-nx)
  - [Compilaciones Incrementales con
    Nx](#compilaciones-incrementales-con-nx)
  - [Nota al Margen: Micro
    Frontends](#nota-al-margen-micro-frontends)
  - [Caché Distribuida con Nx
    Cloud](#caché-distribuida-con-nx-cloud)
  - [Aún Más Rápido: Paralelización con Nx
    Cloud](#aún-más-rápido-paralelización-con-nx-cloud)
  - [Conclusión](#conclusión-2)
- [03a. Nx & Sheriff - Amigos para toda la
  vida](#03a-nx--sheriff---amigos-para-toda-la-vida)
  - [Límites de Módulo en
    Nx](#límites-de-módulo-en-nx)
    - [Etiquetado de Aplicaciones y
      Librerías](#etiquetado-de-aplicaciones-y-librerías)
    - [Definición de Límites de
      Módulo](#definición-de-límites-de-módulo)
    - [Hacer Cumplir los Límites de
      Módulo](#hacer-cumplir-los-límites-de-módulo)
    - [Tu Arquitectura con Solo Presionar un
      Botón](#tu-arquitectura-con-solo-presionar-un-botón)
  - [Recapitulación: Diferentes Tipos de
    Límites](#recapitulación-diferentes-tipos-de-límites)
  - [Opciones con
    Sheriff](#opciones-con-sheriff)
    - [Aplicación por
      Dominio](#aplicación-por-dominio)
    - [Librería por
      Dominio](#librería-por-dominio)
  - [Conclusión](#conclusión-3)
- [04. De Dominios a Micro
  Frontends](#04-de-dominios-a-micro-frontends)
  - [Monolitos de
    Despliegue](#monolitos-de-despliegue)
  - [Micro Frontends](#micro-frontends)
  - [Composición de UI con
    Hipervínculos](#composición-de-ui-con-hipervínculos)
  - [Composición de UI con un
    Shell](#composición-de-ui-con-un-shell)
  - [El Héroe: Module
    Federation](#el-héroe-module-federation)
  - [Encontrando una
    Solución](#encontrando-una-solución)
  - [Consecuencias de los Micro
    Frontends](#consecuencias-de-los-micro-frontends)
  - [Conclusión](#conclusión-4)
- [05. La Revolución de los Micro Frontends: Usando Module Federation
  con
  Angular](#05-la-revolución-de-los-micro-frontends-usando-module-federation-con-angular)
  - [Ejemplo](#ejemplo)
  - [Activando Module Federation para Proyectos
    Angular](#activando-module-federation-para-proyectos-angular)
  - [El Shell (también conocido como
    Host)](#el-shell-también-conocido-como-host)
  - [El Micro Frontend (también conocido como
    Remoto)](#el-micro-frontend-también-conocido-como-remoto)
  - [Probándolo](#probándolo)
  - [Un Detalle
    Adicional](#un-detalle-adicional)
  - [Más Detalles: Compartiendo
    Dependencias](#más-detalles-compartiendo-dependencias)
  - [Más Sobre Esto](#más-sobre-esto)
  - [Conclusión y
    Evaluación](#conclusión-y-evaluación)
- [06. Federación Dinámica de
  Módulos](#06-federación-dinámica-de-módulos)
  - [Una Solución Dinámica
    Simple](#una-solución-dinámica-simple)
    - [Añadiendo Federación de
      Módulos](#añadiendo-federación-de-módulos)
    - [Generando un
      Manifiesto](#generando-un-manifiesto)
    - [Cargando el
      Manifiesto](#cargando-el-manifiesto)
    - [Cargando los Micro
      Frontends](#cargando-los-micro-frontends)
    - [Configurando los Micro
      Frontends](#configurando-los-micro-frontends)
    - [Probándolo](#probándolo-1)
  - [Haciéndolo \"Dinámico
    Dinámico\"](#haciéndolo-dinámico-dinámico)
    - [Añadiendo Metadatos Personalizados al
      Manifiesto](#añadiendo-metadatos-personalizados-al-manifiesto)
    - [Tipos para Configuración
      Personalizada](#tipos-para-configuración-personalizada)
    - [Creando Rutas
      Dinámicamente](#creando-rutas-dinámicamente)
    - [Probándolo](#probándolo-2)
  - [Algunos Detalles
    Más](#algunos-detalles-más)
  - [Conclusión](#conclusión-5)
- [07. Sistemas de Plugins con Module Federation: Construyendo un
  Diseñador de Flujos de Trabajo
  Extensible](#07-sistemas-de-plugins-con-module-federation-construyendo-un-diseñador-de-flujos-de-trabajo-extensible)
  - [Construyendo los
    Plugins](#construyendo-los-plugins)
  - [Cargando los Plugins en el Diseñador de Flujos de
    Trabajo](#cargando-los-plugins-en-el-diseñador-de-flujos-de-trabajo)
  - [Proporcionando Metadatos sobre los
    Plugins](#proporcionando-metadatos-sobre-los-plugins)
  - [Creando Dinámicamente el Componente del
    Plugin](#creando-dinámicamente-el-componente-del-plugin)
  - [Conectando Todo](#conectando-todo)
  - [Conclusión](#conclusión-6)
- [08. Usando Module Federation con Monorepos Nx y
  Angular](#08-usando-module-federation-con-monorepos-nx-y-angular)
  - [Múltiples Repos vs.
    Monorepos](#múltiples-repos-vs-monorepos)
  - [Múltiples Repositorios: Micro Frontends al Pie de la
    Letra](#múltiples-repositorios-micro-frontends-al-pie-de-la-letra)
  - [Micro Frontends con
    Monorepos](#micro-frontends-con-monorepos)
  - [Ejemplo de
    Monorepo](#ejemplo-de-monorepo)
  - [La Librería
    Compartida](#la-librería-compartida)
  - [La Configuración de Module
    Federation](#la-configuración-de-module-federation)
  - [Probándolo](#probándolo-3)
  - [Aislando Micro
    Frontends](#aislando-micro-frontends)
  - [Compilaciones
    Incrementales](#compilaciones-incrementales)
  - [Desplegando](#desplegando)
  - [Conclusión](#conclusión-7)
- [09. Manejo de Desajustes de Versión en Module
  Federation](#09-manejo-de-desajustes-de-versión-en-module-federation)
  - [Ejemplo Utilizado
    Aquí](#ejemplo-utilizado-aquí)
  - [Versionado Semántico por
    Defecto](#versionado-semántico-por-defecto)
  - [Módulos de Respaldo para Versiones
    Incompatibles](#módulos-de-respaldo-para-versiones-incompatibles)
  - [Diferencias con Dynamic Module
    Federation](#diferencias-con-dynamic-module-federation)
  - [Singletons](#singletons)
  - [Aceptar un Rango de
    Versiones](#aceptar-un-rango-de-versiones)
  - [Conclusión](#conclusión-8)
- [10. Micro Frontends Multimarco y Multiversión con Module
  Federation](#10-micro-frontends-multimarco-y-multiversión-con-module-federation)
  - [¿Patrón o
    Antipatrón?](#patrón-o-antipatrón)
  - [¿Micro Frontends como Web
    Components?](#micro-frontends-como-web-components)
  - [¿También necesitamos Module
    Federation?](#también-necesitamos-module-federation)
  - [Implementación en 4
    pasos](#implementación-en-4-pasos)
    - [Paso 1: Envuelve tu Micro Frontend en un Web
      Component](#paso-1-envuelve-tu-micro-frontend-en-un-web-component)
    - [Paso 2: Expón tu Web Component vía Module
      Federation](#paso-2-expón-tu-web-component-vía-module-federation)
    - [Paso 3: Realiza Ajustes para
      Angular](#paso-3-realiza-ajustes-para-angular)
    - [Paso 4: Carga los Micro Frontends en el
      Shell](#paso-4-carga-los-micro-frontends-en-el-shell)
    - [Resultado](#resultado)
- [11. Obstáculos con Module Federation y
  Angular](#11-obstáculos-con-module-federation-y-angular)
  - [\"No se especificó la versión requerida\" y Puntos de Entrada
    Secundarios](#no-se-especificó-la-versión-requerida-y-puntos-de-entrada-secundarios)
  - [Desajustes de Versión No Evidentes: Problemas con Dependencias
    Peer](#desajustes-de-versión-no-evidentes-problemas-con-dependencias-peer)
  - [Problemas al Compartir Código y
    Datos](#problemas-al-compartir-código-y-datos)
  - [NullInjectorError: Se espera un servicio en el Ámbito Padre
    (Ámbito
    Raíz)](#nullinjectorerror-se-espera-un-servicio-en-el-ámbito-padre-ámbito-raíz)
  - [Varios Ámbitos
    Raíz](#varios-ámbitos-raíz)
  - [Diferentes Versiones de
    Angular](#diferentes-versiones-de-angular)
  - [Bonus: Múltiples
    Bundles](#bonus-múltiples-bundles)
  - [Conclusión](#conclusión-9)
- [12. Federación de Módulos con Componentes Independientes de
  Angular](#12-federación-de-módulos-con-componentes-independientes-de-angular)
  - [Configuraciones del Enrutador vs. Componentes
    Independientes](#configuraciones-del-enrutador-vs-componentes-independientes)
  - [Situación Inicial: Nuestro Micro
    Frontend](#situación-inicial-nuestro-micro-frontend)
  - [Activando la Federación de
    Módulos](#activando-la-federación-de-módulos)
  - [Shell Estático](#shell-estático)
  - [Alternativa: Shell
    Dinámico](#alternativa-shell-dinámico)
  - [Bonus: Carga
    Programática](#bonus-carga-programática)
- [12a. De Module Federation a esbuild y Native
  Federation](#12a-de-module-federation-a-esbuild-y-native-federation)
  - [Native Federation con
    esbuild](#native-federation-con-esbuild)
  - [Native Federation: Configurando un Micro
    Frontend](#native-federation-configurando-un-micro-frontend)
  - [Native Federation: Configurando un
    Shell](#native-federation-configurando-un-shell)
  - [Exponiendo una Configuración de Enrutador (Router
    Config)](#exponiendo-una-configuración-de-enrutador-router-config)
  - [Comunicación entre Micro
    Frontends](#comunicación-entre-micro-frontends)
  - [Conclusión](#conclusión-10)
- [12b. El nuevo Store de Señales (Signal Store) de NGRX para Angular:
  3 + n
  Sabores](#12b-el-nuevo-store-de-señales-signal-store-de-ngrx-para-angular-3--n-sabores)
  - [Obteniendo el
    Paquete](#obteniendo-el-paquete)
  - [Sabor 1: Ligero con
    signalState](#sabor-1-ligero-con-signalstate)
    - [Seleccionando y Computando
      Señales](#seleccionando-y-computando-señales)
    - [Actualizando el
      Estado](#actualizando-el-estado)
  - [Efectos
    Secundarios](#efectos-secundarios)
    - [Desacoplando la Intención de la
      Ejecución](#desacoplando-la-intención-de-la-ejecución)
  - [Sabor 2: Potente con
    signalStore](#sabor-2-potente-con-signalstore)
    - [Seleccionando y Computando
      Señales](#seleccionando-y-computando-señales-1)
    - [Métodos para Actualizar Estado y Efectos
      Secundarios](#métodos-para-actualizar-estado-y-efectos-secundarios)
    - [Consumiendo el
      Store](#consumiendo-el-store)
    - [Hooks](#hooks)
    - [rxMethod](#rxmethod)
  - [Características Personalizadas - n Sabores
    Adicionales](#características-personalizadas---n-sabores-adicionales)
    - [Definiendo Características
      Personalizadas](#definiendo-características-personalizadas)
    - [Usando Características
      Personalizadas](#usando-características-personalizadas)
  - [Sabor 3: Características Incorporadas como Gestión de
    Entidades](#sabor-3-características-incorporadas-como-gestión-de-entidades)
  - [Conclusión](#conclusión-11)
- [12c. Trabajar de Forma Más Inteligente, No Más Esfuerzo:
  Simplificando tu Aplicación Con NGRX Signal Store y Funcionalidades
  Personalizadas](#12c-trabajar-de-forma-más-inteligente-no-más-esfuerzo-simplificando-tu-aplicación-con-ngrx-signal-store-y-funcionalidades-personalizadas)alidades-personalizadas}
  - [Objetivo](#objetivo)
  - [Funcionalidad Personalizada
    DataService](#funcionalidad-personalizada-dataservice)
  - [Implementando una Funcionalidad Personalizada
    Genérica](#implementando-una-funcionalidad-personalizada-genérica)
  - [Proporcionando un Servicio de Datos
    Adecuado](#proporcionando-un-servicio-de-datos-adecuado)
  - [Funcionalidad de
    Deshacer/Rehacer](#funcionalidad-de-deshacerrehacer)
  - [Usando el Store en un
    Componente](#usando-el-store-en-un-componente)
  - [Conclusión y
    Perspectivas](#conclusión-y-perspectivas)
- [12d. Análisis Profundo de NGRX Signal Store: Extensiones
  Personalizadas Flexibles y con Seguridad de
  Tipos](#12d-análisis-profundo-de-ngrx-signal-store-extensiones-personalizadas-flexibles-y-con-seguridad-de-tipos)
  - [Una Primera Extensión
    Sencilla](#una-primera-extensión-sencilla)
  - [Ahora Empieza de Verdad: El
    Tipado](#ahora-empieza-de-verdad-el-tipado)
  - [Tipado y Propiedades Dinámicas -- ¿Cómo Funcionan
    Juntos?](#tipado-y-propiedades-dinámicas--cómo-funcionan-juntos)
  - [Más Ejemplos: CRUD y
    Deshacer/Rehacer](#más-ejemplos-crud-y-deshacerrehacer)
  - [Extensiones Listas para Usar (Out of the
    Box)](#extensiones-listas-para-usar-out-of-the-box)
  - [Conclusión](#conclusión-12)
- [12e. El NGRX Signal Store y Tu
  Arquitectura](#12e-el-ngrx-signal-store-y-tu-arquitectura)
  - [¿Dónde Colocarlo?](#dónde-colocarlo)
  - [Combinando el Signal Store con el Store NGRX
    Tradicional](#combinando-el-signal-store-con-el-store-ngrx-tradicional)
  - [Lo Mejor de Ambos Mundos a Través de Funcionalidades
    Personalizadas](#lo-mejor-de-ambos-mundos-a-través-de-funcionalidades-personalizadas)
  - [¿Qué Tan Grande Debería Ser un Signal
    Store?](#qué-tan-grande-debería-ser-un-signal-store)
  - [¿Puede un Signal Store Acceder a Otros Signal
    Stores?](#puede-un-signal-store-acceder-a-otros-signal-stores)
  - [Previniendo Ciclos, Redundancias e
    Inconsistencias](#previniendo-ciclos-redundancias-e-inconsistencias)
  - [Conclusión](#conclusión-13)
- [13. Extra: Automatiza tu Arquitectura con Plugins de Espacio de
  Trabajo (Workspace) de
  Nx](#13-extra-automatiza-tu-arquitectura-con-plugins-de-espacio-de-trabajo-workspace-de-nx)
  - [Creando un Plugin de Espacio de Trabajo con un
    Generador](#creando-un-plugin-de-espacio-de-trabajo-con-un-generador)
  - [Plantillas para
    Generadores](#plantillas-para-generadores)
  - [Implementando un
    Generador](#implementando-un-generador)
  - [Verdaderos Tesoros: Métodos de Ayuda para Generadores en
    Nx](#verdaderos-tesoros-métodos-de-ayuda-para-generadores-en-nx)
  - [Probando los
    Generadores](#probando-los-generadores)
  - [Probando
    Generadores](#probando-generadores)
  - [Exportando Plugins vía
    NPM](#exportando-plugins-vía-npm)
  - [Conclusión](#conclusión-14)
- [13a. Bonus: El Núcleo del Diseño Guiado por el Dominio
  (Domain-Driven
  Design)](#13a-bonus-el-núcleo-del-diseño-guiado-por-el-dominio-domain-driven-design)
  - [DDD en Pocas
    Palabras](#ddd-en-pocas-palabras)
    - [Diseño
      Estratégico](#diseño-estratégico)
    - [Diseño Táctico](#diseño-táctico)
    - [Desarrollos Recientes en
      DDD](#desarrollos-recientes-en-ddd)
    - [Más sobre DDD](#más-sobre-ddd)
  - [¿Cómo Definir DDD?](#cómo-definir-ddd)
  - [¿Cuándo Podemos Llamarlo
    DDD?](#cuándo-podemos-llamarlo-ddd)
  - [¿Cuál es el Núcleo de DDD y Por Qué la Gente Tuvo una Impresión
    Equivocada al
    Respecto?](#cuál-es-el-núcleo-de-ddd-y-por-qué-la-gente-tuvo-una-impresión-equivocada-al-respecto)
  - [¿Es el Diseño Táctico Orientado a Objetos? ¿Hay Lugar para la
    PF (Programación
    Funcional)?](#es-el-diseño-táctico-orientado-a-objetos-hay-lugar-para-la-pf-programación-funcional)
  - [Otras Adaptaciones del Diseño
    Táctico](#otras-adaptaciones-del-diseño-táctico)
  - [Conclusión](#conclusión-15)
- [Literatura](#literatura)
- [Acerca del Autor](#acerca-del-autor)
- [Capacitaciones y
  Consultoría](#capacitaciones-y-consultoría)

# Enterprise Angular: Micro Frontends and Moduliths with Angular Module Federation - Nx - DDD

## Introducción

Durante los últimos años, he ayudado a numerosas empresas con la
implementación de aplicaciones empresariales a gran escala con Angular.

Un aspecto vital es descomponer el sistema en módulos más pequeños para
reducir la complejidad. Sin embargo, si esto resulta en innumerables
módulos pequeños que están demasiado entremezclados, no has progresado
exactamente. Si todo depende de todo lo demás, no puedes cambiar o
extender fácilmente tu sistema sin romper otras partes.

El diseño guiado por el dominio (Domain-Driven Design), especialmente el
diseño estratégico, ayuda. Además, el diseño estratégico puede ser la
base para construir micro frontends.

Otro tema que estoy añadiendo a esta edición del libro es la nueva NGRX
Signal Store. Es ligera, completamente basada en Signals y altamente
extensible. Sin embargo, también cambia algunas reglas conocidas del
mundo basado en Redux.

Este libro, que se basa en varias de mis publicaciones de blog sobre
Angular, DDD y micro frontends, explica cómo utilizar estas ideas.

Si tienes alguna pregunta o comentario, por favor contáctame en
`manfred.steyer@angulararchitects.io`. También me encuentras en
[Twitter](https://twitter.com/ManfredSteyer) y en
[Facebook](https://www.facebook.com/manfred.steyer). ¡Mantengámonos en
contacto para recibir actualizaciones sobre mi trabajo en Angular para
aplicaciones a escala empresarial!

## Estructura de Este Libro

Este libro está subdividido en 20 capítulos agrupados en cuatro partes
que discuten diferentes aspectos de tu arquitectura.

_Parte 1: Diseño Estratégico con Nx y Sheriff_

Esta parte introduce una arquitectura de referencia que actúa como la
teoría principal de nuestro trabajo. Esta arquitectura puede adaptarse a
diferentes necesidades. En esta primera parte, se implementa utilizando
un monorepo Nx y Sheriff.

Capítulos en la parte 1:

- Diseño Estratégico Guiado por el Dominio
- Arquitecturas con Sheriff y Componentes Independientes (Standalone
  Components)
- Rendimiento de Compilación con Nx
- Nx & Sheriff - Amigos para Siempre

_Parte 2: Micro Frontends con Federation_

Aquí discutimos cómo diferentes dominios pueden ser implementados usando
Micro Frontends. Para esto, analizamos varios aspectos de Module
Federation y discutimos la nueva Native Federation, independiente de
herramientas.

Capítulos en la parte 2:

- De Dominios a Micro Frontends
- La Revolución de los Micro Frontends: Usando Module Federation con
  Angular
- Module Federation Dinámica
- Sistemas de Plugins con Module Federation: Construyendo un Diseñador
  de Flujos de Trabajo Extensible
- Usando Module Federation con Monorepos Nx y Angular
- Manejo de Desajustes de Versión en Module Federation
- Micro Frontends Multi-Framework y Multi-Versión con Module
  Federation
- Errores Comunes con Module Federation y Angular
- Module Federation con los Componentes Independientes (Standalone
  Components) de Angular
- De Module Federation a esbuild y Native Federation

_Parte 3: Gestión de Estado con la nueva NGRX Signal Store_

La mayoría de las aplicaciones Angular necesitan preservar algún estado.
La nueva NGRX Signal Store es una solución de gestión de estado ligera y
altamente extensible en la que vemos mucho potencial. Esta parte muestra
cómo funciona, cómo puede extenderse para cubrir requisitos repetitivos
y cómo se ajusta a tu arquitectura.

Capítulos en la parte 3:

- La nueva NGRX Signal Store para Angular: 3 + n Sabores
- Más Inteligente, No Más Difícil: Simplificando tu Aplicación con
  NGRX Signal Store y Características Personalizadas
- Profundización en NGRX Signal Store: Extensiones Personalizadas
  Flexibles y Seguras en Tipos
- La NGRX Signal Store y Tu Arquitectura

_Parte 4: Capítulos Adicionales_

Los capítulos adicionales proporcionan algunas ideas y perspectivas
adicionales para tus arquitecturas.

Capítulos en la parte 4:

- Automatiza tu Arquitectura con Plugins de Espacio de Trabajo Nx
- El Núcleo del Diseño Guiado por el Dominio

## Formaciones y Consultoría

Si tú y tu equipo necesitáis soporte o formaciones sobre Angular,
estaremos encantados de ayudar con talleres y consultoría (presencial o
remota). Además de otros tipos de talleres, ofrecemos los siguientes:

- Angular Avanzado: Soluciones Empresariales y Arquitectura
- Angular Esencial: Bloques de Construcción y Conceptos
- Taller de Arquitectura Angular
- Taller de Pruebas en Angular (Cypress, Jest, etc.)
- Taller de Rendimiento en Angular
- Taller de Sistemas de Diseño en Angular (Figma, Storybook, etc.)
- Angular: Arquitecturas Reactivas (RxJS y NGRX)
- Taller de Revisión de Angular
- Taller de Actualización de Angular

Por favor, encuentra [la lista completa de nuestras ofertas
aquí](https://www.angulararchitects.io/en/angular-workshops/).

![Taller Avanzado de Angular](images/ad.png) (Taller de Arquitectura
Angular, Avanzado)

Ofrecemos nuestros servicios en varias modalidades: **remoto** o
**presencial**; **públicos** o como **talleres dedicados para
empresas**; en **inglés** o en **alemán**.

Si tienes alguna pregunta, contáctanos usando
<office@softwarearchitekt.at>.

## ¡Ayuda a Mejorar este Libro!

Por favor, házmelo saber si tienes alguna sugerencia. Envía una pull
request al [repositorio GitHub del
libro](https://github.com/manfredsteyer/ddd-bk).

## Agradecimientos

Quiero agradecer a varias personas que me han ayudado a escribir este
libro:

- La maravillosa gente de [Nrwl.io](https://nrwl.io/) que proporciona
  la herramienta de código abierto [Nx](https://nx.dev/angular)
  utilizada en los estudios de caso aquí y descrita en los siguientes
  capítulos.
- [Thomas Burleson](https://twitter.com/thomasburleson?lang=de) quien
  hizo un excelente trabajo describiendo el concepto de fachadas
  (facades). Thomas contribuyó al capítulo sobre diseño táctico que
  explora las fachadas.
- Las mentes maestras [Zack
  Jackson](https://twitter.com/ScriptedAlchemy) y [Jack
  Herrington](https://twitter.com/jherr) me ayudaron a entender la API
  para Dynamic Module Federation.
- El increíble [Tobias Koppers](https://twitter.com/wSokra) me dio
  valiosas perspectivas sobre este tema y
- El único e inigualable [Dmitriy
  Shekhovtsov](https://twitter.com/valorkin) me ayudó a usar la
  integración de Angular CLI/webpack 5 para esto.

# 01. Diseño Estratégico Guiado por el Dominio {#01-diseño-estratégico-guiado-por-el-dominio}

Para que las aplicaciones a escala empresarial sean mantenibles,
necesitan ser subdivididas en partes pequeñas, menos complejas y
desacopladas. Aunque esto suena lógico, también lleva a dos preguntas
difíciles: ¿Cómo identificar dichas partes y cómo pueden comunicarse
entre sí?

En este capítulo, presento una técnica que utilizo para dividir grandes
sistemas de software: el Diseño Estratégico, una disciplina del enfoque
de [diseño guiado por el
dominio](https://www.amazon.de/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215/ref=sr_1_3?ie=UTF8&qid=1551688461&sr=8-3&keywords=ddd)
(DDD).

## ¿Qué es el Diseño Guiado por el Dominio?

DDD describe un enfoque que cierra la brecha entre los requisitos de
sistemas de software complejos y un diseño de aplicación apropiado.
Históricamente, DDD venía con dos disciplinas: diseño táctico y diseño
estratégico. El diseño táctico propone conceptos concretos y patrones de
diseño. Actualmente, la mayoría de ellos son de conocimiento común.
Ejemplos son conceptos como la arquitectura en capas (layering) o
patrones como fábricas (factories), repositorios (repositories) y
entidades (entities).

Por el contrario, el diseño estratégico se ocupa de subdividir un
sistema enorme en partes más pequeñas, desacopladas y menos complejas.
Esto es lo que necesitamos para definir una arquitectura para un sistema
enorme que pueda evolucionar con el tiempo.

## Encontrando Dominios con Diseño Estratégico

El objetivo del diseño estratégico es identificar los llamados
subdominios que no necesitan saber mucho unos de otros. Para reconocer
diferentes subdominios, vale la pena echar un vistazo a los procesos
automatizados por tu sistema. Por ejemplo, un sistema de adquisiciones
electrónicas (e-procurement) que gestiona la adquisición de material de
oficina podría soportar los siguientes dos procesos:

![](images/2019-03-04-10-09-15.png)

Para utilizar estos procesos en la identificación de diferentes
dominios, podemos usar varias heurísticas:

- **Estructura Organizacional:** Diferentes roles o diferentes
  divisiones que son responsables de varios pasos del proceso son un
  indicador de la existencia de varios subdominios.
- **Vocabulario**: Si el mismo término se usa de manera diferente o
  tiene una importancia significativamente diferente, podríamos tener
  diferentes subdominios.
- **Eventos Pivote (Pivotal Events)**: Los Eventos Pivote son puntos
  en el proceso donde se completa una tarea (o subtarea)
  significativa. Después de tal evento, muy a menudo, el proceso
  continúa en otro momento y/o lugar y/o con otros roles. Si nuestro
  proceso fuera una película, tendríamos un cambio de escena después
  de tal evento. Tales eventos son probablemente límites entre
  subdominios.

Cada una de estas heurísticas te da candidatos para dividir tu proceso
en subdominios. Sin embargo, es tu tarea decidir con qué candidatos
proceder. El objetivo general es terminar con divisiones que no
necesiten saber mucho unas de otras.

La buena noticia es: No necesitas tomar tales decisiones solo. Debes
hacerlo junto con otros interesados (stakeholders) como, en primer
lugar, expertos del negocio, pero también otros arquitectos,
desarrolladores y propietarios de producto (product owners).

Un enfoque moderno para reunir el conocimiento de todas estas diferentes
personas es [Event Storming](https://www.eventstorming.com). Es un
formato de taller en el que distintos grupos de interesados modelan
conjuntamente los procesos utilizando post-its (notas adhesivas).

## Los Dominios se Modelan por Separado

Otro aspecto importante del Diseño Estratégico es que cada dominio se
modela por separado. Esta es la clave para desacoplar los dominios entre
sí. Si bien esto podría llevar a redundancias, muy a menudo no es así
porque cada dominio tiene una perspectiva muy particular de sus
entidades.

Por ejemplo, un `producto` no es exactamente el mismo en todos los
dominios. Por ejemplo, mientras que la descripción de un producto es muy
detallada en el catálogo, el proceso de aprobación solo necesita unos
pocos datos clave:

![](images/2019-03-04-10-15-14.png)

En DDD, distinguimos entre estas dos formas de un producto. Creamos
diferentes modelos que son tan concretos y significativos como sea
posible.

Este enfoque previene la creación de un único modelo confuso que intente
describir el mundo entero. Tales modelos tienen demasiadas
interdependencias que hacen imposible el desacoplamiento y la
subdivisión.

Todavía podemos relacionar diferentes vistas de la entidad producto a un
nivel lógico. Si usamos el mismo id en ambos lados, sabemos qué
\"producto de catálogo\" y qué \"producto de aprobación\" son vistas
diferentes de la misma entidad.

Por lo tanto, cada modelo solo es válido para un área específica. DDD
llama a esta área el [contexto delimitado (bounded
context)](https://martinfowler.com/bliki/BoundedContext.html). Dicho de
otra manera: el contexto delimitado define fronteras de pensamiento y
solo dentro de estas fronteras el modelo tiene sentido. Más allá de
estas fronteras tenemos una perspectiva diferente de los mismos
conceptos. Idealmente, cada dominio tiene su propio contexto delimitado.

Dentro de tal contexto delimitado, usamos un lenguaje ubicuo. Este es
principalmente el lenguaje de los expertos del dominio. Eso significa
que intentamos reflejar el mundo real con nuestro modelo y también
dentro de nuestra implementación. Esto hace que el sistema sea más
autodescriptivo y reduce el riesgo de malentendidos.

## Mapeo de Contextos (Context-Mapping)

En nuestro caso de estudio, podemos encontrar los siguientes dominios:

![](images/2019-03-04-14-15-10.png)

Aunque estos dominios deberían ser lo más autónomos posible, todavía
tienen que interactuar ocasionalmente. Supongamos que el dominio de
`Pedidos` (Ordering) para realizar pedidos necesita interactuar con el
dominio de `Catálogo` (Catalogue) y un sistema ERP conectado.

Para definir cómo interactúan estos dominios, creamos un mapa de
contextos:

![](images/2019-03-04-10-26-54.png)

En principio, `Pedidos` podría tener acceso completo a `Catálogo`. En
este caso, sin embargo, los dominios ya no estarían desacoplados y un
cambio en `Catálogo` podría romper `Pedidos`.

El diseño estratégico define varias formas de lidiar con tales
situaciones. Por ejemplo, en el mapa de contextos mostrado arriba,
`Catálogo` ofrece una API (DDD lo llama un `servicio abierto/anfitrión`
u `open/host service`) que expone solo aspectos seleccionados para otros
dominios. Esta API debe ser estable y retrocompatible para evitar romper
otros dominios. Todo lo demás está oculto detrás de esta API y, por lo
tanto, puede cambiarse fácilmente.

Dado que no podemos controlar el sistema ERP, `Pedidos` utiliza una
denominada capa anticorrupción (ACR) para acceder a él. Todas las
llamadas al sistema ERP son canalizadas por esta ACR. Por lo tanto, si
algo cambia en el sistema ERP, solo necesitamos actualizar la ACR.
Además, la ACR nos permite traducir conceptos del sistema ERP a
entidades que tienen sentido dentro de nuestro contexto delimitado.

Un sistema existente, como el sistema ERP mostrado, generalmente no
sigue la idea del contexto delimitado. En cambio, contiene varios
contextos lógicos y entremezclados.

Otra estrategia que quiero destacar aquí es `Vías Separadas` (Separate
Ways). Tareas específicas, como calcular el IVA, podrían implementarse
por separado en varios dominios:

![](images/2019-03-04-13-59-17.png)

A primera vista, esto parece extraño porque conduce a redundancias de
código y, por lo tanto, rompe el principio DRY (no te repitas). Sin
embargo, puede ser útil porque evita una dependencia de una biblioteca
compartida. Aunque prevenir el código redundante es importante, limitar
las dependencias es vital porque cada dependencia aumenta la complejidad
general. Además, cuantas más dependencias tengamos, más probables serán
los cambios disruptivos (breaking changes) cuando evolucionen partes
individuales de nuestro sistema. Por lo tanto, es bueno evaluar primero
si una dependencia adicional es realmente necesaria.

## Subdominios vs. Contextos Delimitados {#subdominios-vs-contextos-delimitados}

Los Subdominios y los Contextos Delimitados son dos caras de la misma
moneda: mientras que el término Subdominio se refiere a un área del
mundo real (espacio del problema), el contexto delimitado representa una
parte de la solución (espacio de la solución).

Idealmente, ambos conceptos se alinean entre sí, ya que nuestro objetivo
es reflejar el mundo real. Sin embargo, puede haber situaciones en las
que decidas por contextos divergentes. Un ejemplo mencionado a menudo es
la presencia de un sistema heredado (legacy system) que se superpone a
varios subdominios. Por otro lado, podrías decidir descomponer un
subdominio en varios contextos delimitados por razones técnicas o para
poder asignarlos a diferentes equipos.

## Topologías de Equipos y Diseño Estratégico

Topologías de Equipos (Team Topologies) es un concepto relativamente
nuevo para organizar equipos de desarrollo de software. Describe varios
tipos de equipos y patrones de cómo dichos equipos interactúan entre sí.
También enfatiza la importancia de asegurar que el diseño del equipo
permita a los equipos individuales manejar la carga cognitiva
correlacionada con sus responsabilidades.

Para subdividir un sistema de software en varias partes que pueden
asignarse a diferentes equipos, Topologías de Equipos define la noción
de planos de fractura. El plano de fractura preferido es un contexto
delimitado que refleja un subdominio en el sentido de DDD.

Además de esto, existen varios otros posibles planos de fractura:

- Cumplimiento Normativo
- Cadencia de Cambio
- Ubicación del Equipo
- Riesgo
- Aislamiento de Rendimiento
- Tecnología
- Personas de Usuario (User Personas)

## Conclusión

El diseño estratégico consiste en identificar subdominios débilmente
acoplados. En cada dominio, encontramos un lenguaje ubicuo y conceptos
que solo tienen sentido dentro del contexto delimitado del dominio. Un
mapa de contextos muestra cómo interactúan esos dominios.

En el próximo capítulo, veremos cómo podemos implementar esos dominios
con Angular utilizando un monorepo basado en [Nx](https://nx.dev/).

# 02. Arquitecturas con Sheriff y Componentes Independientes (Standalone) {#02-arquitecturas-con-sheriff-y-componentes-independientes-standalone}

En el capítulo anterior, he mostrado cómo definir tu Diseño Estratégico.
Este capítulo destaca la implementación de tu Diseño Estratégico basado
en Componentes Independientes (Standalone Components) y APIs
Independientes (Standalone APIs). La arquitectura especificada se aplica
con el proyecto de código abierto Sheriff.

Los ejemplos utilizados aquí funcionan con un Proyecto Angular CLI
tradicional, pero también con Nx, en el que se centra el próximo
capítulo.

[Código Fuente](https://github.com/manfredsteyer/modern-arc.git)

## La Matriz de Arquitectura

Para implementar nuestro diseño estratégico, tiene sentido subdividir
aún más los dominios individuales en diferentes módulos:

![Matriz de Arquitectura](images/matrix.png)

Esta matriz es a menudo el punto de partida de nuestros proyectos y
puede adaptarse a las necesidades individuales. Cada celda resulta en un
módulo en el código fuente.
[Nrwl](https://go.nrwl.io/angular-enterprise-monorepo-patterns-new-book)
sugiere las siguientes categorías (originalmente para bibliotecas),
entre otras, que han demostrado ser útiles en nuestro trabajo diario:

- **feature:** Un módulo de característica implementa un caso de uso
  con los llamados componentes inteligentes (smart components). Debido
  a su enfoque en una característica, dichos componentes no son muy
  reutilizables. Los Componentes Inteligentes se comunican con el
  backend. Típicamente, en Angular, esta comunicación ocurre a través
  de un store o servicios.
- **ui:** Los módulos UI contienen los llamados componentes tontos
  (dumb) o de presentación (presentational components). Estos son
  componentes reutilizables que apoyan la implementación de
  características individuales pero no las conocen directamente. La
  implementación de un sistema de diseño consiste en tales
  componentes. Sin embargo, los módulos UI también pueden contener
  componentes técnicos generales que se utilizan en todos los casos de
  uso. Un ejemplo de esto sería un componente de ticket, que asegura
  que los tickets se presenten de la misma manera en diferentes
  características. Dichos componentes usualmente solo se comunican con
  su entorno a través de propiedades y eventos. No obtienen acceso al
  backend ni a un store fuera del módulo.
- **data:** Los módulos de datos contienen el modelo de dominio
  respectivo (en realidad, la vista del lado del cliente de este) y
  los servicios que operan sobre él. Dichos servicios validan, por
  ejemplo, Entidades y se comunican con el backend. La gestión del
  estado (state management), incluida la provisión de modelos de vista
  (view models), también puede acomodarse en módulos de datos. Esto es
  particularmente útil cuando múltiples características en el mismo
  dominio se basan en los mismos datos.
- **util:** Funciones auxiliares generales, etc., se pueden encontrar
  en módulos de utilidad. Ejemplos de esto son el registro (logging),
  la autenticación o el trabajo con valores de fecha.

Otro aspecto especial de la implementación en el código es el área
compartida (shared), que ofrece código para todos los dominios. Esta
debería tener principalmente código técnico \-- el código específico de
casos de uso generalmente se encuentra en los dominios individuales.

La estructura mostrada aquí aporta orden al sistema: Hay menos discusión
sobre dónde encontrar o colocar ciertas secciones de código. Además, se
pueden introducir dos reglas simples pero efectivas sobre la base de
esta matriz:

- En términos de diseño estratégico, cada dominio solo puede
  comunicarse con sus propios módulos. Una excepción es el área
  compartida (shared) a la que cada dominio tiene acceso.

- Cada módulo solo puede acceder a módulos en capas inferiores de la
  matriz. Cada categoría de módulo se convierte en una capa en este
  sentido.

Ambas reglas apoyan el desacoplamiento de los módulos o dominios
individuales y ayudan a evitar ciclos.

Siendo una arquitectura de referencia, esta matriz a menudo se adapta a
las necesidades específicas del proyecto. Algunos equipos la simplifican
reduciendo la cantidad de capas y reglas de acceso; algunos equipos
añaden otras adicionales. En algunos proyectos, la capa de datos se
llama capa de dominio (domain) o de estado (state) y hay proyectos donde
los aspectos de estos diferentes nombres terminan en capas propias.

## Estructura del Proyecto para la Matriz de Arquitectura

La matriz de arquitectura se puede mapear en el código fuente en forma
de carpetas: Cada dominio tiene su propia carpeta, que a su vez tiene
una subcarpeta para cada uno de sus módulos:

![Estructura de Carpetas para la Matriz de
Arquitectura](images/folder-structure-02.png)

Los nombres de los módulos llevan como prefijo el nombre de la categoría
de módulo respectiva. Esto significa que se puede ver a primera vista
dónde se encuentra el módulo respectivo en la matriz de arquitectura.
Dentro de los módulos hay bloques de construcción típicos de Angular
como componentes, directivas, pipes o servicios.

El uso de módulos de Angular ya no es necesario desde la introducción de
los componentes independientes (standalone components) (directivas y
pipes). En su lugar, la bandera _standalone_ se establece en _true:_

```typescript
@Component({
  selector: "app-flight-booking",
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: "./flight-booking.component.html",
  styleUrls: ["./flight-booking.component.css"],
})
export class FlightBookingComponent {}
```

En el caso de los componentes, también se debe importar el llamado
contexto de compilación. Estos son todos los demás componentes
independientes (standalone components), directivas y pipes que se
utilizan en la plantilla.

Un _index.ts_ se utiliza para definir la interfaz pública del módulo.
Este es un llamado \"barrel\" (barril) que determina qué componentes del
módulo también pueden usarse fuera del módulo:

```typescript
export * from "./flight-booking.routes";
```

Se debe tener cuidado al mantener las construcciones publicadas, ya que
los cambios disruptivos (breaking changes) tienden a afectar a otros
módulos. Sin embargo, todo lo que no se publica aquí es un detalle de
implementación del módulo. Los cambios en estas partes son, por lo
tanto, menos críticos.

## Aplicando tu Arquitectura con Sheriff

La arquitectura discutida hasta ahora se basa en varias convenciones:

- Los módulos solo pueden comunicarse con módulos del mismo dominio y
  _shared_ (compartido)
- Los módulos solo pueden comunicarse con módulos en capas inferiores
- Los módulos solo pueden acceder a la interfaz pública de otros
  módulos

El proyecto de código abierto
[Sheriff](https://github.com/softarc-consulting/sheriff) permite que
estas convenciones se apliquen mediante linting. La violación se
advierte con un mensaje de error en el IDE o en la consola:

![Sheriff informa sobre violaciones de arquitectura](images/sheriff.png)

El mensaje de error en el IDE proporciona retroalimentación instantánea
durante el desarrollo y la salida del linter en la consola se puede
utilizar para automatizar estas verificaciones en el proceso de
compilación. Por lo tanto, se puede evitar que se confirme (commit)
código fuente que viole la arquitectura definida.

Para configurar Sheriff, se deben obtener los siguientes dos paquetes a
través de npm:

```javascript
npm i @softarc/sheriff-core @softarc/eslint-plugin-sheriff -D
```

El primero incluye Sheriff, el último es el puente hacia _eslint_. Para
usar este puente, debe registrarse en el _.eslintrc.json_ que se
encuentra en la raíz del proyecto:

```json
{
  [...],
  "overrides": [
    [...]
    {
      "files": ["*.ts"],
      "extends": ["plugin:@softarc/sheriff/default"]
    }
  ]
}
```

Sheriff considera cualquier carpeta con un _index.ts_ como un módulo.
Por defecto, Sheriff evita que este _index.js_ sea omitido (bypassed) y,
por lo tanto, el acceso a detalles de implementación por otros módulos.
El _sheriff.config.ts_ que se configurará en la raíz del proyecto define
categorías (_tags_) para los módulos individuales y define reglas de
dependencia (_depRules_) basadas en ellas. A continuación se muestra una
configuración de Sheriff para la matriz de arquitectura discutida
anteriormente:

```typescript
import { noDependencies, sameTag, SheriffConfig } from "@softarc/sheriff-core";

export const sheriffConfig: SheriffConfig = {
  version: 1,

  tagging: {
    "src/app": {
      "domains/<domain>": {
        "feature-<feature>": ["domain:<domain>", "type:feature"],
        "ui-<ui>": ["domain:<domain>", "type:ui"],
        data: ["domain:<domain>", "type:data"],
        "util-<ui>": ["domain:<domain>", "type:util"],
      },
    },
  },
  depRules: {
    root: ["*"],

    "domain:*": [sameTag, "domain:shared"],

    "type:feature": ["type:ui", "type:data", "type:util"],
    "type:ui": ["type:data", "type:util"],
    "type:data": ["type:util"],
    "type:util": noDependencies,
  },
};
```

Las etiquetas (tags) se refieren a nombres de carpetas. Expresiones como
`<domain>` o `<feature>` son marcadores de posición (placeholders). A
cada módulo debajo de `src/app/domains/<domain>` cuyo nombre de carpeta
comience con `feature-*` se le asignan, por lo tanto, las categorías
`domain:<domain>` y `type:feature`. En el caso de
`src/app/domains/booking`, estas serían las categorías `domain:booking`
y `type:feature`.

Las reglas de dependencia (dependency rules) bajo `depRules` recogen las
categorías individuales y estipulan, por ejemplo, que un módulo solo
tiene acceso a módulos en el mismo dominio y a `domain:shared`. Otras
reglas definen que cada capa solo tiene acceso a las capas inferiores.
Gracias a la regla `root: ['*']`, todas las carpetas no categorizadas
explícitamente en la carpeta raíz e inferiores tienen permitido el
acceso a todos los módulos. Esto afecta principalmente al shell
(contenedor principal) de la aplicación.

## Mapeos de Rutas Ligeros

Los mapeos de rutas (path mappings) se pueden usar para evitar rutas
relativas ilegibles dentro de las importaciones. Estos permiten, por
ejemplo, en lugar de

```typescript
import { FlightBookingFacade } from "../../data";
```

usar lo siguiente:

```typescript
import { FlightBookingFacade } from "@demo/ticketing/data";
```

Tales importaciones de tres partes consisten en el nombre del proyecto o
el nombre del espacio de trabajo (workspace) (p.ej., `@demo`), el nombre
del dominio (p.ej., `ticketing`), y un nombre de módulo (p.ej., `data`)
y, por lo tanto, reflejan la posición deseada dentro de la matriz de
arquitectura.

Esta notación se puede habilitar independientemente del número de
dominios y módulos con un único mapeo de ruta dentro de _tsconfig.json_
en la raíz del proyecto:

```json
{
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": "./",
    [...]
    "paths": {
      "@demo/*": ["src/app/domains/*"],
    }
  },
  [...]
}
```

Los IDEs como Visual Studio Code deben reiniciarse después de este
cambio. Esto asegura que tengan en cuenta este cambio.

El sistema de compilación Nx, presentado en el próximo capítulo, añade
automáticamente tales mapeos de rutas a tu proyecto al agregar una
biblioteca.

## Conclusión

El diseño estratégico subdivide un sistema en diferentes partes que se
implementan de la manera más independiente posible. Este desacoplamiento
evita que los cambios en un área de la aplicación afecten a otras. El
enfoque de arquitectura mostrado subdivide los dominios individuales en
diferentes módulos, y el proyecto de código abierto Sheriff asegura que
los módulos individuales solo se comuniquen entre sí respetando las
reglas establecidas.

Este enfoque permite la implementación de monolitos de frontend grandes
y mantenibles a largo plazo. Debido a su estructura modular, a veces
también se habla de \"moduliths\" (modulitos). Una desventaja de tales
arquitecturas son los tiempos de compilación y prueba incrementados.
Este problema se puede resolver con compilaciones y pruebas
incrementales. El próximo capítulo aborda esto.

# 03. Rendimiento de Compilación con Nx

Hasta ahora, hemos sentado las bases para una arquitectura Angular
mantenible. Hemos estado pensando en la división de dominios (domain
slicing), la categorización de módulos y la aplicación de reglas basadas
en ellos con Sheriff.

Este capítulo complementa nuestra solución con medidas para mejorar el
rendimiento de compilación. Para ello, cambiaremos al conocido sistema
de compilación Nx.

📁 [Código Fuente](https://github.com/manfredsteyer/modern-arc.git) (ver
diferentes ramas)

## Compilaciones Incrementales -- Primeros Pasos {#compilaciones-incrementales--primeros-pasos}

Las compilaciones incrementales consisten en reconstruir solo las partes
modificadas del repositorio y, por lo tanto, permiten acelerar
enormemente el proceso de compilación. Para este propósito, la solución
se divide en varias aplicaciones. Esto significa que solo la aplicación
que acaba de ser modificada debe ser reconstruida. Lo mismo se aplica a
la ejecución de pruebas.

La siguiente instrucción crea otra aplicación en un espacio de trabajo:

    ng g app miles

Las bibliotecas se pueden usar para compartir código entre aplicaciones:

    ng g lib auth

Todas las aplicaciones y bibliotecas configuradas de esta manera son
parte del mismo espacio de trabajo y repositorio. Por lo tanto, no es
necesario distribuir las bibliotecas a través de npm:

![Estructura de carpetas de una biblioteca](images/lib.png)

El archivo `public-api.ts`, a veces también llamado `index.ts`, tiene
una tarea especial. Define la API pública de la biblioteca:

```typescript
// public-api.ts

export * from "./lib/auth.service";
```

Todos los constructos publicados aquí son visibles para otras
bibliotecas y aplicaciones. El resto se considera un detalle de
implementación privado. Para conceder acceso a una biblioteca a otras
bibliotecas y aplicaciones en el mismo espacio de trabajo, se debe
configurar un mapeo de rutas correspondiente en el archivo
`tsconfig.json` central:

```json
[…]
"paths": {
  "@demo/auth": [
    "auth/src/public-api.ts"
  ],
  […]
}
[…]
```

Llamar a `ng g lib` se encarga de este mapeo de rutas. Sin embargo, la
implementación de la CLI de Angular hace que apunte a la carpeta `dist`
y, por lo tanto, a la versión compilada. Esto significa que el autor
tendría que reconstruir la biblioteca después de cada cambio. Para
evitar este molesto proceso, el listado anterior hace que el mapeo
apunte a la versión del código fuente de la biblioteca. A diferencia de
la CLI, la herramienta Nx mencionada más adelante se encarga de esto
automáticamente.

Una vez configurado el mapeo de rutas, las aplicaciones y bibliotecas
individuales pueden importar las exportaciones de la API pública:

```typescript
import { AuthService } from "@demo/auth";
```

## Más cómodo y más potente: Nx

La solución de la sección anterior es simple, pero tiene una pega: los
desarrolladores deben saber qué aplicaciones han cambiado y activar
manualmente el comando de compilación correspondiente. Y el servidor de
compilación probablemente todavía tenga que reconstruir y probar todas
las aplicaciones para mayor seguridad.

Sería mejor dejar que las herramientas averigüen qué aplicaciones han
cambiado. Para hacer esto, podrías calcular un valor hash para todos los
archivos fuente que influyen en tus aplicaciones. Cada vez que un valor
hash cambia, se puede asumir que la aplicación correspondiente necesita
ser reconstruida o probada.

Nx es una solución popular que respalda esta idea y viene con muchas
características adicionales. Además de Angular, también admite otras
tecnologías como React o backends basados en Node.js, e integra
numerosas herramientas comúnmente utilizadas en el desarrollo de
soluciones basadas en web. Ejemplos son las herramientas de prueba Jest,
Cypress y Playwright, el servidor npm _verdaccio_ y Storybook utilizado
para la documentación interactiva de componentes. Los desarrolladores no
tienen que invertir ningún esfuerzo en configurar dichas herramientas,
sino que pueden empezar directamente.

Para las compilaciones incrementales, Nx utiliza una caché de
compilación. Debido a que Nx analiza las dependencias entre las partes
individuales del programa, estos mecanismos a menudo no requieren
configuración manual. Nx se siente muy natural, especialmente para los
desarrolladores de Angular: La CLI de Nx se puede usar de manera similar
a la CLI de Angular. Simplemente cambias la instrucción `ng` por `nx`;
los argumentos habituales permanecen en gran medida iguales (`nx build`,
`nx serve`, `nx g app`, `nx g lib`, etc.). La CLI de Nx se instala a
través de npm:

    npm i -g nx

Para crear un nuevo espacio de trabajo Nx, ejecuta el siguiente comando:

    npx create-nx-workspace@latest my-project

Para tu primer proyecto, selecciona las siguientes opciones:

![Opciones para tu primer proyecto Nx](images/create-nx-workspace.png)

Este comando hace que npm cargue un script que configura un espacio de
trabajo Nx con la versión actual de Nx. También hay scripts para migrar
espacios de trabajo de la CLI a Nx, aunque no siempre activan la gama
completa de características de Nx. Por esta razón, hemos tenido mejores
experiencias creando un nuevo espacio de trabajo Nx y, si es necesario,
copiando el código fuente existente. Como es habitual con la CLI de
Angular, el espacio de trabajo se puede dividir luego en varias
aplicaciones y bibliotecas:

    nx g app apps/appName

    nx g lib libs/libName

Es una convención habitual de Nx colocar las aplicaciones Angular en la
carpeta `apps` y las bibliotecas Angular en la carpeta `libs`. También
aquí, usa la configuración predeterminada para tus primeros proyectos
Nx. Sin embargo, sugeriría una excepción a esta regla: comienza con el
nuevo constructor (builder) esbuild, ya que proporciona un mejor
rendimiento de compilación en comparación con el tradicional basado en
webpack.

Una llamada a

    nx graph

ilustra las dependencias entre aplicaciones y bibliotecas:

![Un grafo de dependencias simple](images/graph-klein.png)

## Compilaciones Incrementales con Nx

Los datos utilizados para el grafo de dependencias también son la base
para las compilaciones incrementales que Nx ofrece de forma
predeterminada. Para compilar un proyecto específico, puedes usar
`nx build`:

    nx build miles

Si los archivos fuente que influyen en la aplicación afectada no han
cambiado, recibirás inmediatamente el resultado de la caché local. Por
defecto, esta se encuentra en una carpeta `.nx` excluida en el archivo
`.gitignore` de tu proyecto.

También se puede indicar a Nx que reconstruya ciertos proyectos o todos:

    npx nx run-many --target=build --projects=flights,miles

    npx nx run-many --target=build --all

En este caso, también, Nx recurre a la caché si los archivos fuente no
han cambiado:

![Nx permite compilaciones incrementales sin
configuración](images/nx-build.png)

Las pruebas unitarias, las pruebas E2E y el linting también se pueden
realizar incrementalmente de la misma manera. Nx incluso va un paso más
allá y almacena en caché estas acciones a nivel de biblioteca. Esto
mejora el rendimiento al dividir la aplicación en varias bibliotecas.

En principio, esto también sería posible para `nx build`, siempre que
las bibliotecas individuales se creen como `buildable`
(`nx g lib myLib --buildable`). Sin embargo, se ha demostrado que este
enfoque rara vez conduce a ventajas de rendimiento y que las
reconstrucciones incrementales de aplicaciones son preferibles.

## Nota al Margen: Micro Frontends

Las aplicaciones compiladas por separado se pueden integrar en tiempo de
ejecución, dando a los usuarios la sensación de trabajar con una única
aplicación. Para este propósito, se utilizan técnicas conocidas del
mundo de los micro frontends. Este tema se discute en varios otros
capítulos.

## Caché Distribuida con Nx Cloud

Por defecto, Nx configura una caché local. Si quieres ir un paso más
allá, usa una caché distribuida a la que todo el equipo del proyecto y
el servidor de compilación puedan acceder. Esto significa que también te
beneficias de las compilaciones que otros ya han realizado. La [Nx
Cloud](https://nx.app/) -- un complemento comercial para el Nx gratuito
-- ofrece dicha caché. Si no quieres o no puedes usar proveedores de
nube, también puedes alojar Nx Cloud tú mismo.

Para conectar un espacio de trabajo Nx a Nx Cloud, solo se necesita un
comando:

    npx nx connect-to-nx-cloud

Técnicamente, este comando activa el ejecutor de tareas (task runner)
`nx-cloud` en el archivo `nx.json` ubicado en la raíz del proyecto:

```json
"tasksRunnerOptions": {
  "default": {
    "runner": "nx-cloud",
    "options": {
      "cacheableOperations": [
        "build",
        "test",
        "lint"
      ],
      "accessToken": "[…]"
    }
  }
},
```

Un ejecutor de tareas se encarga de la ejecución de tareas individuales,
como las que están detrás de `nx build`, `nx lint` o `nx test`. La
implementación predeterminada almacena en caché los resultados de estas
tareas en el sistema de archivos, como se discutió anteriormente. El
Ejecutor de Tareas `nx-cloud`, por otro lado, delega a una cuenta en Nx
Cloud.

Esto también muestra que el ejecutor de tareas y, por lo tanto, la
estrategia de caché se pueden intercambiar con relativa facilidad.
Algunos proyectos de código abierto aprovechan esto y ofrecen ejecutores
de tareas que utilizan sus propias fuentes de datos como AWS (ver
[aquí](https://www.npmjs.com/package/@magile/nx-distributed-cache) y
[aquí](https://github.com/bojanbass/nx-aws)),
[GCP](https://github.com/MansaGroup/nx-gcs-remote-cache),
[Azure](https://npmjs.com/package/nx-remotecache-azure), o
[Minio](https://npmjs.com/package/nx-remotecache-minio). Gracias a [Lars
Gyrup Brink Nielsen](https://twitter.com/LayZeeDK) por señalarme estas
soluciones.

Sin embargo, debe tenerse en cuenta que la API del ejecutor de tareas no
es pública y, por lo tanto, puede cambiar de una versión a otra.

El ejecutor de tareas para Nx Cloud también necesita configurarse con un
token de acceso (ver arriba). Comandos como _nx build_ generan un enlace
a una cuenta en la nube creada dinámicamente. Al acceder por primera
vez, es aconsejable crear usuarios para restringir el acceso a ellos.
También puedes encontrar un panel (dashboard) bajo este enlace que
proporciona información sobre las compilaciones realizadas:

![El panel de Nx proporciona información sobre las compilaciones
completadas](images/dashboard.png)

## Aún Más Rápido: Paralelización con Nx Cloud

Para acelerar aún más el proceso de compilación, Nx Cloud ofrece la
opción de paralelizar tareas de compilación individuales. Aquí, también,
el grafo de dependencias demuestra ser una ventaja: Nx puede usarlo para
averiguar el orden en que deben realizarse las tareas individuales o qué
tareas se pueden paralelizar.

Se utilizan diferentes nodos en la nube para la paralelización: un nodo
principal se encarga de la coordinación y varios nodos trabajadores
(worker nodes) se ocupan de las tareas individuales en paralelo. Nx
incluso puede generar scripts de compilación que inician y proporcionan
tareas a estos nodos. Por ejemplo, la siguiente instrucción genera un
flujo de trabajo (workflow) para GitHub:

    nx generate @nx/workspace:ci-workflow --ci=github

Este comando también es compatible con CircleCI (`--ci=circleci`) y
Azure (`--ci==azure`). Si optas por otro entorno, al menos puedes usar
los flujos de trabajo generados como punto de partida. Esencialmente,
estos scripts especifican el número deseado de nodos trabajadores y el
número de procesos paralelos por nodo trabajador. Los comandos activados
se dividen en tres grupos: comandos que se ejecutan secuencialmente para
la inicialización (`init-commands`), comandos que se ejecutan en
paralelo en el nodo principal (`parallel-commands`) y comandos que los
trabajadores ejecutan en paralelo (`parallel-commands`) en los agentes.

Los scripts se activan cada vez que la rama principal del repositorio
cambia, ya sea por un `push` directo o al fusionar una pull request:

![Paralelización con Nx Cloud y GitHub Actions](images/dte.png)

## Conclusión

Nx permite acelerar drásticamente las tareas de compilación. Esto es
posible, entre otras cosas, gracias a las compilaciones incrementales,
en las que solo se reconstruyen o prueban las partes de la aplicación
que realmente han cambiado. Nx Cloud ofrece opciones de aceleración
adicionales con su caché distribuida. También permite paralelizar las
compilaciones individuales. Debido a que Nx analiza el código del
programa y reconoce las dependencias entre aplicaciones y bibliotecas
individuales, estas opciones a menudo no requieren configuración manual.

# 03a. Nx & Sheriff - Amigos para toda la vida

Nx ofrece muchas características (no solo) para equipos de Angular: Una
CI rápida gracias a la caché de compilación y la paralelización,
integración con herramientas populares como Jest, Cypress, Playwright o
Storybook con solo presionar un botón, y reglas de linting para hacer
cumplir los límites del módulo son solo algunos ejemplos. Sheriff, por
otro lado, se centra en hacer cumplir los límites del módulo.

A primera vista, Sheriff parece ser un pequeño subconjunto de Nx. Sin
embargo, con bastante frecuencia utilizamos ambas herramientas juntas en
nuestros proyectos de clientes. En este capítulo, explico por qué y cómo
tus arquitecturas pueden beneficiarse de esta combinación.

## Límites de Módulo en Nx

Por defecto, Nx permite hacer cumplir límites de módulo como los de
nuestra matriz de arquitectura:

![](images/matrix.png)

Aquí, una capa técnica solo puede acceder a las capas inferiores, y
dominios como `booking` (reservas) y `boarding` (embarque) no pueden
acceder entre sí. Sin embargo, pueden acceder al área compartida (ver
flechas en la imagen anterior).

### Etiquetado de Aplicaciones y Librerías

Para hacer cumplir estos límites con Nx, cada celda en nuestra matriz se
implementa como una librería propia. En lugar de usar un `angular.json`
general, Nx crea un `project.json` local para cada aplicación y
librería. Este archivo te permite etiquetar la aplicación o librería en
cuestión:

```json
{
  [...]
  "tags": ["domain:tickets", "type:domain-logic"]
}
```

Las etiquetas son solo cadenas de texto. En el caso mostrado, reflejan
la posición de la librería o aplicación en la matriz de arquitectura.
Los prefijos `domain` y `type` ayudan a distinguir las dos dimensiones
(columnas con dominios y filas con tipos). Esto es solo para mejorar la
legibilidad; para Nx no añaden ningún significado.

### Definición de Límites de Módulo

Además de las etiquetas, podemos configurar límites de módulo que le
dicen a Nx qué aplicaciones y librerías pueden acceder a qué otras
librerías. Estos límites se definen usando una regla de linting en el
`.eslintrc.json` que se encuentra en la raíz del espacio de trabajo:

```json
"rules": {
  "@nx/enforce-module-boundaries": [
    "error",
    {
      "enforceBuildableLibDependency": true,
      "allow": [],
      "depConstraints": [
        {
          "sourceTag": "type:app",
          "onlyDependOnLibsWithTags": [
            "type:api",
            "type:feature",
            "type:ui",
            "type:domain-logic",
            "type:util"
          ]
        },
        {
          "sourceTag": "type:feature",
          "onlyDependOnLibsWithTags": [
            "type:ui",
            "type:domain-logic",
            "type:util"
          ]
        },
        {
          "sourceTag": "type:ui",
          "onlyDependOnLibsWithTags": ["type:domain-logic", "type:util"]
        },
        {
          "sourceTag": "type:domain-logic",
          "onlyDependOnLibsWithTags": ["type:util"]
        },


        {
          "sourceTag": "domain:booking",
          "onlyDependOnLibsWithTags": ["domain:booking", "shared"]
        },
        {
          "sourceTag": "domain:boarding",
          "onlyDependOnLibsWithTags": ["domain:boarding", "shared"]
        },
        {
          "sourceTag": "shared",
          "onlyDependOnLibsWithTags": ["shared"]
        },

      ]
    }
  ]
}
```

Hay un conjunto de restricciones para cada dimensión encontrada en la
matriz. Como no añadimos nuevos tipos de capas y nuevos dominios
regularmente, estas reglas de linting no conllevan mucho esfuerzo de
mantenimiento. Después de cambiar estas reglas, reinicia tu IDE para
asegurar que relea los archivos modificados.

### Hacer Cumplir los Límites de Módulo

Cuando tu código fuente rompe las reglas definidas, tu IDE debería
mostrarte un error de linting:

![](images/linting-2.png)

Además, una llamada a `nx lint` revelará los mismos errores de linting.
Esto permite que tus tareas de compilación verifiquen la alineación con
la arquitectura definida. Usando ganchos de git y herramientas como
[husky](https://typicode.github.io/husky/), también puedes evitar que
las personas envíen código fuente que rompa las reglas.

### Tu Arquitectura con Solo Presionar un Botón

Si quieres automatizar la creación de todas estas librerías para cada
celda de la matriz, definiendo etiquetas y reglas de linting, podría
gustarte nuestro [plugin DDD
Nx](https://www.npmjs.com/package/@angular-architects/ddd). Usando este
plugin, los siguientes comandos son todo lo que necesitas para
configurar dos dominios con algunas características:

```bash
npm i @angular-architects/ddd
ng g @angular-architects/ddd:init

ng g @angular-architects/ddd:domain booking --addApp --standalone
ng g @angular-architects/ddd:domain boarding --addApp --standalone
ng g @angular-architects/ddd:feature search --domain booking --entity flight --standalone
ng g @angular-architects/ddd:feature cancel --domain booking --standalone
ng g @angular-architects/ddd:feature manage --domain boarding --standalone
```

Si visualizas esta arquitectura con el comando `nx graph`, obtienes el
siguiente gráfico:

![](images/ddd-graph.png)

## Recapitulación: Diferentes Tipos de Límites

Hasta ahora, hemos discutido cómo introducir límites en Nx. Sin embargo,
si observamos más de cerca Nx, vemos que hay dos tipos de límites:

- Límites para la modularización
- Límites para CI/CD incremental

Ambos tipos de límites se alinean entre sí y se implementan como
aplicaciones y librerías.

Sin embargo, hay situaciones en las que tener tantas aplicaciones y
librerías parece un poco abrumador, y una CI/CD incremental tan
detallada no es necesaria. En algunos casos, la compilación ya podría
ser lo suficientemente rápida o podría no beneficiarse mucho de más
aplicaciones y librerías, ya que la cantidad de agentes de compilación
también es limitada.

Por otro lado, tener límites de módulo en este nivel de granularización
es esencial para nuestra arquitectura. Por lo tanto, necesitamos
encontrar una manera de desacoplar estos dos tipos de límites entre sí.
Para esto, combinamos Nx con
[Sheriff](https://github.com/softarc-consulting/sheriff) introducido en
el capítulo _Arquitecturas con Sheriff y Componentes Independientes
(Standalone Components)_:

- Menos librerías, más generales (de grano grueso), definen los
  límites para la CI/CD incremental.

- Los límites habituales de grano fino para la modularización se
  implementan a nivel de carpeta con Sheriff.

- Como sucede a menudo, esta es una situación de compensación:
  Intercambiamos la posibilidad de una CI/CD incremental más detallada
  por una estructura de proyecto simplificada.

## Opciones con Sheriff

Hay varias maneras de combinar Sheriff con Nx. Aquí, quiero mostrar dos
opciones que usamos a menudo: tener una aplicación por dominio y tener
una librería por dominio.

### Aplicación por Dominio

El primer enfoque que quiero mencionar aquí es crear una aplicación por
subdominio:

![](images/app-per-domain.png)

Esta estrategia ya se usó en el capítulo _Arquitecturas con Sheriff y
Componentes Independientes (Standalone Components)_.

Los módulos compartidos todavía se implementan como librerías separadas.
Este enfoque es adecuado cuando optamos por varias aplicaciones que
podrían integrarse usando hipervínculos o tecnologías también usadas
para Micro Frontends, por ejemplo, Federation. Más información sobre
Micro Frontends y Federation se puede encontrar en los capítulos
precedentes.

Este estilo nos da un gran rendimiento en términos de compilaciones
incrementales y pruebas y linting incrementales. Aunque puedan estar
involucradas tecnologías de Micro Frontend, esto no conduce
necesariamente a una arquitectura de Micro Frontend, especialmente si
todas las aplicaciones se despliegan juntas.

### Librería por Dominio

Si tu aplicación está destinada a ser un monolito modular, a veces
denominado \"Modulith\", solo podrías tener una aplicación que consta de
varios Dominios:

![](images/lib-per-domain.png)

En este caso, poner los dominios en diferentes librerías ayuda a
acelerar las pruebas y el linting incrementales. Sin embargo, en este
caso, el potencial para acelerar el rendimiento de la compilación es
limitado, ya que cada cambio conduce a una recompilación de toda la
aplicación.

## Conclusión

Nx es un excelente sistema de compilación que utiliza una caché de
compilación y paralelización para acelerar enormemente tu CI. Viene con
integraciones en herramientas populares como Jest, Cypress, Playwright y
Storybook. Para hacer cumplir nuestra arquitectura, se pueden configurar
límites de módulo.

Las aplicaciones y librerías definen los límites para la CI incremental
y los límites del módulo. Por lo tanto, necesitamos dividir nuestro
sistema de software en varias aplicaciones y librerías.

Si bien tener límites de módulo detallados (de grano fino) es
preferible, tener demasiadas aplicaciones y librerías pequeñas podría
ser abrumador y no necesario para mejorar el rendimiento de la CI. Aquí
es donde entra Sheriff: permite definir límites de módulo a nivel de
carpeta, mientras que Nx establece límites a nivel de aplicación y
librería.

# 04. De Dominios a Micro Frontends {#04-de-dominios-a-micro-frontends}

Supongamos que has identificado los subdominios para tu sistema. La
siguiente pregunta es cómo implementarlos.

Una opción es implementarlos dentro de una aplicación grande, también
conocida como monolito de despliegue. La segunda es proporcionar una
aplicación separada para cada dominio. Dichas aplicaciones se denominan
Micro Frontends.

## Monolitos de Despliegue

Un monolito de despliegue es una solución integrada que comprende
diferentes dominios:

![](images/02.png)

Este enfoque admite una UI consistente y conduce a paquetes (bundles)
optimizados al compilar todo junto. Un equipo responsable de un
subdominio específico debe coordinarse con otros equipos de subdominios.
Tienen que ponerse de acuerdo sobre una arquitectura general y el
framework principal. Además, necesitan definir una política común para
actualizar las dependencias.

Es tentador reutilizar partes de otros dominios. Sin embargo, esto puede
llevar a un mayor acoplamiento y, eventualmente, a cambios disruptivos
(breaking changes). Para prevenir esto, hemos usado Nx y restricciones
de acceso entre bibliotecas en el último capítulo.

## Micro Frontends

Para desacoplar aún más tu sistema, podrías dividirlo en varias
aplicaciones más pequeñas. Si asumimos que los casos de uso no se
superponen con los límites de tus subdominios, esto puede llevar a
equipos más autárquicos y aplicaciones que se pueden desplegar por
separado.

![](images/03.png).

Ahora tienes algo llamado Micro Frontends. Los Micro Frontends permiten
equipos autárquicos: cada equipo puede elegir su estilo arquitectónico,
su pila tecnológica, e incluso pueden decidir cuándo actualizar a
versiones más nuevas del framework. Pueden usar \"la mejor tecnología\"
para los requisitos dados dentro del subdominio actual.

La opción de decidir qué frameworks usar por Micro Frontend es
interesante cuando se desarrollan aplicaciones a largo plazo. Si, por
ejemplo, aparece un nuevo framework en cinco años, podemos usarlo para
implementar el siguiente dominio.

Si buscas aún más aislamiento entre tus subdominios y los equipos
responsables de ellos, podrías poner cada subdominio en su propio
repositorio individual:

![](images/04.png)

Sin embargo, esto tiene costos. Ahora tienes que lidiar con la
distribución de tus bibliotecas compartidas a través de npm. Esto
conlleva algunos esfuerzos y te obliga a versionar tus bibliotecas.
Necesitas asegurarte de que cada Micro Frontend use la versión correcta.
De lo contrario, terminarás con conflictos de versiones.

## Composición de UI con Hipervínculos

Dividir una aplicación enorme en varios Micro Frontends es solo una cara
de la moneda. Tus usuarios quieren tener una solución integrada. Por lo
tanto, tienes que encontrar formas de integrar las diferentes
aplicaciones en un sistema grande. Los hipervínculos son una forma
sencilla de lograrlo:

![](images/05.png)

Este enfoque se adapta bien a suites de productos como Google u Office
365:

![](images/word.png)

Cada dominio es una aplicación autónoma aquí. Esta estructura funciona
bien porque no necesitamos muchas interacciones entre los dominios. Si
necesitáramos compartir datos, podríamos usar el backend. Usando esta
estrategia, Word 365 puede usar una hoja de Excel 365 para una carta
modelo.

Este enfoque tiene varias ventajas:

- Es simple
- Utiliza frameworks SPA (Single Page Application) según lo previsto
- Obtenemos paquetes (bundles) optimizados por dominio

Sin embargo, hay algunas desventajas:

- Perdemos nuestro estado al cambiar a otra aplicación
- Tenemos que cargar otra aplicación, lo cual queríamos evitar con las
  SPAs
- Tenemos que trabajar para obtener una apariencia estándar
  (necesitamos un sistema de diseño universal).

## Composición de UI con un Shell

Otro enfoque muy discutido es proporcionar un shell que cargue
diferentes aplicaciones de página única (single-page applications) bajo
demanda:

![](images/case-study-01.png)

En la captura de pantalla, el shell carga el Micro Frontend con el borde
rojo en su área de trabajo. Técnicamente, simplemente carga los paquetes
(bundles) del Micro Frontend bajo demanda. El shell luego crea un
elemento para el elemento raíz del Micro Frontend:

```javascript
const script = document.createElement("script");
script.src = "assets/external-dashboard-tile.bundle.js";
document.body.appendChild(script);

const clientA = document.createElement("client-a");
clientA["visible"] = true;
document.body.appendChild(clientA);
```

En lugar de arrancar varias SPAs, también podríamos usar iframes. Si
bien todos conocemos las enormes desventajas de los iframes y tenemos
estrategias para lidiar con la mayoría de ellas, proporcionan dos
características útiles:

1.  Aislamiento: Un Micro Frontend en un iframe no puede influir ni
    hackear otro Micro Frontend en otro iframe. Por lo tanto, son útiles
    para sistemas de plugins o al integrar aplicaciones de otros
    proveedores.
2.  También permiten la integración de sistemas heredados (legacy).

Puedes encontrar una biblioteca que compensa la mayoría de las
desventajas de los iframes para aplicaciones de intranet
[aquí](https://www.npmjs.com/package/@microfrontend/common). Incluso SAP
tiene un framework basado en iframes que utilizan para integrar sus
productos. Se llama [Luigi](https://github.com/SAP/luigi) y puedes
encontrarlo [aquí](https://github.com/SAP/luigi).

El enfoque del shell tiene las siguientes ventajas:

- El usuario tiene una solución integrada que consta de diferentes
  microfrontends.
- No perdemos el estado al navegar entre dominios.

Las desventajas son:

- Si no usamos trucos específicos (descritos en el próximo capítulo),
  cada microfrontend viene con su propia copia de Angular y los otros
  frameworks, aumentando los tamaños de los paquetes (bundles).
- Tenemos que implementar código de infraestructura para cargar
  microfrontends y cambiar entre ellos.
- Tenemos que hacer algo de trabajo para obtener una apariencia
  estándar (necesitamos un sistema de diseño universal).

## El Héroe: Module Federation

Una solución bastante nueva que compensa la mayoría de los problemas
descritos anteriormente es Webpack Module Federation. Permite cargar
código desde una aplicación compilada y desplegada por separado y es muy
directo. En mi humilde opinión (IMHO), actualmente, esta es la mejor
manera de implementar una arquitectura basada en shell. Por lo tanto,
los **próximos capítulos** se concentran en Module Federation.

## Encontrando una Solución

Elegir entre un monolito de despliegue y diferentes enfoques para
microfrontends es complicado porque cada opción tiene ventajas y
desventajas.

He creado el siguiente árbol de decisiones, que también resume las ideas
expuestas en este capítulo:

![Árbol de decisión para Micro Frontends vs. Monolitos de
Despliegue](images/decision-tree.png)

Dado que la implementación de un monolito de despliegue y el enfoque de
hipervínculos es obvia, el próximo capítulo discute cómo implementar un
shell.

## Consecuencias de los Micro Frontends

Cada candidato arquitectónico viene con consecuencias: positivas y
negativas. En nuestra encuesta, realizada en otoño de 2023, preguntamos
a 153 profesionales sobre las consecuencias que observaron al
implementar este estilo arquitectónico.

El objetivo era obtener respuestas a las siguientes preguntas:

- ¿Qué beneficios observaron los profesionales y cómo califican su
  impacto positivo?
- ¿Qué inconvenientes observaron los profesionales y cómo califican su
  impacto negativo?
- ¿Cómo compensaron los profesionales los inconvenientes y cuán
  efectivas han sido las contramedidas utilizadas?

Estas preguntas se desglosaron en varios temas técnicos y organizativos.
Las preguntas indagadas se subdividieron en los siguientes grupos:

1.  Sobre el Entrevistado
2.  Contexto del Proyecto
3.  Decisiones Arquitectónicas
4.  Beneficios Técnicos Percibidos
5.  Beneficios Organizativos Percibidos
6.  Inconvenientes Técnicos Percibidos
7.  Inconvenientes Organizativos Percibidos

Si estás interesado, puedes [descargar los resultados de la encuesta
aquí](https://www.angulararchitects.io/wp-content/uploads/2023/12/report.pdf).

## Conclusión

Existen varias formas de implementar Micro Frontends. Todas tienen
ventajas y desventajas. Usar un monolito de despliegue consistente y
optimizado puede ser la elección correcta.

Se trata de conocer tus objetivos arquitectónicos y de evaluar las
consecuencias de los candidatos arquitectónicos.

# 05. La Revolución de los Micro Frontends: Usando Module Federation con Angular {#05-la-revolución-de-los-micro-frontends-usando-module-federation-con-angular}

En el pasado, al implementar Micro Frontends, había que recurrir a
algunos trucos. Una razón es seguramente que las herramientas de
compilación y los frameworks no conocían este concepto. Afortunadamente,
Webpack 5 inició un cambio de rumbo aquí.

Webpack 5 viene con una implementación proporcionada por el contribuidor
de webpack Zack Jackson. Se llama Module Federation y permite
referenciar partes de otras aplicaciones no conocidas en tiempo de
compilación. Estas pueden ser Micro Frontends que han sido compilados
por separado. Además, las partes individuales del programa pueden
compartir bibliotecas entre sí, de modo que los paquetes individuales no
contengan duplicados.

En este capítulo, mostraré cómo usar Module Federation utilizando un
ejemplo sencillo.

## Ejemplo

El ejemplo utilizado aquí consiste en un shell (aplicación contenedora),
que es capaz de cargar Micro Frontends individuales, proporcionados por
separado, si es necesario:

![Shell](images/shell.png)

El Micro Frontend cargado se muestra dentro del borde rojo discontinuo.
Además, el microfrontend se puede utilizar sin el shell:

![Micro Frontend sin Shell](images/standalone.png)

> [Código
> Fuente](https://github.com/manfredsteyer/module-federation-plugin-example/tree/static)
> (ver rama _static_)

## Activando Module Federation para Proyectos Angular

El caso de estudio presentado aquí asume que tanto el shell como el
Micro Frontend son proyectos en el mismo espacio de trabajo (workspace)
de Angular. Para empezar, necesitamos decirle al CLI que use Module
Federation al compilarlos. Sin embargo, como el CLI nos oculta webpack,
necesitamos un constructor (builder) personalizado.

El paquete
[\@angular-architects/module-federation](https://www.npmjs.com/package/@angular-architects/module-federation)
proporciona dicho constructor personalizado. Para comenzar, puedes
simplemente agregarlo con \"ng add\" a tus proyectos:

```bash
ng add @angular-architects/module-federation \
  --project shell --port 4200 --type host

ng add @angular-architects/module-federation \
  --project mfe1 --port 4201 --type remote
```

Si usas Nx, deberías instalar la biblioteca por separado con
`npm install`. Después de eso, puedes usar el schematic `init`:

```bash
npm i @angular-architects/module-federation -D

ng g @angular-architects/module-federation:init \
  --project shell --port 4200 --type host

ng g @angular-architects/module-federation:init \
  --project mfe1 --port 4201 --type remote
```

> El argumento de línea de comandos `--type` se agregó en la versión
> 14.3 y asegura que solo se genere la configuración necesaria.

Si bien es obvio que el proyecto `shell` contiene el código para el
`shell`, `mfe1` significa _Micro Frontend 1_.

El comando mostrado hace varias cosas:

- Generar el esqueleto de un `webpack.config.js` para usar Module
  Federation.
- Instalar un constructor personalizado que hace que webpack dentro
  del CLI use el `webpack.config.js` generado.
- Asignar un nuevo puerto para `ng serve` para que varios proyectos
  puedan servirse simultáneamente.

Por favor, ten en cuenta que el `webpack.config.js` es solo una
configuración **parcial** de webpack. Solo contiene lo necesario para
controlar Module Federation. El resto es generado por el CLI como de
costumbre.

## El Shell (también conocido como Host)

Comencemos con el shell, que también se llamaría el host en Module
Federation. Utiliza el enrutador para cargar de forma diferida (lazy
load) un `FlightModule`:

```typescript
export const APP_ROUTES: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full",
  },
  {
    path: "flights",
    loadChildren: () => import("mfe1/Module").then((m) => m.FlightsModule),
  },
];
```

Sin embargo, la ruta `mfe1/Module` que se importa aquí, **no existe**
dentro del shell. Es solo una ruta virtual que apunta a otro proyecto.

Para facilitar al compilador de TypeScript, necesitamos una definición
de tipos (typing) para ello:

```typescript
// decl.d.ts
declare module "mfe1/Module";
```

Además, necesitamos decirle a webpack que todas las rutas que comiencen
con `mfe1` apuntan a otro proyecto. Esto se puede hacer en el
`webpack.config.js` generado:

```typescript
const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  remotes: {
    mfe1: "http://localhost:4201/remoteEntry.js",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
```

La sección `remotes` mapea la ruta `mfe1` al Micro Frontend compilado
por separado o, para ser más precisos: a su entrada remota (remote
entry). Este es un archivo diminuto generado por webpack al construir el
remoto. Webpack lo carga en tiempo de ejecución para obtener toda la
información necesaria para interactuar con el Micro Frontend.

Si bien especificar la URL de la entrada remota de esta manera es
conveniente para el desarrollo, necesitamos un enfoque más dinámico para
producción. El próximo capítulo proporciona una solución para esto.

La propiedad `shared` define los paquetes npm que se compartirán entre
el shell y el/los Micro Frontend(s). Para esta propiedad, la
configuración generada utiliza el método auxiliar `shareAll` que
básicamente comparte todas las dependencias encontradas en tu
`package.json`. Si bien esto ayuda a obtener rápidamente una
configuración funcional, podría llevar a demasiadas dependencias
compartidas. Una sección posterior aquí aborda esto.

La combinación de `singleton: true` y `strictVersion: true` hace que
webpack emita un error en tiempo de ejecución cuando el shell y el/los
Micro Frontend(s) necesitan versiones diferentes incompatibles (por
ejemplo, dos versiones mayores diferentes). Si omitiéramos
`strictVersion` o lo estableciéramos en `false`, webpack solo emitiría
una advertencia en tiempo de ejecución. Se puede encontrar [más
información](https://www.angulararchitects.io/aktuelles/getting-out-of-version-mismatch-hell-with-module-federation/)
sobre cómo lidiar con los desajustes de versiones en uno de los
capítulos siguientes.

La configuración `requiredVersion: 'auto'` es un pequeño extra
proporcionado por el plugin `@angular-architects/module-federation`.
Busca la versión utilizada en tu `package.json`. Esto previene varios
problemas.

> La función auxiliar `share` utilizada en esta configuración generada
> reemplaza el valor `'auto'` con la versión encontrada en tu
> `package.json`.

## El Micro Frontend (también conocido como Remoto)

El Micro Frontend, también conocido como _remoto_ en términos de Module
Federation, se parece a una aplicación Angular ordinaria. Tiene rutas
definidas dentro del `AppModule`:

```typescript
export const APP_ROUTES: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
];
```

Además, hay un `FlightsModule`:

```typescript
@NgModule({
  imports: [CommonModule, RouterModule.forChild(FLIGHTS_ROUTES)],
  declarations: [FlightsSearchComponent],
})
export class FlightsModule {}
```

Este módulo tiene algunas rutas propias:

```typescript
export const FLIGHTS_ROUTES: Routes = [
  {
    path: "flights-search",
    component: FlightsSearchComponent,
  },
];
```

Para hacer posible cargar el `FlightsModule` en el shell, también
necesitamos exponerlo a través de la configuración de webpack del
remoto:

```javascript
const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfe1",

  exposes: {
    "./Module": "./projects/mfe1/src/app/flights/flights.module.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
```

La configuración mostrada aquí expone el `FlightsModule` bajo el nombre
público `Module`. La sección `shared` apunta a las bibliotecas
compartidas con el shell.

## Probándolo

Para probar todo, solo necesitamos iniciar el shell y el Micro Frontend:

```bash
ng serve shell -o
ng serve mfe1 -o
```

Luego, al hacer clic en `Flights` en el shell, se carga el Micro
Frontend:

![Shell](images/new-result.png)

**Consejo:** También puedes usar el script de npm `run:all` que el
plugin instala con sus schematics `ng-add` e `init`:

```bash
npm run run:all
```

![script run:all](images/run-all.png)

Para iniciar solo algunas aplicaciones, agrega sus nombres como
argumentos de línea de comandos:

```bash
npm run run:all shell mfe1
```

## Un Detalle Adicional

Ok, eso funcionó bastante bien. Pero, ¿has echado un vistazo a tu
`main.ts`?

Simplemente se ve así:

```typescript
import("./bootstrap").catch((err) => console.error(err));
```

El código que normalmente encuentras en el archivo `main.ts` se movió al
archivo `bootstrap.ts` cargado aquí. Todo esto fue hecho por el plugin
`@angular-architects/module-federation`.

Si bien esto no parece tener mucho sentido a primera vista, es un patrón
típico que encuentras en aplicaciones basadas en Module Federation. La
razón es que Module Federation necesita decidir qué versión de una
biblioteca compartida cargar. Si el shell, por ejemplo, está usando la
versión 12.0 y uno de los Micro Frontends ya está construido con la
versión 12.1, decidirá cargar esta última.

Para buscar los metadatos necesarios para esta decisión, Module
Federation se introduce en importaciones dinámicas como esta. A
diferencia de las importaciones estáticas más tradicionales, las
importaciones dinámicas son asíncronas. Por lo tanto, Module Federation
puede decidir sobre las versiones a usar y cargarlas realmente.

## Más Detalles: Compartiendo Dependencias

Como se mencionó anteriormente, el uso de `shareAll` permite una primera
configuración rápida que \"simplemente funciona\". Sin embargo, podría
llevar a demasiados paquetes compartidos. Dado que las dependencias
compartidas no pueden ser eliminadas mediante tree shaking y, por
defecto, terminan en paquetes separados que necesitan ser cargados, es
posible que desees optimizar este comportamiento cambiando de `shareAll`
al ayudante `share`:

```javascript
// Importar share en lugar de shareAll:
const {
  share,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  // Compartir paquetes explícitamente:
  shared: share({
    "@angular/core": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
    "@angular/common": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
    "@angular/common/http": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
    "@angular/router": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
  }),
});
```

## Más Sobre Esto

Aprende más sobre esto y otros temas de arquitectura relacionados con
Angular y grandes soluciones empresariales e industriales en nuestro
[Taller Online
Avanzado](https://www.angulararchitects.io/schulungen/advanced-angular-enterprise-anwendungen-und-architektur/):

![Taller Avanzado de Angular](images/ad.png)

¡Reserva tu
[entrada](https://www.angulararchitects.io/en/angular-workshops/) para
uno de nuestros talleres **online o presenciales** ahora o [solicita un
taller para empresas](https://www.angulararchitects.io/en/contact/)
(online o In-House) para ti y tu equipo!

Si te gusta nuestra oferta, mantente en contacto con nosotros para que
no te pierdas nada.

Para ello, puedes [suscribirte a nuestro
boletín](https://www.angulararchitects.io/en/subscribe/) y/o seguir al
[autor del libro en Twitter](https://twitter.com/ManfredSteyer).

## Conclusión y Evaluación

La implementación de Micro Frontends ha implicado hasta ahora numerosos
trucos y soluciones alternativas. Webpack Module Federation finalmente
proporciona una solución simple y sólida para esto. Para mejorar el
rendimiento, se pueden compartir bibliotecas y se pueden configurar
estrategias para lidiar con versiones incompatibles.

También es interesante que los Micro Frontends son cargados por Webpack
\"bajo el capó\". No hay rastro de esto en el código fuente del host o
del remoto. Esto simplifica el uso de Module Federation y el código
fuente resultante, que no requiere frameworks adicionales de Micro
Frontend.

Sin embargo, este enfoque también pone más responsabilidad en los
desarrolladores. Por ejemplo, deben asegurarse de que los componentes
que solo se cargan en tiempo de ejecución y que aún no se conocían al
compilar también interactúen como se desea.

También hay que lidiar con posibles conflictos de versiones. Por
ejemplo, es probable que los componentes que se compilaron con versiones
de Angular completamente diferentes no funcionen juntos en tiempo de
ejecución. Dichos casos deben evitarse con convenciones o al menos
reconocerse lo antes posible con pruebas de integración.

# 06. Federación Dinámica de Módulos {#06-federación-dinámica-de-módulos}

En el capítulo anterior, he mostrado cómo usar la Federación de Módulos
de webpack para cargar Micro Frontends compilados por separado en un
shell. Como la configuración de webpack del shell describe los Micro
Frontends, ya necesitábamos conocerlos al compilarlo.

En este capítulo, asumo una situación más dinámica donde el shell no
conoce el Micro Frontend de antemano. En su lugar, esta información se
proporciona en tiempo de ejecución a través de un archivo de
configuración. Aunque este archivo es un archivo JSON estático en los
ejemplos que se muestran aquí, su contenido también podría provenir de
una API Web.

La siguiente imagen muestra la idea descrita aquí:

![El shell carga un Micro Frontend del que es informado en tiempo de
ejecución](images/overview-cli14.png)

Para todos los Micro Frontends de los que el shell es informado en
tiempo de ejecución, muestra un elemento de menú. Al hacer clic en él,
el Micro Frontend se carga y se muestra mediante el enrutador del shell.

[Código Fuente (versión simple, ver rama:
simple)](https://github.com/manfredsteyer/module-federation-with-angular-dynamic/tree/simple)

[Código Fuente (versión
completa)](https://github.com/manfredsteyer/module-federation-with-angular-dynamic.git)

## Una Solución Dinámica Simple

Comencemos con un enfoque simple. Para esto, asumimos que conocemos los
Micro Frontends de antemano y solo queremos cambiar sus URLs en tiempo
de ejecución, p. ej., con respecto al entorno actual. Un enfoque más
avanzado, donde ni siquiera necesitamos conocer el número de Micro
Frontends de antemano, se presenta después.

### Añadiendo Federación de Módulos

El proyecto de demostración utilizado contiene un shell y dos Micro
Frontends llamados `mfe1` y `mfe2`. Como en el capítulo anterior,
añadimos e inicializamos el plugin de Federación de Módulos para los
Micro Frontends:

```bash
npm i -g @angular-architects/module-federation -D

ng g @angular-architects/module-federation \
  --project mfe1 --port 4201 --type remote

ng g @angular-architects/module-federation \
  --project mfe2 --port 4202 --type remote
```

### Generando un Manifiesto

A partir de la versión 14.3 del plugin, podemos generar un **host
dinámico** que toma los datos clave sobre el Micro Frontend de un
archivo JSON ---llamado el Manifiesto de Micro Frontend--- en tiempo de
ejecución:

```bash
ng g @angular-architects/module-federation \
  --project shell --port 4200 --type dynamic-host
```

Esto genera:

- una configuración de webpack
- el manifiesto y
- algo de código en el `main.ts` cargando el manifiesto.

El manifiesto se puede encontrar aquí:
`projects/shell/src/assets/mf.manifest.json`. Así es como se ve:

```json
{
  "mfe1": "http://localhost:4201/remoteEntry.js",
  "mfe2": "http://localhost:4202/remoteEntry.js"
}
```

Después de generar el manifiesto, asegúrate de que los puertos
coincidan.

### Cargando el Manifiesto

El archivo `main.ts` generado carga el manifiesto:

```typescript
import { loadManifest } from "@angular-architects/module-federation";

loadManifest("/assets/mf.manifest.json")
  .catch((err) => console.error(err))
  .then((_) => import("./bootstrap"))
  .catch((err) => console.error(err));
```

Por defecto, `loadManifest` no solo carga el manifiesto sino también las
entradas remotas a las que apunta el manifiesto. Por lo tanto, la
Federación de Módulos obtiene todos los metadatos necesarios para
obtener los Micro Frontends bajo demanda.

### Cargando los Micro Frontends

Para cargar los Micro Frontends descritos por el manifiesto, vamos con
las siguientes rutas:

```typescript
import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { loadRemoteModule } from "@angular-architects/module-federation";

export const APP_ROUTES: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full",
  },
  {
    path: "flights",
    loadChildren: () =>
      loadRemoteModule({
        type: "manifest",
        remoteName: "mfe1",
        exposedModule: "./Module",
      }).then((m) => m.FlightsModule),
  },
  {
    path: "bookings",
    loadChildren: () =>
      loadRemoteModule({
        type: "manifest",
        remoteName: "mfe2",
        exposedModule: "./Module",
      }).then((m) => m.BookingsModule),
  },
];
```

La opción `type: 'manifest'` hace que `loadRemoteModule` busque los
datos clave necesarios en el manifiesto cargado. La propiedad
`remoteName` apunta a la clave que se usó en el manifiesto.

### Configurando los Micro Frontends

Esperamos que ambos Micro Frontends proporcionen un NgModule con
subrutas a través de `'./Module'`. Los NgModules se exponen a través del
`webpack.config.js` en los Micro Frontends:

```javascript
// projects/mfe1/webpack.config.js

const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfe1",

  exposes: {
    // Línea ajustada:
    "./Module": "./projects/mfe1/src/app/flights/flights.module.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
```

```javascript
// projects/mfe2/webpack.config.js

const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfe2",

  exposes: {
    // Línea ajustada:
    "./Module": "./projects/mfe2/src/app/bookings/bookings.module.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
```

### Probándolo

Para cada ruta que carga un Micro Frontend, el `AppComponent` del shell
contiene un `routerLink`:

```html
<!-- projects/shell/src/app/app.component.html -->
<ul>
  <li><img src="../assets/angular.png" width="50" /></li>
  <li><a routerLink="/">Home</a></li>
  <li><a routerLink="/flights">Flights</a></li>
  <li><a routerLink="/bookings">Bookings</a></li>
</ul>

<router-outlet></router-outlet>
```

Eso es todo. Simplemente inicia los tres proyectos (p. ej., usando
`npm run run:all`). La principal diferencia con el resultado del
capítulo anterior es que ahora el shell se informa a sí mismo sobre los
Micro Frontends en tiempo de ejecución. Si quieres apuntar el shell a
diferentes Micro Frontends, simplemente ajusta el manifiesto.

## Haciéndolo \"Dinámico Dinámico\"

La solución que tenemos hasta ahora es adecuada en muchas situaciones:
El uso del manifiesto permite ajustarlo a diferentes entornos sin
reconstruir la aplicación. Además, si cambiamos el manifiesto por un
servicio REST dinámico, podríamos implementar estrategias como pruebas
A/B.

Sin embargo, en algunas situaciones puede que ni siquiera conozcas el
número de Micro Frontends de antemano. Esto es lo que discutimos aquí.

### Añadiendo Metadatos Personalizados al Manifiesto

Para configurar dinámicamente las rutas, necesitamos algunos metadatos
adicionales. Para esto, podrías querer extender el manifiesto:

```json
{
  "mfe1": {
    "remoteEntry": "http://localhost:4201/remoteEntry.js",

    "exposedModule": "./Module",
    "displayName": "Flights",
    "routePath": "flights",
    "ngModuleName": "FlightsModule"
  },
  "mfe2": {
    "remoteEntry": "http://localhost:4202/remoteEntry.js",

    "exposedModule": "./Module",
    "displayName": "Bookings",
    "routePath": "bookings",
    "ngModuleName": "BookingsModule"
  }
}
```

Además de `remoteEntry`, todas las demás propiedades son
**personalizadas**.

### Tipos para Configuración Personalizada

Para representar nuestra configuración extendida, necesitamos algunos
tipos en el código del shell:

```typescript
// projects/shell/src/app/utils/config.ts

import { Manifest, RemoteConfig } from "@angular-architects/module-federation";

export type CustomRemoteConfig = RemoteConfig & {
  exposedModule: string;
  displayName: string;
  routePath: string;
  ngModuleName: string;
};

export type CustomManifest = Manifest<CustomRemoteConfig>;
```

El tipo `CustomRemoteConfig` representa las entradas en el manifiesto y
el tipo `CustomManifest` el manifiesto completo.

### Creando Rutas Dinámicamente

Ahora, necesitamos una función de utilidad que itere a través de todo el
manifiesto y cree una ruta para cada Micro Frontend descrito allí:

```typescript
// projects/shell/src/app/utils/routes.ts

import { loadRemoteModule } from "@angular-architects/module-federation";
import { Routes } from "@angular/router";
import { APP_ROUTES } from "../app.routes";
import { CustomManifest } from "./config";

export function buildRoutes(options: CustomManifest): Routes {
  const lazyRoutes: Routes = Object.keys(options).map((key) => {
    const entry = options[key];
    return {
      path: entry.routePath,
      loadChildren: () =>
        loadRemoteModule({
          type: "manifest",
          remoteName: key,
          exposedModule: entry.exposedModule,
        }).then((m) => m[entry.ngModuleName]),
    };
  });

  return [...APP_ROUTES, ...lazyRoutes];
}
```

Esto nos da la misma estructura que configuramos directamente arriba.

El `AppComponent` del shell une todo:

```typescript
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  remotes: CustomRemoteConfig[] = [];

  constructor(private router: Router) {}

  async ngOnInit(): Promise<void> {
    const manifest = getManifest<CustomManifest>();

    // Sugerencia: Mueve esto a un APP_INITIALIZER
    //  para evitar problemas con el enlazado profundo (deep linking)
    const routes = buildRoutes(manifest);
    this.router.resetConfig(routes);

    this.remotes = Object.values(manifest);
  }
}
```

El método `ngOnInit` recupera el manifiesto cargado (aún se carga en el
`main.ts` como se mostró arriba) y lo pasa a `buildRoutes`. Las rutas
dinámicas recuperadas se pasan al enrutador. Además, los valores de los
pares clave/valor en el manifiesto se colocan en el campo `remotes`. Se
usa en la plantilla para crear dinámicamente los elementos del menú:

```html
<!-- projects/shell/src/app/app.component.html -->

<ul>
  <li><img src="../assets/angular.png" width="50" /></li>
  <li><a routerLink="/">Home</a></li>

  <!-- Crea dinámicamente elementos de menú para todos los Micro Frontends -->
  <li *ngFor="let remote of remotes">
    <a [routerLink]="remote.routePath">{{remote.displayName}}</a>
  </li>

  <li><a routerLink="/config">Config</a></li>
</ul>

<router-outlet></router-outlet>
```

### Probándolo

Ahora, probemos esta solución \"dinámica dinámica\" iniciando el shell y
los Micro Frontends (p. ej., con `npm run run:all`).

## Algunos Detalles Más

Hasta ahora, hemos utilizado las funciones de alto nivel proporcionadas
por el plugin. Sin embargo, para los casos en los que necesites más
control, también existen algunas alternativas de bajo nivel:

- `loadManifest(...)`: La función `loadManifest` utilizada
  anteriormente proporciona un segundo parámetro llamado
  `skipRemoteEntries`. Establécelo en `true` para evitar la carga de
  los puntos de entrada. En este caso, solo se carga el manifiesto:

  ```typescript
  loadManifest("/assets/mf.manifest.json", true)
      .catch(...)
      .then(...)
      .catch(...)
  ```

- `setManifest(...)`: Esta función permite establecer directamente el
  manifiesto. Resulta útil si cargas los datos desde otro lugar.

- `loadRemoteEntry(...)`: Esta función permite cargar directamente el
  punto de entrada remoto. Es útil si no usas el manifiesto:

  ```typescript
  Promise.all([
    loadRemoteEntry({
      type: "module",
      remoteEntry: "http://localhost:4201/remoteEntry.js",
    }),
    loadRemoteEntry({
      type: "module",
      remoteEntry: "http://localhost:4202/remoteEntry.js",
    }),
  ])
    .catch((err) => console.error(err))
    .then((_) => import("./bootstrap"))
    .catch((err) => console.error(err));
  ```

- `loadRemoteModule(...)`: Además, si no quieres usar el manifiesto,
  puedes cargar directamente un Micro Frontend con `loadRemoteModule`:

  ```typescript
  {
      path: 'flights',
      loadChildren: () =>
          loadRemoteModule({
              type: 'module',
              remoteEntry: 'http://localhost:4201/remoteEntry.js',
              exposedModule: './Module',
          }).then((m) => m.FlightsModule),
  },
  ```

En general, creo que la mayoría de la gente usará el manifiesto en el
futuro. Incluso si uno no quiere cargarlo desde un archivo JSON con
`loadManifest`, uno puede definirlo mediante `setManifest`.

La propiedad `type: 'module'` define que deseas cargar un módulo
EcmaScript \"real\" en lugar de \"simplemente\" un archivo JavaScript.
Esto es necesario desde Angular CLI 13. Si cargas cosas no construidas
por CLI 13 o superior, muy probablemente tengas que establecer esta
propiedad en `script`. Esto también puede suceder a través del
manifiesto:

```json
{
  "non-cli-13-stuff": {
    "type": "script",
    "remoteEntry": "http://localhost:4201/remoteEntry.js"
  }
}
```

> Si una entrada en el manifiesto no contiene una propiedad `type`, el
> plugin asume el valor `module`.

## Conclusión

La Federación Dinámica de Módulos proporciona más flexibilidad ya que
permite cargar Micro Frontends que no tenemos que conocer en tiempo de
compilación. Ni siquiera tenemos que saber su cantidad de antemano. Esto
es posible gracias a la API de tiempo de ejecución proporcionada por
webpack. Para facilitar un poco su uso, el plugin
`@angular-architects/module-federation` lo envuelve elegantemente en
algunas funciones de conveniencia.

# 07. Sistemas de Plugins con Module Federation: Construyendo un Diseñador de Flujos de Trabajo Extensible {#07-sistemas-de-plugins-con-module-federation-construyendo-un-diseñador-de-flujos-de-trabajo-extensible}

En el capítulo anterior, mostré cómo usar Dynamic Module Federation.
Esto nos permite cargar Micro Frontends \-- o remotos, que es el término
más general en Module Federation \-- no conocidos en tiempo de
compilación. Ni siquiera necesitamos saber de antemano el número de
remotos.

Mientras que el capítulo anterior aprovechó el enrutador para integrar
los remotos disponibles, este capítulo muestra cómo cargar componentes
individuales. El ejemplo utilizado para esto es un diseñador de flujos
de trabajo simple basado en plugins.

![El Diseñador de Flujos de Trabajo puede cargar tareas compiladas e
implementadas por separado](images/workflow-result.png)

El diseñador de flujos de trabajo actúa como un anfitrión (host) que
carga tareas desde plugins proporcionados como remotos. Así, pueden ser
compilados e implementados individualmente. Después de iniciar el
diseñador de flujos de trabajo, obtiene una configuración que describe
los plugins disponibles:

![La configuración informa dónde encontrar las
tareas](images/workflow-config.png)

Ten en cuenta que estos plugins se proporcionan a través de diferentes
orígenes (http://localhost:4201 y http://localhost:4202), y el diseñador
de flujos de trabajo se sirve desde su propio origen
(http://localhost:4200).

> [Código
> Fuente](https://github.com/manfredsteyer/module-federation-with-angular-dynamic-workflow-designer)

> Gracias a [Zack Jackson](https://twitter.com/ScriptedAlchemy) y [Jack
> Herrington](https://twitter.com/jherr), quienes me ayudaron a entender
> la API relativamente nueva para Dynamic Module Federation.

## Construyendo los Plugins

Los plugins se proporcionan a través de aplicaciones Angular separadas.
Por simplicidad, todas las aplicaciones son parte del mismo monorepo. Su
configuración de webpack utiliza Module Federation para exponer los
plugins individuales como se muestra en los capítulos anteriores de este
libro:

```javascript
const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfe1",

  exposes: {
    "./Download": "./projects/mfe1/src/app/download.component.ts",
    "./Upload": "./projects/mfe1/src/app/upload.component.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
```

Una diferencia con las configuraciones mostradas en el capítulo anterior
es que aquí estamos exponiendo directamente componentes independientes
(standalone components). Cada componente representa una tarea que se
puede incluir en el flujo de trabajo.

La combinación de `singleton: true` y `strictVersion: true` hace que
webpack emita un error en tiempo de ejecución cuando el shell y el(los)
micro frontend(s) necesitan versiones diferentes incompatibles (p. ej.,
dos versiones mayores diferentes). Si omitiéramos `strictVersion` o lo
estableciéramos en `false`, webpack solo emitiría una advertencia en
tiempo de ejecución.

## Cargando los Plugins en el Diseñador de Flujos de Trabajo

Para cargar los plugins en el diseñador de flujos de trabajo, estoy
usando la función auxiliar `loadRemoteModule` proporcionada por el
plugin `@angular-architects/module-federation`. Para cargar la tarea
`Download` mencionada anteriormente, se puede llamar a
`loadRemoteModule` de esta manera:

```typescript
import { loadRemoteModule } from '@angular-architects/module-federation';

[...]

const component = await loadRemoteModule({
    type: 'module',
    remoteEntry: 'http://localhost:4201/remoteEntry.js',
    exposedModule: './Download'
})
```

## Proporcionando Metadatos sobre los Plugins

En tiempo de ejecución, necesitamos proporcionar al diseñador de flujos
de trabajo datos clave sobre los plugins. El tipo utilizado para esto se
llama `PluginOptions` y extiende las `LoadRemoteModuleOptions` mostradas
en la sección anterior con un `displayName` y un `componentName`:

```typescript
export type PluginOptions = LoadRemoteModuleOptions & {
  displayName: string;
  componentName: string;
};
```

> Una alternativa a esto es extender el Manifiesto de Module Federation
> como se muestra en el capítulo anterior.

Mientras que `displayName` es el nombre que se presenta al usuario,
`componentName` se refiere a la clase TypeScript que representa el
componente Angular en cuestión.

Para cargar estos datos clave, el diseñador de flujos de trabajo utiliza
un `LookupService`:

```typescript
@Injectable({ providedIn: 'root' })
export class LookupService {
    lookup(): Promise<PluginOptions[]> {
        return Promise.resolve([
            {
              type: 'module',
              remoteEntry: 'http://localhost:4201/remoteEntry.js',
              exposedModule: './Download',

              displayName: 'Download',
              componentName: 'DownloadComponent'
            },
            [...]
        ] as PluginOptions[]);
    }
}
```

Por simplicidad, el `LookupService` proporciona algunas entradas
codificadas (hardcoded). En el mundo real, muy probablemente solicitaría
estos datos desde un endpoint HTTP respectivo.

## Creando Dinámicamente el Componente del Plugin

El diseñador de flujos de trabajo representa los plugins con un
`PluginProxyComponent`. Toma un objeto `PluginOptions` a través de un
input, carga el plugin descrito mediante Dynamic Module Federation y
muestra el componente del plugin dentro de un marcador de posición
(placeholder):

```typescript
@Component({
  standalone: true,
  selector: "plugin-proxy",
  template: ` <ng-container #placeHolder></ng-container> `,
})
export class PluginProxyComponent implements OnChanges {
  @ViewChild("placeHolder", { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef;

  constructor() {}

  @Input() options: PluginOptions;

  async ngOnChanges() {
    this.viewContainer.clear();

    const Component = await loadRemoteModule(this.options).then(
      (m) => m[this.options.componentName]
    );

    this.viewContainer.createComponent(Component);
  }
}
```

En versiones anteriores a Angular 13, necesitábamos usar un
`ComponentFactoryResolver` para obtener la factoría del componente
cargado:

```typescript
// Antes de Angular 13, necesitábamos obtener una ComponentFactory
//
// export class PluginProxyComponent implements OnChanges {
//     @ViewChild('placeHolder', { read: ViewContainerRef, static: true })
//     viewContainer: ViewContainerRef;

//     constructor(
//       private injector: Injector,
//       private cfr: ComponentFactoryResolver) { }

//     @Input() options: PluginOptions;

//     async ngOnChanges() {
//         this.viewContainer.clear();

//         const component = await loadRemoteModule(this.options)
//             .then(m => m[this.options.componentName]);

//         const factory = this.cfr.resolveComponentFactory(component);

//         this.viewContainer.createComponent(factory, null, this.injector);
//     }
// }
```

## Conectando Todo

Ahora, es momento de conectar las partes mencionadas anteriormente. Para
esto, el `AppComponent` del diseñador de flujos de trabajo obtiene un
array `plugins` y un array `workflow`. El primero representa las
`PluginOptions` de los plugins disponibles y, por lo tanto, todas las
tareas disponibles, mientras que el segundo describe las `PluginOptions`
de las tareas seleccionadas en la secuencia configurada:

```typescript
@Component({ [...] })
export class AppComponent implements OnInit {

  plugins: PluginOptions[] = [];
  workflow: PluginOptions[] = [];
  showConfig = false;

  constructor(
    private lookupService: LookupService) {
  }

  async ngOnInit(): Promise<void> {
    this.plugins = await this.lookupService.lookup();
  }

  add(plugin: PluginOptions): void {
    this.workflow.push(plugin);
  }

  toggle(): void {
    this.showConfig = !this.showConfig;
  }
}
```

El `AppComponent` utiliza el `LookupService` inyectado para poblar su
array `plugins`. Cuando se añade un plugin al flujo de trabajo, el
método `add` coloca su objeto `PluginOptions` en el array `workflow`.

Para mostrar el flujo de trabajo, el diseñador simplemente itera todos
los elementos en el array `workflow` y crea un `plugin-proxy` para
ellos:

```html
<ng-container *ngFor="let p of workflow; let last = last">
  <plugin-proxy [options]="p"></plugin-proxy>
  <i *ngIf="!last" class="arrow right" style=""></i>
</ng-container>
```

Como se discutió anteriormente, el proxy carga el plugin (al menos, si
no está ya cargado) y lo muestra.

Además, para renderizar la caja de herramientas que se muestra a la
izquierda, recorre todas las entradas en el array `plugins`. Para cada
una de ellas muestra un hipervínculo enlazado al método `add`:

```html
<div class="vertical-menu">
  <a href="#" class="active">Tasks</a>
  <a *ngFor="let p of plugins" (click)="add(p)">Add {{p.displayName}}</a>
</div>
```

## Conclusión

Si bien Module Federation resulta útil para implementar Micro Frontends,
también se puede usar para establecer arquitecturas de plugins. Esto nos
permite extender una solución existente por parte de terceros. También
parece ser una buena opción para aplicaciones SaaS, que necesitan
adaptarse a las necesidades de diferentes clientes.

# 08. Usando Module Federation con Monorepos Nx y Angular {#08-usando-module-federation-con-monorepos-nx-y-angular}

Aunque suene contradictorio, la combinación de Micro Frontends y
Monorepos puede ser bastante tentadora: Sin **conflictos de versión**
por diseño, fácil compartición de código y **paquetes optimizados** son
algunos de los beneficios que obtienes. Además, todavía puedes
**desplegar** los Micro Frontends **por separado** y **aislarlos** unos
de otros.

Este capítulo **compara las consecuencias** de usar **varios
repositorios** (\"Micro Frontends al pie de la letra\") y un único
**monorepo**. Después de eso, muestra con un ejemplo, cómo usar Module
Federation en un monorepo Nx.

Si quieres echar un vistazo al [código
fuente](https://github.com/manfredsteyer/nx-module-federation-demo)
usado aquí, puedes revisar [este
repositorio](https://github.com/manfredsteyer/nx-module-federation-demo).

> Muchas gracias al increíble [Tobias
> Koppers](https://twitter.com/wSokra) quien me dio ideas valiosas sobre
> este tema y al único e inigualable [Dmitriy
> Shekhovtsov](https://twitter.com/valorkin) quien me ayudó a usar la
> integración de Angular CLI/webpack 5 para esto.

## Múltiples Repos vs. Monorepos {#múltiples-repos-vs-monorepos}

Lo sé, la discusión sobre usar múltiples repos vs. monorepos puede ser
bastante emocional. Diferentes personas han tenido diferentes
experiencias con ambos enfoques. Sin embargo, puedo decirte: He visto
ambos funcionando en enormes proyectos del mundo real. Aun así, ambos
vienen **con diferentes consecuencias**, que voy a discutir en las
siguientes dos secciones.

Al final del día, necesitas **evaluar** estas consecuencias contra la
situación y **objetivos** de tu proyecto específico. De esto se trata la
arquitectura de software.

## Múltiples Repositorios: Micro Frontends al Pie de la Letra

Un enfoque tradicional usa un repositorio separado por Micro Frontend:

![Un Repositorio por Micro Frontend](images/multi.png)

Esto también es bastante usual para los Micro Servicios y proporciona
las siguientes **ventajas**:

- Los Micro Frontends \-- y por lo tanto los dominios de negocio
  individuales \-- están aislados unos de otros. Como no hay
  dependencias entre ellos, diferentes equipos pueden evolucionarlos
  por separado.

- Cada equipo puede concentrarse en su Micro Frontend. Solo necesitan
  enfocarse en su propio repositorio.

- Cada equipo tiene la máxima cantidad de libertad en su repositorio.
  Pueden optar por sus propias decisiones arquitectónicas, pilas
  tecnológicas y procesos de construcción. Además, deciden por sí
  mismos cuándo actualizar a versiones más nuevas.

- Cada Micro Frontend puede ser desplegado por separado.

Como esto se ajusta mejor a las ideas originales de los Micro Frontends,
llamo a este enfoque \"Micro Frontends al pie de la letra\". Sin
embargo, también hay algunas **desventajas**:

- Necesitamos versionar y distribuir dependencias compartidas vía npm.
  Esto puede convertirse en un trabajo adicional considerable, ya que
  después de cada cambio necesitamos asignar una nueva versión,
  publicarla e instalarla en los respectivos Micro Frontends.

- Como cada equipo puede usar su propia pila tecnológica, podemos
  terminar con diferentes frameworks y diferentes versiones de ellos.
  Esto podría llevar a conflictos de versión en el navegador y a
  tamaños de paquete incrementados.

Por supuesto, hay enfoques para **compensar estos inconvenientes**: Por
ejemplo, podemos automatizar la distribución de librerías compartidas
para minimizar el trabajo adicional. También, podemos evitar conflictos
de versión no compartiendo librerías entre diferentes Micro Frontends.
Envolver estos Micro Frontends en web components abstrae aún más las
diferencias entre frameworks.

Aunque esto previene conflictos de versión, todavía tenemos tamaños de
paquete incrementados. Además, podríamos necesitar algunas soluciones
temporales aquí o allá ya que Angular no está diseñado para trabajar con
otra versión de sí mismo en la misma ventana del navegador. No hace
falta decir que no hay soporte del equipo de Angular para esta idea.

Si descubres que las ventajas de este enfoque superan las desventajas,
encontrarás una solución para mezclar y combinar diferentes frameworks y
versiones en uno de los próximos capítulos.

Sin embargo, si sientes que las desventajas pesan más, las siguientes
secciones muestran una alternativa.

## Micro Frontends con Monorepos

Casi todas las desventajas mencionadas anteriormente pueden prevenirse
poniendo todos los Micro Frontends en un único monorepo:

![Micro Frontends en un monorepo](images/mono.png)

Ahora, compartir librerías es fácil y solo hay una versión de todo, por
lo tanto, no terminamos con conflictos de versión en el navegador.
También podemos **mantener algunas ventajas mencionadas anteriormente**:

- Los Micro Frontends pueden ser **aislados** unos de otros usando
  reglas de **linting**. Estas previenen que un Micro Frontend dependa
  de otros. Por lo tanto, los equipos pueden evolucionar su Micro
  Frontend por separado.

- Los Micro Frontends todavía pueden ser **desplegados por separado.**

Ahora, la pregunta es, ¿dónde está el truco? Bueno, la cuestión es que
ahora estamos **renunciando** a parte de la **libertad**: Los equipos
necesitan acordar **una versión** de dependencias como Angular y un
ciclo de actualización común para ellas. Dicho de otra manera:
Intercambiamos algo de libertad para prevenir conflictos de versión y
tamaños de paquete incrementados.

Una vez más, necesitas evaluar todas estas consecuencias para tu
proyecto específico. Por lo tanto, necesitas conocer tus objetivos de
arquitectura y priorizarlos. Como mencioné, he visto ambos funcionando
en el mundo real en varios proyectos. Todo se trata de las diferentes
consecuencias.

## Ejemplo de Monorepo

Después de discutir las consecuencias del enfoque aquí descrito, echemos
un vistazo a una implementación. El ejemplo usado aquí es un monorepo Nx
con un shell de Micro Frontend (`shell`) y un Micro Frontend (`mfe1`,
\"micro frontend 1\"). Ambos comparten una librería común para
autenticación (`auth-lib`) que también se encuentra en el monorepo.
Además, `mfe1` usa una librería `mfe1-domain-logic`.

Si no has usado Nx antes, simplemente asume un espacio de trabajo CLI
con toneladas de características adicionales. Puedes encontrar más
[información sobre Nx en nuestro
tutorial](https://www.angulararchitects.io/aktuelles/tutorial-first-steps-with-nx-and-angular-architecture/).

Para visualizar la estructura del monorepo, se puede usar la CLI de Nx
para solicitar un gráfico de dependencias:

```bash
nx graph
```

Si no tienes instalada esta CLI, puedes obtenerla fácilmente vía npm
(`npm i -g nx`). El gráfico mostrado luce así:

![Gráfico de Dependencias generado por Nx](images/graph.png)

La `auth-lib` proporciona dos componentes. Uno para iniciar sesión de
usuarios y el otro muestra el usuario actual. Son usados tanto por el
`shell` como por `mfe1`:

![Esquema](images/schema.png)

Además, la `auth-lib` almacena el nombre del usuario actual en un
servicio.

Como es usual en los monorepos de Nx y Angular, las librerías se
referencian con mapeos de ruta definidos en `tsconfig.base.json` (Nx) o
`tsconfig.json` (Angular CLI):

```json
"paths": {
    "@demo/auth-lib": [
        "libs/auth-lib/src/index.ts"
    ]
},
```

El `shell` y `mfe1` (así como otros Micro Frontends que podríamos añadir
en el futuro) necesitan ser desplegables por separado y cargados en
tiempo de ejecución.

¡Sin embargo, no queremos cargar la `auth-lib` dos o varias veces!
Lograr esto con un paquete npm no es tan difícil. Esta es una de las
características más obvias y fáciles de usar de Module Federation. Las
siguientes secciones discuten cómo hacer lo mismo con librerías de un
monorepo.

## La Librería Compartida

Antes de adentrarnos en la solución, echemos un vistazo a la `auth-lib`.
Contiene un `AuthService` que inicia sesión del usuario y los recuerda
usando la propiedad `_userName`:

```typescript
@Injectable({
  providedIn: "root",
})
export class AuthService {
  // tslint:disable-next-line: variable-name
  private _userName: string = null;

  public get userName(): string {
    return this._userName;
  }

  constructor() {}

  login(userName: string, password: string): void {
    // Authentication for honest users
    // (c) Manfred Steyer
    this._userName = userName;
  }

  logout(): void {
    this._userName = null;
  }
}
```

Además de este servicio, también hay un `AuthComponent` con la UI para
iniciar sesión del usuario y un `UserComponent` mostrando el nombre del
usuario actual. Ambos componentes están registrados con el NgModule de
la librería:

```typescript
@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [AuthComponent, UserComponent],
  exports: [AuthComponent, UserComponent],
})
export class AuthLibModule {}
```

Como toda librería, también tiene un archivo barril `index.ts` (a veces
también llamado `public-api.ts`) que sirve como punto de entrada.
Exporta todo lo que los consumidores pueden usar:

```typescript
export * from "./lib/auth-lib.module";
export * from "./lib/auth.service";

// Don't forget about your components!
export * from "./lib/auth/auth.component";
export * from "./lib/user/user.component";
```

**Por favor, nota** que `index.ts` también está exportando los dos
componentes aunque ya están registrados con el también exportado
`AuthLibModule`. En el escenario discutido aquí, esto es vital para
asegurarse de que sea detectado y compilado por Ivy.

Asumamos que el shell está usando el `AuthComponent` y `mfe1` usa el
`UserComponent`. Como nuestro objetivo es cargar la `auth-lib` solo una
vez, esto también permite compartir información sobre el usuario
conectado.

## La Configuración de Module Federation

Como en el capítulo anterior, estamos usando el plugin
`@angular-architects/module-federation` para habilitar Module Federation
para el `shell` y `mfe1`. Para esto, simplemente ejecuta los siguientes
comandos:

```bash
npm i @angular-architects/module-federation -D

npm g @angular-architects/module-federation:init \
  --project shell --port 4200 --type host

npm g @angular-architects/module-federation:init \
  --project mfe1 --port 4201 --type remote
```

> Mientras tanto, Nx también incluye su propio [soporte para Module
> Federation](https://nx.dev/module-federation/micro-frontend-architecture).
> Tras bambalinas, maneja Module Federation de una manera muy similar al
> plugin usado aquí.

Esto genera una configuración de webpack para Module Federation. Desde
la versión 14.3, `withModuleFederationPlugin` proporciona una propiedad
`sharedMappings`. Aquí, podemos registrar las librerías internas del
monorepo que queremos compartir en tiempo de ejecución:

```javascript
// apps/shell/webpack.config.js

const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  remotes: {
    mfe1: "http://localhost:4201/remoteEntry.js",
  },

  shared: shareAll({
    singleton: true,
    strictVersion: true,
    requiredVersion: "auto",
  }),

  sharedMappings: ["@demo/auth-lib"],
});
```

Como compartir siempre es opcional (opt-in) en Module Federation,
también necesitamos la misma configuración en la configuración del Micro
Frontend:

```javascript
// apps/mfe1/webpack.config.js

const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfe1",

  exposes: {
    "./Module": "./apps/mfe1/src/app/flights/flights.module.ts",
  },

  shared: shareAll({
    singleton: true,
    strictVersion: true,
    requiredVersion: "auto",
  }),

  sharedMappings: ["@demo/auth-lib"],
});
```

> Desde la versión 14.3, el plugin de Module Federation comparte todas
> las librerías en el monorepo por defecto. Para obtener este
> comportamiento predeterminado, simplemente omite la propiedad
> `sharedMappings`. Si la usas, solo se comparten las librerías
> mencionadas.

## Probándolo

Para probar esto, simplemente inicia las dos aplicaciones. Como usamos
Nx, esto se puede hacer con el siguiente comando:

```bash
nx run-many --target serve --all
```

El interruptor `--all` inicia todas las aplicaciones en el monorepo. En
lugar de eso, también puedes usar el interruptor `--projects` para
iniciar solo un subconjunto de ellas:

```bash
nx run-many --target serve --projects shell,mfe1
```

> `--project` toma una lista de nombres de proyecto separados por comas.
> Los espacios **no** están permitidos.

Después de iniciar las aplicaciones, inicia sesión en el shell y haz que
cargue `mfe1`. Si ves el nombre del usuario conectado en `mfe1`, tienes
la prueba de que `auth-lib` solo se carga una vez y se comparte entre
las aplicaciones.

## Aislando Micro Frontends

Un objetivo importante de una arquitectura de Micro Frontend es aislar
los Micro Frontends unos de otros. Solo si no dependen unos de otros,
pueden ser evolucionados por equipos autárquicos. Para esto, Nx
proporciona reglas de **linting**. Una vez establecidas, nos dan errores
cuando referenciamos directamente código perteneciente a otro Micro
Frontend y, por lo tanto, a otro dominio de negocio.

En el siguiente ejemplo, el shell intenta acceder a una librería
perteneciente a `mfe1`:

![El linting previene el acoplamiento entre Micro
Frontends](images/linting.png)

Para hacer que estos mensajes de error aparezcan en tu IDE, necesitas
soporte para **eslint**. Para Visual Studio Code, esto se puede instalar
mediante una extensión.

Además de verificar contra las reglas de linting en tu IDE, también se
puede llamar al linter en la línea de comandos:

![Linting en la línea de comandos](images/linting-shell.png)

La buena noticia: Si funciona en la línea de comandos, se puede
automatizar. Por ejemplo, tu **proceso de compilación** podría ejecutar
este comando y **prevenir la fusión** de una característica en la rama
principal si estas reglas de linting fallan: No más ventanas rotas.

Para configurar estas reglas de linting, necesitamos **añadir
etiquetas** a cada aplicación y librería en nuestro monorepo. Para esto,
puedes ajustar el `project.json` en la carpeta de la aplicación o
librería. Por ejemplo, el `project.json` para el shell se puede
encontrar aquí: `apps/shell/project.json`. Al final, encuentras una
propiedad `tag`, que he establecido en `scope:shell`:

```json
{
    [...]
    "tags": ["scope:shell"]
}
```

El valor para las etiquetas son solo cadenas de texto. Por lo tanto,
puedes establecer cualquier valor posible. He repetido esto para `mfe1`
(`scope:mfe1`) y la `auth-lib` (`scope:auth-lib`).

Una vez que las etiquetas están en su lugar, puedes usarlas para definir
**restricciones** en tu configuración **global de eslint**
(`.eslintrc.json`):

```json
"@nrwl/nx/enforce-module-boundaries": [
  "error",
  {
    "enforceBuildableLibDependency": true,
    "allow": [],
    "depConstraints": [
      {
        "sourceTag": "scope:shell",
        "onlyDependOnLibsWithTags": ["scope:shell", "scope:shared"]
      },
      {
        "sourceTag": "scope:mfe1",
        "onlyDependOnLibsWithTags": ["scope:mfe1", "scope:shared"]
      },
      {
        "sourceTag": "scope:shared",
        "onlyDependOnLibsWithTags": ["scope:shared"]
      }
    ]
  }
]
```

Después de cambiar archivos de configuración global como el
`.eslintrc.json`, es una buena idea reiniciar tu IDE (o al menos los
servicios afectados de tu IDE). Esto asegura que los cambios sean
respetados.

Más sobre estas ideas y su implementación con Nx se puede encontrar en
los capítulos sobre Diseño Estratégico.

## Compilaciones Incrementales

Para compilar todas las aplicaciones, puedes usar el comando `run-many`
de Nx:

```bash
nx run-many --target build --all
```

Sin embargo, esto no significa que Nx siempre recompila todos los Micro
Frontends así como el shell. En cambio, **solo recompila** las
aplicaciones **modificadas**. Por ejemplo, en el siguiente caso mfe1 no
fue modificado. Por lo tanto, solo se recompila el shell:

![Nx solo recompila las aplicaciones
modificadas](images/incremental.png)

> Usar la caché de compilación para solo recompilar las aplicaciones
> modificadas puede **acelerar drásticamente tus tiempos de
> compilación.**

Esto también funciona para **pruebas, pruebas e2e y linting** de forma
predeterminada. Si una aplicación (o librería) no ha sido modificada, no
se vuelve a probar ni se vuelve a analizar con el linter. En cambio, el
resultado se toma de la **caché de compilación** de Nx.

Por defecto, la caché de compilación se encuentra en
`node_modules/.cache/nx`. Sin embargo, hay varias opciones para
configurar cómo y dónde almacenar en caché.

## Desplegando

Como normalmente, las librerías no tienen versiones en un monorepo,
siempre deberíamos volver a desplegar todos los Micro Frontends
modificados juntos. Afortunadamente, Nx ayuda a descubrir qué
aplicaciones/Micro Frontends han sido modificados o **afectados por un
cambio**:

```bash
nx print-affected --type app --select projects
```

También podrías querer detectar las aplicaciones modificadas como parte
de tu **proceso de compilación**.

> Volver a desplegar todas las aplicaciones que han sido modificadas o
> afectadas por un cambio (de librería) es vital si compartes librerías
> en tiempo de ejecución. Si tienes una **rama de lanzamiento**, es
> suficiente con solo volver a desplegar todas las aplicaciones que han
> sido modificadas en esta rama.

Si quieres tener una representación **gráfica** de las partes
modificadas de tu monorepo, puedes solicitar un gráfico de dependencias
con el siguiente comando:

```bash
nx affected:graph
```

Suponiendo que cambiamos la librería `domain-logic` usada por `mfe1`, el
resultado se vería así:

![El gráfico de dependencias muestra los proyectos
afectados](images/affected-dep-graph.png)

Por defecto, los comandos mostrados **comparan** tu directorio de
trabajo actual con la **rama principal**. Sin embargo, puedes usar estos
comandos con los interruptores `--base` y `--head`.

```bash
nx print-affected --type app --select projects --base branch-or-commit-a --head branch-or-commit-b
```

Estos interruptores toman un **hash de commit** o el nombre de una
**rama**. En este último caso, se utiliza el último commit de la rama
mencionada para la comparación.

## Conclusión

Al usar monorepos para Micro Frontends intercambias algo de libertad por
prevenir problemas. Todavía puedes desplegar Micro Frontends por
separado y gracias a las reglas de linting proporcionadas por Nx los
Micro Frontends pueden aislarse unos de otros.

Sin embargo, necesitas acordar versiones comunes para los frameworks y
librerías utilizados. Por lo tanto, no terminas con conflictos de
versión en tiempo de ejecución. Esto también previene el aumento de los
paquetes (bundles).

Ambos funcionan, sin embargo, ambos tienen diferentes consecuencias.
Depende de ti evaluar estas consecuencias para tu proyecto específico.

# 09. Manejo de Desajustes de Versión en Module Federation {#09-manejo-de-desajustes-de-versión-en-module-federation}

Webpack Module Federation facilita la carga de código compilado por
separado, como los micro frontends. Incluso nos permite compartir
bibliotecas entre ellos. Esto evita que la misma biblioteca tenga que
ser cargada varias veces.

Sin embargo, podría haber situaciones en las que varios micro frontends
y el shell necesiten diferentes versiones de una biblioteca compartida.
Además, estas versiones podrían no ser compatibles entre sí.

Para manejar tales casos, Module Federation ofrece varias opciones. En
este capítulo, presento estas opciones analizando diferentes escenarios.
El [código
fuente](https://github.com/manfredsteyer/module_federation_shared_versions)
para estos escenarios se puede encontrar en mi [cuenta de
GitHub](https://github.com/manfredsteyer/module_federation_shared_versions).

> Un gran agradecimiento a [Tobias Koppers](https://twitter.com/wSokra),
> fundador de webpack, por responder varias preguntas sobre este tema y
> por revisar este capítulo.

## Ejemplo Utilizado Aquí

Para demostrar cómo Module Federation maneja diferentes versiones de
bibliotecas compartidas, utilizo una aplicación shell simple conocida de
otras partes de este libro. Es capaz de cargar micro frontends en su
área de trabajo:

![Shell cargando microfrontends](images/static-all-1-0-0.png)

El micro frontend está enmarcado con la línea discontinua roja.

Para compartir bibliotecas, tanto el shell como el micro frontend usan
la siguiente configuración en sus configuraciones de webpack:

```javascript
new ModuleFederationPlugin({
   [...],
   shared: ["rxjs", "useless-lib"]
})
```

Si eres nuevo en Module Federation, puedes encontrar una explicación al
respecto
[aquí](https://www.angulararchitects.io/aktuelles/the-microfrontend-revolution-module-federation-in-webpack-5/).

El paquete [useless-lib](https://www.npmjs.com/package/useless-lib) es
un paquete ficticio que he publicado para este ejemplo. Está disponible
en las versiones `1.0.0`, `1.0.1`, `1.1.0`, `2.0.0`, `2.0.1` y `2.1.0`.
En el futuro, podría añadir más. Estas versiones nos permiten simular
diferentes tipos de desajustes de versión.

Para indicar la versión instalada, `useless-lib` exporta una constante
`version`. Como puedes ver en la captura de pantalla anterior, el shell
y el micro frontend muestran esta constante. En la constelación
mostrada, ambos usan la misma versión (`1.0.0`), y por lo tanto pueden
compartirla. Por consiguiente, `useless-lib` solo se carga una vez.

Sin embargo, en las siguientes secciones, examinaremos qué sucede si hay
desajustes de versión entre la `useless-lib` usada en el shell y la
usada en el `microfrontend`. Esto también me permite explicar diferentes
conceptos que Module Federation implementa para manejar tales
situaciones.

## Versionado Semántico por Defecto

Para nuestra primera variación, supongamos que nuestro `package.json`
apunta a las siguientes versiones:

- **Shell:** useless-lib@\^1.0.0
- **MFE1:** useless-lib@\^1.0.1

Esto lleva al siguiente resultado:

![](images/static-1-0-0-vs-1-0-1.png)

Module Federation decide optar por la versión `1.0.1` ya que esta es la
versión más alta compatible con ambas aplicaciones según el versionado
semántico (\^1.0.0 significa que también podemos optar por versiones
menores y de parche superiores).

## Módulos de Respaldo para Versiones Incompatibles

Ahora, supongamos que hemos ajustado nuestras dependencias en
`package.json` de esta manera:

- **Shell:** useless-lib@\~1.0.0
- **MFE1:** <useless-lib@1.1.0>

Ambas versiones no son compatibles entre sí (`~1.0.0` significa que solo
una versión de parche superior es aceptable, pero no una versión menor
superior).

Esto lleva al siguiente resultado:

![Usando Módulo de Respaldo](images/static-1-0-0-vs-1-1-0.png)

Esto muestra que Module Federation usa diferentes versiones para ambas
aplicaciones. En nuestro caso, cada aplicación recurre a su propia
versión, lo que también se llama el módulo de respaldo.

## Diferencias con Dynamic Module Federation

Curiosamente, el comportamiento es un poco diferente cuando cargamos los
micro frontends, incluyendo sus puntos de entrada remotos, solo bajo
demanda usando Dynamic Module Federation. La razón es que los remotos
dinámicos no se conocen al inicio del programa y, por lo tanto, Module
Federation no puede tener en cuenta sus versiones durante su fase de
inicialización.

Para explicar esta diferencia, supongamos que el shell está cargando el
micro frontend dinámicamente y que tenemos las siguientes versiones:

- **Shell:** useless-lib@\^1.0.0
- **MFE1:** useless-lib@\^1.0.1

Mientras que en el caso de Module Federation clásico (estático), ambas
aplicaciones acordarían usar la versión `1.0.1` durante la fase de
inicialización, aquí, en el caso de module federation dinámico, el shell
ni siquiera conoce el micro frontend en esta fase. Por lo tanto, solo
puede elegir su propia versión:

![Microfrontend dinámico recurre a su propia
versión](images/dynamic-1-0-0-vs-1-0-1.png)

Si hubiera otros remotos estáticos (por ejemplo, micro frontends), el
shell también podría elegir una de sus versiones según el versionado
semántico, como se mostró anteriormente.

Desafortunadamente, cuando se carga el micro frontend dinámico, module
federation no encuentra una versión ya cargada compatible con `1.0.1`.
Por lo tanto, el micro frontend recurre a su propia versión `1.0.1`.

Por el contrario, supongamos que el shell tiene la versión compatible
más alta:

- **Shell:** useless-lib@\^1.1.0
- **MFE1:** useless-lib@\^1.0.1

En este caso, el micro frontend decidiría usar la ya cargada:

![Microfrontend dinámico usa la versión ya
cargada](images/dynamic-1-1-0-vs-1-0-1.png)

En resumen, en general, es una buena idea asegurarse de que su shell
proporcione las versiones compatibles más altas al cargar remotos
dinámicos lo más tarde posible.

Sin embargo, como se discutió en el capítulo sobre Dynamic Module
Federation, es posible cargar dinámicamente solo el punto de entrada
remoto al inicio del programa y cargar el micro frontend más tarde bajo
demanda. Al dividir esto en dos procesos de carga, el comportamiento es
exactamente el mismo que con Module Federation estático (\"clásico\").
La razón es que en este caso los metadatos del punto de entrada remoto
están disponibles lo suficientemente temprano como para ser considerados
durante la negociación de las versiones.

## Singletons

Recurrir a otra versión no siempre es la mejor solución: usar más de una
versión puede llevar a efectos imprevisibles cuando hablamos de
bibliotecas que mantienen estado. Esto parece ser siempre el caso para
tu framework/biblioteca de aplicación principal como Angular, React o
Vue.

Para tales escenarios, Module Federation nos permite definir bibliotecas
como **singletons**. Dicho singleton solo se carga una vez.

Si solo hay versiones compatibles, Module Federation decidirá por la más
alta, como se muestra en los ejemplos anteriores. Sin embargo, si hay un
desajuste de versión, los singletons evitan que Module Federation
recurra a una versión adicional de la biblioteca.

Para esto, consideremos el siguiente desajuste de versión:

- **Shell:** useless-lib@\^2.0.0
- **MFE1:** useless-lib@\^1.1.0

Consideremos también que hemos configurado `useless-lib` como un
singleton:

```javascript
// Shell
shared: {
  "rxjs": {},
  "useless-lib": {
    singleton: true,
  }
},
```

Aquí, usamos una configuración avanzada para definir singletons. En
lugar de un simple array, vamos con un objeto donde cada clave
representa un paquete.

Si una biblioteca se usa como singleton, muy probablemente establecerás
la propiedad singleton en cada configuración. Por lo tanto, también
estoy ajustando la configuración de Module Federation del microfrontend
en consecuencia:

```javascript
// MFE1
shared: {
    "rxjs": {},
    "useless-lib": {
        singleton: true
    }
}
```

Para evitar cargar varias versiones del paquete singleton, Module
Federation decide cargar solo la biblioteca disponible más alta de la
que tiene conocimiento durante la fase de inicialización. En nuestro
caso, esta es la versión `2.0.0`:

![Module Federation solo carga la versión más alta para los
singletons](images/static-singleton-warning.png)

Sin embargo, como la versión `2.0.0` no es compatible con la versión
`1.1.0` según el versionado semántico, obtenemos una advertencia. Si
tenemos suerte, la aplicación federada funciona aunque tengamos este
desajuste. Sin embargo, si la versión `2.0.0` introdujo cambios
incompatibles (breaking changes) con los que nos topamos, nuestra
aplicación podría fallar.

En este último caso, podría ser beneficioso fallar rápidamente al
detectar el desajuste lanzando una excepción. Para que Module Federation
se comporte de esta manera, establecemos `strictVersion` en `true`:

```javascript
// MFE1
shared: {
  "rxjs": {},
  "useless-lib": {
    singleton: true,
    strictVersion: true
  }
}
```

El resultado de esto se ve así en tiempo de ejecución:

![Los desajustes de versión con respecto a los singletons usando
strictVersion hacen que la aplicación
falle](images/static-singleton-strict-error.png)

## Aceptar un Rango de Versiones

Puede haber casos en los que sepas que una versión mayor superior es
compatible hacia atrás aunque no tenga por qué serlo con respecto al
versionado semántico. En estos escenarios, puedes hacer que Module
Federation acepte un rango de versiones definido.

Para explorar esta opción, supongamos una vez más el siguiente desajuste
de versión:

- **Shell:** useless-lib@\^2.0.0
- **MFE1:** useless-lib@\^1.1.0

Ahora, podemos usar la opción `requiredVersion` para `useless-lib` al
configurar el microfrontend:

```javascript
// MFE1
shared: {
  "rxjs": {},
  "useless-lib": {
    singleton: true,
    strictVersion: true,
    requiredVersion: ">=1.1.0 <3.0.0"
  }
}
```

Según esto, también aceptamos todo lo que tenga `2` como versión mayor.
Por lo tanto, podemos usar la versión `2.0.0` proporcionada por el shell
para el micro frontend:

![Aceptando versiones incompatibles definiendo un rango de
versiones](images/singleton-requiredversion.png)

## Conclusión

Module Federation ofrece varias opciones para manejar diferentes
versiones y desajustes de versión. La mayoría de las veces, no necesitas
hacer nada, ya que utiliza el versionado semántico para decidir por la
versión compatible más alta. Si un remoto necesita una versión
incompatible, recurre a una por defecto.

En los casos en que necesites evitar cargar varias versiones del mismo
paquete, puedes definir un paquete compartido como un singleton. En este
caso, se utiliza la versión más alta conocida durante la fase de
inicialización, aunque no sea compatible con todas las versiones
necesarias. Si quieres evitar esto, puedes hacer que Module Federation
lance una excepción usando la opción `strictVersion`.

También puedes flexibilizar los requisitos para una versión específica
definiendo un rango de versiones usando `requestedVersion`. Incluso
puedes definir varios ámbitos (scopes) para escenarios avanzados donde
cada uno puede obtener su propia versión.

# 10. Micro Frontends Multimarco y Multiversión con Module Federation {#10-micro-frontends-multimarco-y-multiversión-con-module-federation}

La mayoría de los artículos sobre Module Federation asumen que tienes
solo una versión de tu Framework principal, por ejemplo, Angular. Sin
embargo, ¿qué hacer si tienes que mezclar y combinar diferentes
versiones o diferentes frameworks? No te preocupes, te tenemos cubierto.
Este capítulo utiliza un ejemplo para explicar cómo desarrollar tal
escenario en 4 pasos.

![Ejemplo](images/multi-example.gif)

Por favor, encuentra la demostración en vivo y el código fuente aquí:

- [Ejemplo en vivo](https://red-ocean-0fe4c4610.azurestaticapps.net)
- [Código Fuente del
  Shell](https://github.com/manfredsteyer/multi-framework-version)
- [Código Fuente para Micro
  Frontend](https://github.com/manfredsteyer/angular-app1)
- [Código Fuente para Micro Frontend con
  Enrutamiento](https://github.com/manfredsteyer/angular3-app)
- [Código Fuente para Micro Frontend con
  Vue](https://github.com/manfredsteyer/vue-js)
- [Código Fuente para Micro Frontend con
  React](https://github.com/manfredsteyer/react-app)
- [Código Fuente para Micro Frontend con
  AngularJS](https://github.com/manfredsteyer/angularjs-app)

## ¿Patrón o Antipatrón?

En su reciente charla sobre [Anti Patrones de Micro
Frontend](https://www.youtube.com/watch?v=asXPRrg6M2Y), mi amigo [Luca
Mezzalira](https://twitter.com/lucamezzalira) menciona el uso de varios
frameworks de frontend en una aplicación. Él llama a este antipatrón la
[Hidra de Lerna](https://en.wikipedia.org/wiki/Lernaean_Hydra). Este
nombre proviene de un monstruo acuático de la mitología griega y romana
que tenía varias cabezas.

Hay una buena razón para considerar esto un antipatrón: los frameworks
actuales no están preparados para ser iniciados (bootstrapped) en la
misma pestaña del navegador junto con otros frameworks u otras versiones
de sí mismos. Además de llevar a paquetes (bundles) más grandes, esto
también aumenta la complejidad y exige algunas soluciones alternativas
(workarounds).

Sin embargo, Luca también explica que hay algunas situaciones donde tal
enfoque **podría ser necesario**. Él presenta los siguientes ejemplos:

1.  Manejo de sistemas heredados (legacy systems)
2.  Migración a un nuevo framework/biblioteca de UI
3.  Después de fusionar empresas con diferentes pilas tecnológicas (tech
    stacks)

Todo esto me llega directo al corazón y se correlaciona perfectamente
con mi \"historia\" que cuento mucho en conferencias y en nuestros
talleres de empresa: Intenta evitar mezclar frameworks y versiones en el
navegador. Sin embargo, si tienes una buena razón para hacerlo después
de descartar las alternativas, hay formas de hacer que los Micro
Frontends Multimarco/Multiversión funcionen.

Como siempre en el área de la arquitectura de software ---y
probablemente en la vida en general--- todo se trata de **compensaciones
(trade-offs)**. Así que si descubres que este enfoque tiene menos
inconvenientes que las alternativas con respecto a tus **objetivos de
arquitectura** específicos, adelante.

## ¿Micro Frontends como Web Components?

Aunque no es 100% necesario, puede ser una buena idea envolver (wrap)
tus Micro Frontends en Web Components.

![Micro Frontends envueltos en Web Components](images/wrapping-wc.png)

Esto trae varias ventajas:

- Abstraer las diferencias entre frameworks
- Montar/Desmontar Web Components es fácil
- El Shadow DOM ayuda a aislar los estilos CSS
- Los Eventos Personalizados (Custom Events) y Propiedades
  (Properties) permiten la comunicación

Las dos primeras opciones se correlacionan entre sí. Necesitamos mostrar
y ocultar nuestros Micro Frontends bajo demanda, por ejemplo, al activar
un elemento específico del menú. Como cada Micro Frontend es un frontend
autónomo, esto también significa que tenemos que iniciarlo (bootstrap)
bajo demanda en medio de nuestra página. Para esto, diferentes
frameworks proporcionan diferentes métodos o funciones. Cuando están
envueltos en Web Components, todo lo que necesitamos hacer es agregar o
eliminar el elemento HTML respectivo registrado con el Web Component.

Aislar los estilos CSS mediante Shadow DOM ayuda a que los equipos sean
más autosuficientes. Sin embargo, he visto que con bastante frecuencia
los equipos sacrifican un poco de independencia por algunas reglas CSS
globales proporcionadas por el shell. En este caso, la emulación de
Shadow DOM proporcionada por Angular (con y sin Web Components) es una
buena opción: si bien evita que los estilos de otros componentes se
filtren en los tuyos, también permite compartir estilos globales.

Además, los Eventos Personalizados y las Propiedades parecen ser una
buena opción para la comunicación a primera vista. Sin embargo, en aras
de la simplicidad, mientras tanto, prefiero un objeto simple que actúe
como mediador o \"mini bus de mensajes\" en el espacio de nombres
global.

En general, tenemos que ver que tales Web Components que envuelven Micro
Frontends completos no son Web Components típicos. Destaco esto porque a
veces la gente confunde la idea de un Componente (Web) con la idea de un
Micro Frontend o usa estos términos como sinónimos. Esto lleva a Micro
Frontends demasiado detallados (fine-grained) que causan muchos
problemas con la integración.

## ¿También necesitamos Module Federation?

Module Federation facilita la carga de partes de otras aplicaciones en
un anfitrión (host). En nuestro caso, el anfitrión es el shell del Micro
Frontend. Además, Module Federation permite compartir bibliotecas entre
el shell y los micro frontends.

Incluso viene con varias estrategias para lidiar con los desajustes de
versiones. Por ejemplo, podríamos configurarlo para reutilizar una
biblioteca existente si las versiones coinciden exactamente. De lo
contrario, podríamos indicarle que cargue la versión con la que se ha
construido.

Cargar los Micro Frontends discutidos con Module Federation nos da lo
mejor de ambos mundos. Podemos compartir bibliotecas cuando sea posible
y cargar las nuestras cuando no:

![Lo Mejor de Ambos Mundos](images/venn.png)

## Implementación en 4 pasos

Ahora, después de discutir la estrategia de implementación, veamos los 4
pasos prometidos para construir tal solución.

### Paso 1: Envuelve tu Micro Frontend en un Web Component

Para envolver Micro Frontends basados en Angular en un Web Component,
puedes usar Angular Elements, proporcionado por el equipo de Angular.
Instálalo vía npm:

```bash
npm i @angular/elements
```

Después de instalarlo, ajusta tu `AppModule` de la siguiente manera:

```typescript
import { createCustomElement } from '@angular/elements';
[...]

@NgModule({
  [...]
  declarations: [
    AppComponent
  ],
  bootstrap: [] // ¡Sin componentes de bootstrap!
})
export class AppModule implements DoBoostrap {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const ce = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('angular1-element', ce);
  }

}
```

Esto hace varias cosas:

- Al optar por un array `bootstrap` vacío, Angular no iniciará
  directamente ningún componente al arrancar. Sin embargo, en tales
  casos, Angular nos exige colocar una lógica de inicio personalizada
  en el método `ngDoBootstrap` descrito por la interfaz `DoBoostrap`.
- `ngDoBootstrap` usa `createCustomElement` de Angular Elements para
  envolver tu `AppComponent` en un Web Component. Para que funcione
  con la Inyección de Dependencias (DI), también necesitas pasar el
  `Injector` actual.
- El método `customElements.define` registra el Web Component con el
  nombre `angular1-element` en el navegador.

El resultado de esto es que el navegador montará la Aplicación en cada
etiqueta `angular1-element` que aparezca en tu aplicación.

Si tu framework no soporta directamente web components, también puedes
envolver tu aplicación manualmente. Por ejemplo, un componente React
podría envolverse de la siguiente manera:

```typescript
// app.js
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    const reactVersion = require("./package.json").dependencies["react"];

    return [<h1>React</h1>, <p>React Version: {reactVersion}</p>];
  }
}

class Mfe4Element extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App />, this);
  }
}

customElements.define("react-element", Mfe4Element);
```

### Paso 2: Expón tu Web Component vía Module Federation

Para poder cargar los Micro Frontends en el shell, necesitamos exponer
los Web Components que los envuelven vía Module Federation. Para esto,
añade el paquete `@angular-architects/module-federation` a tu Micro
Frontend basado en Angular:

```bash
ng add @angular-architects/module-federation
```

Esto instala e inicializa el paquete. Si usas Nx y Angular, es más usual
hacer ambos pasos por separado:

```bash
npm i @angular-architects/module-federation -D

ng g @angular-architects/module-federation:init
```

En el caso de otros frameworks como React o Vue, todo esto se trata
simplemente de añadir el `ModuleFederationPlugin` a la configuración de
webpack. Por favor, recuerda que necesitas iniciar (bootstrap) tu
aplicación asíncronamente en la mayoría de los casos. Por lo tanto, tu
archivo de entrada contendrá más o menos solo un `import` dinámico que
carga el resto de la aplicación.

Por esta razón, el Micro Frontend basado en React discutido
anteriormente usa el siguiente `index.js` como punto de entrada:

```typescript
// index.js
import("./app");
```

De manera similar, `@angular-architects/module-federation` mueve el
código de inicio de `main.ts` a un `bootstrap.ts` recién creado y lo
importa:

```typescript
// main.ts
import("./bootstrap");
```

Este patrón común le da a Module Federation el tiempo necesario para
cargar las dependencias compartidas.

Después de configurar Module Federation, expón el envoltorio basado en
Web Component vía la configuración de webpack:

```typescript
// webpack.config.js
[...]
module.exports = {
  [...]
  plugins: [
    new ModuleFederationPlugin({

      name: "angular1",
      filename: "remoteEntry.js",

      exposes: {
        './web-components': './src/bootstrap.ts',
      },

      shared: share({
        "@angular/core": { requiredVersion: "auto" },
        "@angular/common": { requiredVersion: "auto" },
        "@angular/router": { requiredVersion: "auto" },
        "rxjs": { requiredVersion: "auto" },

        ...sharedMappings.getDescriptors()
      }),
      [...]
    })
  ],
};
```

> Como el objetivo es mostrar cómo mezclar diferentes versiones de
> Angular, este Micro Frontend usa Angular 12 mientras que el shell
> mostrado abajo usa una versión más reciente de Angular. Por lo tanto,
> también se usa una versión más antigua de
> \@angular-architects/module-federation y la configuración original más
> verbosa. Por favor, encuentra [detalles sobre diferentes
> versiones](https://github.com/angular-architects/module-federation-plugin/blob/main/migration-guide.md)
> aquí.

La configuración en la sección `shared` asegura que podamos mezclar
varias versiones de un framework pero también reutilizar una ya cargada
si los números de versión encajan exactamente. Para esto,
`requiredVersion` debería apuntar a la versión instalada ---la que
también encuentras en tu `package.json`. El método auxiliar `share` que
viene con `@angular-architects/module-federation` se encarga de esto
cuando se establece `requiredVersion` en `auto`.

> Aunque según el versionado semántico (semantic versioning) una
> biblioteca de Angular con una versión menor o de parche superior es
> retrocompatible, no existen tales garantías para el código ya
> compilado. La razón es que el código emitido por el compilador de
> Angular usa APIs internas de Angular para las cuales el versionado
> semántico no aplica. Por lo tanto, deberías usar un número de versión
> exacto (sin ningún `^` o `~`).

### Paso 3: Realiza Ajustes para Angular

Para hacer que varias aplicaciones Angular funcionen juntas en una
ventana del navegador, necesitamos [algunas soluciones alternativas
(workarounds)](https://www.angulararchitects.io/aktuelles/multi-framework-and-version-micro-frontends-with-module-federation-the-good-the-bad-the-ugly/).
La buena noticia es que las hemos implementado en un complemento muy
ligero para `@angular-architects/module-federation` llamado
[\@angular-architects/module-federation-tools](https://www.npmjs.com/package/@angular-architects/module-federation-tools).

Simplemente instálalo
(`npm i @angular-architects/module-federation-tools -D`) tanto en tus
Micro Frontends como en tu shell. Luego, inicia tu shell y tus Micro
Frontends con su método `bootstrap` en lugar del de Angular:

```typescript
// main.ts
import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";
import { bootstrap } from "@angular-architects/module-federation-tools";

bootstrap(AppModule, {
  production: environment.production,
  appType: "microfrontend", // para micro frontend
  // appType: 'shell',      // para el shell
});
```

### Paso 4: Carga los Micro Frontends en el Shell

También, habilita Module Federation en tu shell. Si es un shell basado
en Angular, añade el plugin `@angular-architects/module-federation`:

```bash
ng add @angular-architects/module-federation
```

Como se mencionó anteriormente, en el caso de Nx y Angular, realiza la
instalación e inicialización por separado:

```bash
npm i @angular-architects/module-federation -D
ng g @angular-architects/module-federation:init --type host
```

> El modificador `--type host` genera una configuración típica de
> anfitrión (host). Está disponible desde la versión 14.3 del plugin y,
> por lo tanto, desde Angular 14.

Para este ejemplo, no necesitamos ajustar el `webpack.config.js`
generado:

```typescript
// webpack.config.js
const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
```

Otras configuraciones proporcionadas por el `ModuleFederationPlugin` no
son necesarias aquí.

Después de esto, todo lo que necesitas es una ruta de carga diferida
(lazy route), cargando los Micro Frontends en cuestión:

```javascript
import { WebComponentWrapper, WebComponentWrapperOptions }
  from '@angular-architects/module-federation-tools';

export const APP_ROUTES: Routes = [
  [...]
  {
      path: 'react',
      component: WebComponentWrapper,
      data: {
        remoteEntry:
          'https://witty-wave-0a695f710.azurestaticapps.net/remoteEntry.js',
        remoteName: 'react',
        exposedModule: './web-components',

        elementName: 'react-element'
      } as WebComponentWrapperOptions
  },
  [...]
]
```

El `WebComponentWrapper` usado aquí es proporcionado por
`@angular-architects/module-federation-tools`. Simplemente carga el Web
Component vía Module Federation usando los datos clave proporcionados.
En el caso mostrado, esta aplicación React está desplegada como una
Azure Static Web App. Los valores para `remoteName` y `exposedModule` se
pueden encontrar en la configuración de webpack del Micro Frontend.

El componente envoltorio también crea un elemento HTML con el nombre
`react-element` en el que se monta el Web Component.

Si cargas un Micro Frontend compilado con Angular 13 o superior,
necesitas establecer la propiedad `type` en `module`:

```typescript
export const APP_ROUTES: Routes = [
    [...]
    {
        path: 'angular1',
        component: WebComponentWrapper,
        data: {
          type: 'module',
          remoteEntry: 'https://your-path/remoteEntry.js',
          exposedModule: './web-components',

          elementName: 'angular1-element'
        } as WebComponentWrapperOptions
    },
    [...]
}
```

Además, en el caso de Angular 13+ no necesitas la propiedad
`remoteName`. La razón de estas dos diferencias es que Angular CLI 13+
ya no emite archivos \"JavaScript de estilo antiguo\" sino módulos
JavaScript. Su manejo en Module Federation es un poco diferente.

Si tu Micro Frontend trae su propio enrutador, necesitas decirle a tu
shell que el Micro Frontend añadirá más segmentos a la URL. Para esto,
puedes usar el comparador `startsWith` también proporcionado por
`@angular-architects/module-federation-tools`:

```typescript
import {
    startsWith,
    WebComponentWrapper,
    WebComponentWrapperOptions
}
from '@angular-architects/module-federation-tools';

[...]

export const APP_ROUTES: Routes = [
    [...]
    {
        matcher: startsWith('angular3'),
        component: WebComponentWrapper,
        data: {
            [...]
        } as WebComponentWrapperOptions
    },
    [...]
}
```

Para que esto funcione, el prefijo de ruta `angular3` usado aquí también
necesita ser usado por el Micro Frontend. Como la configuración de
enrutamiento es solo una estructura de datos, encontrarás formas de
añadirla dinámicamente.

### Resultado

El resultado de este esfuerzo es una aplicación que consta de diferentes
frameworks o versiones de frameworks:

![Ejemplo](images/multi-example.gif)

Siempre que es posible, el framework se comparte. De lo contrario,
Module Federation carga una nueva versión del framework. Otra ventaja de
este enfoque es que funciona sin ningún meta framework adicional. Solo
necesitamos algunas funciones de ayuda ligeras (thin helper functions).

Las desventajas son una mayor complejidad y tamaños de paquete (bundle)
más grandes. Además, nos estamos desviando de los casos de uso
soportados: ninguno de los frameworks ha sido probado oficialmente junto
con otros frameworks u otras versiones de sí mismo en la misma pestaña
del navegador.

# 11. Obstáculos con Module Federation y Angular {#11-obstáculos-con-module-federation-y-angular}

¡En este capítulo, voy a destruir mi ejemplo de Module Federation! Sin
embargo, no tienes que preocuparte: es por una muy buena razón. El
objetivo es mostrar los obstáculos típicos que surgen al usar Module
Federation junto con Angular. Además, presento algunas estrategias para
evitar estos obstáculos.

Si bien Module Federation es realmente una solución directa y
minuciosamente pensada, usar Micro Frontends significa, en general,
convertir dependencias de tiempo de compilación en dependencias de
tiempo de ejecución. Como resultado, el compilador no puede protegerte
tan bien como estás acostumbrado.

Si quieres probar los ejemplos utilizados aquí, puedes hacer un fork de
este
[ejemplo](https://github.com/manfredsteyer/module-federation-plugin-example.git).

## \"No se especificó la versión requerida\" y Puntos de Entrada Secundarios

Para el primer obstáculo del que quiero hablar, echemos un vistazo al
`webpack.config.js` de nuestro `shell`. Además, simplifiquemos el nodo
`shared` de la siguiente manera:

```typescript
shared: {
  "@angular/core": { singleton: true, strictVersion: true },
  "@angular/common": { singleton: true, strictVersion: true },
  "@angular/router": { singleton: true, strictVersion: true },
  "@angular/common/http": { singleton: true, strictVersion: true },
},
```

Como ves, ya no especificamos una `requiredVersion`. Normalmente esto no
es necesario porque webpack Module Federation es muy inteligente para
descubrir qué versión usas.

Sin embargo, ahora, al compilar el shell (`ng build shell`), obtenemos
el siguiente error:

> shared module \@angular/common - Warning: No required version
> specified and unable to automatically determine one. Unable to find
> required version for \"@angular/common\" in description file
> (C:\\Users\\Manfred\\Documents\\artikel\\ModuleFederation-Pitfalls\\example\\node_modules@angular\\common\\package.json).
> It need to be in dependencies, devDependencies or peerDependencies.

La razón de esto es el punto de entrada secundario
`@angular/common/http` que es un poco como un paquete npm dentro de otro
paquete npm. Técnicamente, es solo otro archivo expuesto por el paquete
npm `@angular/common`.

Como era de esperar, `@angular/common/http` usa `@angular/common` y
webpack lo reconoce. Por esta razón, webpack quiere averiguar qué
versión de `@angular/common` se utiliza. Para ello, busca en el
`package.json` del paquete npm (`@angular/common/package.json`) y
examina las dependencias allí. Sin embargo, `@angular/common` en sí
mismo no es una dependencia de `@angular/common` y, por lo tanto, no se
puede encontrar la versión.

Tendrás el mismo desafío con otros paquetes que usan puntos de entrada
secundarios, por ejemplo, `@angular/material`.

Para evitar esta situación, puedes asignar versiones a todas las
bibliotecas compartidas manualmente:

```typescript
shared: {
  "@angular/core": {
    singleton: true,
    strictVersion: true,
    requiredVersion: '12.0.0'
  },
  "@angular/common": {
    singleton: true,
    strictVersion: true,
    requiredVersion: '12.0.0'
  },
  "@angular/router": {
    singleton: true,
    strictVersion: true,
    requiredVersion: '12.0.0'
  },
  "@angular/common/http": {
    singleton: true,
    strictVersion: true,
    requiredVersion: '12.0.0'
  },
},
```

Obviamente, esto es engorroso y por eso se nos ocurrió otra solución.
Desde la versión 12.3,
[\@angular-architects/module-federation](https://www.npmjs.com/package/@angular-architects/module-federation)
viene con una función auxiliar de aspecto poco espectacular llamada
`shared`. Si tu `webpack.config.js` fue generado con esta o una versión
más reciente, ya utiliza esta función auxiliar.

```typescript
[...]

const mf = require("@angular-architects/module-federation/webpack");
[...]
const share = mf.share;

[...]

shared: share({
  "@angular/core": {
    singleton: true,
    strictVersion: true,
    requiredVersion: 'auto'
  },
  "@angular/common": {
    singleton: true,
    strictVersion: true,
    requiredVersion: 'auto'
  },
  "@angular/router": {
    singleton: true,
    strictVersion: true,
    requiredVersion: 'auto'
  },
  "@angular/common/http": {
    singleton: true,
    strictVersion: true,
    requiredVersion: 'auto'
  },
  "@angular/material/snack-bar": {
    singleton: true,
    strictVersion: true,
    requiredVersion:'auto'
  },
})
```

Como ves aquí, la función `share` envuelve el objeto con las bibliotecas
compartidas. Permite usar `requiredVersion: 'auto'` y convierte el valor
`auto` al valor encontrado en el `package.json` de tu shell (o de tu
micro frontend).

## Desajustes de Versión No Evidentes: Problemas con Dependencias Peer

¿Alguna vez has ignorado una advertencia de dependencia peer?
Honestamente, creo que todos conocemos tales situaciones. E ignorarlas a
menudo está bien, ya que sabemos que, en tiempo de ejecución, todo
funcionará correctamente. Desafortunadamente, tal situación puede
confundir a webpack Module Federation al intentar detectar
automáticamente las versiones necesarias de las dependencias peer.

Para demostrar esta situación, instalemos `@angular/material` y
`@angular/cdk` en una versión que esté al menos 2 versiones por detrás
de nuestra versión de Angular. En este caso, deberíamos obtener
advertencias de dependencia peer.

En mi caso, esto se hace de la siguiente manera:

```bash
npm i @angular/material@10
npm i @angular/cdk@10
```

Ahora, cambiemos al `FlightModule` del Micro Frontend (`mfe1`) para
importar el `MatSnackBarModule`:

```typescript
[...]
import { MatSnackBarModule  } from '@angular/material/snack-bar';
[...]

@NgModule({
  imports: [
    [...]
    // Añade esta línea
    MatSnackBarModule,
  ],
  declarations: [
    [...]
  ]
})
export class FlightsModule { }
```

Para usar el snack bar en el `FlightsSearchComponent`, inyéctalo en su
constructor y llama a su método `open`:

```typescript
[...]
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html'
})
export class FlightsSearchComponent {
  constructor(snackBar: MatSnackBar) {
    snackBar.open('Hallo Welt!');
  }
}
```

Además, para este experimento, asegúrate de que el `webpack.config.js`
en el proyecto `mfe1` **no** defina las versiones de las dependencias
compartidas:

```typescript
shared: {
  "@angular/core": { singleton: true, strictVersion: true },
  "@angular/common": { singleton: true, strictVersion: true },
  "@angular/router": { singleton: true, strictVersion: true },
  "@angular/common/http": { singleton: true, strictVersion: true },
},
```

No definir estas versiones manualmente obliga a Module Federation a
intentar detectarlas automáticamente. Sin embargo, el conflicto de
dependencias peer le da a Module Federation un mal rato y, por lo tanto,
muestra el siguiente error:

> Unsatisfied version 12.0.0 of shared singleton module \@angular/core
> (required \^10.0.0 \|\| \^11.0.0-0) ; Zone: `<root>`{=html} ; Task:
> Promise.then ; Value: Error: Unsatisfied version 12.0.0 of shared
> singleton module \@angular/core (required \^10.0.0 \|\| \^11.0.0-0)

Mientras que `@angular/material` y `@angular/cdk` necesitan oficialmente
`@angular/core` 10, el resto de la aplicación ya usa `@angular/core` 12.
Esto muestra que webpack busca en los archivos `package.json` de todas
las dependencias compartidas para determinar las versiones necesarias.

Para resolver esto, puedes establecer las versiones manualmente o usando
la función auxiliar `share` que utiliza la versión encontrada en el
`package.json` de tu proyecto:

```typescript
[...]

const mf = require("@angular-architects/module-federation/webpack");
[...]
const share = mf.share;

[...]

shared: share({
  "@angular/core": {
    singleton: true,
    strictVersion: true,
    requiredVersion: 'auto'
  },
  "@angular/common": {
    singleton: true,
    strictVersion: true,
    requiredVersion: 'auto'
  },
  "@angular/router": {
    singleton: true,
    strictVersion: true,
    requiredVersion: 'auto'
  },
  "@angular/common/http": {
    singleton: true,
    strictVersion: true,
    requiredVersion: 'auto'
  },
  "@angular/material/snack-bar": {
    singleton: true,
    strictVersion: true,
    requiredVersion:'auto'
  },
})
```

## Problemas al Compartir Código y Datos

En nuestro ejemplo, el `shell` y el micro frontend `mfe1` comparten la
`auth-lib`. Su `AuthService` almacena el nombre de usuario actual. Por
lo tanto, el `shell` puede establecer el nombre de usuario y el `mfe1`
cargado de forma diferida puede acceder a él:

![Compartiendo Nombre de Usuario](images/sharing-via-auth-lib.png)

Si `auth-lib` fuera un paquete npm tradicional, podríamos simplemente
registrarlo como una biblioteca compartida con module federation. Sin
embargo, en nuestro caso, `auth-lib` es solo una biblioteca en nuestro
monorepo. Y las bibliotecas en ese sentido son solo carpetas con código
fuente.

Para hacer que esta carpeta parezca un paquete npm, hay un mapeo de ruta
para ella en el `tsconfig.json`:

```json
"paths": {
  "auth-lib": [
    "projects/auth-lib/src/public-api.ts"
  ]
}
```

Ten en cuenta que estamos apuntando directamente a la carpeta `src` de
`auth-lib`. Nx hace esto por defecto. Si utilizas un proyecto CLI
tradicional, necesitas ajustar esto manualmente.

Afortunadamente, Module Federation nos tiene cubiertos con tales
escenarios. Para facilitar un poco la configuración de estos casos, así
como para prevenir problemas con el compilador de Angular,
`@angular-architects/module-federation` proporciona una propiedad de
configuración llamada:

```typescript
module.exports = withModuleFederationPlugin({

    // Paquetes compartidos:
    shared: [...],

    // Compartir explícitamente bibliotecas del monorepo:
    sharedMappings: ['auth-lib'],

});
```

> **Importante:** Desde la Versión 14.3, el ayudante
> `withModuleFederationPlugin` comparte automáticamente **todas** las
> rutas mapeadas si no usas la propiedad `sharedMappings` en absoluto.
> Por lo tanto, el problema descrito aquí no ocurrirá.

Obviamente, si no optas por compartir la biblioteca en uno de los
proyectos, esos proyectos obtendrán su propia copia de `auth-lib` y, por
lo tanto, compartir el nombre de usuario ya no será posible.

Sin embargo, hay una constelación con el mismo problema subyacente que
es todo menos obvia. Para construir esta situación, agreguemos otra
biblioteca a nuestro monorepo:

```bash
ng g lib other-lib
```

Además, asegúrate de que tengamos un mapeo de ruta para ella apuntando a
su código fuente:

```json
"paths": {
  "other-lib": [
    "projects/other-lib/src/public-api.ts"
  ],
}
```

Supongamos que también queremos almacenar el nombre de usuario actual en
esta biblioteca:

```typescript
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class OtherLibService {
  // Añade esto:
  userName: string;

  constructor() {}
}
```

Y supongamos también que el `AuthLibService` delega en esta propiedad:

```typescript
import { Injectable } from "@angular/core";
import { OtherLibService } from "other-lib";

@Injectable({
  providedIn: "root",
})
export class AuthLibService {
  private userName: string;

  public get user(): string {
    return this.userName;
  }

  public get otherUser(): string {
    // ¡DELEGACIÓN!
    return this.otherService.userName;
  }

  constructor(private otherService: OtherLibService) {}

  public login(userName: string, password: string): void {
    // Autenticación para usuarios **honestos** TM. (c) Manfred Steyer
    this.userName = userName;

    // ¡DELEGACIÓN!
    this.otherService.userName = userName;
  }
}
```

El `AppComponent` del shell simplemente llama al método `login`:

```typescript
import { Component } from "@angular/core";
import { AuthLibService } from "auth-lib";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  title = "shell";

  constructor(private service: AuthLibService) {
    this.service.login("Max", null);
  }
}
```

Sin embargo, ahora el Micro Frontend tiene tres formas de obtener el
nombre de usuario definido:

```typescript
import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { AuthLibService } from "auth-lib";
import { OtherLibService } from "other-lib";

@Component({
  selector: "app-flights-search",
  templateUrl: "./flights-search.component.html",
})
export class FlightsSearchComponent {
  constructor(authService: AuthLibService, otherService: OtherLibService) {
    // Tres opciones para obtener el nombre de usuario:
    console.log("user from authService", authService.user);
    console.log("otherUser from authService", authService.otherUser);
    console.log("otherUser from otherService", otherService.userName);
  }
}
```

A primera vista, estas tres opciones deberían arrojar el mismo valor.
Sin embargo, si solo compartimos `auth-lib` **pero no** `other-lib`,
obtenemos el siguiente resultado:

{width:66%} ![Problema al compartir
bibliotecas](images/sharing-issue.png)

Como `other-lib` no se comparte, tanto `auth-lib` como el micro frontend
obtienen su propia versión de ella. Por lo tanto, tenemos dos instancias
de ella aquí. Mientras que la primera conoce el nombre de usuario, la
segunda no.

¿Qué podemos aprender de esto? Bueno, sería una buena idea compartir
también las dependencias de nuestras bibliotecas compartidas
(¡independientemente de si compartimos bibliotecas en un monorepo o
paquetes npm tradicionales!).

Esto también es válido para los puntos de entrada secundarios a los que
pertenecen nuestras bibliotecas compartidas.

_Pista:_ `@angular-architects/module-federation` viene con una función
auxiliar `shareAll` para compartir todas las dependencias definidas en
el `package.json` de tu proyecto:

```typescript
shared: {
  ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto'
  }),
}
```

Esto puede al menos aliviar el dolor en tales casos para la creación de
prototipos. Además, puedes hacer que `share` y `shareAll` incluyan todos
los puntos de entrada secundarios utilizando la propiedad
`includeSecondaries`:

```typescript
shared: share({
    "@angular/common": {
        singleton: true,
        strictVersion: true,
        requiredVersion: 'auto',
        includeSecondaries: {
            skip: ['@angular/http/testing']
        }
    },
    [...]
})
```

## NullInjectorError: Se espera un servicio en el Ámbito Padre (Ámbito Raíz)

Bien, la última sección fue un poco difícil. Por lo tanto, continuemos
con una más fácil. Quizás hayas visto un error como este:

```bash
ERROR Error: Uncaught (in promise): NullInjectorError: R3InjectorError(FlightsModule)[HttpClient -> HttpClient -> HttpClient -> HttpClient]:
  NullInjectorError: No provider for HttpClient!
NullInjectorError: R3InjectorError(FlightsModule)[HttpClient -> HttpClient -> HttpClient -> HttpClient]:
  NullInjectorError: No provider for HttpClient!
```

Parece que el Micro Frontend cargado `mfe1` no puede obtener el
`HttpClient`. Quizás incluso funcione cuando se ejecuta `mfe1` en modo
autónomo.

La razón de esto es muy probable que no estemos exponiendo todo el Micro
Frontend a través de Module Federation, sino solo partes seleccionadas,
por ejemplo, algunos Módulos de Funcionalidad (Feature Modules) con
Rutas Hijas (Child Routes):

![Módulos de Funcionalidad expuestos vía Module
Federation](images/shell-mfe1.png)

O para decirlo de otra manera: **NO** expongas el `AppModule` del Micro
Frontend. Sin embargo, si esperamos que el `AppModule` proporcione
algunos servicios globales como el `HttpClient`, también debemos hacerlo
en el `AppModule` del shell:

```typescript
// AppModule del Shell
@NgModule({
  imports: [
    [...]
    // Provee los servicios globales que tus micro frontends esperan:
    HttpClientModule,
  ],
  [...]
})
export class AppModule { }
```

## Varios Ámbitos Raíz

En un escenario muy simple, podrías intentar simplemente exponer el
`AppModule` del Micro Frontend.

![AppModule carga AppModule expuesto](images/appmod-appmod.png)

Como ves aquí, ahora, el `AppModule` del shell usa el `AppModule` del
Micro Frontend. Si usas el enrutador, obtendrás algunos problemas
iniciales porque necesitas llamar a `RouterModule.forRoot` para cada
`AppModule` (Módulo Raíz) por un lado, mientras que solo se te permite
llamarlo una vez por el otro.

Pero si solo compartiste componentes o servicios, esto podría funcionar
a primera vista. Sin embargo, el problema real aquí es que Angular crea
un ámbito raíz para cada módulo raíz. Por lo tanto, ahora tenemos dos
ámbitos raíz. Esto es algo que nadie espera.

Además, esto duplica todos los servicios compartidos registrados para el
ámbito raíz, por ejemplo, con `providedIn: 'root'`. Por lo tanto, tanto
el shell como el Micro Frontend tienen su propia copia de estos
servicios y esto es algo que nadie espera.

Una **solución simple pero también no preferible** es poner tus
servicios compartidos en el ámbito `platform`:

```typescript
// ¡No hagas esto en casa!
@Injectable({
  providedIn: "platform",
})
export class AuthLibService {}
```

Sin embargo, normalmente, este ámbito está destinado a ser utilizado por
elementos internos de Angular. Por lo tanto, la única solución limpia
aquí es no compartir tu `AppModule` sino solo módulos de funcionalidad
cargados de forma diferida (lazy feature modules). Al usar esta
práctica, aseguras (más o menos) que estos módulos de funcionalidad
funcionen de la misma manera cuando se cargan en el shell que cuando se
usan en modo autónomo.

## Diferentes Versiones de Angular

Otro obstáculo menos obvio con el que puedes encontrarte es este:

```json
node_modules_angular_core___ivy_ngcc___fesm2015_core_js.js:6850 ERROR Error: Uncaught (in promise): Error: inject() must be called from an injection context
Error: inject() must be called from an injection context
    at pr (node_modules_angular_core___ivy_ngcc___fesm2015_core_js.2fc3951af86e4bae0c59.js:1)
    at gr (node_modules_angular_core___ivy_ngcc___fesm2015_core_js.2fc3951af86e4bae0c59.js:1)
    at Object.e.ɵfac [as factory] (node_modules_angular_core___ivy_ngcc___fesm2015_core_js.2fc3951af86e4bae0c59.js:1)
    at R3Injector.hydrate (node_modules_angular_core___ivy_ngcc___fesm2015_core_js.js:11780)
    at R3Injector.get (node_modules_angular_core___ivy_ngcc___fesm2015_core_js.js:11600)
    at node_modules_angular_core___ivy_ngcc___fesm2015_core_js.js:11637
    at Set.forEach (<anonymous>)
    at R3Injector._resolveInjectorDefTypes (node_modules_angular_core___ivy_ngcc___fesm2015_core_js.js:11637)
    at new NgModuleRef$1 (node_modules_angular_core___ivy_ngcc___fesm2015_core_js.js:25462)
    at NgModuleFactory$1.create (node_modules_angular_core___ivy_ngcc___fesm2015_core_js.js:25516)
    at resolvePromise (polyfills.js:10658)
    at resolvePromise (polyfills.js:10610)
    at polyfills.js:10720
    at ZoneDelegate.invokeTask (polyfills.js:10247)
    at Object.onInvokeTask (node_modules_angular_core___ivy_ngcc___fesm2015_core_js.js:28753)
    at ZoneDelegate.invokeTask (polyfills.js:10246)
    at Zone.runTask (polyfills.js:10014)
    at drainMicroTaskQueue (polyfills.js:10427)
```

Con `inject() must be called from an injection context` Angular nos dice
que hay varias versiones de Angular cargadas a la vez.

Para provocar este error, ajusta el `webpack.config.js` de tu shell de
la siguiente manera:

```typescript
shared: share({
  "@angular/core": { requiredVersion: "auto" },
  "@angular/common": { requiredVersion: "auto" },
  "@angular/router": { requiredVersion: "auto" },
  "@angular/common/http": { requiredVersion: "auto" },
});
```

Ten en cuenta que estas bibliotecas ya no están configuradas para ser
singletons. Por lo tanto, Module Federation permite cargar varias
versiones de ellas si no hay una versión compatible más alta.

Además, debes saber que el `package.json` del shell apunta a Angular
12.0.0 _sin_ \^ o \~, por lo que necesitamos exactamente esta versión.

Si cargamos un Micro Frontend que usa una versión diferente de Angular,
Module Federation recurre a cargar Angular dos veces, una vez la versión
para el shell y otra vez la versión para el Micro Frontend. Puedes
probar esto actualizando el `app.routes.ts` del shell de la siguiente
manera:

```typescript
{
  path: 'flights',
  loadChildren: () => loadRemoteModule({
      remoteEntry:
        'https://brave-plant-03ca65b10.azurestaticapps.net/remoteEntry.js',
      remoteName: 'mfe1',
      exposedModule: './Module'
    })
    .then(m => m.AppModule)
},
```

Para facilitar un poco la exploración de esto, he proporcionado este
Micro Frontend a través de una Azure Static Web App que se encuentra en
la URL mostrada.

Si inicias tu shell y cargas el Micro Frontend, verás este error.

¿Qué podemos aprender aquí? Bueno, cuando se trata de tu framework
principal y con estado, por ejemplo, Angular, es una buena idea
definirlo como un singleton. He escrito algunos detalles sobre esto en
el capítulo sobre desajustes de versión.

Si realmente quieres mezclar y combinar diferentes versiones de Angular,
te tengo cubierto con otro capítulo de este libro. Sin embargo, ya sabes
lo que dicen: Cuidado con lo que deseas.

## Bonus: Múltiples Bundles

Terminemos este recorrido con algo que solo parece un problema pero que
está totalmente bien. Quizás ya hayas visto que a veces Module
Federation genera bundles duplicados con nombres ligeramente diferentes:

![Bundles duplicados generados por Module
Federation](images/duplicate-bundles.png)

La razón de esta duplicación es que Module Federation genera un bundle
**por biblioteca compartida por consumidor**. El consumidor en este
sentido es el proyecto federado (shell o Micro Frontend) o una
biblioteca compartida. Esto se hace para tener un bundle de respaldo
para resolver conflictos de versión. En general, esto tiene sentido,
mientras que en un caso tan específico, no aporta ninguna ventaja.

Sin embargo, si todo está configurado de la manera correcta, solo uno de
estos duplicados debería cargarse en tiempo de ejecución. Mientras este
sea el caso, no necesitas preocuparte por los duplicados.

## Conclusión

Module Federation es realmente inteligente cuando se trata de detectar
detalles automáticamente y compensar los desajustes de versión. Sin
embargo, solo puede ser tan bueno como los metadatos que recibe. Para
evitar salirse del camino, debes recordar lo siguiente:

- **requiredVersion**: Asigna la `requiredVersion` manualmente,
  especialmente cuando trabajas con puntos de entrada secundarios y
  cuando tienes advertencias de dependencias peer. El plugin
  `@angular-architects/module-federation` te cubre con su función
  auxiliar `share` que permite la opción `requiredVersion: 'auto'`, la
  cual toma el número de versión del `package.json` de tu proyecto.
- **Comparte también las dependencias de las bibliotecas
  compartidas**, especialmente si también se usan en otro lugar.
  Piensa también en los puntos de entrada secundarios.
- Haz que el **shell proporcione los servicios globales** que
  necesitan los Micro Frontends cargados, por ejemplo, el `HttpClient`
  a través del `HttpClientModule`.
- Nunca expongas el `AppModule` a través de Module Federation.
  Prefiere exponer módulos de Funcionalidad (Feature modules) cargados
  de forma diferida.
- Usa `singleton:true` para Angular y otras bibliotecas o frameworks
  con estado.
- No te preocupes por los **bundles duplicados** siempre y cuando solo
  uno de ellos se cargue en tiempo de ejecución.

# 12. Federación de Módulos con Componentes Independientes de Angular

La mayoría de los tutoriales sobre Federación de Módulos y Angular
exponen Micro Frontends en forma de NgModules. Sin embargo, con la
introducción de los Componentes Independientes (Standalone Components)
tendremos soluciones Angular ligeras que ya no utilizarán NgModules.
Esto lleva a la pregunta: ¿Cómo usar la Federación de Módulos en un
mundo sin NgModules?

En este capítulo, doy respuestas. Veremos tanto cómo exponer un conjunto
de rutas que apuntan a Componentes Independientes como cómo cargar un
Componente Independiente individual. Para esto, he actualizado mi
ejemplo para que funcione completamente sin NgModules:

![El ejemplo fue actualizado para usar completamente Componentes
Independientes](images/new-result.png)

> [Código
> fuente](https://github.com/manfredsteyer/module-federation-plugin-example/tree/standalone-solution)
> (rama: standalone-solution).

## Configuraciones del Enrutador vs. Componentes Independientes {#configuraciones-del-enrutador-vs-componentes-independientes}

En general, podríamos cargar directamente Componentes Independientes
mediante la Federación de Módulos. Si bien una integración tan detallada
(fine-grained) parece adecuada para sistemas de plugins, los Micro
Frontends normalmente son más generales (coarse-grained). Es habitual
que representen un dominio de negocio completo que, en general, contiene
varios casos de uso que pertenecen juntos.

Curiosamente, los Componentes Independientes que pertenecen juntos se
pueden agrupar usando una configuración del enrutador. Por lo tanto,
podemos exponer y cargar de forma diferida (lazy load) dichas
configuraciones del enrutador.

## Situación Inicial: Nuestro Micro Frontend

El Micro Frontend utilizado aquí es una aplicación Angular simple que
inicializa un Componente Independiente:

```typescript
// projects/mfe1/src/bootstrap.ts

import { environment } from "./environments/environment";
import { enableProdMode, importProvidersFrom } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { RouterModule } from "@angular/router";
import { MFE1_ROUTES } from "./app/mfe1.routes";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(RouterModule.forRoot(MFE1_ROUTES))],
});
```

Al inicializar, la aplicación registra su configuración de enrutador
`MFE1_ROUTES` a través de proveedores de servicios. Esta configuración
de enrutador apunta a varios Componentes Independientes:

```typescript
// projects/mfe1/src/app/mfe1.routes.ts

import { Routes } from "@angular/router";
import { FlightSearchComponent } from "./booking/flight-search/flight-search.component";
import { PassengerSearchComponent } from "./booking/passenger-search/passenger-search.component";
import { HomeComponent } from "./home/home.component";

export const MFE1_ROUTES: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full",
  },
  {
    path: "flight-search",
    component: FlightSearchComponent,
  },
  {
    path: "passenger-search",
    component: PassengerSearchComponent,
  },
];
```

Aquí, `importProvidersFrom` cierra la brecha entre el `RouterModule`
existente y el mundo de los Componentes Independientes. Como reemplazo
para esto, las futuras versiones del enrutador expondrán una función
para configurar los proveedores del enrutador. Según el CFP (Call for
Proposals) subyacente, esta función se llamará `configureRouter`.

El shell (o aplicación contenedora) utilizado aquí es simplemente una
aplicación Angular ordinaria. Usando la carga diferida (lazy loading),
haremos que haga referencia al Micro Frontend en tiempo de ejecución.

## Activando la Federación de Módulos

Para comenzar, instalemos el plugin de Federación de Módulos y activemos
la Federación de Módulos para el Micro Frontend:

```bash
npm i @angular-architects/module-federation

ng g @angular-architects/module-federation:init \
    --project mfe1 --port 4201 --type remote
```

Este comando genera un `webpack.config.js`. Para nuestro propósito,
tenemos que modificar la sección `exposes` de la siguiente manera:

```javascript
const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfe1",

  exposes: {
    // Forma preferida: exponer rutas generales (coarse-grained)
    "./routes": "./projects/mfe1/src/app/mfe1.routes.ts",

    // Técnicamente posible, pero no preferido para Micro Frontends:
    // Exponer componentes detallados (fine-grained)
    "./Component": "./projects/mfe1/src/app/my-tickets/my-tickets.component.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
```

Esta configuración expone tanto la configuración del enrutador del Micro
Frontend (que apunta a Componentes Independientes) como un Componente
Independiente.

## Shell Estático

Ahora, activemos también la Federación de Módulos para el shell. En esta
sección, me centro en la Federación Estática. Esto significa que vamos a
mapear las rutas que apuntan a nuestros Micro Frontends en el
`webpack.config.js`.

> La siguiente sección muestra cómo cambiar a la Federación Dinámica,
> donde podemos definir los datos clave para cargar un Micro Frontend en
> tiempo de ejecución.

Para habilitar la Federación de Módulos para el shell, ejecutemos este
comando:

```bash
ng g @angular-architects/module-federation:init \
    --project shell --port 4200 --type host
```

El `webpack.config.js` generado para el shell necesita apuntar al Micro
Frontend:

```javascript
const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  remotes: {
    mfe1: "http://localhost:4201/remoteEntry.js",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
```

Como vamos con federación estática, también necesitamos tipos (typings)
para todas las rutas configuradas (módulos EcmaScript) que hacen
referencia a Micro Frontends:

```typescript
// projects/shell/src/decl.d.ts

declare module "mfe1/*";
```

Ahora, todo lo que se necesita es una ruta de carga diferida (lazy
route) en el shell, que apunte a las rutas y al Componente Independiente
expuesto por el Micro Frontend:

```javascript
// projects/shell/src/app/app.routes.ts

import { Routes } from '@angular/router';
import { HomeComponent }
    from './home/home.component';
import { NotFoundComponent }
    from './not-found/not-found.component';
import { ProgrammaticLoadingComponent }
    from './programmatic-loading/programmatic-loading.component';

export const APP_ROUTES: Routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    },

    {
      path: 'booking',
      loadChildren: () => import('mfe1/routes').then(m => m.MFE1_ROUTES) // Corregido a MFE1_ROUTES según el ejemplo anterior
    },

    {
      path: 'my-tickets',
      loadComponent: () =>
          import('mfe1/Component').then(m => m.MyTicketsComponent)
    },

    [...]

    {
      path: '**',
      component: NotFoundComponent
    }
];
```

## Alternativa: Shell Dinámico

Ahora, pasemos a la federación dinámica. Federación Dinámica significa
que no queremos definir nuestro remoto por adelantado en el
`webpack.config.js` del shell. Por lo tanto, comentemos la sección
`remotes` allí:

```javascript
const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  // remotes: {
  //   "mfe1": "http://localhost:4201/remoteEntry.js",
  // },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
```

Además, en la configuración del enrutador del shell, necesitamos cambiar
los `imports` dinámicos usados anteriormente por llamadas a
`loadRemoteModule`:

```typescript
// projects/shell/src/app/app.routes.ts

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProgrammaticLoadingComponent }
    from './programmatic-loading/programmatic-loading.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const APP_ROUTES: Routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    },
    {
      path: 'booking',
      loadChildren: () =>
        loadRemoteModule({
          type: 'module',
          remoteEntry: 'http://localhost:4201/remoteEntry.js',
          exposedModule: './routes'
        })
        .then(m => m.MFE1_ROUTES)
    },
    {
      path: 'my-tickets',
      loadComponent: () =>
        loadRemoteModule({
          type: 'module',
          remoteEntry: 'http://localhost:4201/remoteEntry.js',
          exposedModule: './Component'
        })
        .then(m => m.MyTicketsComponent)
    },
    [...]
    {
      path: '**',
      component: NotFoundComponent
    }
];
```

La función `loadRemoteModule` toma todos los datos clave que la
Federación de Módulos necesita para cargar el remoto. Estos datos clave
son solo varias cadenas de texto, por lo tanto, puedes cargarlos desde
literalmente cualquier lugar.

## Bonus: Carga Programática

Si bien la mayoría de las veces cargaremos Micro Frontends (remotos) a
través del enrutador, también podemos cargar componentes expuestos de
forma programática. Para esto, necesitamos un marcador de posición
(placeholder) marcado con una variable de plantilla para el componente
en cuestión:

```html
<h1>Carga Programática</h1>

<div>
  <button (click)="load()">¡Cargar!</button>
</div>

<div #placeHolder></div>
```

Obtenemos el `ViewContainer` de este marcador de posición a través del
decorador `ViewChild`:

```typescript
// projects/shell/src/app/programmatic-loading/programmatic-loading.component.ts

import { Component, OnInit, ViewChild, ViewContainerRef } from "@angular/core";

@Component({
  selector: "app-programmatic-loading",
  standalone: true,
  templateUrl: "./programmatic-loading.component.html",
  styleUrls: ["./programmatic-loading.component.css"],
})
export class ProgrammaticLoadingComponent implements OnInit {
  @ViewChild("placeHolder", { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;

  constructor() {}

  ngOnInit(): void {}

  async load(): Promise<void> {
    const m = await import("mfe1/Component");
    const ref = this.viewContainer.createComponent(m.MyTicketsComponent);
    // const compInstance = ref.instance;
    // compInstance.ngOnInit()
  }
}
```

Este ejemplo muestra una solución para la Federación Estática. Por lo
tanto, se utiliza un `import` dinámico para obtener el Micro Frontend.

Después de importar el componente remoto, podemos instanciarlo usando el
método `createComponent` del `ViewContainer`. La referencia devuelta
(ref) apunta a la instancia del componente con su propiedad `instance`.
La instancia permite interactuar con el componente, por ejemplo, para
llamar a métodos, establecer propiedades o configurar manejadores de
eventos.

Si quisiéramos cambiar a Federación Dinámica, usaríamos nuevamente
`loadRemoteModule` en lugar del `import` dinámico:

```typescript
async load(): Promise<void> {

    const m = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './Component'
    });

    const ref = this.viewContainer.createComponent(m.MyTicketsComponent);
    // const compInstance = ref.instance;
}
```

# 12a. De Module Federation a esbuild y Native Federation

A partir de la versión 17, la CLI de Angular utiliza `esbuild` en lugar
de `webpack` para los nuevos proyectos. Como resultado, tanto `ng serve`
como `ng build` se ejecutan notablemente más rápido.

Sin embargo, cambiar a `esbuild` presenta un desafío para los Micro
Frontends: el popular Module Federation viene con webpack y no está
disponible para `esbuild`. Para preservar el modelo mental probado de
webpack, iniciamos el proyecto Native Federation. Este utiliza
consecuentemente estándares web y, por lo tanto, es una solución a largo
plazo. Si bien se puede usar con cualquier empaquetador (bundler), la
implementación de referencia actualmente delega en el empaquetador
esbuild de la CLI.

Su superficie de API y archivos de configuración se asemejan a los de
Module Federation. Por lo tanto, todo lo que leíste en los capítulos
anteriores funciona de la misma manera con Native Federation.

[Código
Fuente](https://github.com/manfredsteyer/module-federation-plugin-example.git)
(ver las ramas `nf-standalone-solution` y `nf-standalone-router-config`)

## Native Federation con esbuild

Para poder utilizar el modelo mental probado de Module Federation
independientemente de webpack, se creó el proyecto [Native
Federation](https://www.npmjs.com/package/@angular-architects/native-federation).
Ofrece las mismas opciones y configuración que Module Federation, pero
funciona con todas las herramientas de compilación posibles. También
utiliza tecnologías nativas del navegador como los módulos EcmaScript y
los [Mapas de Importación (Import
Maps)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap).
Esta medida tiene como objetivo garantizar el soporte a largo plazo de
los navegadores y también permitir implementaciones alternativas.

Native Federation se invoca antes y después del empaquetador (bundler)
real en el proceso de compilación. Es por eso que no importa qué
empaquetador se utilice realmente:

![Native Federation extiende los scripts de compilación
existentes](images/native-federation.png)

Dado que Native Federation también necesita crear algunos paquetes
(bundles), delega en el empaquetador de elección. Los empaquetadores
individuales se conectan a través de adaptadores intercambiables.

La siguiente imagen muestra un ejemplo construido con Angular, esbuild y
Native Federation:

![Shell con micro frontend desplegado por separado](images/example.png)

El shell que se muestra aquí ha cargado un Micro Frontend desarrollado y
desplegado por separado en su espacio de trabajo utilizando Native
Federation.

Aunque tanto el shell como el micro frontend se basan en Angular, Native
Federation **solo cargó Angular una vez.** Para que esto sea posible,
Native Federation, siguiendo las ideas de Module Federation, coloca los
remotos y las bibliotecas que se compartirán en sus propios paquetes.
Para esto, utiliza paquetes EcmaScript conformes a estándares que
también podrían ser creados por otras herramientas. La información sobre
estos paquetes se coloca en archivos de metadatos:

![Native Federation en tiempo de
ejecución](images/native-federation-runtime.png)

Estos archivos de metadatos son la base para un Mapa de Importación
(Import Map) conforme a estándares que informa al navegador desde dónde
se deben cargar qué paquetes.

## Native Federation: Configurando un Micro Frontend

Para su uso con Angular y la CLI, Native Federation ofrece un esquema
`ng-add`. La siguiente instrucción agrega Native Federation al proyecto
Angular `mfe1` y lo configura como un `remote` que actúa como un Micro
Frontend:

```bash
ng add @angular-architects/native-federation --project mfe1 --port 4201 --type remote
```

El esquema `ng-add` también crea un `federation.config.js` que controla
el comportamiento de Native Federation:

```javascript
const {
  withNativeFederation,
  shareAll,
} = require("@angular-architects/native-federation/config");

module.exports = withNativeFederation({
  name: "mfe1",

  exposes: {
    "./Component": "./projects/mfe1/src/app/app.component.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },

  skip: [
    "rxjs/ajax",
    "rxjs/fetch",
    "rxjs/testing",
    "rxjs/webSocket",
    // Agrega otros paquetes que no necesites en tiempo de ejecución
  ],
});
```

La propiedad `name` define un nombre único para el remoto. La sección
`exposes` especifica qué archivos debe exponer el remoto al anfitrión
(host). Aunque estos archivos se compilan y despliegan junto con el
remoto, pueden cargarse en el anfitrión en tiempo de ejecución. Dado que
al anfitrión no le importan las rutas completas de los archivos,
`exposes` las mapea a nombres más cortos.

En el caso mostrado, el remoto simplemente publica su `AppComponent` por
simplicidad. Sin embargo, cualquier componente del sistema podría
publicarse en su lugar, por ejemplo, configuraciones de rutas perezosas
(lazy routing) que referencian múltiples componentes de una
funcionalidad.

Bajo `shared`, la configuración lista todas las dependencias que el
remoto quiere compartir con otros remotos y el anfitrión. Para evitar
una lista exhaustiva de todos los paquetes npm requeridos, se utiliza la
función de ayuda `shareAll`. Incluye todos los paquetes que están en el
`package.json` bajo `dependencies`. Los detalles sobre los parámetros
pasados a _shareAll_ se pueden encontrar en uno de los capítulos
anteriores sobre Module Federation.

Los paquetes que `shareAll` no debería compartir se ingresan en `skip`.
Esto puede mejorar ligeramente el rendimiento de compilación e inicio de
la aplicación. Además, los paquetes que están destinados para su uso con
**NodeJS deben agregarse a `skip`**, ya que no pueden compilarse para su
uso en el navegador.

## Native Federation: Configurando un Shell

El anfitrión (host) que actúa como un Shell de Micro Frontend también se
puede configurar con `ng add`:

```bash
ng add @angular-architects/native-federation --project shell --port 4200 --type dynamic-host
```

El tipo `dynamic-host` indica que los remotos a cargar se definen en un
archivo de configuración:

```json
{
  "mfe1": "http://localhost:4201/remoteEntry.json"
}
```

Este `federation.manifest.json` se genera en la carpeta `assets` del
anfitrión por defecto. Al tratarlo como un activo (asset), el manifiesto
puede intercambiarse durante el despliegue. Por lo tanto, la aplicación
puede adaptarse al entorno respectivo.

El manifiesto mapea los nombres de los remotos a sus metadatos, que
Native Federation coloca en el archivo `remoteEntry.json` durante la
compilación. Incluso si `ng add` genera el manifiesto, debe revisarse
para ajustar los puertos si es necesario o para eliminar aplicaciones
que no son remotos.

El comando `ng add` también genera un `federation.config.js` para los
anfitriones:

```javascript
const {
  withNativeFederation,
  shareAll,
} = require("@angular-architects/native-federation/config");

module.exports = withNativeFederation({
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },

  skip: [
    "rxjs/ajax",
    "rxjs/fetch",
    "rxjs/testing",
    "rxjs/webSocket",
    // Agrega otros paquetes que no necesites en tiempo de ejecución
  ],
});
```

La entrada `exposes` conocida de la configuración del remoto no se
genera para los anfitriones porque los anfitriones típicamente no
publican archivos para otros anfitriones. Sin embargo, si deseas
configurar un anfitrión que también actúe como un remoto para otros
anfitriones, no hay nada de malo en agregar esta entrada.

El archivo `main.ts`, también modificado por `ng add`, inicializa Native
Federation usando el manifiesto:

```typescript
import { initFederation } from "@angular-architects/native-federation";

initFederation("/assets/federation.manifest.json")
  .catch((err) => console.error(err))
  .then((_) => import("./bootstrap"))
  .catch((err) => console.error(err));
```

La función `initFederation` lee los metadatos de cada remoto y genera un
Mapa de Importación (Import Map) utilizado por el navegador para cargar
paquetes compartidos y módulos expuestos. El flujo del programa luego
delega al `bootstrap.ts`, que inicia la solución Angular con las
instrucciones habituales (`bootstrapApplication` o `bootstrapModule`).

Todos los archivos considerados hasta ahora fueron configurados usando
`ng add`. Para cargar una parte del programa publicada por un remoto, el
anfitrión debe expandirse para incluir la carga perezosa (lazy loading):

```typescript
[…]
import { loadRemoteModule } from '@angular-architects/native-federation';

export const APP_ROUTES: Routes = [
  […],
  {
    path: 'flights',
    loadComponent: () =>
      loadRemoteModule('mfe1', './Component').then((m) => m.AppComponent),
  },
  […]
];
```

La ruta perezosa utiliza la función de ayuda `loadRemoteModule` para
cargar el `AppComponent` desde el remoto. Toma el nombre del remoto del
manifiesto (`mfe1`) y el nombre bajo el cual el remoto publica el
archivo deseado (`./Component`).

## Exponiendo una Configuración de Enrutador (Router Config)

Exponer solo un componente a través de Native Federation es un poco
detallado (fine-grained). Muy a menudo, se desea exponer una
funcionalidad completa que consta de varios componentes.
Afortunadamente, podemos exponer todo tipo de construcciones
TypeScript/EcmaScript. En el caso de funcionalidades de grano grueso
(coarse-grained), podríamos exponer un NgModule con subrutas o, si
optamos por Componentes Autónomos (Standalone Components), simplemente
una configuración de enrutamiento. Aquí, este último es el caso:

```typescript
import { Routes } from "@angular/router";
import { FlightComponent } from "./flight/flight.component";
import { HolidayPackagesComponent } from "./holiday-packages/holiday-packages.component";

export const APP_ROUTES: Routes = [
  {
    path: "",
    redirectTo: "flights",
    pathMatch: "full",
  },
  {
    path: "flight-search",
    component: FlightComponent,
  },
  {
    path: "holiday-packages",
    component: HolidayPackagesComponent,
  },
];
```

Esta configuración de enrutamiento debe agregarse a la sección `exposes`
en el `federation.config.js` del Micro Frontend:

```typescript
const {
  withNativeFederation,
  shareAll,
} = require("@angular-architects/native-federation/config");

module.exports = withNativeFederation({
  name: "mfe1",

  exposes: {
    "./Component": "./projects/mfe1/src/app/app.component.ts",

    // Agrega esta línea:
    "./routes": "././projects/mfe1/src/app/app.routes.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },

  skip: [
    "rxjs/ajax",
    "rxjs/fetch",
    "rxjs/testing",
    "rxjs/webSocket",
    // Agrega otros paquetes que no necesites en tiempo de ejecución
  ],
});
```

En el shell, puedes enrutar directamente a esta configuración de
enrutamiento:

```typescript
[...]
import { loadRemoteModule } from '@angular-architects/native-federation';

export const APP_ROUTES: Routes = [
  [...]

  {
    path: 'flights',
    // ¡¡¡ loadChildreas en lugar de loadComponent !!!
    // Nota del traductor: El original dice "loadChildreas", lo cual es un error tipográfico. Debería ser "loadChildren".
    // Se mantiene el error tipográfico en el comentario para fidelidad, pero se usa "loadChildren" en el código.
    loadChildren: () => // Corregido a loadChildren
      loadRemoteModule('mfe1', './routes').then((m) => m.APP_ROUTES),
  },

  [...]
];
```

Además, necesitamos ajustar las rutas en la navegación del shell:

```html
<ul>
  <li><img src="../assets/angular.png" width="50" /></li>
  <li><a routerLink="/">Home</a></li>
  <li><a routerLink="/flights/flight-search">Flights</a></li>
  <li><a routerLink="/flights/holiday-packages">Holidays</a></li>
</ul>

<router-outlet></router-outlet>
```

## Comunicación entre Micro Frontends

La comunicación entre Micro Frontends también se puede habilitar a
través de bibliotecas compartidas. Me gustaría decir de antemano que
esta opción solo debe usarse con precaución: las arquitecturas de Micro
Frontend están destinadas a desacoplar los frontends individuales entre
sí. Sin embargo, si un frontend espera información de otros frontends,
se logra exactamente lo contrario. La mayoría de las soluciones que he
visto solo comparten un puñado de información contextual. Los ejemplos
incluyen el nombre de usuario actual, el cliente actual y algunos
filtros globales.

Para compartir información, primero necesitamos una biblioteca
compartida. Esta biblioteca puede ser un paquete npm desarrollado por
separado o una biblioteca dentro del proyecto Angular actual. Esta
última se puede generar con:

```bash
ng g lib auth
```

El nombre de la biblioteca en este caso se establece como `auth`. Para
compartir datos, esta biblioteca recibe un servicio con estado (stateful
service). En aras de la brevedad, estoy usando el servicio con estado
más simple que se me ocurre:

```typescript
@Injectable({
  providedIn: "root",
})
export class AuthService {
  userName = "";
}
```

En este escenario muy simple, el servicio se utiliza como una pizarra:
un Micro Frontend escribe información en el servicio y otro lee la
información. Sin embargo, una forma algo más conveniente de compartir
información sería utilizar un mecanismo de publicación/suscripción a
través del cual las partes interesadas puedan ser informadas sobre los
cambios de valor. Esta idea se puede realizar, por ejemplo, utilizando
subjects de RxJS.

Si se utilizan bibliotecas internas de Monorepo, deben hacerse
accesibles mediante mapeo de rutas (path mapping) en el `tsconfig.json`:

```json
"compilerOptions": {
    "paths": {
      "@demo/auth": [
        "projects/auth/src/public-api.ts"
      ]
     },
     […]
}
```

Ten en cuenta que estoy apuntando a `public-api.ts` en el **código
fuente de la biblioteca (lib).** Esta estrategia también es utilizada
por Nx, pero la CLI apunta a la carpeta `dist` por defecto. Por lo
tanto, en este último caso, necesitas actualizar esta entrada
manualmente.

También se debe asegurar que todos los interlocutores de la comunicación
utilicen el mismo mapeo de rutas.

## Conclusión

El nuevo compilador esbuild proporciona mejoras tremendas en el
rendimiento de la compilación. Sin embargo, el popular Module Federation
está actualmente ligado a webpack. Native Federation proporciona el
mismo modelo mental y se implementa de una manera agnóstica a las
herramientas. Por lo tanto, funciona con todos los empaquetadores
posibles. Además, utiliza estándares web como los módulos EcmaScript y
los Mapas de Importación. Esto también permite diferentes
implementaciones y lo convierte en una solución confiable a largo plazo.

# 12b. El nuevo Store de Señales (Signal Store) de NGRX para Angular: 3 + n Sabores

La mayoría de las aplicaciones Angular necesitan preservar algún estado
para que los mismos datos no tengan que ser recuperados una y otra vez
desde el backend. Ejemplos son la información que se necesita al cambiar
de una vista de detalles a una vista de lista o la información
recopilada al hacer clic a través de un asistente.

Hasta ahora, la solución de gestión de estado por defecto en el mundo de
Angular ha sido el Store NGRX basado en Redux. Desde el advenimiento de
las Señales (Signals) en Angular, el equipo de NGRX ha estado trabajando
en un nuevo store que aprovecha este nuevo bloque de construcción
reactivo. Comparado con el Store NGRX tradicional, el Signal Store es
ligero, fácil de usar y altamente extensible.

Este capítulo muestra cómo incorporarlo en tu aplicación. Para ello,
presenta 3+1 sabores diferentes de usarlo.

[Código Fuente](https://github.com/manfredsteyer/standalone-example-cli)

## Obteniendo el Paquete

Para instalar el Signal Store, solo necesitas agregar el paquete
`@ngrx/signals` a tu aplicación:

```bash
npm i @ngrx/signals
```

## Sabor 1: Ligero con signalState

_Rama:_ `arc-signal-store`

Una forma muy ligera de gestionar Señales con el Signal Store es su
función `signalState` (no confundir con la función `signalStore`). Crea
un contenedor simple para gestionar el estado pasado usando Señales.
Este contenedor está representado por el tipo `SignalState`:

```typescript
@Injectable({ providedIn: 'root' })

import { signalState } from '@ngrx/signals';

[...]

export class FlightBookingFacade {

    [...]

    private state = signalState({
        from: 'Paris',
        to: 'London',
        preferences: {
          directConnection: false,
          maxPrice: 350,
        },
        flights: [] as Flight[],
        basket: {} as Record<number, boolean>,
    });

    // obtener señales de solo lectura
    flights = this.state.flights;
    from = this.state.from;
    to = this.state.to;
    basket = this.state.basket;

  [...]
}
```

Cada propiedad de estado de nivel superior obtiene su propia Señal.
Estas propiedades se recuperan como Señales de solo lectura, asegurando
una separación entre la lectura y la escritura: los consumidores que
usan las Señales solo pueden leer sus valores. Para actualizar el
estado, el servicio que encapsula el estado proporciona métodos (ver más
abajo). Esto asegura que el estado solo pueda actualizarse de una manera
bien definida.

Además, los objetos anidados como el proporcionado por la propiedad
`preferences` anterior resultan en señales anidadas. Por lo tanto, se
puede recuperar todo el objeto `preferences` como una Señal, pero
también sus propiedades:

```typescript
const ps = this.state.preferences();
const direct = this.state.preferences.directConnection();
```

Actualmente, esto no está implementado para arrays, ya que los
Componentes de Señal previstos por Angular resolverán este caso de uso
creando una Señal para cada elemento iterado.

### Seleccionando y Computando Señales

Como el Signal Store proporciona el estado como Señales, podemos usar
directamente la función `computed` de Angular:

```typescript
selected = computed(() => this.flights().filter((f) => this.basket()[f.id]));
```

Aquí, `computed` cumple el mismo propósito que los Selectores en el
Store NGRX basado en Redux: nos permite calcular diferentes
representaciones del estado para diferentes casos de uso. Estos así
llamados Modelos de Vista (View Models) solo se recalculan cuando al
menos una de las señales subyacentes cambia.

### Actualizando el Estado

Para actualizar el `SignalState`, Signal Store nos proporciona una
función `patchState`:

```typescript
import { patchState } from '@ngrx/signals';

[...]

updateCriteria(from: string, to: string): void {
  patchState(this.state, { from, to })
}
```

Aquí, pasamos el contenedor de estado y un estado parcial. Como
alternativa, se puede pasar una función que tome el estado actual y lo
transforme en el nuevo estado:

```typescript
updateBasket(id: number, selected: boolean): void {
  patchState(this.state, state => ({
    basket: {
      ...state.basket,
      [id]: selected,
    },
  }));
}
```

## Efectos Secundarios

Además de actualizar el estado, los métodos también pueden desencadenar
efectos secundarios como cargar y guardar objetos:

```typescript
async load() {
  if (!this.from() || !this.to()) return;

  const flights = await this.flightService.findPromise(
    this.from(),
    this.to()
  );

  patchState(this.state, { flights });
}
```

### Desacoplando la Intención de la Ejecución

A veces, quien llama a `patchState` solo sabe que algún estado necesita
ser actualizado sin saber dónde se encuentra. Para tales casos, puedes
proporcionar Actualizadores (Updaters). Los Actualizadores son solo
funciones que toman un estado actual y devuelven una versión actualizada
del mismo:

```typescript
type BasketSlice = { basket: Record<number, boolean> };
type BasketUpdateter = (state: BasketSlice) => BasketSlice;

export function updateBasket(
  flightId: number,
  selected: boolean
): BasketUpdateter {
  return (state) => ({
    ...state,
    basket: {
      ...state.basket,
      [flightId]: selected,
    },
  });
}
```

También está bien devolver solo un estado parcial. Se aplicará sobre el
estado actual:

```typescript
type BasketSlice = { basket: Record<number, boolean> };
type BasketUpdateter = (state: BasketSlice) => BasketSlice;

export function updateBasket(
  flightId: number,
  selected: boolean
): BasketUpdateter {
  return (state) => ({
    basket: {
      ...state.basket,
      [flightId]: selected,
    },
  });
}
```

Si no necesitas proyectar el estado actual, devolver solo un estado
parcial también está bien. En este caso, puedes omitir la función
interna:

```typescript
export function updateFlights(flights: Flight[]) {
  return { flights };
}
```

Los Actualizadores pueden definirse en el \"territorio soberano\" del
Store (de `signalState`). Para el consumidor, es solo una caja negra:

```typescript
patchState(updateBasket(id, selected));
```

Pasar un Actualizador a `patchState` expresa una intención. Esto es
similar a despachar una Acción en el store NGRX clásico. Sin embargo, a
diferencia de Redux, no hay eventos involucrados, y no podemos evitar
que quien llama pase directamente sus propios Actualizadores. Por esta
última razón, estoy ocultando el `SignalStore` detrás de una fachada.

## Sabor 2: Potente con signalStore

_Rama:_ `arc-signal-store-2`

Similar a `signalState`, la función `signalStore` crea un contenedor que
gestiona el estado con Señales. Sin embargo, ahora, este contenedor es
un Store completo que no solo viene con Señales de estado, sino también
con Señales computadas, así como métodos para actualizar el estado y
para desencadenar efectos secundarios. Por lo tanto, hay menos necesidad
de crear una fachada a mano, como se mostró anteriormente.

Técnicamente, el Store es un servicio de Angular que está compuesto por
varias características preexistentes:

```typescript
export const FlightBookingStore = signalStore(
  { providedIn: 'root' },
  withState({
    from: 'Paris',
    to: 'London',
    initialized: false,
    flights: [] as Flight[],
    basket: {} as Record<number, boolean>,
  }),

  // Activando características adicionales
  withComputed([...]),
  withMethods([...]),
  withHooks([...]),
)
```

En este caso, el servicio también está registrado en el ámbito raíz. Al
omitir `{ providedIn: 'root' }`, se necesita registrar el servicio a
mano, p. ej., proporcionándolo al arrancar la aplicación, dentro de una
configuración de enrutador, o a nivel de componente.

### Seleccionando y Computando Señales

La característica `withComputed` toma el store con sus Señales de estado
y define un objeto con señales calculadas:

```typescript
withComputed((store) => ({
  selected: computed(() => store.flights().filter((f) => store.basket()[f.id])),
  criteria: computed(() => ({ from: store.from(), to: store.to() })),
})),
```

Las señales computadas devueltas se convierten en parte del store. Una
versión más compacta podría implicar desestructurar directamente el
store pasado:

```typescript
withComputed(({ flights, basket, from, to }) => ({
  selected: selectSignal(() => flights().filter((f) => basket()[f.id])),
  criteria: selectSignal(() => ({ from: from(), to: to() })),
})),
```

### Métodos para Actualizar Estado y Efectos Secundarios

Similar a `withComputed`, `withMethods` también toma el store y devuelve
un objeto con métodos:

```typescript
withMethods((state) => {
  const { basket, flights, from, to, initialized } = state;
  const flightService = inject(FlightService);

  return {
    updateCriteria: (from: string, to: string) => {
      patchState(state, { from, to });
    },
    updateBasket: (flightId: number, selected: boolean) => {
      patchState(state, {
        basket: {
          ...basket(),
          [flightId]: selected,
        },
      });
    },
    delay: () => {
      const currentFlights = flights();
      const flight = currentFlights[0];

      const date = addMinutes(flight.date, 15);
      const updFlight = { ...flight, date };
      const updFlights = [updFlight, ...currentFlights.slice(1)];

      patchState(state, { flights: updFlights });
    },
    load: async () => {
      if (!from() || !to()) return;
      const flights = await flightService.findPromise(from(), to());
      patchState(state, { flights });
    }
  };
}),
```

`withMethods` se ejecuta en un contexto de inyección y, por lo tanto,
puede usar `inject` para obtener servicios. Después de que `withMethods`
se haya ejecutado, los métodos recuperados se agregan al store.

### Consumiendo el Store

Desde la perspectiva de quien llama, el store se parece mucho a la
fachada mostrada anteriormente. Podemos inyectarlo en un componente
consumidor:

```typescript
@Component([...])
export class FlightSearchComponent {
  private store = inject(FlightBookingStore);

  from = this.store.from;
  to = this.store.to;
  basket = this.store.basket;
  flights = this.store.flights;
  selected = this.store.selected;

  async search() {
    this.store.load();
  }

  delay(): void {
    this.store.delay();
  }

  updateCriteria(from: string, to: string): void {
    this.store.updateCriteria(from, to);
  }

  updateBasket(id: number, selected: boolean): void {
    this.store.updateBasket(id, selected);
  }
}
```

### Hooks

La función `withHooks` proporciona otra característica que permite
configurar hooks de ciclo de vida para que se ejecuten cuando el store
se inicializa o se destruye:

```typescript
withHooks({
  onInit({ load }) {
    load()
  },
  onDestroy({ flights }) {
    console.log('flights are destroyed now', flights());
  },
}),
```

Ambos hooks reciben el store. Una vez más, usando desestructuración,
puedes enfocarte en un subconjunto de los miembros del store.

### rxMethod

_Rama:_ `arc-signal-store-rx`

Aunque las Señales son fáciles de usar, no son un reemplazo completo
para RxJS. Para aprovechar RxJS y sus potentes operadores, el Signal
Store proporciona un punto de entrada secundario
`@ngrx/signals/rxjs-interop`, que contiene una función `rxMethod<T>`.
Permite trabajar con un Observable que representa efectos secundarios
que se ejecutan automáticamente cuando cambian valores específicos:

```typescript
import { rxMethod } from '@ngrx/signals/rxjs-interop';

[...]


withMethods(({ $update, basket, flights, from, to, initialized }) => {
  const flightService = inject(FlightService);

  return {
    [...]
    connectCriteria: rxMethod<Criteria>((c$) => c$.pipe(
      filter(c => c.from.length >= 3 && c.to.length >= 3),
      debounceTime(300),
      switchMap((c) => flightService.find(c.from, c.to)),
      tap(flights => patchState(state, { flights }))
    ))
  }
});
```

El parámetro de tipo `T` define el tipo sobre el que trabaja `rxMethod`.
Mientras que `rxMethod` recibe un `Observable<T>`, quien llama también
puede pasar un `Observable<T>`, una `Signal<T>`, o `T` directamente. En
los dos últimos casos, los valores pasados se convierten en un
Observable.

Después de definir `rxMethod`, en otro lugar de la aplicación, p. ej.,
en un hook o un método regular, puedes llamar a este efecto:

```typescript
withHooks({
  onInit({ loadBy, criteria }) {
    connectCriteria(criteria);
  },
});
```

Aquí, se pasa la Señal `criteria` \-- una señal computada \--. Cada vez
que esta Señal cambia, el efecto dentro de `connectCriteria` se vuelve a
ejecutar.

## Características Personalizadas - n Sabores Adicionales

_Rama:_ `arc-signal-store-custom`

Además de configurar el Store con características incorporadas,
cualquiera puede escribir sus propias características para automatizar
tareas repetitivas. El playground proporcionado por [Marko
Stanimirović](https://twitter.com/MarkoStDev), el contribuidor de NGRX
detrás del Signal Store, contiene varios ejemplos de tales
características.

Uno de los ejemplos encontrados en este repositorio es una
[característica
CallState](https://github.com/markostanimirovic/ngrx-signal-store-playground/blob/main/src/app/shared/call-state.feature.ts)
que define una propiedad de estado que informa sobre el estado de la
llamada HTTP actual:

```typescript
export type CallState = "init" | "loading" | "loaded" | { error: string };
```

En esta sección, estoy usando este ejemplo para explicar cómo
proporcionar características personalizadas.

### Definiendo Características Personalizadas

Una característica generalmente se crea llamando a `signalStoreFeature`.
Esta función construye una nueva característica sobre las existentes.

```typescript
// Tomado de: https://github.com/markostanimirovic/ngrx-signal-store-playground/blob/main/src/app/shared/call-state.feature.ts

import { computed } from "@angular/core";
import { signalStoreFeature, withComputed, withState } from "@ngrx/signals";

export type CallState = "init" | "loading" | "loaded" | { error: string };

export function withCallState() {
  return signalStoreFeature(
    withState<{ callState: CallState }>({ callState: "init" }),
    withComputed(({ callState }) => ({
      loading: computed(() => callState() === "loading"),
      loaded: computed(() => callState() === "loaded"),
      error: computed(() => {
        const state = callState();
        return typeof state === "object" ? state.error : null;
      }),
    }))
  );
}
```

Para las propiedades de estado agregadas por la característica, se
pueden proporcionar `Actualizadores`:

```typescript
export function setLoading(): { callState: CallState } {
  return { callState: "loading" };
}

export function setLoaded(): { callState: CallState } {
  return { callState: "loaded" };
}

export function setError(error: string): { callState: CallState } {
  return { callState: { error } };
}
```

Los Actualizadores permiten al consumidor modificar el estado de la
característica sin saber realmente cómo está estructurado.

### Usando Características Personalizadas

Para usar Características Personalizadas, simplemente llama a la
factoría proporcionada al configurar el store:

```typescript
export const FlightBookingStore = signalStore(
  { providedIn: 'root' },
  withState({ [...] }),

  // Agregar característica:
  withCallState(),
  [...]

  withMethods([...])
  [...]
);
```

Las propiedades, métodos y Actualizadores proporcionados se pueden usar
en los métodos del Store:

```typescript
load: async () => {
  if (!this.from() || !this.to()) return;

  // Estableciendo el callState mediante un Actualizador
  patchState(state, setLoading());

  const flights = await flightService.findPromise(from(), to());
  patchState(state, { flights });

  // Estableciendo el callState mediante un Actualizador
  patchState(state, setLoaded());
},
```

El consumidor del store también ve las propiedades proporcionadas por la
característica:

```typescript
private store = inject(FlightBookingStore);

flights = this.store.flightEntities;
loading = this.store.loading;
```

Como cada característica transforma las propiedades y métodos del Store,
asegúrate de llamarlas en el orden correcto. Si asumimos que los métodos
registrados con `withMethods` usan el `CallState`, `withCallState` tiene
que ser llamado antes que `withMethods`.

## Sabor 3: Características Incorporadas como Gestión de Entidades

_Rama:_ `arc-signal-store-entities`

El Signal Store de NGRX ya viene con una extensión conveniente para
gestionar entidades. Se puede encontrar en el punto de entrada
secundario `@ngrx/signals/entities` y proporciona estructuras de datos
para entidades, pero también varios Actualizadores, p. ej., para
insertar entidades o para actualizar una entidad única por id.

Para configurar la gestión de entidades, simplemente llama a la función
`withEntities`:

```typescript
import { withEntities } from '@ngrx/signals/entities';

const BooksStore = signalStore(
  [...]

  // Definiendo una Entidad
  withEntities({ entity: type<Flight>(), collection: 'flight' }),

  // withEntities creó una señal flightEntities para nosotros:
  withComputed(({ flightEntities, basket, from, to }) => ({
    selected: computed(() => flightEntities().filter((f) => basket()[f.id])),
    criteria: computed(() => ({ from: from(), to: to() })),
  })),

  withMethods((state) => {
    const { basket, flightEntities, from, to, initialized } = state;
    const flightService = inject(FlightService);

    return {
      [...],

      load: async () => {
        if (!from() || !to()) return;
        patchState(state, setLoading());

        const flights = await flightService.findPromise(from(), to());

        // Actualizando entidades con el Actualizador setAllEntities predefinido
        patchState(state, setAllEntities(flights, { collection: 'flight' }));
        patchState(state, setLoaded());
      },

      [...],
    };
  }),
);
```

El nombre de la colección pasado previene conflictos de nombres. En
nuestro caso, la colección se llama `flight`, y por lo tanto la
característica crea varias propiedades que comienzan con `flight`, p.
ej., `flightEntities`.

Hay una cantidad considerable de Actualizadores listos para usar:

- `addEntity`
- `addEntities`
- `removeEntity`
- `removeEntities`
- `removeAllEntities`
- `setEntity`
- `setEntities`
- `setAllEntities`
- `updateEntity`
- `updateEntities`
- `updateAllEntities`

Similar a `@ngrx/entities`, internamente, las entidades se almacenan de
forma normalizada. Esto significa que se almacenan en un diccionario,
mapeando sus claves primarias a los objetos de entidad. Esto facilita
unirlas para formar Modelos de Vista (View Models) necesarios para casos
de uso específicos.

Como llamamos a nuestra colección `flight`, `withEntities` crea una
Señal `flightEntityMap` que mapea los ids de los vuelos a nuestros
objetos de vuelo. También, crea una Señal `flightIds` que contiene todos
los ids en orden. Ambas son usadas por la señal computada también
agregada `flightEntities` usada anteriormente. Devuelve todos los vuelos
como un array respetando el orden de los ids dentro de `flightIds`. Por
lo tanto, si quieres reorganizar las posiciones de nuestros vuelos,
simplemente actualiza la propiedad `flightIds` correspondientemente.

Para construir estructuras como `flightEntityMap`, los Actualizadores
necesitan saber cómo se llama el id de la entidad. Por defecto, asume
una propiedad `id`. Si el id se llama de manera diferente, puedes
indicarle al Actualizador usando la propiedad `idKey`:

```typescript
patchState(
  state,
  setAllEntities(flights, {
    collection: "flight",
    idKey: "flightId",
  })
);
```

La propiedad pasada necesita ser un `string` o `number`. Si es de un
tipo de dato diferente o si no existe en absoluto, obtienes un error de
compilación.

## Conclusión

El futuro Store de Señales (Signal Store) de NGRX permite gestionar el
estado usando Señales. La opción más ligera para usar esta biblioteca es
simplemente ir con un contenedor `SignalState`. Esta estructura de datos
proporciona una Señal para cada propiedad de estado. Estas señales son
de solo lectura. Para actualizar el estado, puedes usar la función
`patchState`. Para asegurar que las actualizaciones solo ocurran de una
manera bien definida, el `signalState` puede ocultarse detrás de una
fachada.

El `SignalStore` es más potente y permite registrar características
opcionales. Definen el estado a gestionar, pero también métodos que
operan sobre él. Un `SignalStore` puede proporcionarse como un servicio
e inyectarse en sus consumidores.

El `SignalStore` también proporciona un mecanismo de extensión para
implementar características personalizadas para facilitar tareas
repetitivas. De fábrica (Out of the box), el Signal Store viene con una
característica bastante útil para gestionar entidades.

# 12c. Trabajar de Forma Más Inteligente, No Más Esfuerzo: Simplificando tu Aplicación Con NGRX Signal Store y Funcionalidades Personalizadas

¿Qué dirías si pudieras implementar un Signal Store para un caso de uso
**CRUD** (repetitivo) incluyendo **Deshacer/Rehacer** en **solo 7 (!)
líneas de código?**

Para hacer esto posible, necesitamos algunas funcionalidades
personalizadas para el Signal Store. En este capítulo, muestro cómo
funciona todo esto.

Como siempre, mi trabajo está altamente inspirado en la implementación
de NGRX Signal y los ejemplos proporcionados por [Marko
Stanimirović](https://twitter.com/MarkoStDev), el miembro del equipo
central de NGRX que concibió e implementó el Signal Store.

[Código
Fuente](https://github.com/manfredsteyer/standalone-example-cli/tree/arc-signal-store-custom-examples)
(Rama: arc-signal-store-custom-examples)

## Objetivo

El objetivo de este capítulo es mostrar cómo implementar funcionalidades
personalizadas para el Signal Store que permitan lo siguiente:

- Buscar entidades
- Seleccionar varias entidades
- Mostrar las entidades seleccionadas
- Deshacer/Rehacer

Así es como se ve la aplicación de demostración que he construido sobre
estas funcionalidades personalizadas:

![Aplicación de Demostración](images/result.png)

Y este es todo el código que necesitamos para configurar el store,
incluyendo Deshacer/Rehacer y conectarlo a un Servicio de Datos que
obtiene las entidades del backend:

```typescript
export const FlightBookingStore = signalStore(
  { providedIn: "root" },
  withEntities<Flight>(),
  withCallState(),
  withDataService(FlightService, { from: "Graz", to: "Hamburg" }),
  withUndoRedo()
);
```

Como puedes ver, estoy usando el paquete `@ngrx/signals/entities` para
gestionar entidades. Además de esto, he movido la lógica restante a tres
funcionalidades personalizadas reutilizables: `withCallState` ya se
discutió en un capítulo anterior. Este capítulo discute
`withDataService` y proporciona el código para `withUndoRedo`.

## Funcionalidad Personalizada DataService

La idea detrás de la funcionalidad `DataService` es configurar el estado
para un filtro de búsqueda y conectar un Servicio de Angular que utiliza
este filtro para buscar entidades. En una etapa de desarrollo posterior,
la funcionalidad también podría llamar al `DataService` para guardar y
eliminar entidades. Sin embargo, como estas implementaciones no
añadirían conocimientos adicionales aquí, decidí omitirlas en aras de la
brevedad.

Para hacer genérica la funcionalidad `DataService`, necesitamos algunos
tipos generales que describan todo con lo que la funcionalidad
interactúa:

```typescript
import { EntityId } from "@ngrx/signals/entities";
[...]

export type Filter = Record<string, unknown>;
export type Entity = { id: EntityId };

export interface DataService<E extends Entity, F extends Filter> {
    load(filter: F): Promise<E[]>;
}
```

Estos tipos describen cómo está estructurado nuestro filtro de búsqueda,
a qué nos referimos al hablar de una entidad y cómo debería ser un
`DataService`. El tipo `EntityId` proviene de `@ngrx/signals/entities` y
acepta un `string` o un `number`.

Esperar que una entidad sea un objeto arbitrario con una propiedad `id`
es una de las convenciones que `@ngrx/signals/entities` proporciona para
acortar tu código. Si tu clave primaria se llama de otra manera, puedes
indicárselo a `@ngrx/signals/entities` correspondientemente. Sin
embargo, para mantener pequeño el ejemplo presentado, he decidido seguir
con esta convención.

## Implementando una Funcionalidad Personalizada Genérica

La función `withDataService` devuelve la funcionalidad `DataService`:

```typescript
export function withDataService<E extends Entity, F extends Filter, S extends DataService<E, F>>(dataServiceType: Type<S>, filter: F) {
    [...]
}
```

Su parámetro de tipo describe la Entidad a gestionar, el filtro de
búsqueda correspondiente y el `DataService`. Al llamar a este método
genérico solo necesitamos pasar el `DataService` y un filtro inicial.
TypeScript infiere el resto:

```typescript
withDataService(FlightService, { from: 'Graz', to: 'Hamburg'} ),
```

La función `withDataService` llama a `signalStoreFeature` para
configurar nuestra funcionalidad personalizada:

```typescript
export function withDataService<E extends Entity, F extends Filter, S extends DataService<E, F>>(dataServiceType: Type<S>, filter: F) {
    return signalStoreFeature(
        // Nuestras expectativas para el store:
        {
            state: type<{
                callState: CallState,
                entityMap: Record<EntityId, E>,
                ids: EntityId[]
            }>(),
            signals: type<{
                entities: Signal<Entity[]>
            }>(),
            methods: type<{}>()
        },

        // Componiendo varias funcionalidades:
        withState( [...] ),
        withComputed( [...] ),
        withMethods( [...] )
    );
}
```

Como se mostró en el capítulo anterior, la función `signalStoreFeature`
básicamente compone funcionalidades existentes en una nueva. Por
ejemplo, podemos introducir nuevas propiedades de estado con
`withState`, Signals calculadas con `withComputed`, o métodos con
`withMethods`.

Sin embargo, una pequeña cosa es un poco diferente esta vez: Nuestra
funcionalidad tiene algunas **expectativas** para el Signal Store con el
que se utiliza. Espera que la funcionalidad `callState` y la
funcionalidad `entity` estén implementadas. La primera configura una
propiedad `callState` que necesitamos; la segunda configura una
propiedad `entityMap` y una propiedad `ids`, así como una Signal
calculada `entities`.

Estas expectativas se definen por el primer parámetro pasado a
`signalStoreFeature`. Describe las propiedades de estado esperadas
(`state`), las signals calculadas (`signals`) y los métodos. Como no
esperamos ningún método, también podemos omitir la clave `methods` en
lugar de apuntar a `type<{}>()`.

Para evitar conflictos de nombres, la funcionalidad `entity` permite
usar nombres de propiedad diferentes. Para mantener las cosas simples,
me quedo con los nombres predeterminados aquí. Sin embargo, en un
capítulo siguiente, aprenderás cómo tratar con nombres de propiedad
dinámicos de forma segura en cuanto a tipos (type-safe).

Las partes restantes de esta funcionalidad personalizada tratan
simplemente de añadir propiedades de estado, Signals calculadas y
métodos sobre las funcionalidades esperadas:

```typescript
export function withDataService<
  E extends Entity,
  F extends Filter,
  S extends DataService<E, F>
>(dataServiceType: Type<S>, filter: F) {
  return signalStoreFeature(
    // El primer parámetro contiene
    // Nuestras expectativas para el store:
    // Si no se cumplen, TypeScript
    // ¡impedirá añadir esta funcionalidad!
    {
      state: type<{
        callState: CallState;
        entityMap: Record<EntityId, E>;
        ids: EntityId[];
      }>(),
      signals: type<{
        entities: Signal<Entity[]>;
      }>(),
      methods: type<{}>(),
    },
    withState({
      filter,
      selectedIds: {} as Record<EntityId, boolean>,
    }),
    withComputed(({ selectedIds, entities }) => ({
      selectedEntities: computed(() =>
        entities().filter((e) => selectedIds()[e.id])
      ),
    })),
    withMethods((store) => {
      const dataService = inject(dataServiceType);
      return {
        updateFilter(filter: F): void {
          patchState(store, { filter });
        },
        updateSelected(id: EntityId, selected: boolean): void {
          patchState(store, ({ selectedIds }) => ({
            selectedIds: {
              ...selectedIds,
              [id]: selected,
            },
          }));
        },
        async load(): Promise<void> {
          patchState(store, setLoading());
          const result = await dataService.load(store.filter());
          patchState(store, setAllEntities(result));
          patchState(store, setLoaded());
        },
      };
    })
  );
}
```

## Proporcionando un Servicio de Datos Adecuado

Para que nuestros servicios de datos funcionen con nuestra funcionalidad
personalizada, necesitan implementar la interfaz `DataService`
mencionada anteriormente, que debe ser tipada con la Entidad en cuestión
y un filtro de búsqueda esperado por el método `load`:

```typescript
export type FlightFilter = {
    from: string;
    to: string;
}

@Injectable({
  providedIn: 'root'
})
export class FlightService implements DataService<Flight, FlightFilter> {
  baseUrl = `https://demo.angulararchitects.io/api`;

  constructor(private http: HttpClient) {}

  load(filter: FlightFilter): Promise<Flight[]> {
    [...]
  }

  [...]
}
```

## Funcionalidad de Deshacer/Rehacer

La funcionalidad de Deshacer/Rehacer se implementa de manera muy
similar. Internamente, gestiona dos pilas: una pila de deshacer y una
pila de rehacer. Las pilas son básicamente arrays con `StackItem`s:

```typescript
export type StackItem = {
  filter: Filter;
  entityMap: Record<EntityId, Entity>;
  ids: EntityId[];
};
```

Cada `StackItem` representa una instantánea del filtro de búsqueda
actual y la información que utiliza la funcionalidad de entidad
(`entityMap`, `ids`).

Para configurar la funcionalidad, se utiliza un tipo `UndoRedoOptions`:

```typescript
export type UndoRedoOptions = {
  maxStackSize: number;
};

export const defaultUndoRedoOptions: UndoRedoOptions = {
  maxStackSize: 100,
};
```

El objeto de opciones nos permite limitar el tamaño de la pila. Los
elementos más antiguos se eliminan según la regla Primero en Entrar,
Primero en Salir (FIFO) si la pila crece demasiado.

La función `withUndoRedo` añade la funcionalidad. Se estructura de la
siguiente manera:

```typescript
export function withUndoRedo(options = defaultUndoRedoOptions) {

    let previous: StackItem | null = null;
    let skipOnce = false;

    const undoStack: StackItem[] = [];
    const redoStack: StackItem[] = [];

    [...]

    return signalStoreFeature(
        // Expectativas para el store:
        {
            state: type<{
                filter: Filter,
                entityMap: Record<EntityId, Entity>,
                ids: EntityId[]
            }>(),
        },
        [...]
        withMethods((store) => ({
            undo(): void { [...] },
            redo(): void { [...] }
        })),
        withHooks({
            onInit(store) {
                effect(() => {
                    const filter = store.filter();
                    const entityMap = store.entityMap();
                    const ids = store.ids();

                    [...]
                });
            }
        })

    )
}
```

Similar a la función `withDataService` discutida anteriormente, llama a
`signalStoreFeature` y define sus expectativas para el store utilizando
el primer argumento. Introduce un método `undo` y un método `redo`,
restaurando el estado desde las pilas respectivas. Para observar el
estado, el hook `onInit` al final crea un efecto. Después de cada
cambio, este efecto almacena el estado original en la pila de deshacer.

Una cosa es un poco especial en esta implementación de la funcionalidad
Deshacer/Rehacer: La funcionalidad en sí misma mantiene algún estado
interno ---como `undoStack` y `redoStack`--- que no forma parte del
Signal Store.

Por favor, encuentra la implementación completa de esta funcionalidad en
mi [repositorio de
GitHub](https://github.com/manfredsteyer/standalone-example-cli/tree/arc-signal-store-custom-examples)
(Rama: arc-signal-store-custom-examples). Si quieres ver una
implementación diferente que también almacena el estado interno de la
funcionalidad en el Signal Store, por favor mira la rama
`arc-signal-custom-examples-undoredo-alternative`.

## Usando el Store en un Componente

Para usar nuestro signal-store de 7 líneas de código en un componente,
simplemente inyéctalo y delega a sus signals y métodos:

```typescript
@Component( [...] )
export class FlightSearchComponent {
  private store = inject(FlightBookingStore);

  // Delegar a las signals
  from = this.store.filter.from;
  to = this.store.filter.to;
  flights = this.store.entities;
  selected = this.store.selectedEntities;
  selectedIds = this.store.selectedIds;

  // Delegar a los métodos
  async search() {
    this.store.load();
  }

  undo(): void {
    this.store.undo();
  }

  redo(): void {
    this.store.redo();
  }

  updateCriteria(from: string, to: string): void {
    this.store.updateFilter({ from, to });
  }

  updateBasket(id: number, selected: boolean): void {
    this.store.updateSelected(id, selected);
  }

}
```

## Conclusión y Perspectivas

Implementar tareas repetitivas con funcionalidades personalizadas
genéricas te permite reducir drásticamente tu código fuente. En este
capítulo, implementamos un Signal Store para un caso de uso simple con
solo 7 líneas de código. Aunque implementar tales funcionalidades de
manera genérica añade algo de sobrecarga al principio, este esfuerzo
seguramente vale la pena una vez que tienes varios casos de uso
estructurados de esa manera.

Para reutilizar funcionalidades personalizadas existentes, nuestra
funcionalidad personalizada delega en ellas. La API proporcionada por
NGRX Signal Store permite a la funcionalidad personalizada asegurar que
las otras funcionalidades hayan sido configuradas. Define qué
propiedades de estado, signals calculadas y métodos espera. Si no están
presentes, TypeScript mostrará un error de compilación.

En aras de la simplicidad, simplemente usamos los nombres de propiedad
predeterminados introducidos por las funcionalidades orquestadas. Sin
embargo, para evitar conflictos de nombres, también es posible
configurar estos nombres. Por ejemplo, la funcionalidad `entity` que
viene con el Signal Store soporta tales propiedades dinámicas sin
comprometer la seguridad de tipos. En el próximo capítulo, mostraré cómo
usar esta idea también para nuestras funcionalidades personalizadas.

# 12d. Análisis Profundo de NGRX Signal Store: Extensiones Personalizadas Flexibles y con Seguridad de Tipos

El NGRX Signal Store, lanzado poco después de Angular 17, ofrece una
solución muy ligera para la gestión de estado. Sin dependencias directas
de RxJS, se basa completamente en Signals. Sin embargo, su mayor
fortaleza es, sin duda, su alto grado de extensibilidad. Con las
llamadas características personalizadas, las tareas recurrentes pueden
implementarse muy fácilmente de forma centralizada.

El primer ejemplo de características personalizadas presentado aquí es
muy directo. Después de eso, las cosas se ponen un poco más desafiantes:
el consumidor de una característica debe poder determinar los nombres de
las señales y métodos configurados por la característica. De lo
contrario, surgirán rápidamente conflictos de nombres. Como muestran los
siguientes ejemplos, esto no contradice el tipado estricto en
TypeScript.

Los ejemplos mostrados aquí están inspirados en un ejemplo de [Marko
Stanimirović](https://twitter.com/MarkoStDev), el miembro del equipo
central de NGRX detrás de Signal Store, y la solución de gestión de
Entidades `@ngrx/signals/entity` que se incluye con Signal Store.

[Código
Fuente](https://github.com/manfredsteyer/standalone-example-cli/tree/arc-signal-store-custom-typed)
(Rama: arc-signal-store-custom-typed)

## Una Primera Extensión Sencilla

Usemos la característica `CallState` del capítulo anterior como punto de
partida:

```typescript
import {
  SignalStoreFeature,
  signalStoreFeature,
  withComputed,
  withState,
} from '@ngrx/signals';

[…]

export type CallState = 'init' | 'loading' | 'loaded' | { error: string };

export function withCallState() {
  return signalStoreFeature(
    withState<{ callState: CallState }>({ callState: 'init' }),
    withComputed(({ callState }) => ({
      loading: computed(() => callState() === 'loading'),
      loaded: computed(() => callState() === 'loaded'),
      error: computed(() => {
        const state = callState();
        return typeof state === 'object' ? state.error : null
      }),
    }))
  );
}
```

Esta es una función que devuelve el resultado de `signalStoreFeature`.
La función `signalStoreFeature`, a su vez, simplemente agrupa
características existentes: `withState` introduce la propiedad
`callState`, y `withComputed` define las señales calculadas previamente
discutidas basándose en ella.

Los Updaters (Actualizadores) proporcionados por la característica solo
devuelven un objeto de estado parcial con la propiedad a actualizar:

```typescript
export function setLoading(): { callState: CallState } {
  return { callState: "loading" };
}

export function setLoaded(): { callState: CallState } {
  return { callState: "loaded" };
}

export function setError(error: string): { callState: CallState } {
  return { callState: { error } };
}
```

## Ahora Empieza de Verdad: El Tipado

La implementación de `CallState` en la sección anterior resume
brevemente la solución a un requisito recurrente. Una vez implementada,
las aplicaciones individuales pueden integrar la característica en sus
stores.

Una desventaja de esta implementación, sin embargo, es que las señales
introducidas tienen nombres fijos: `callState`, `loading`, `loaded` y
`error`. Esto conduce rápidamente a conflictos de nombres, especialmente
si el mismo store requiere la característica más de una vez. Un ejemplo
de esto es un store que quiere gestionar varios `callStates` para
diferentes entidades, por ejemplo, para vuelos y pasajeros.

En este caso, el consumidor debería poder especificar los nombres de las
señales introducidas. Eso es precisamente de lo que nos ocuparemos a
continuación. Para hacer esta extensión segura en cuanto a tipos
(type-safe), primero tenemos que pensar un poco sobre el tipado de la
función `withCallState`.

Nuestra función `withCallState` actualmente no tiene un tipo de retorno
explícito. Por lo tanto, TypeScript infiere este tipo observando el
valor de retorno en la función. El compilador se da cuenta de que una
propiedad `callState` está disponible.

El tipo determinado aquí por inferencia es un
`SignalStoreFeature<Input, Output>`. El parámetro de tipo `Input` define
qué señales y métodos espera la característica del store, y `Output`
especifica qué señales y métodos adicionales proporciona la
característica. Nuestra característica no impone ninguna expectativa al
store, pero proporciona una señal `callState` así como varias señales
calculadas como `loading`. Respectivamente, nuestros tipos `Input` y
`Output` se ven así:

![Extensiones Personalizadas desde la perspectiva del sistema de
tipos](images/extensions-type-system-01.png)

Debe tenerse en cuenta que `state` describe la señal a introducir, y la
propiedad `signals` representa las señales calculadas a partir de ella.
Esta representación al menos corresponde a la vista externa
simplificada.

La vista interna es un poco más compleja, especialmente porque
`withState` primero introduce la señal `callState` y solo entonces
`withComputed` añade las señales calculadas. Es por eso que la vista
interna tiene dos salidas, que se combinan usando un tipo auxiliar
(helper type).

![Extensiones Personalizadas desde la perspectiva del sistema de
tipos](images/extensions-type-system-02.png)

Por simplicidad, la imagen anterior llama al tipo auxiliar
`Merged Result`. Sin embargo, la verdad es que Signal Store tiene varios
tipos internos para esto.

A nivel lógico, la vista interna y la externa son equivalentes.
TypeScript puede necesitar un pequeño empujón en forma de una aserción
de tipo (type assertion) para reconocer esto. Sin embargo, definir
explícitamente la vista interna es un poco molesto y actualmente no es
realmente posible porque los tipos auxiliares requeridos no son parte de
la API pública de Signal Store. Es por eso que estoy usando un patrón
aquí que también se puede encontrar varias veces en el código de Signal
Store: una combinación de una sobrecarga de función con la vista externa
y una implementación de función que usa `SignalStoreFeature` en lugar de
`SignalStoreFeature<Input, Output>` para la vista interna:

```typescript
// Sobrecarga con Vista Externa
export function withCallState(): SignalStoreFeature<
  {
    state: {};
    signals: {};
    methods: {};
  },
  {
    state: {
      callState: CallState;
    };
    signals: {
      loading: Signal<boolean>;
      loaded: Signal<boolean>;
      error: Signal<{ error: string } | null>;
    };
    methods: {};
  }
>;
// Implementación con Vista Interna
export function withCallState(): SignalStoreFeature {
  return signalStoreFeature(
    withState<{ callState: CallState }>({ callState: "init" }),
    withComputed(({ callState }) => ({
      loading: computed(() => callState() === "loading"),
      loaded: computed(() => callState() === "loaded"),
      error: computed(() => {
        const state = callState();
        return typeof state === "object" ? state.error : null;
      }),
    }))
  );
}
```

El tipo `SignalStoreFeature` sin parámetros de tipo utiliza tipos más
generales para `Input` y `Output` que no asumen nombres o tipos de datos
específicos.

## Tipado y Propiedades Dinámicas -- ¿Cómo Funcionan Juntos? {#tipado-y-propiedades-dinámicas--cómo-funcionan-juntos}

Ahora que la estructura básica del tipado está establecida, podemos
extenderla con nombres de propiedad configurables. Siguiendo el ejemplo
de `@ngrx/signals/entity`, los consumidores deberían tener la opción de
definir un prefijo al activar la característica:

```typescript
export const FlightBookingStore = signalStore(
  { providedIn: 'root' },

  withState({ … }),
  withComputed(( … ) => ({ … })),

  withCallState({ prop: 'flights' }),
  withCallState({ prop: 'passengers'}),

  […]
);
```

Este prefijo ahora debería incluirse en los nombres de propiedad
definidos por la característica. Por ejemplo, la primera llamada a
`withCallState` debería producir las siguientes propiedades:

- `flightsCallState` (estado)
- `flightsLoading` (calculada)
- `flightsLoaded` (calculada)
- `flightsError` (calculada)

La segunda llamada análogamente conduce a estas propiedades:

- `passengersCallState` (estado)
- `passengersLoading` (calculada)
- `passengersLoaded` (calculada)
- `passengersError` (calculada)

Configurar estas propiedades en tiempo de ejecución no es un gran
problema en el mundo de TypeScript, especialmente porque JavaScript
subyacente es de todos modos un lenguaje dinámico. El desafío, sin
embargo, es informar también al sistema de tipos sobre estas
propiedades.

Para esta tarea, primero necesitas encontrar una manera de expresar el
prefijo en una declaración de tipo. En este punto, nos beneficiamos del
hecho de que los literales también pueden usarse como tipos de datos:

```typescript
export type BoxStatus = "open" | "closed";
const candyBox: BoxStatus = "open";
```

Tales Tipos de Unión de Literales de Cadena (String Literal Union Types)
se usan a menudo en aplicaciones TypeScript para expresar enumeraciones
(enums). Esto está incluso más cerca de EcmaScript que usar la palabra
clave `enum` de TypeScript. Curiosamente, nadie nos obliga a ofrecer
múltiples opciones. Es por eso que esta variante es completamente
correcta:

```typescript
export type BoxStatusAfterHolidays = "closed";
```

Así que aquí tenemos un tipo que puede contener exactamente un único
valor de cadena. Usamos este patrón exacto para informar al sistema de
tipos sobre nuestro prefijo. Primero, creamos un tipo que define el
nombre de la señal a introducir basándose en el prefijo:

```typescript
export type NamedCallState<Prop extends string> = {
  [K in Prop as `${K}CallState`]: CallState;
};
```

Este es un llamado tipo mapeado (mapped type), que mapea un tipo a uno
nuevo. El parámetro de tipo `Prop extends string` describe el tipo
original. Puede ser cualquier cadena usada como tipo. `string` también
debe escribirse en minúsculas porque, en este punto, nos referimos a una
cadena específica y no al tipo de objeto `String`. La notación
`K in Prop` también se reduce a esta cadena. En casos más complejos, se
podría usar la palabra clave `in`, por ejemplo, para iterar sobre las
propiedades del tipo original.

Podemos proceder de manera análoga para las señales calculadas a
introducir:

```typescript
export type NamedCallStateComputed<Prop extends string> = {
  [K in Prop as `${K}Loading`]: Signal<boolean>;
} & {
  [K in Prop as `${K}Loaded`]: Signal<boolean>;
} & {
  [K in Prop as `${K}Error`]: Signal<string | null>;
};
```

Dado que un tipo mapeado solo puede tener un único mapeo, aquí se
utilizan varios tipos mapeados. Se combinan con el operador `&`
(operador de intersección). Con estos dos tipos ahora podemos
especificar el tipado de nuestra función `withCallState`:

```typescript
export function withCallState<Prop extends string>(config: {
  prop: Prop;
}): SignalStoreFeature<
  { state: {}, signals: {}, methods: {} },
  {
    state: NamedCallState<Prop>,
    signals: NamedCallStateComputed<Prop>,
    methods: {}
  }
>;
export function withCallState<Prop extends string>(config: {
  prop: Prop;
}): SignalStoreFeature {
[…]
}
```

Ahora, el sistema de tipos conoce nuestras propiedades configuradas.
Además, ahora es importante configurar estas propiedades en tiempo de
ejecución. Una función auxiliar `getCallStateKeys` se utiliza para este
propósito:

```typescript
function getCallStateKeys(config: { prop: string }) {
  return {
    callStateKey: `${config.prop}CallState`,
    loadingKey: `${config.prop}Loading`,
    loadedKey: `${config.prop}Loaded`,
    errorKey: `${config.prop}Error`,
  };
}
```

Esta función auxiliar devuelve los mismos mapeos en tiempo de ejecución
que los tipos introducidos previamente durante el tiempo de compilación.
La implementación actualizada de `withCallState` recoge estos nombres y
configura las propiedades correspondientes:

```typescript
[…]
export function withCallState<Prop extends string>(config: {
  prop: Prop;
}): SignalStoreFeature {
  const { callStateKey, errorKey, loadedKey, loadingKey } =
    getCallStateKeys(config);

  return signalStoreFeature(
    withState({ [callStateKey]: 'init' }),
    withComputed((state: Record<string, Signal<unknown>>) => {

      const callState = state[callStateKey] as Signal<CallState>;

      return {
        [loadingKey]: computed(() => callState() === 'loading'),
        [loadedKey]: computed(() => callState() === 'loaded'),
        [errorKey]: computed(() => {
          const v = callState();
          return typeof v === 'object' ? v.error : null;
        })
      }
    })
  );
}
```

Para que los actualizadores (updaters) puedan manejar las propiedades
dinámicas, también reciben un parámetro correspondiente:

```typescript
export function setLoading<Prop extends string>(
  prop: Prop
): NamedCallState<Prop> {
  return { [`${prop}CallState`]: "loading" } as NamedCallState<Prop>;
}
```

Esta idea también se puede encontrar en `@ngrx/signals/entity`. El
actualizador (updater) se usa entonces de la siguiente manera:

```typescript
load: async () => {
  patchState(state, setLoading('flights'));
  […]
}
```

## Más Ejemplos: CRUD y Deshacer/Rehacer

En el capítulo anterior, demostré características para implementar CRUD
y Deshacer/Rehacer (Undo/Redo). El siguiente repositorio contiene una
versión de estas características personalizadas utilizando propiedades
dinámicas como se muestra aquí.

[Código
Fuente](https://github.com/manfredsteyer/standalone-example-cli/tree/arc-signal-store-custom-examples-typed)
(ver la rama `arc-signal-store-custom-examples-typed`)

## Extensiones Listas para Usar (Out of the Box)

Saber cómo escribir tales características personalizadas te da muchas
posibilidades. Sin embargo, con bastante frecuencia solo quieres
centrarte en aquello por lo que realmente te pagan, y esto podría ser
escribir código de aplicación y no código de infraestructura. Es por eso
que hemos puesto varias extensiones para Signal Store en el paquete npm
[\@angular-architects/ngrx-toolkit](https://www.npmjs.com/package/@angular-architects/ngrx-toolkit).
De fábrica (Out of the box), proporciona varias características
personalizadas:

- Soporte para Redux Dev Tools
- Uso del patrón Redux con Signal Store
- Conexión de Servicios de Datos a Signal Store como se muestra en el
  capítulo anterior pero con propiedades dinámicas y soporte CRUD
  completo
- Soporte para Deshacer/Rehacer (Undo/Redo)

## Conclusión

El equipo de NGRX es conocido por ser excepcionalmente hábil en
aprovechar las posibilidades del sistema de tipos de TypeScript. El
resultado es una API extremadamente fácil de usar y con seguridad de
tipos.

En este capítulo, cambiamos de perspectiva y discutimos cómo puedes
aprovechar los patrones utilizados por el equipo de NGRX para tus
características personalizadas de Signal Store. Esto permite configurar
nombres de propiedades y así evitar conflictos de nombres sin
comprometer la seguridad de tipos.

Para hacer esto, tenemos que tratar con aspectos de TypeScript con los
que los desarrolladores de aplicaciones usualmente no entran en contacto
tan a menudo. Es por eso que los patrones utilizados pueden parecer a
veces un poco complicados. La buena noticia es que solo necesitamos
estos patrones si estamos desarrollando soluciones altamente
reutilizables. Tan pronto como volvemos al rol de desarrollador de
aplicaciones, tenemos una solución con seguridad de tipos que es cómoda
de usar.

# 12e. El NGRX Signal Store y Tu Arquitectura

El NGRX Signal Store es una solución de gestión de estado moderna y
ligera. Sin embargo, al añadirlo a tu aplicación, surgen varias
preguntas arquitectónicas: ¿Dónde colocarlo? ¿Qué tan grande debería
ser? ¿Se permite que un store acceda a otros stores? ¿Puede usarse para
el estado global? ¿Puede usarse junto con o en lugar del tradicional
NGRX Store basado en Redux?

Este capítulo proporciona respuestas y muestra que **los stores ligeros
cambian algunas de las reglas** conocidas del mundo de los stores
orientados a Redux.

## ¿Dónde Colocarlo?

Inspirada por el Diseño Estratégico (DDD) y el trabajo de Nrwl en Nx,
nuestra arquitectura de referencia divide una interfaz de usuario
(frontend) más grande en varios dominios desacoplados (contextos
delimitados) que constan de varias capas técnicas:

![Arquitectura de Referencia con dominios y capas
desacoplados](images/matrix.png)

Esta arquitectura, que a menudo actúa como punto de partida y puede
adaptarse a los requisitos individuales, se describe en los primeros
capítulos de este libro.

Cuando optamos por el **Store NGRX tradicional basado en Redux,**
subdividimos el estado en _slices_ de funcionalidad. Si bien pueden
asociarse con la capa de funcionalidad, a menudo los empujamos hacia el
nivel de dominio, ya que el mismo estado se necesita con frecuencia en
varias funcionalidades del mismo dominio.

> Al hablar de esta arquitectura de referencia, también debemos tener en
> cuenta que existen varias variantes. Por ejemplo, algunos equipos
> tienen una capa de datos o una capa de estado donde colocan los
> _slices_ de funcionalidad necesarios para varias funcionalidades.
> Estas capas pueden ser una alternativa, pero también una adición a la
> capa de dominio.

Cuando incorporamos un **store ligero como el NGRX Signals Store,** nos
encontramos con **reglas diferentes:** En general, los stores ligeros se
pueden encontrar en todas las capas técnicas:

![](images/signal-store-arc-02.png)

- **Capa de Funcionalidad:** Podemos usar un store a nivel de
  componente para gestionar el estado del componente o a nivel de
  funcionalidad para que varios componentes de la misma funcionalidad
  puedan acceder a él. En este último caso, un ejemplo es un asistente
  (wizard) que delega en diferentes componentes.
- **IU:** Los componentes de la IU ciertamente tienen estado. Algunos
  de ellos tienen estados bastante extensos que necesitan ser
  compartidos con componentes hijos. Un ejemplo es un planificador
  sofisticado con diferentes vistas que requieren varios componentes
  hijos. Dicho estado puede ser gestionado por un store ligero
  conectado directamente al componente.
- **Dominio:** El estado que es necesario para varias funcionalidades
  en el mismo dominio se define aquí. Un store ligero utilizado para
  esto es expuesto por esta capa para que la capa de funcionalidad
  pueda acceder a él.
- **Utilidad**: Con bastante frecuencia, las utilidades no tienen
  estado: piensa en funciones que validan entradas o calculan fechas.
  Sin embargo, también hay algunas bibliotecas de utilidad con estado
  donde un store puede ser útil. Un ejemplo es una biblioteca de
  autenticación genérica que gestiona algunos datos sobre el usuario
  actual o una biblioteca de traducción que contiene textos de
  traducción.

Un Store utilizado a nivel de componente es provisto directamente por el
componente en cuestión:

```typescript
@Component({
    [...],
    providers: [MySignalStore]
})
export class MyComp {
    [...]
}
```

Esto también hace que el Store esté disponible para los componentes
hijos. Sin embargo, esto también significa que el store se destruye
cuando se destruye el componente.

Para los otros casos de uso, podemos proveer el Store a través del
inyector raíz:

```typescript
export const MySignalStore = signalStore(
    { providedIn: 'root'},
    withState([...]),
    [...]
)
```

El equipo de Angular ha comunicado a la comunidad en varias ocasiones
que esta es la forma de proceder en la mayoría de los casos. En general,
también podríamos proveer dichos stores a nivel de rutas (lazy). Sin
embargo, esto no añade mucho valor, ya que los servicios `forRoot`
también funcionan con carga diferida: si solo se usan en una parte de la
aplicación cargada de forma diferida, el empaquetador los coloca en el
fragmento (chunk) respectivo. Puedes encontrar más información sobre
cuándo usar los llamados proveedores de Entorno (Environment providers)
a nivel de ruta
[aquí](https://www.angulararchitects.io/en/blog/routing-and-lazy-loading-with-standalone-components/).

## Combinando el Signal Store con el Store NGRX Tradicional

Podrías preguntarte, ¿por qué no seguir con el Store NGRX tradicional
para el nivel de funcionalidad y de dominio? Puedes hacerlo totalmente:
este Store se desarrolló principalmente para el estado global que
encontramos en estas capas, y también soporta perfectamente los Signals.
Además, si ya has añadido el Store NGRX tradicional a tu aplicación y
estás contento con él, yo no lo cambiaría.

Sin embargo, también creo que cada vez más gente reconsiderará usar
\"Redux por defecto\". Si sientes que no te beneficias de la fortaleza
de este enfoque en tu caso particular, podrías optar por una alternativa
más ligera como el NGRX Signal Store. Esto también se puede observar en
otras comunidades donde los stores ligeros han sido populares durante
años.

Para ser claros, el patrón Redux debería ser parte de tu caja de
herramientas. Sin embargo, si encuentras una solución más ligera que se
ajuste mejor, adelante con ella.

## Lo Mejor de Ambos Mundos a Través de Funcionalidades Personalizadas

Como el NGRX Signal Store es altamente extensible, incluso puedes usar
los mejores conceptos de ambos mundos. Digamos que echas de menos las
indirecciones o el sistema de eventos proporcionado por Redux: nadie te
impide escribir una funcionalidad personalizada que añada esto al Signal
Store.

Si buscas una solución lista para usar para Redux sobre el Signal Store,
encontrarás una en nuestro paquete npm
[\@angular-architects/ngrx-toolkit](https://www.npmjs.com/package/@angular-architects/ngrx-toolkit).

## ¿Qué Tan Grande Debería Ser un Signal Store?

Viniendo del Store NGRX tradicional, como regla general, un Signal Store
puede tener la granularidad de un _slice_ de funcionalidad. Sin embargo,
dado que un Signal Store es solo un servicio, también deberíamos
alinearnos con el principio de responsabilidad única. Por lo tanto,
dividir un _slice_ de funcionalidad en otros más específicos puede ser
una buena idea.

## ¿Puede un Signal Store Acceder a Otros Signal Stores?

Cuando distribuimos nuestro estado en varios stores ligeros en
diferentes capas, no es inusual que un caso de uso pueda necesitar
estado de más de un Store. En general, evitaría que los stores accedan a
otros stores. Cada Store debería centrarse únicamente en su tarea, que
es gestionar sus propiedades de estado. Además, queremos evitar ciclos.

Afortunadamente, hay una alternativa. Opta por un servicio (de
funcionalidad) que orqueste los stores:

![](images/signal-store-arc-03.png)

Dicho servicio es similar a las fachadas (facades) que se usan a menudo
para la gestión del estado. Pero como es parte de la funcionalidad y no
abstrae un subsistema, prefiero el nombre de servicio de funcionalidad.

## Previniendo Ciclos, Redundancias e Inconsistencias

La estructuración en capas introducida con nuestra arquitectura de
referencia y la regla de que los stores no pueden accederse entre sí
previenen los ciclos. En general, nuestros diferentes stores pueden
volverse redundantes y, por lo tanto, inconsistentes si no tenemos
cuidado. Sin embargo, el mismo riesgo existe con diferentes _slices_ de
funcionalidad independientes cuando se opta por el Store NGRX
tradicional.

Tener una forma de visualizar el estado parece ser vital en ambos casos,
ya que ayuda a detectar tales problemas tempranamente. Para el Store
NGRX tradicional, usamos las Herramientas de Desarrollo de Redux (Redux
Dev Tools). Sin embargo, el Signal Store no viene con soporte listo para
usar para ellas. En su lugar, las Herramientas de Desarrollo de Angular
(Angular Dev Tools) podrían eventualmente soportar una visualización
general de los Signals utilizados en una aplicación. No obstante, tener
soporte para las Herramientas de Desarrollo de Redux parece ser
extremadamente útil porque proporcionan un historial y permiten la
depuración con viaje en el tiempo (time travel debugging).
Afortunadamente, implementar dicho soporte con funcionalidades
personalizadas debería ser sencillo. Así que, al igual que con el NGRX
Component Store, es probable que la comunidad presente tal
implementación.

Otra forma de prevenir inconsistencias es hacer uso del manejo de
eventos. Esto nos permite informar a otras partes del sistema sobre los
cambios para que puedan actualizar su estado en consecuencia. En Redux,
el manejo de eventos es parte del juego. Para el Signal Store, podríamos
añadir manejo de eventos usando funcionalidades personalizadas.

## Conclusión

Los stores ligeros como el NGRX Signal Store cambian algunas de las
reglas conocidas de los basados en Redux: dichos stores pueden definirse
en diferentes capas técnicas, y pueden ser provistos dentro del
proveedor raíz, una ruta (lazy) o a nivel de componente.

Redux no va a desaparecer, y pertenece a nuestra caja de herramientas.
Sin embargo, si sientes que un enfoque más ligero es más adecuado para
tus necesidades, el NGRX Signal Store es bastante tentador. Además,
puedes tener lo mejor de ambos mundos combinando ambos stores o
extendiendo el Signal Store con funcionalidades personalizadas que
proporcionen características de Redux que falten.

En vista del principio de responsabilidad única, no permitiría que los
stores ligeros se accedan entre sí; en su lugar, puedes introducir un
servicio de funcionalidad que orqueste los stores necesarios.

# 13. Extra: Automatiza tu Arquitectura con Plugins de Espacio de Trabajo (Workspace) de Nx

Nx es bastante popular cuando se trata de grandes aplicaciones
empresariales basadas en Angular. Gracias a su concepto de plugins, Nx
también puede extenderse de forma muy flexible. El [registro de
plugins](https://nx.dev/plugin-registry) de Nx lista numerosos plugins
de este tipo que se encargan de tareas recurrentes e integran
herramientas probadas.

Además de los plugins comunitarios para el público general, los plugins
internos del proyecto también pueden tener sentido para automatizar
tareas altamente relacionadas con el proyecto. Esto incluye la
generación de secciones de código y la implementación de patrones que la
arquitectura objetivo especifica: repositorios, fachadas (facades),
entidades o formularios CRUD son solo algunos ejemplos.

Desafortunadamente, implementar plugins no era trivial en el pasado:
Cada plugin debía publicarse como un paquete a través de npm e
instalarse en tu propio espacio de trabajo de Nx. Este procedimiento
debía repetirse para cada nueva versión del plugin.

Este ir y venir es cosa del pasado gracias a los plugins de espacio de
trabajo. Estos son plugins que Nx configura en forma de una biblioteca
en el espacio de trabajo actual. Esto significa que los cambios se
pueden realizar rápidamente y probar de inmediato. Si es necesario, los
plugins de espacio de trabajo probados también pueden exportarse a
través de npm para otros proyectos.

En este capítulo muestro cómo se pueden implementar y utilizar plugins
de espacio de trabajo con generadores que automatizan tareas
repetitivas.

[Código Fuente](https://github.com/manfredsteyer/nx-plugin-demo)

## Creando un Plugin de Espacio de Trabajo con un Generador

El paquete `@nrwl/nx-plugin` se puede usar para generar nuevos plugins.
También viene con numerosos métodos de ayuda que apoyan el desarrollo de
plugins. Puedes usar las siguientes instrucciones para crear un nuevo
espacio de trabajo Nx con un plugin:

```bash
npx create-nx-workspace@latest plugin-demo

cd plugin-demo # Corrección: el original dice 'cd my plugin-demo', pero el workspace se llama 'plugin-demo'

npm i @nrwl/nx-plugin

nx generate @nrwl/nx-plugin:plugin libs/my-plugin
```

Cuando se te pregunte, selecciona las opciones `Angular` e
`Integrated Monorepo`; para las opciones restantes puedes optar por los
valores predeterminados.

Después de eso, añade un generador a tu plugin:

```bash
nx generate @nx/plugin:generator my-generator --directory libs/my-plugin/src/generators/my-generator
```

## Plantillas para Generadores

Los generadores a menudo usan plantillas que usualmente se colocan en la
subcarpeta _files_. Las plantillas son archivos con marcadores de
posición (placeholders) que el generador copia en el proyecto destino.
Por ejemplo, la siguiente plantilla usa un marcador de posición
_projectName_ y genera diez constantes:

```typescript
<% /* Nombre de archivo: libs\my-plugin\src\generators\my-generator\files\src\index.ts.template */ %>

<% for (let i=0; i<10; i++) { %>
const constant<%=i%> = '<%= projectName %>';
<% } %>
```

Si sigues las instrucciones aquí paso a paso, por favor copia el
contenido de este listado en el archivo generado
`libs\my-plugin\src\generators\my-generator\files\src\index.ts.template`.

Los comodines se pueden encontrar no solo en los archivos, sino también
en los nombres de archivo. Por ejemplo, Nx reemplazaría
\_\_\_projectName\_\_\_ en un nombre de archivo con el valor de
\_projectName\_.

## Implementando un Generador

Técnicamente hablando, un generador es solo una función asíncrona que
recibe dos parámetros: un objeto `Tree` que representa el sistema de
archivos y un objeto `options` con los parámetros pasados al llamar al
generador en la línea de comandos:

```typescript
// libs/my-plugin/src/generators/my-generator/generator.ts

import {
  formatFiles,
  generateFiles,
  getWorkspaceLayout,
  Tree,
} from "@nrwl/devkit";

import { libraryGenerator } from "@nrwl/angular/generators";

import * as path from "path";
import { MyGeneratorGeneratorSchema } from "./schema";

export default async function (
  tree: Tree,
  options: MyGeneratorGeneratorSchema
) {
  tree.write("readme.txt", "Manfred estuvo aquí!"); // Traducción del comentario implícito

  await libraryGenerator(tree, options);

  const libsDir = getWorkspaceLayout(tree).libsDir;
  const projectRoot = `${libsDir}/${options.name}`;

  const templateOptions = {
    projectName: options.name,
    template: "",
  };

  generateFiles(
    tree,
    path.join(__dirname, "files"),
    projectRoot,
    templateOptions
  );

  await formatFiles(tree);
}
```

Este ejemplo ilustra algunas tareas típicas que realizan los
generadores:

- El método `tree.write` crea un nuevo archivo.
- El método `libraryGenerator` del paquete `@nrwl/angular/generators`
  representa el generador que dispara la instrucción `ng g lib`. La
  llamada mostrada, por lo tanto, genera una nueva biblioteca en el
  espacio de trabajo actual.
- Con `generateFiles`, el generador copia todas las plantillas de la
  carpeta `files` al directorio raíz del nuevo proyecto. Los valores
  para los marcadores de posición están en el objeto
  `templateOptions`.
- La llamada a `formatFiles` formatea los archivos generados con
  Prettier. Esto simplifica la estructura de las plantillas.

Lo que es particularmente útil es el hecho de que los generadores son
simplemente funciones que pueden llamarse en otros generadores. Esto
significa que los generadores existentes se pueden combinar para crear
otros nuevos.

Para agregar parámetros adicionales pasados a través del objeto de
opciones, la interfaz en el archivo `schema.d.ts` así como el esquema
JSON en `schema.json` necesitan extenderse correspondientemente. El
primero se usa en el código TypeScript y el último lo usa Nx para
validar los parámetros pasados en la línea de comandos.

## Verdaderos Tesoros: Métodos de Ayuda para Generadores en Nx

Además de los métodos utilizados aquí, el paquete `@nrwl/devkit` ofrece
otras construcciones auxiliares útiles para desarrollar generadores.
Aquí hay una selección de métodos que se usan a menudo en la práctica:

- `readJson` y `updateJson`: Leer y actualizar un archivo JSON.
- `readNxJson`: Lee el archivo `nx.json`, el archivo de control de Nx.
- `readWorkspaceConfiguration`: Lee la configuración del espacio de
  trabajo (originalmente parte de `angular.json`, ahora parte de
  `nx.json`).
- `readProjectConfiguration` y `updateProjectConfiguration`: Lee o
  actualiza la configuración de un proyecto específico desde el
  `project.json` respectivo.
- `applyChangesToString`: Realiza múltiples inserciones y
  eliminaciones en un archivo.
- `names`: Formatea cadenas para ajustarse a las convenciones para
  nombres de archivo (kebab case) o nombres de clase (pascal case).

Si es necesario cambiar archivos TypeScript existentes, la [API del
Compilador de
TypeScript](https://github.com/microsoft/TypeScript/wiki/Using-the-Compiler-API)
puede ayudar. Esta API está incluida en TypeScript y representa los
archivos de código como árboles de sintaxis.

El paquete
[tsquery](https://www.npmjs.com/package/@phenomnomnominal/tsquery), que
es muy popular en la comunidad, soporta la búsqueda en estas estructuras
de datos. Permite formular consultas basadas en selectores CSS. Tales
consultas, por ejemplo, pueden determinar funciones, clases o métodos
que se encuentran en un archivo.

## Probando los Generadores

El generador mostrado ahora se puede ejecutar en la consola con
`nx generate`:

```bash
nx g @plugin-demo/my-plugin:my-generator my-lib
```

Aquí, `@plugin-demo` es el _scope_ del plugin (generalmente el nombre
del espacio de trabajo o un _scope_ npm si estuviera publicado) y
`my-plugin` es el nombre de la biblioteca con nuestro plugin de espacio
de trabajo. El nombre `my-generator` se refiere al generador que hemos
añadido al plugin. `my-lib` es el valor para el parámetro `name`. En
realidad, esto debería especificarse con `--name mylib`. Sin embargo, el
`schema.json` del generador especifica por defecto que este valor puede
tomarse alternativamente del primer argumento de la línea de comandos.

Si todo va según lo planeado, el generador crea una nueva biblioteca y
un archivo basado en la plantilla mostrada. También genera un
`readme.txt`:

![](images/ng-g-generator.png)

## Probando Generadores

Nx también simplifica las pruebas automatizadas de los generadores.
También ofrece construcciones auxiliares, como un objeto _Tree_, que
solo simula un sistema de archivos en la memoria principal y no lo
escribe en el disco. Además, Nx también genera la estructura básica para
una prueba unitaria por generador. Para que se ajuste a nuestra
implementación mostrada arriba, actualicémoslo de la siguiente manera:

```typescript
// libs/my-plugin/src/generators/my-generator/generator.spec.ts

import { createTreeWithEmptyWorkspace } from "@nrwl/devkit/testing";
import { Tree, readProjectConfiguration } from "@nrwl/devkit";

import generator from "./generator";
import { MyGeneratorGeneratorSchema } from "./schema";

describe("my-plugin generator", () => {
  let appTree: Tree;
  const options: MyGeneratorGeneratorSchema = { name: "test-lib" };

  beforeEach(() => {
    appTree = createTreeWithEmptyWorkspace();
  });

  it("should export constant0", async () => {
    await generator(appTree, options);
    const config = readProjectConfiguration(appTree, "test-lib");
    expect(config).toBeDefined();

    const generated = `${config.sourceRoot}/index.ts`;
    const content = appTree.read(generated, "utf-8");
    expect(content).toContain(`const constant0 = 'test-lib';`);
  });
});
```

La prueba unitaria mostrada aquí crea un objeto `Tree` basado en memoria
usando `createTreeWithEmptyWorkspace` y llama a nuestro generador. Luego
verifica si existe una configuración para la biblioteca generada y si
esta tiene el archivo generado.

Para ejecutar esta prueba unitaria, llama a:

```bash
nx test my-plugin
```

## Exportando Plugins vía NPM

Si quieres usar tu plugin no solo en el espacio de trabajo actual de Nx,
sino también en otros proyectos, todo lo que tienes que hacer es
construirlo y desplegarlo vía npm:

```bash
nx build my-plugin # Corrección: el original dice 'nx build my plugin', debe ser 'my-plugin'

npm publish dist/libs/my-plugin --registry http://localhost:4873 # Corrección: el original usa '\' en la ruta, debe ser '/' para consistencia
```

Aquí, asumimos que se usa verdaccio como el registro npm y que se inicia
localmente en el puerto 4873. Sin especificar el interruptor
`--registry`, npm usa el registro público en `registry.npmjs.org`.

El paquete npm simplemente necesita instalarse en el espacio de trabajo
consumidor. Después de eso, puedes usar tu generador como de costumbre:

```bash
npm i @plugin-demo/my-plugin --registry http://localhost:4873 # Asumiendo que el paquete se publica con el scope @plugin-demo

nx g @plugin-demo/my-plugin:my-generator my-lib # Ajustado para reflejar un nombre de paquete con scope
```

_Nota: El texto original usa `@my-workspace` como un placeholder para el
scope del paquete npm. Si el paquete `my-plugin` se publica sin un
scope, el comando de instalación sería `npm i my-plugin` y el de
generación `nx g my-plugin:my-generator`. Sin embargo, es común usar
scopes, como `@plugin-demo` si ese es el nombre del workspace._

## Conclusión

Los plugins de espacio de trabajo simplifican significativamente el
desarrollo de plugins para automatizar tareas repetitivas internas del
proyecto. Esto no solo se debe a los numerosos métodos de ayuda, sino
sobre todo a las herramientas (tooling): Nx genera la estructura básica
de plugins y generadores, incluyendo pruebas unitarias. Los cambios se
pueden probar inmediatamente en el espacio de trabajo actual. Si es
necesario, estas bibliotecas también se pueden exportar vía npm y usarse
en otros proyectos.

Otro punto a favor es la API sencilla que Nx nos proporciona: Los
generadores son solo funciones que pueden llamarse fácilmente entre sí.
Esto significa que las funcionalidades existentes se pueden orquestar
para crear otras nuevas.

# 13a. Bonus: El Núcleo del Diseño Guiado por el Dominio (Domain-Driven Design) {#13a-bonus-el-núcleo-del-diseño-guiado-por-el-dominio-domain-driven-design}

Han pasado algo más de 20 años desde la publicación del revolucionario
libro de Eric Evans [Domain-Driven Design: Tackling Complexity in the
Heart of Software](https://www.youtube.com/watch?v=7yUONWp-CxM) que
estableció el movimiento DDD. Este libro sigue siendo un éxito de
ventas, y una comunidad activa ha extendido el DDD desde entonces: Hay
conferencias internacionales dedicadas, libros, cursos y nuevos
conceptos que los profesionales han añadido.

Aunque existen varias perspectivas sobre el DDD, quiero reflexionar aquí
sobre el núcleo de este enfoque.

Mi objetivo es

- arrojar algo de luz sobre el enfoque del DDD,
- por qué hay impresiones erróneas al respecto,
- su relación con la orientación a objetos,
- y si puede adaptarse a otros paradigmas.

Para ello, cito principalmente entrevistas y presentaciones de Eric
Evans. Para proporcionar ejemplos adicionales, también cito otras
fuentes. Antes, comenzaré con una rápida visión general del DDD para que
todos estemos en sintonía.

## DDD en Pocas Palabras

El Diseño Guiado por el Dominio se centra en una comprensión profunda
del dominio del mundo real (problema) para el que se escribe un sistema
de software. Los expertos del dominio (p. ej., expertos en facturación)
trabajan en estrecha colaboración con los expertos en software para
crear modelos de ese dominio. Un modelo representa aspectos del mundo
real (conceptos, relaciones, procesos) que son interesantes para el
software en cuestión y se expresa directamente en el código fuente.

### Diseño Estratégico

El DDD consta de dos disciplinas originales: El [Diseño Estratégico
(Strategic
Design)](https://www.thoughtworks.com/en-cl/insights/blog/evolutionary-architecture/domain-driven-design-in-10-minutes-part-one)
trata sobre descubrir subdominios que representan partes individuales
del dominio del problema. Para los subdominios, se definen [contextos
delimitados (bounded
contexts)](https://martinfowler.com/bliki/BoundedContext.html). Cada
contexto delimitado obtiene su propio modelo que sigue un [Lenguaje
Ubicuo (Ubiquitous
Language)](https://martinfowler.com/bliki/UbiquitousLanguage.html). Este
Lenguaje Ubicuo refleja el vocabulario utilizado en el mundo real y es
utilizado tanto por los expertos del dominio como por los expertos en
software \-- verbalmente, por escrito, en diagramas y en el código.

Tener varios modelos individuales en lugar de un único modelo
excesivamente amplio para todo el sistema permite una representación más
significativa de los diferentes subdominios. Esto también evita el
acoplamiento estrecho y reduce la complejidad.

El siguiente ejemplo muestra dos contextos delimitados. Cada uno de
ellos tiene su propia visión sobre el concepto de producto y, por lo
tanto, su propia representación:

![Ventas y Facturación son dos contextos delimitados diferentes con su
propia representación de un producto](images/contexts.png)

### Diseño Táctico

Mientras que el Diseño Estratégico conduce a una arquitectura general,
el [Diseño Táctico (Tactical
Design)](https://www.thoughtworks.com/en-ca/insights/blog/evolutionary-architecture/domain-driven-design-part-two)
proporciona varios bloques de construcción que ayudan a implementar el
modelo dentro de los contextos individuales. Ejemplos son los [Objetos
de Valor y Entidades (Value Objects and
Entities)](https://martinfowler.com/bliki/EvansClassification.html), los
[Agregados
(Aggregates)](https://martinfowler.com/bliki/DDD_Aggregate.html) que
definen relaciones de todo-parte (p. ej. un Pedido con Líneas de Pedido)
con reglas de consistencia (invariantes) que crean algunas implicaciones
para la gestión de transacciones, y repositorios para persistir y cargar
agregados y entidades.

### Desarrollos Recientes en DDD

Desde sus inicios, se han añadido varias ideas y conceptos al DDD.

Un ejemplo de un patrón que mientras tanto forma parte del DDD pero que
no se mencionó explícitamente en el libro original son los Eventos de
Dominio.

Un ejemplo de una nueva disciplina añadida durante los años es el
Modelado Colaborativo: Proporciona enfoques y formatos de taller como
[Event Storming](https://www.eventstorming.com) y [Domain Story
Telling](https://domainstorytelling.org/) que reúnen a expertos del
dominio y expertos en software y les ayudan a explorar un dominio.

El Diseño Estratégico también ha sido adoptado por la [comunidad de
Microservicios](https://www.amazon.de/Building-Microservices-Designing-Fine-Grained-Systems/dp/1492034029)
para identificar límites entre servicios. [De manera
similar](https://www.amazon.de/Building-Micro-Frontends-Projects-Empowering-Developers/dp/1492082996),
la comunidad de Micro Frontends también está aprovechando el Diseño
Estratégico. Además de esto, también se utiliza para [aplicaciones
monolíticas](https://www.amazon.de/Strategic-Monoliths-Microservices-Architecture-Addison-Wesley/dp/0137355467/).

[Team
Topologies](https://www.amazon.de/Team-Topologies-Organizing-Business-Technology/dp/1942788819)
es otra disciplina relativamente joven que favorece el Contexto
Delimitado para dividir un sistema en partes individuales en las que
diferentes equipos pueden trabajar.

### Más sobre DDD

Encontrarás más detalles sobre DDD en los artículos de blog enlazados
arriba. Si prefieres grabaciones, encontrarás una excelente sobre
[Diseño Estratégico aquí](https://www.youtube.com/watch?v=Z3tM0UHhhwI) y
una discusión sobre la priorización de contextos delimitados que lleva a
la idea de un [Dominio Central (Core Domain)
allí](https://www.youtube.com/watch?v=84ofg2q14CY).

## ¿Cómo Definir DDD?

En su charla magistral [\"DDD Isn\'t Done\" en Explore DDD
2018](https://www.youtube.com/watch?v=R2IAgnpkBck) en Denver, Eric Evans
habló sobre cómo definir el DDD. Subrayó que se necesita encontrar un
buen equilibrio para que el DDD pueda ayudar a escribir \"software
valioso\". Una definición demasiado rigurosa lo convertiría en un
\"recetario trivial\", mientras que, por otro lado, ser solo \"consejos
bienintencionados pero vagos\" también es contraproducente.

También añade:

> Necesitamos algo de espacio para movernos. Diferentes personas
> necesitan poder operar en un espacio y tener diferentes puntos de
> vista e innovar.

Su definición de DDD se centra principalmente en un conjunto de
principios rectores:

- Enfocarse en el dominio central.
- Explorar modelos en colaboración entre profesionales del dominio y
  profesionales del software.
- Hablar un lenguaje ubicuo dentro de un contexto explícitamente
  delimitado.

![Eric Evans proporcionando una definición para DDD en Explore DDD
2018](images/explore-ddd.png)

## ¿Cuándo Podemos Llamarlo DDD?

La definición esbozada en la sección anterior también encaja con una
respuesta que Eric Evans dio en una [entrevista con
InfoQ](https://www.infoq.com/interviews/domain-driven-design-eric-evans/).
Preguntado sobre el conjunto mínimo de prácticas que un equipo debe
seguir para practicar DDD eficazmente, su respuesta se centró en el
Lenguaje Ubicuo y el Contexto Delimitado:

> \[\...\] el patrón más fundamental del Diseño Guiado por el Dominio es
> probablemente el lenguaje ubicuo. \[\...\]

> \[Un modelo\] se aplica dentro de un cierto contexto, y ese contexto
> tiene un límite definitivamente definido, \[es\] un contexto
> delimitado.

> Con esos dos ingredientes, diría yo, alguien está haciendo Diseño
> Guiado por el Dominio, y hay muchas otras prácticas que ayudan a
> resolver problemas más específicos.

## ¿Cuál es el Núcleo de DDD y Por Qué la Gente Tuvo una Impresión Equivocada al Respecto?

En una [entrevista con la IEEE Computer
Society](https://www.youtube.com/watch?v=GogQor9WG-c) con motivo del
décimo aniversario de DDD, se le preguntó a Eric Evans qué haría
diferente si reescribiera su libro sobre DDD. Curiosamente, piensa que
su libro dio a muchos lectores la impresión equivocada de que DDD trata
principalmente sobre los bloques de construcción asociados con el Diseño
Táctico, mientras que el núcleo de DDD es el Diseño Estratégico:

> \[\...\] todo lo referente al diseño estratégico está muy al final.
> \[\...\] está tan al final que la mayoría de la gente realmente nunca
> llega a ello.

> Otra cosa que haría es tratar de cambiar la presentación de los
> bloques de construcción \[\...\] cosas como las entidades y los
> objetos de valor \[\...\] \[La gente\] se va pensando que eso es
> realmente el núcleo de DDD, cuando, de hecho, realmente no lo es.

> Realmente creo que la forma en que organicé el libro le da a la gente
> el énfasis equivocado, así que esa es la mayor parte de lo que haría,
> reorganizar esas cosas.

Sin embargo, añade que el Diseño Táctico es importante porque ayuda a
traducir el modelo conceptual en código.

Un punto de vista similar se expresa en la [charla magistral de Eric
Evans en DDD Europe 2016](https://www.youtube.com/watch?v=dnUFEg68ESM),
donde critica el \"énfasis excesivo en los bloques de construcción\".

## ¿Es el Diseño Táctico Orientado a Objetos? ¿Hay Lugar para la PF (Programación Funcional)?

En la [charla magistral](https://www.youtube.com/watch?v=dnUFEg68ESM)
mencionada anteriormente, Eric Evans subraya que el DDD no está ligado a
un paradigma específico. También menciona que la PF (Programación
Funcional) puede ser un \"mecanismo poderoso para la abstracción\" y que
los lenguajes funcionales pueden ayudar a expresar un modelo en código.

En general, señala que hoy en día existen varios lenguajes nuevos que
son más expresivos y, por lo tanto, ayudan a implementar modelos de
manera concisa. Otra forma de hacer el código más expresivo es usando
bibliotecas como Reactive Extensions.

Cuando se le preguntó sobre el uso de la Programación Funcional (PF),
mientras que su libro se centra claramente en la orientación a objetos,
en la [entrevista con la IEEE Computer
Society](https://www.youtube.com/watch?v=GogQor9WG-c) dijo:

> La razón por la que todo se expresa en términos de objetos es porque
> los objetos eran el rey en 2003-2004, y ¿de qué otra manera lo habría
> descrito si la gente \[\...\] usaba objetos?

Explica que se necesitan algunos cambios para aplicar el Diseño Táctico
a la PF:

> Si lo abordas desde un punto de vista funcional, entonces \[\...\] tus
> implementaciones van a parecer bastante diferentes.

También [aquí](https://www.youtube.com/watch?v=dnUFEg68ESM), menciona la
necesidad de \"repensar \[\...\] los bloques de construcción\" al
cambiar a la PF.

Esta adaptación necesaria también se aborda ligeramente en el libro de
[Vaughn Vernon, Domain-Driven Design
Distilled](https://www.amazon.de/Domain-Driven-Design-Distilled-Vaughn-Vernon/dp/0134434420/),
que se considera una referencia estándar en la comunidad DDD y es
conocido por su fácil lectura. Menciona que en el DDD funcional, las
estructuras de datos son Inmutables (registros), y las funciones puras
implementan la lógica de negocio:

> En lugar de modificar los datos que las funciones reciben como
> argumentos, las funciones devuelven nuevos valores. Estos nuevos
> valores pueden ser el nuevo estado de un Agregado o un Evento de
> Dominio que representa una transición en el estado de un Agregado.

Se pueden encontrar más ideas sobre DDD funcional en [Functional and
Reactive Domain
Modeling](https://www.amazon.de/Functional-Reactive-Domain-Modeling-Debasish/dp/1617292249)
y [Domain Modeling Made
Functional](https://www.amazon.de/Domain-Modeling-Made-Functional-Domain-Driven/dp/1680502549/ref=sr_1_1?dib=eyJ2IjoiMSJ9.lh7eRp45b3q6zBsCJIM6A9pbWVDAtn1NHumx_LEXffyVsOwKnxYYneAoMlkH2uNgkp_HFULSJ-rwTdOFOEarPA.bLt4ucE-6GEo4H-Q2mzBuGdY5ezuSBBo62I6AOzkLLg&dib_tag=se&keywords=ddd+functional&qid=1704980818&sr=8-1).

## Otras Adaptaciones del Diseño Táctico

En varias ocasiones (p. ej.
[aquí](https://www.youtube.com/watch?v=GogQor9WG-c) y
[aquí](https://www.youtube.com/watch?v=R2IAgnpkBck)) al discutir la
adaptación del Diseño Táctico para ajustarse a otras ideas y paradigmas,
Eric Evans menciona el _event sourcing_ y CQRS. Inicialmente, ninguno de
los dos formaba parte de DDD, pero han sido incorporados por la
comunidad. Otro ejemplo de una adaptación de los patrones de Diseño
Táctico mencionado [aquí](https://www.youtube.com/watch?v=GogQor9WG-c)
es el uso del modelo de actores para implementar Agregados:

> \[Un actor\] puede mantener ese estado de manera consistente \[\...\]
> que respete la invariancia de ese agregado particular. \[\...\]

Esta discusión también encaja con la charla recientemente destacada
[\"The Aggregate is dead. Long live the
Aggregate!\"](https://www.youtube.com/watch?v=Q89patz4lgU) por Milan
Savić y Sara Pellegrini. Esta charla, presentada en varias conferencias,
discute algunas críticas a la implementación tradicional de Agregados y
propone una implementación alternativa usando mensajería y _event
sourcing_.

De manera más general, tales enfoques se correlacionan con la [charla
magistral de Eric Evans de
2018](https://www.youtube.com/watch?v=R2IAgnpkBck) citada anteriormente,
donde enfatiza la necesidad de dar a las personas espacio para innovar
en DDD.

En [DDD Europe 2016](https://www.youtube.com/watch?v=dnUFEg68ESM), Eric
Evans mencionó otros dos paradigmas que pueden usarse para crear modelos
en DDD:

- Relacional
- Grafos

El modelado relacional podría sorprender. Sin embargo, no se refiere a
un esquema normalizado completo (generalizado) que es lo opuesto a
pensar en contextos delimitados. En cambio, tener varios esquemas
especializados se ajusta a la mentalidad de DDD. Además, considera que
SQL puede ser una buena manera de expresar cómo comparar y manipular
grandes conjuntos de datos.

Con Grafos, Eric Evans se refiere a algo más que simplemente usar una
Base de Datos de Grafos. Ve la teoría de grafos como un \"paradigma de
modelado clásico que se remonta mucho antes de la \[ciencia de la\]
computación\". Para él, los grafos son una forma de modelar \"cierto
tipo de problemas\" usando nodos y aristas como abstracciones.

## Conclusión

En su núcleo, el DDD enfatiza que los Expertos del Dominio y los
Expertos en Software deben explorar conjuntamente un dominio y modelar
contextos delimitados individuales y priorizados, respetando un lenguaje
ubicuo.

El Diseño Táctico, tal como se describe en el libro original sobre DDD,
ayuda a implementar estos modelos de manera Orientada a Objetos. Además,
existen alternativas y adaptaciones (p. ej. para la Programación
Funcional).

Algunas comunidades solo se refieren al Diseño Estratégico (p. ej.,
Microservicios, Micro Frontends, Topologías de Equipos) y lo utilizan
para subdividir un sistema a lo largo de los límites del dominio.

# Literatura

- [Evans, Diseño Guiado por Dominio: Abordando la Complejidad en el
  Corazón del Software](https://www.amazon.com/dp/0321125215)
- [Wlaschin, Modelado de Dominio Hecho
  Funcional](https://pragprog.com/book/swdddf/domain-modeling-made-functional)
- [Ghosh, Modelado de Dominio Funcional y
  Reactivo](https://www.amazon.com/dp/1617292249)
- [Nrwl, Desarrollo Angular estilo
  Monorepo](https://go.nrwl.io/angular-enterprise-monorepo-patterns-new-book)
- [Jackson, Micro
  Frontends](https://martinfowler.com/articles/micro-frontends.html)
- [Burleson, Arquitecturas Basadas en Empuje (Push-based) usando
  RxJS + Fachadas
  (Facades)](https://medium.com/@thomasburlesonIA/push-based-architectures-with-rxjs-81b327d7c32d)
- [Burleson, NgRx + Fachadas (Facades): Mejor Gestión de
  Estado](https://medium.com/@thomasburlesonIA/ngrx-facades-better-state-management-82a04b9a1e39)
- [Steyer, Componentes Web con Angular Elements (serie de artículos, 5
  partes)](https://www.softwarearchitekt.at/aktuelles/angular-elements-part-i/)

# Acerca del Autor

![Manfred Steyer](images/Steyer_HiRes.png)

Manfred Steyer es formador, consultor y arquitecto de programación
especializado en Angular.

Por su trabajo en la comunidad, Google lo reconoce como Google Developer
Expert (GDE). Además, Manfred es Colaborador de Confianza (Trusted
Collaborator) en el equipo de Angular. En este rol, implementó la carga
diferencial para la CLI de Angular.

Manfred ha escrito varios libros (p. ej., para O\'Reilly), así como
diversos artículos (p. ej., para la revista alemana Java Magazine,
windows.developer y Heise).

Participa regularmente como ponente en conferencias y escribe en su blog
sobre Angular.

Anteriormente, estuvo a cargo de un equipo de proyecto en el área de
aplicaciones empresariales basadas en web durante muchos años. Además,
impartió varias asignaturas relacionadas con la ingeniería de software
en una universidad de ciencias aplicadas.

Manfred obtuvo un Diploma en TI y Marketing de TI, así como un Máster en
Informática, cursando estudios a tiempo parcial y a distancia en
paralelo a sus empleos a tiempo completo.

Puedes seguirlo en [Twitter](https://twitter.com/ManfredSteyer) y
[Facebook](https://www.facebook.com/manfred.steyer) y encontrar su [blog
aquí](http://www.softwarearchitekt.at).

# Capacitaciones y Consultoría

Aprenda más sobre este y otros temas de arquitectura relacionados con
Angular y soluciones empresariales de gran escala, así como soluciones
industriales, en nuestro [Taller Online
avanzado](https://www.angulararchitects.io/en/angular-workshops/advanced-angular-enterprise-architecture-incl-ivy/):

![Taller Avanzado de Angular](images/ad.png)

¡Reserve su
[entrada](https://www.angulararchitects.io/en/angular-workshops/advanced-angular-enterprise-architecture-incl-ivy/)
para uno de nuestros talleres **remotos o presenciales** ahora o
[solicite un taller para
empresas](https://www.angulararchitects.io/en/angular-workshops/)
(online o en sus instalaciones) para usted y su equipo!

Además de esto, ofrecemos los siguientes temas como parte de nuestras
capacitaciones o talleres de consultoría:

- Fundamentos de Angular: Bloques de Construcción y Conceptos
- Angular Avanzado: Soluciones Empresariales y Arquitectura
- Taller de Pruebas en Angular (Cypress, Jest, etc.)
- Arquitecturas Reactivas con Angular (RxJS y NGRX)
- Taller de Revisión de Angular
- Taller de Actualización de Angular

Encuentre [la lista completa de nuestras ofertas
aquí](https://www.angulararchitects.io/en/angular-workshops/).

Si le gusta nuestra oferta, manténgase en contacto con nosotros para no
perderse nada.

Para ello, puede [suscribirse a nuestro
boletín](https://www.angulararchitects.io/subscribe/) y/o seguir al
[autor del libro en Twitter](https://twitter.com/ManfredSteyer).
