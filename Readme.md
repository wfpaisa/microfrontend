# 1. Enterprise Angular: Micro Frontends and Moduliths with Angular Module Federation - Nx - DDD

Traducción del libro al español. (Autogenerada con IA)
(más información en la carpeta: convert) [Ver online](https://github.com/wfpaisa/ddd-Angular/blob/master/manuscript/_render-all.md)

- [Original repo](https://github.com/manfredsteyer/ddd-bk)
- Manfred Steyer
- Compra este libro en: http://leanpub.com/enterprise-angular

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

2. Micro Frontends with Angular and Native Federation

- [Original article](https://blog.angular.dev/micro-frontends-with-angular-and-native-federation-7623cfc5f413)
- [Translate article](articles/extra/micro-frontends-with-angular-and-native-federation.md)
