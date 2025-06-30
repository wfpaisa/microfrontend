# Microfrontends

# Lecturas adicionales
- [Microfrontends](https://martinfowler.com/articles/micro-frontends.html) by Cam Jackson
- [Microfrontends org](https://micro-frontends.org)
- [Demos](https://micro-frontends.org/tractor-store/)


# Module federation / Native federation en Angular

Referencias y traducciones de contenido sobre federación en Angular.

## 1. Enterprise Angular: Micro Frontends and Moduliths with Angular Module Federation - Nx - DDD

- [Traducción](https://github.com/wfpaisa/ddd-Angular/blob/master/manuscript/_render-all.md)
- [Original repo](https://github.com/manfredsteyer/ddd-bk)
- Manfred Steyer, compra el libro en: http://leanpub.com/enterprise-angular

```sh
# Instalar dependencias:
sudo pacman -S pandoc calibre

# Convertir a .epub
pandoc \
           -f gfm+attributes \
           --metadata-file=metadata.yaml \
           --epub-cover-image=_cover.png \
           --resource-path=manuscript \
           --toc \
           -o convert/angular-ddd.epub \
           $(awk '{print "manuscript/"$0}' manuscript/book.txt)


# Convertir a mas formatos
ebook-convert angular-ddd.epub angular-ddd.azw3

# auto generar 1 markdow
pandoc \
         -f gfm+attributes \
         --metadata-file=metadata.yaml \
         --toc \
         -s \
         -o convert/angular-ddd.md \
         $(awk '{print "manuscript/"$0}' manuscript/book.txt)
```

## 2. Micro Frontends with Angular and Native Federation

- [Original article](https://blog.angular.dev/micro-frontends-with-angular-and-native-federation-7623cfc5f413)
- [Traducción](articles/extra/micro-frontends-with-angular-and-native-federation.md)
